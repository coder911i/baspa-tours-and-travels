export const SITE_CONFIG = {
  NAME: 'Baspa Tour Center Travels',
  TAGLINE: 'Spiti. Kinnaur. Chitkul. Asal Himachal.',
  // TODO: Replace with official WhatsApp business number before deployment
  WHATSAPP_NUMBER: '919876543210', 
  WHATSAPP_MESSAGE: "Namaste! Mujhe Spiti tour ke baare mein jaankari chahiye",
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
    { label: 'Years Experience', value: 8, suffix: '+' },
    { label: 'Happy Travelers', value: 500, suffix: '+' },
    { label: 'High Circuits', value: 15, suffix: '+' },
    { label: 'Google Rating', value: 4.9, suffix: '★' },
  ],
  SEO: {
    title: 'Baspa Travels | Premium Himalayan Expeditions',
    description: 'Handcrafted luxury journeys to the heart of the Himalayas. Experience Chitkul, Spiti, and Kinnaur with expert guidance.',
  }
};

export const formatWhatsAppLink = (number: string, message: string) => {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
