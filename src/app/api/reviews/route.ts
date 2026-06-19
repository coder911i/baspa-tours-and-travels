/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { 
  getStorageProvider, 
  DEFAULT_CONFIG, 
  INITIAL_CACHE, 
  calculateReviewStats, 
  generateReviewId, 
  GoogleReview, 
  ReviewsConfig, 
  ReviewsCache,
  SyncLog
} from '@/lib/reviews';

const CONFIG_KEY = 'reviews-config';
const CACHE_KEY = 'reviews-cache';

function isAuthenticated(request: Request): boolean {
  const cookie = request.headers.get('cookie') || '';
  return cookie.includes('baspa_admin_token=authenticated');
}

// GET: Serves public reviews and stats (cached & curated)
export async function GET(request: Request) {
  try {
    const { provider, name: providerName } = getStorageProvider();
    
    // Load config
    const storedConfig = await provider.get(CONFIG_KEY);
    const config: ReviewsConfig = storedConfig ? JSON.parse(storedConfig) : DEFAULT_CONFIG;
    
    // Load cache
    const storedCache = await provider.get(CACHE_KEY);
    let cache: ReviewsCache = storedCache ? JSON.parse(storedCache) : INITIAL_CACHE;

    // Check if auto-sync is required (cache expired and API Key/Place ID configured)
    const apiKey = config.apiKey || process.env.GOOGLE_API_KEY || '';
    const hasIdentifier = config.placeId || config.cid;
    const isExpired = Date.now() - cache.lastSyncTime > config.refreshIntervalHours * 3600 * 1000;
    
    if (isExpired && apiKey && hasIdentifier && cache.syncStatus !== 'success') {
      // Perform background sync if possible (triggering inline since it's a serverless function)
      try {
        const syncResult = await performSync(config, cache, apiKey, provider);
        cache = syncResult.cache;
      } catch (err: any) {
        console.error('Auto-sync error:', err);
      }
    }

    // Curate list (Merge Google Reviews and Manual Reviews)
    const googleReviews = cache.reviews || [];
    const manualReviews = (config as any).manualReviews || [];
    
    // Combine
    let combined = [...googleReviews, ...manualReviews];

    // Filter out hidden ones for public view (but keep them for admin check if requested)
    const url = new URL(request.url);
    const isAdminView = url.searchParams.get('admin') === 'true' && isAuthenticated(request);
    
    if (!isAdminView) {
      combined = combined.filter(r => !config.hiddenIds.includes(r.id));
    }

    // Apply pinning flag
    combined = combined.map(r => ({
      ...r,
      isPinned: config.pinnedIds.includes(r.id),
      isHidden: config.hiddenIds.includes(r.id),
    }));

    // Apply Custom Sort Order: Pinned reviews first, then non-pinned by time desc
    combined.sort((a, b) => {
      const aPinned = config.pinnedIds.includes(a.id);
      const bPinned = config.pinnedIds.includes(b.id);
      
      if (aPinned && bPinned) {
        // If both pinned, use featuredOrder index if present
        const aIndex = config.featuredOrder.indexOf(a.id);
        const bIndex = config.featuredOrder.indexOf(b.id);
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return b.time - a.time;
      }
      
      if (aPinned) return -1;
      if (bPinned) return 1;
      
      // Sort by time descending
      return b.time - a.time;
    });

    // Recalculate stats for visible reviews
    const stats = calculateReviewStats(combined);

    const response = NextResponse.json({
      success: true,
      reviews: combined,
      stats,
      reviewUrl: config.reviewUrl,
      syncStatus: cache.syncStatus,
      lastSyncTime: cache.lastSyncTime,
      cacheProvider: providerName,
      errorLogs: isAdminView ? (cache.errorLogs || []) : [],
    });

    // Cache responses at the edge/browser to ensure sub-second speed
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate');
    
    return response;
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Handles admin actions (manual sync, manual reviews adding, curation, and comments)
export async function POST(request: Request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action } = body;
    const { provider } = getStorageProvider();

    // Load config
    const storedConfig = await provider.get(CONFIG_KEY);
    const config: ReviewsConfig = storedConfig ? JSON.parse(storedConfig) : DEFAULT_CONFIG;

    // Load cache
    const storedCache = await provider.get(CACHE_KEY);
    const cache: ReviewsCache = storedCache ? JSON.parse(storedCache) : INITIAL_CACHE;

    if (action === 'sync') {
      const apiKey = config.apiKey || process.env.GOOGLE_API_KEY || '';
      if (!apiKey) {
        throw new Error('Google Maps API Key is not configured. Set it in settings or environment variables.');
      }
      
      const syncResult = await performSync(config, cache, apiKey, provider);
      
      return NextResponse.json({
        success: true,
        message: 'Sync completed successfully',
        lastSyncTime: syncResult.cache.lastSyncTime,
        reviewsCount: syncResult.cache.reviews.length,
      });
    }

    if (action === 'addManual') {
      const { author_name, rating, text, dateStr, profile_photo_url } = body;
      
      if (!author_name || !rating || !text) {
        throw new Error('Missing manual review fields');
      }

      const time = dateStr ? new Date(dateStr).getTime() / 1000 : Date.now() / 1000;
      const relative_time_description = 'Verified Customer';

      const newManual: GoogleReview = {
        id: generateReviewId(author_name, Math.round(time)),
        author_name,
        rating: Number(rating),
        text,
        time,
        relative_time_description,
        profile_photo_url: profile_photo_url || '',
        type: 'manual',
        verificationTag: 'Verified Customer'
      };

      const manualReviews = (config as any).manualReviews || [];
      manualReviews.push(newManual);
      (config as any).manualReviews = manualReviews;

      await provider.set(CONFIG_KEY, JSON.stringify(config));

      return NextResponse.json({ success: true, review: newManual });
    }

    if (action === 'deleteManual') {
      const { id } = body;
      const manualReviews = (config as any).manualReviews || [];
      const filtered = manualReviews.filter((r: any) => r.id !== id);
      (config as any).manualReviews = filtered;

      // Clean up curation indices if present
      config.pinnedIds = config.pinnedIds.filter(pid => pid !== id);
      config.hiddenIds = config.hiddenIds.filter(hid => hid !== id);
      config.featuredOrder = config.featuredOrder.filter(foid => foid !== id);

      await provider.set(CONFIG_KEY, JSON.stringify(config));
      return NextResponse.json({ success: true });
    }

    if (action === 'updateCuration') {
      const { pinnedIds, hiddenIds, featuredOrder } = body;
      
      if (pinnedIds) config.pinnedIds = pinnedIds;
      if (hiddenIds) config.hiddenIds = hiddenIds;
      if (featuredOrder) config.featuredOrder = featuredOrder;

      await provider.set(CONFIG_KEY, JSON.stringify(config));
      return NextResponse.json({ success: true });
    }

    if (action === 'updateSupportNotes') {
      const { id, internalNotes, followUpStatus } = body;
      
      // Update either in manual review list or in cached Google review list
      let updated = false;

      // Try in manual reviews
      const manualReviews = (config as any).manualReviews || [];
      const mIdx = manualReviews.findIndex((r: any) => r.id === id);
      if (mIdx !== -1) {
        manualReviews[mIdx] = {
          ...manualReviews[mIdx],
          internalNotes: internalNotes ?? manualReviews[mIdx].internalNotes,
          followUpStatus: followUpStatus ?? manualReviews[mIdx].followUpStatus,
        };
        (config as any).manualReviews = manualReviews;
        await provider.set(CONFIG_KEY, JSON.stringify(config));
        updated = true;
      }

      // Try in Google cache reviews
      const cacheReviews = cache.reviews || [];
      const cIdx = cacheReviews.findIndex((r: any) => r.id === id);
      if (cIdx !== -1) {
        cacheReviews[cIdx] = {
          ...cacheReviews[cIdx],
          internalNotes: internalNotes ?? cacheReviews[cIdx].internalNotes,
          followUpStatus: followUpStatus ?? cacheReviews[cIdx].followUpStatus,
        };
        cache.reviews = cacheReviews;
        await provider.set(CACHE_KEY, JSON.stringify(cache));
        updated = true;
      }

      if (!updated) {
        throw new Error('Review not found to update notes');
      }

      return NextResponse.json({ success: true });
    }

    throw new Error('Invalid action');
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Core sync service
async function performSync(
  config: ReviewsConfig, 
  currentCache: ReviewsCache, 
  apiKey: string, 
  provider: any
): Promise<{ cache: ReviewsCache; config: ReviewsConfig }> {
  let targetPlaceId = config.placeId;
  const errorLogs: SyncLog[] = [...(currentCache.errorLogs || [])];
  
  const logEvent = (status: 'success' | 'failed', message: string) => {
    errorLogs.unshift({
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
      status,
      message,
    });
    // Limit to last 20 logs
    if (errorLogs.length > 20) errorLogs.pop();
  };

  try {
    // 1. Resolve CID to Place ID if Place ID is empty but CID is set
    if (!targetPlaceId && config.cid) {
      const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=cid:${config.cid}&inputtype=textquery&fields=place_id&key=${apiKey}`;
      const findRes = await fetch(findUrl);
      const findData = await findRes.json();
      
      if (findData.status === 'OK' && findData.candidates && findData.candidates.length > 0) {
        targetPlaceId = findData.candidates[0].place_id;
        config.placeId = targetPlaceId;
        await provider.set(CONFIG_KEY, JSON.stringify(config));
        logEvent('success', `Resolved CID ${config.cid} to Place ID ${targetPlaceId}`);
      } else {
        throw new Error(`Failed to find Place ID for CID: ${config.cid}. Status: ${findData.status}`);
      }
    }

    if (!targetPlaceId) {
      throw new Error('No Place ID or CID available to query Google Reviews.');
    }

    // 2. Query Details from Google Places API
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${targetPlaceId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    if (detailsData.status !== 'OK') {
      throw new Error(`Google API error status: ${detailsData.status}. ${detailsData.error_message || ''}`);
    }

    const result = detailsData.result;
    const fetchedReviews = result.reviews || [];

    // Map and maintain administrative comments/replies of Google reviews
    const existingGoogleReviews = currentCache.reviews || [];
    
    const mappedReviews = fetchedReviews.map((r: any) => {
      const id = generateReviewId(r.author_name, r.time);
      const existing = existingGoogleReviews.find(ex => ex.id === id);
      
      return {
        id,
        author_name: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.time,
        relative_time_description: r.relative_time_description,
        profile_photo_url: r.profile_photo_url || '',
        type: 'google',
        verificationTag: 'Google Verified',
        // Preserve admin fields
        internalNotes: existing?.internalNotes || '',
        followUpStatus: existing?.followUpStatus || 'pending',
      } as GoogleReview;
    });

    // 3. Save Cache
    const newCache: ReviewsCache = {
      reviews: mappedReviews,
      stats: calculateReviewStats(mappedReviews),
      lastSyncTime: Date.now(),
      syncStatus: 'success',
      errorLogs,
    };

    await provider.set(CACHE_KEY, JSON.stringify(newCache));
    logEvent('success', `Synced ${mappedReviews.length} reviews from Google Places API.`);
    newCache.errorLogs = errorLogs; // ensure updated logs are returned

    return { cache: newCache, config };
  } catch (error: any) {
    const errorMsg = error.message || 'Unknown error occurred during sync.';
    logEvent('failed', errorMsg);
    
    const failedCache: ReviewsCache = {
      ...currentCache,
      syncStatus: 'failed',
      errorLogs,
    };
    
    await provider.set(CACHE_KEY, JSON.stringify(failedCache));
    
    return { cache: failedCache, config };
  }
}
