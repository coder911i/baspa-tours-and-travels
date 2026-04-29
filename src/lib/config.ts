export const SITE_CONFIG = {
  NAME: 'Baspa Travels',
  TAGLINE: 'Ascend to Pure Serenity',
  WHATSAPP_NUMBER: '919876543210', 
  WHATSAPP_MESSAGE: "Hi! I'm interested in booking a tour with Baspa Travels.",
  EMAIL: 'hello@baspatravels.com',
  PHONE: '+91 98765 43210',
  ADDRESS: 'Main Bazaar, Sangla, Himachal Pradesh - 172106',
  VIDEO_ID: 'dQw4w9WgXcQ', 
  SOCIAL_LINKS: {
    instagram: 'https://instagram.com/baspatravels',
    facebook: 'https://facebook.com/baspatravels',
    twitter: 'https://twitter.com/baspatravels',
    youtube: 'https://youtube.com/@baspatravels',
  },
  STATS: [
    { label: 'Years', value: 12, suffix: '+' },
    { label: 'Travelers', value: 3000, suffix: '+' },
    { label: 'Expeditions', value: 50, suffix: '+' },
    { label: 'Rating', value: 4.9, suffix: '★' },
  ],
  SEO: {
    title: 'Baspa Travels | Premium Himalayan Expeditions',
    description: 'Handcrafted luxury journeys to the heart of the Himalayas. Experience Chitkul, Spiti, and Kinnaur with expert guidance.',
  }
};

export const formatWhatsAppLink = (number: string, message: string) => {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
