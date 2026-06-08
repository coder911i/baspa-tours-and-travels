export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  location: string;
  category: 'landscape' | 'village' | 'monastery' | 'adventure' | 'culture' | 'stay';
  featured?: boolean;
}

// These photos will be updated by the client with Cloudinary URLs.
// Using whitelisted Unsplash IDs as default placeholders.
export const galleryPhotos: GalleryPhoto[] = [
  // ═══════════════════════════════════
  // CHITKUL
  // ═══════════════════════════════════
  {
    id: 'chitkul-1',
    src: 'https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Chitkul village with Baspa River flowing through — last inhabited village near Indo-Tibet border',
    location: 'Chitkul, Kinnaur',
    category: 'village',
    featured: true,
  },
  {
    id: 'chitkul-2',
    src: 'https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85',
    alt: 'Green Sangla valley with snow peaks — Chitkul area',
    location: 'Sangla Valley',
    category: 'landscape',
  },
  {
    id: 'chitkul-3',
    src: 'https://images.unsplash.com/photo-1716128033373-60b172383931?auto=format&fit=crop&w=1200&q=85',
    alt: 'Winter snow on Chitkul mountains',
    location: 'Chitkul Winter',
    category: 'landscape',
  },

  // ═══════════════════════════════════
  // KAZA & SPITI
  // ═══════════════════════════════════
  {
    id: 'kaza-1',
    src: 'https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85',
    alt: 'Golden Buddha statue in Kaza, Spiti Valley',
    location: 'Kaza, Spiti',
    category: 'culture',
    featured: true,
  },
  {
    id: 'key-monastery',
    src: 'https://images.unsplash.com/photo-1698753935121-153a106616d5?auto=format&fit=crop&w=1200&q=85',
    alt: 'Key Monastery perched on mountain — Spiti Valley',
    location: 'Key Monastery, Spiti',
    category: 'monastery',
    featured: true,
  },
  {
    id: 'spiti-winter-1',
    src: 'https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=1200&q=85',
    alt: 'Snow-covered monastery in Spiti winter',
    location: 'Spiti Valley Winter',
    category: 'monastery',
  },

  // ═══════════════════════════════════
  // KINNAUR & KALPA
  // ═══════════════════════════════════
  {
    id: 'kinnaur-1',
    src: 'https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Kinnaur Kailash range from Kalpa — dramatic Himalayan peaks',
    location: 'Kalpa, Kinnaur',
    category: 'landscape',
    featured: true,
  },
  {
    id: 'kalpa-1',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
    alt: 'Rainbow over Kalpa village with Kinnaur Kailash backdrop',
    location: 'Kalpa Village',
    category: 'village',
  },

  // ═══════════════════════════════════
  // ROHTANG & MANALI
  // ═══════════════════════════════════
  {
    id: 'rohtang-1',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Rohtang Pass snow-covered mountain range — gateway to Spiti',
    location: 'Rohtang Pass, 3978m',
    category: 'adventure',
    featured: true,
  },

  // ═══════════════════════════════════
  // SPITI WIDE
  // ═══════════════════════════════════
  {
    id: 'spiti-panorama',
    src: 'https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1920&q=90',
    alt: 'Spiti Valley panoramic — barren mountain landscape under blue sky',
    location: 'Spiti Valley',
    category: 'landscape',
    featured: true,
  },
];

// Featured photos (hero gallery preview grid)
export const featuredPhotos = galleryPhotos.filter(p => p.featured);

// Categories list in English
export const galleryCategories = [
  { key: 'all', label: 'View All' },
  { key: 'landscape', label: 'Valleys & Mountains' },
  { key: 'village', label: 'Villages' },
  { key: 'monastery', label: 'Monasteries' },
  { key: 'adventure', label: 'Adventure' },
  { key: 'culture', label: 'Culture' },
  { key: 'stay', label: 'Where We Stay' },
];
