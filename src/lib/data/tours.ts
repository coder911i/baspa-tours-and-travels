import { Tour } from "../types";

export const tours: Tour[] = [
  {
    slug: "chitkul-valley-expedition",
    name: "Chitkul Valley Expedition",
    tagline: "Journey to the Last Village of India",
    description: "Experience the untouched beauty of the Baspa Valley, ending at the mystical village of Chitkul. This journey takes you through lush pine forests, apple orchards, and rugged mountain terrains, offering a glimpse into the serene Himalayan life.",
    duration: 7,
    difficulty: "moderate",
    maxAltitude: 3450,
    groupSize: { min: 4, max: 12 },
    price: { perPerson: 18500 },
    season: ["May", "June", "July", "August", "September", "October"],
    highlights: [
      "Visit the last village on the Indo-Tibetan border",
      "Explore the ancient Sangla Valley",
      "Stay in premium riverside camps",
      "Walk through world-famous apple orchards",
      "Experience local Kinnauri culture and cuisine"
    ],
    included: [
      "Accommodation in premium camps/guest houses",
      "All meals during the trek",
      "Professional mountain guides",
      "Transportation in 4x4 vehicles",
      "Inner line permits"
    ],
    notIncluded: [
      "Travel insurance",
      "Personal expenses",
      "Tips for guides and drivers",
      "Anything not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla (2205m)",
        description: "Arrive in the historic hill station of Shimla. Meet your guides and fellow travelers for a briefing session followed by a welcome dinner.",
        accommodation: "Heritage Guest House",
        altitude: "2205m"
      },
      {
        day: 2,
        title: "Shimla → Rampur → Sangla (2680m)",
        description: "A scenic drive along the Sutlej river. Witness the changing landscape from lush green to rugged mountains.",
        distance: "180km",
        altitude: "2680m",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 3,
        title: "Sangla Valley Exploration",
        description: "Visit the Kamru Fort and explore the local market of Sangla. Learn about the unique architecture and history of the region.",
        altitude: "2680m",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Sangla → Chitkul (3450m)",
        description: "A short but breathtaking drive to Chitkul, the last inhabited village near the Indo-China border.",
        distance: "28km",
        altitude: "3450m",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Chitkul — Last Village of India",
        description: "Spend the day exploring Chitkul, its ancient temple, and the banks of the Baspa river. Hike towards the ITBP check post.",
        altitude: "3450m",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 6,
        title: "Chitkul → Sangla → Shimla",
        description: "Start your return journey towards Shimla, carrying memories of the mystical valley.",
        distance: "210km",
        altitude: "2205m",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 7,
        title: "Departure",
        description: "After breakfast, proceed towards your onward journey.",
        meals: "Breakfast"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop"
    ],
    reviews: [
      {
        id: "r1",
        user: "Arjun Sharma",
        location: "Delhi",
        rating: 5,
        comment: "Chitkul changed something in me. Baspa Travels made it seamless and magical.",
        date: "2023-09-15",
        tourSlug: "chitkul-valley-expedition"
      }
    ],
    featured: true
  },
  {
    slug: "spiti-circuit",
    name: "Spiti Circuit",
    tagline: "Into the Heart of the Middle Land",
    description: "The Spiti Circuit is more than just a road trip; it's a journey through time. From the world's highest post office to ancient monasteries perched on cliffs, Spiti offers a landscape that is both harsh and hauntingly beautiful.",
    duration: 10,
    difficulty: "hard",
    maxAltitude: 4590,
    groupSize: { min: 6, max: 10 },
    price: { perPerson: 28000 },
    season: ["June", "July", "August", "September"],
    highlights: [
      "Visit Key Monastery, the largest in Spiti",
      "Send a postcard from Hikkim, the world's highest post office",
      "Witness the 500-year-old mummy at Giu",
      "Drive through the treacherous yet stunning Kunzum Pass",
      "Camp under the stars at Chandratal Lake"
    ],
    included: [
      "Premium 4x4 vehicles for the entire circuit",
      "Accommodation in boutique guest houses and luxury tents",
      "All meals (Organic and Local focus)",
      "Oxygen cylinders and medical kits",
      "Spiti-expert guides"
    ],
    notIncluded: [
      "Flights to/from base",
      "Personal riding gear",
      "Alcoholic beverages",
      "Any costs due to roadblocks or landslides"
    ],
    itinerary: [], // To be populated
    images: [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop"
    ],
    reviews: [],
    featured: true
  },
  {
    slug: "kinnaur-apple-trail",
    name: "Kinnaur Apple Trail",
    tagline: "Taste the Forbidden Fruit",
    description: "A gentle journey through the apple orchards of Kinnaur. Perfect for families and those looking for a relaxed Himalayan experience.",
    duration: 5,
    difficulty: "easy",
    maxAltitude: 2960,
    groupSize: { min: 2, max: 8 },
    price: { perPerson: 12500 },
    season: ["August", "September", "October"],
    highlights: ["Orchard walks", "Local cooking classes", "Stunning views of Kinner Kailash"],
    included: ["Stays in heritage homes", "Orchard tours", "Transport"],
    notIncluded: ["Personal expenses"],
    itinerary: [],
    images: ["https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=2000&auto=format&fit=crop"],
    reviews: [],
    featured: true
  },
  {
    slug: "sangla-valley-trek",
    name: "Sangla Valley Trek",
    tagline: "Walk the Path of the Gods",
    description: "A moderate trek through one of the most beautiful valleys in the Himalayas. Ancient villages, meadows, and river crossings.",
    duration: 4,
    difficulty: "moderate",
    maxAltitude: 3200,
    groupSize: { min: 4, max: 12 },
    price: { perPerson: 9500 },
    season: ["April", "May", "June", "September", "October", "November"],
    highlights: ["Baspa river crossings", "Camping in meadows", "Interaction with local shepherds"],
    included: ["Tents and sleeping bags", "Meals during trek", "Porters"],
    notIncluded: ["Gear rental"],
    itinerary: [],
    images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"],
    reviews: [],
    featured: true
  },
  {
    slug: "pin-parvati-pass",
    name: "Pin Parvati Pass",
    tagline: "The Ultimate Challenge",
    description: "A high-altitude trek connecting the Parvati Valley in Kullu to the Pin Valley in Spiti. Only for experienced trekkers.",
    duration: 12,
    difficulty: "hard",
    maxAltitude: 5319,
    groupSize: { min: 4, max: 8 },
    price: { perPerson: 35000 },
    season: ["July", "August", "September"],
    highlights: ["Glacier crossings", "Dramatic landscape shift", "Highest point of the trek"],
    included: ["Advanced mountain gear", "High-altitude guides", "Medical support"],
    notIncluded: ["Travel to Manali"],
    itinerary: [],
    images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"],
    reviews: [],
    featured: true
  },
  {
    slug: "baspa-river-camp",
    name: "Baspa River Camp",
    tagline: "Riverside Tranquility",
    description: "A short, relaxing getaway in the heart of the Baspa Valley. Perfect for rejuvenation.",
    duration: 3,
    difficulty: "easy",
    maxAltitude: 2680,
    groupSize: { min: 2, max: 15 },
    price: { perPerson: 7500 },
    season: ["May", "June", "July", "August", "September", "October"],
    highlights: ["Riverside bonfire", "Star gazing", "Short nature walks"],
    included: ["Luxury camping", "All meals", "Evening snacks"],
    notIncluded: ["Transport to camp"],
    itinerary: [],
    images: ["https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000&auto=format&fit=crop"],
    reviews: [],
    featured: true
  },
  {
    slug: "nako-lake-circuit",
    name: "Nako Lake Circuit",
    tagline: "The Mirror of the Sky",
    description: "Explore the high-altitude desert and the sacred Nako Lake. A blend of culture and breathtaking vistas.",
    duration: 6,
    difficulty: "moderate",
    maxAltitude: 3662,
    groupSize: { min: 4, max: 12 },
    price: { perPerson: 15000 },
    season: ["June", "July", "August", "September", "October"],
    highlights: ["Nako Lake", "Ancient Nako Monastery", "Village walk"],
    included: ["Guest house stays", "Transport", "Guide"],
    notIncluded: ["Lunch on travel days"],
    itinerary: [],
    images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"],
    reviews: [],
    featured: false
  },
  {
    slug: "tabo-monastery-trail",
    name: "Tabo Monastery Trail",
    tagline: "The Ajanta of the Himalayas",
    description: "A spiritual and cultural journey to the oldest continuously operating Buddhist monastery in India.",
    duration: 5,
    difficulty: "easy",
    maxAltitude: 3050,
    groupSize: { min: 2, max: 10 },
    price: { perPerson: 11000 },
    season: ["May", "June", "July", "August", "September"],
    highlights: ["Tabo Caves", "Monastery tour", "Stunning desert landscapes"],
    included: ["Stays in monasteries/guest houses", "Transport", "Cultural guide"],
    notIncluded: ["Donations"],
    itinerary: [],
    images: ["https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=2000&auto=format&fit=crop"],
    reviews: [],
    featured: false
  }
];
