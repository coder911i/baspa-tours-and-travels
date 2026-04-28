export type Difficulty = 'easy' | 'moderate' | 'hard';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
  accommodation?: string;
  distance?: string;
  altitude?: string;
  highlight?: string;
}

export interface Review {
  id: string;
  user: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  tourSlug: string;
}

export interface Tour {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: number;
  difficulty: Difficulty;
  maxAltitude: number;
  groupSize: { min: number; max: number };
  price: { perPerson: number; private?: number };
  season: string[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: ItineraryDay[];
  images: string[];
  reviews: Review[];
  featured?: boolean;
}

export interface Destination {
  slug: string;
  name: string;
  elevation: string;
  tagline: string;
  description: string;
  bestTimeToVisit: string;
  howToReach: string;
  attractions: { name: string; description: string; image?: string }[];
  image: string;
  gallery: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  tourName: string;
}
