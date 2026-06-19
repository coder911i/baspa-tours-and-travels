/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

export interface GoogleReview {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
  type: 'google' | 'manual';
  verificationTag: string;
  // Curation & admin metadata
  isPinned?: boolean;
  isHidden?: boolean;
  featuredOrder?: number;
  // Support metadata
  internalNotes?: string;
  followUpStatus?: 'pending' | 'resolved' | 'ignored';
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export interface ReviewsConfig {
  reviewUrl: string;
  placeId: string;
  cid: string;
  refreshIntervalHours: number;
  apiKey: string;
  pinnedIds: string[];
  hiddenIds: string[];
  featuredOrder: string[];
}

export interface SyncLog {
  timestamp: string;
  status: 'success' | 'failed';
  message: string;
}

export interface ReviewsCache {
  reviews: GoogleReview[];
  stats: ReviewStats;
  lastSyncTime: number;
  syncStatus: 'success' | 'failed' | 'mock';
  errorLogs: SyncLog[];
}

export interface StorageProvider {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
}

// 1. Cloudflare KV Storage Provider
class CloudflareKVProvider implements StorageProvider {
  constructor(private kv: any) {}
  async get(key: string): Promise<string | null> {
    return await this.kv.get(key);
  }
  async set(key: string, value: string): Promise<void> {
    await this.kv.put(key, value);
  }
}

// 2. Local File Storage Provider (for development and node-based servers)
class LocalFileProvider implements StorageProvider {
  async get(key: string): Promise<string | null> {
    try {
      const fs = require('fs');
      const path = require('path');
      const filePath = path.join(process.cwd(), 'src/lib/data', `${key}.json`);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf8');
      }
    } catch (e) {
      console.warn(`LocalFileProvider get error for ${key}:`, e);
    }
    return null;
  }
  async set(key: string, value: string): Promise<void> {
    try {
      const fs = require('fs');
      const path = require('path');
      const dirPath = path.join(process.cwd(), 'src/lib/data');
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      const filePath = path.join(dirPath, `${key}.json`);
      fs.writeFileSync(filePath, value, 'utf8');
    } catch (e) {
      console.warn(`LocalFileProvider set error for ${key}:`, e);
    }
  }
}

// 3. In-Memory Storage Provider (fallback if file-write and KV are not available)
const inMemoryStore: Record<string, string> = {};
class InMemoryProvider implements StorageProvider {
  async get(key: string): Promise<string | null> {
    return inMemoryStore[key] || null;
  }
  async set(key: string, value: string): Promise<void> {
    inMemoryStore[key] = value;
  }
}

// Global caching provider resolver
let activeProvider: StorageProvider | null = null;
let activeProviderName = 'unknown';

export function getStorageProvider(): { provider: StorageProvider; name: string } {
  if (activeProvider) {
    return { provider: activeProvider, name: activeProviderName };
  }

  // A. Check for Cloudflare KV (shims or standard bindings)
  if (typeof process !== 'undefined' && process.env && (process.env as any).REVIEWS_KV) {
    activeProvider = new CloudflareKVProvider((process.env as any).REVIEWS_KV);
    activeProviderName = 'Cloudflare KV (env)';
    return { provider: activeProvider, name: activeProviderName };
  }
  if (typeof globalThis !== 'undefined' && (globalThis as any).REVIEWS_KV) {
    activeProvider = new CloudflareKVProvider((globalThis as any).REVIEWS_KV);
    activeProviderName = 'Cloudflare KV (global)';
    return { provider: activeProvider, name: activeProviderName };
  }

  // B. Check if Cloudflare requestContext binding is active
  try {
    const { getRequestContext } = require('@opennextjs/cloudflare');
    const ctx = getRequestContext();
    if (ctx?.env?.REVIEWS_KV) {
      activeProvider = new CloudflareKVProvider(ctx.env.REVIEWS_KV);
      activeProviderName = 'Cloudflare KV (OpenNext context)';
      return { provider: activeProvider, name: activeProviderName };
    }
  } catch (e) {}

  // C. Check if running in a Node.js-like environment where fs is usable
  const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
  if (isNode) {
    activeProvider = new LocalFileProvider();
    activeProviderName = 'Local JSON Files';
    return { provider: activeProvider, name: activeProviderName };
  }

  // D. Fallback to In-Memory
  activeProvider = new InMemoryProvider();
  activeProviderName = 'In-Memory Cache';
  return { provider: activeProvider, name: activeProviderName };
}

