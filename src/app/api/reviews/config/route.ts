/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { getStorageProvider, DEFAULT_CONFIG, extractPlaceIdOrCid, ReviewsConfig } from '@/lib/reviews';

const CONFIG_KEY = 'reviews-config';

function isAuthenticated(request: Request): boolean {
  const cookie = request.headers.get('cookie') || '';
  return cookie.includes('baspa_admin_token=authenticated');
}

export async function GET(request: Request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { provider } = getStorageProvider();
    const stored = await provider.get(CONFIG_KEY);
    
    let config: ReviewsConfig = DEFAULT_CONFIG;
    if (stored) {
      config = JSON.parse(stored);
    } else {
      // Save default configuration initially
      await provider.set(CONFIG_KEY, JSON.stringify(DEFAULT_CONFIG));
    }

    // Mask the sensitive Google Maps API Key
    const maskedConfig = {
      ...config,
      apiKey: config.apiKey ? '************************************' : '',
    };

    return NextResponse.json({ success: true, config: maskedConfig });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { provider } = getStorageProvider();
    
    // Load existing config to merge
    const stored = await provider.get(CONFIG_KEY);
    let existingConfig: ReviewsConfig = DEFAULT_CONFIG;
    if (stored) {
      existingConfig = JSON.parse(stored);
    }

    // Extract CID & Place ID from the updated URL if provided
    const { reviewUrl, refreshIntervalHours, pinnedIds, hiddenIds, featuredOrder } = body;
    let { placeId, cid, apiKey } = body;
    
    if (reviewUrl && reviewUrl !== existingConfig.reviewUrl) {
      const parsed = extractPlaceIdOrCid(reviewUrl);
      if (parsed.cid) cid = parsed.cid;
      if (parsed.placeId) placeId = parsed.placeId;
    }

    // If apiKey is masked (sent back by client), preserve existing key
    if (apiKey === '************************************') {
      apiKey = existingConfig.apiKey;
    }

    const updatedConfig: ReviewsConfig = {
      reviewUrl: reviewUrl ?? existingConfig.reviewUrl,
      placeId: placeId ?? existingConfig.placeId,
      cid: cid ?? existingConfig.cid,
      refreshIntervalHours: refreshIntervalHours ?? existingConfig.refreshIntervalHours,
      apiKey: apiKey ?? existingConfig.apiKey,
      pinnedIds: pinnedIds ?? existingConfig.pinnedIds,
      hiddenIds: hiddenIds ?? existingConfig.hiddenIds,
      featuredOrder: featuredOrder ?? existingConfig.featuredOrder,
    };

    await provider.set(CONFIG_KEY, JSON.stringify(updatedConfig));

    // Return masked config
    const maskedConfig = {
      ...updatedConfig,
      apiKey: updatedConfig.apiKey ? '************************************' : '',
    };

    return NextResponse.json({ success: true, config: maskedConfig });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
