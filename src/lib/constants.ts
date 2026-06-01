export const SITE_CONFIG = {
  NAME: 'Baspa Tour Center Travels',
  TAGLINE: 'Ascend to Pure Serenity',
  // TODO: Replace with official WhatsApp business number before deployment
  WHATSAPP_NUMBER: '91XXXXXXXXXX', 
  WHATSAPP_MESSAGE: "Hi! I'm interested in booking a tour with Baspa Tour Center Travels.",
  // TODO: Replace with official brand email
  EMAIL: 'hello@baspatravels.com',
  // TODO: Replace with official direct phone line
  PHONE: '+91 98765 43210',
  ADDRESS: 'Main Bazaar, Sangla, Himachal Pradesh - 172106',
  // TODO: Replace with official promo trailer YouTube video ID
  VIDEO_ID: 'g8-fN6w4aC8', 
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