// Google Review Link regex parser
export function extractPlaceIdOrCid(url: string): { placeId: string | null; cid: string | null } {
  let placeId: string | null = null;
  let cid: string | null = null;

  if (!url) return { placeId, cid };

  try {
    const urlObj = new URL(url);

    // 1. Check query parameter placeid or placeId
    const pId = urlObj.searchParams.get('placeid') || urlObj.searchParams.get('placeId');
    if (pId) {
      placeId = pId;
    }

    // 2. Check hash or query for lrd (Google review links)
    const hash = urlObj.hash;
    const lrdMatch = hash.match(/lrd=([^,]+)/) || url.match(/[?&]lrd=([^,&]+)/);
    if (lrdMatch) {
      const parts = lrdMatch[1].split(':');
      if (parts.length > 1) {
        const hexCid = parts[1]; // e.g. 0x6d07a9954b39d4fd
        if (hexCid.startsWith('0x')) {
          try {
            cid = BigInt(hexCid).toString();
          } catch (e) {
            console.error('Failed to parse hex CID:', e);
          }
        } else {
          cid = hexCid;
        }
      }
    }

    // 3. Check for direct cid param in Google Maps link
    const cidParam = urlObj.searchParams.get('cid');
    if (cidParam) {
      cid = cidParam;
    }
  } catch (e) {
    // Regex fallbacks for non-standard URL strings
    const placeIdMatch = url.match(/[?&]placei[dD]=([^&]+)/);
    if (placeIdMatch) {
      placeId = placeIdMatch[1];
    }
    
    const lrdMatch = url.match(/[#?&]lrd=([^,&\s]+)/);
    if (lrdMatch) {
      const parts = lrdMatch[1].split(':');
      if (parts.length > 1) {
        const hexCid = parts[1];
        if (hexCid.startsWith('0x')) {
          try {
            cid = BigInt(hexCid).toString();
          } catch (e) {
            // ignore
          }
        } else {
          cid = hexCid;
        }
      }
    }

    const cidMatch = url.match(/[?&]cid=([^&]+)/);
    if (cidMatch) {
      cid = cidMatch[1];
    }
  }

  return { placeId, cid };
}

// Helper to compute stats
export function calculateReviewStats(reviews: GoogleReview[]): ReviewStats {
  const visible = reviews.filter(r => !r.isHidden);
  if (visible.length === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    };
  }

  let totalSum = 0;
  const ratingBreakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  visible.forEach(r => {
    totalSum += r.rating;
    const ratingKey = Math.min(5, Math.max(1, Math.round(r.rating))) as 5 | 4 | 3 | 2 | 1;
    ratingBreakdown[ratingKey]++;
  });

  const rawAverage = totalSum / visible.length;
  // Format to 1 decimal place
  const averageRating = Math.round(rawAverage * 10) / 10;

  return {
    averageRating,
    totalReviews: visible.length,
    ratingBreakdown
  };
}

// Generate an ID for a review
export function generateReviewId(author: string, time: number): string {
  const cleanAuthor = author.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `${time}_${cleanAuthor}`;
}

export const DEFAULT_REVIEW_URL = 'https://www.google.com/search?q=Baspa+Travels&ie=UTF-8#lrd=0x39063bc8e9c5f195:0x6d07a9954b39d4fd,3,,,,';

const parsed = extractPlaceIdOrCid(DEFAULT_REVIEW_URL);

export const DEFAULT_CONFIG: ReviewsConfig = {
  reviewUrl: DEFAULT_REVIEW_URL,
  placeId: parsed.placeId || '',
  cid: parsed.cid || '7856434533648422141',
  refreshIntervalHours: 24,
  apiKey: '',
  pinnedIds: [],
  hiddenIds: [],
  featuredOrder: []
};

// Initial Mock Reviews
export const MOCK_REVIEWS: GoogleReview[] = [
  {
    id: '1718612000_arjunsharma',
    author_name: 'Arjun Sharma',
    rating: 5,
    text: 'Delhi se Spiti tak ka safar Royal Enfield pe adbhut tha! Rohtang Pass cross karte hi jannat thi. Kaza mein local homestay ka swad aur Baspa team ki backup aur guides ki support mindblowing thi. 10/10 recommended!',
    time: 1718612000,
    relative_time_description: '2 days ago',
    profile_photo_url: '',
    type: 'google',
    verificationTag: 'Google Verified'
  },
  {
    id: '1718412000_priyamehta',
    author_name: 'Priya Mehta',
    rating: 5,
    text: "Usually Spiti packages are very rushed, but Baspa's pace was perfect. Chitkul village and the crescent Chandratal lake under the night stars were unreal. No fake promises, pure honesty and local guides who know every single corner.",
    time: 1718412000,
    relative_time_description: '4 days ago',
    profile_photo_url: '',
    type: 'google',
    verificationTag: 'Google Verified'
  },
  {
    id: '1718112000_rohankapoor',
    author_name: 'Rohan Kapoor',
    rating: 5,
    text: 'Delhi se Shimla aur fir Chitkul border tak ka drive was spectacular. The Sangla meadows are beautiful. Safe mountain driving in modified 4x4s, good stays, and very professional guides. Pure serenity indeed.',
    time: 1718112000,
    relative_time_description: '1 week ago',
    profile_photo_url: '',
    type: 'google',
    verificationTag: 'Google Verified'
  },
  {
    id: '1717612000_nehagupta',
    author_name: 'Neha Gupta',
    rating: 5,
    text: 'Best tour operators for Spiti and Kinnaur. Their oxygen cylinder support in the backup vehicles saved us during high altitude acclimatization at Kaza. Rajbir ji is very helpful.',
    time: 1717612000,
    relative_time_description: '2 weeks ago',
    profile_photo_url: '',
    type: 'google',
    verificationTag: 'Google Verified'
  },
  {
    id: '1717112000_vikrammalhotra',
    author_name: 'Vikram Malhotra',
    rating: 5,
    text: 'Fabulous experience. Handcrafted winter snow safari was the highlight of my year. Insulated homestays with bukhari and fresh local food. Baspa Travels is the most authentic team.',
    time: 1717112000,
    relative_time_description: '3 weeks ago',
    profile_photo_url: '',
    type: 'google',
    verificationTag: 'Google Verified'
  }
];

export const INITIAL_CACHE: ReviewsCache = {
  reviews: MOCK_REVIEWS,
  stats: calculateReviewStats(MOCK_REVIEWS),
  lastSyncTime: 0,
  syncStatus: 'mock',
  errorLogs: []
};
