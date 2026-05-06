export type Difficulty = 'Easy' | 'Moderate' | 'High' | 'Extreme';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  stay?: string;
  accommodation?: string;
  distance?: string;
  altitude?: string | null;
  highlights?: string[];
  highlight?: string;
  location?: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  name?: string; // Support legacy name prop
  tagline?: string;
  description: string;
  duration: string; // '7 Days' format
  difficulty: Difficulty | string;
  maxAltitude?: string | number;
  altitude?: string;
  groupSize: string | { min: number; max: number };
  price: number | { perPerson: number; private?: number };
  startingPrice?: string;
  season?: string[];
  highlights: string[];
  included?: string[];
  inclusions: string[];
  notIncluded?: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  image: string;
  images?: string[];
  featured?: boolean;
  location?: string;
  weatherCoord?: { lat: number; lon: number; label: string };
}

export interface Attraction {
  name: string;
  description: string;
  image?: string;
}

export interface Destination {
  id: string;
  slug: string;
  title: string;
  name?: string;
  tagline?: string;
  description: string;
  image: string;
  location?: string;
  featured?: boolean;
  elevation?: string;
  bestTime?: string;
  bestTimeToVisit?: string;
  howToReach?: string;
  attractions?: (string | Attraction)[];
  gallery?: string[];
}

export interface SITE_CONFIG_TYPE {
  NAME: string;
  TAGLINE: string;
  WHATSAPP_NUMBER: string;
  WHATSAPP_MESSAGE: string;
  EMAIL: string;
  PHONE: string;
  ADDRESS: string;
  VIDEO_ID: string;
  SOCIAL_LINKS: {
    instagram: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
}
