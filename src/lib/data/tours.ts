import { Tour } from '@/types';

export const tours: Tour[] = [
  {
    id: "spiti-valley-7d",
    slug: "spiti-valley-7d",
    title: "Spiti Winter Expedition",
    duration: "6 Nights / 7 Days",
    location: "Kaza, Spiti Valley",
    startingPrice: "₹24,999",
    price: 24999,
    image: "/images/spiti_winter.png",
    difficulty: "Challenging",
    groupSize: "12-14 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "Experience the raw, unfiltered beauty of Spiti Valley in its winter glory. A journey through sub-zero temperatures, frozen waterfalls, and the legendary snow leopard territory.",
    highlights: ["Key Monastery in Snow", "Frozen Hikkim Village", "World's Highest Post Office", "Chicham Bridge Views"],
    itinerary: [
      { day: 1, title: "Delhi to Manali", description: "Evening departure from Delhi by Volvo. Overnight journey to the gateway of mountains.", altitude: undefined, distance: "550 km", stay: "Overnight Bus", highlights: ["Sunset departure", "Mountain air"] },
      { day: 2, title: "Manali Arrival", description: "Check-in at hotel. Day for acclimatization and local exploration in Manali.", altitude: "2,050m", distance: "Local", stay: "Manali Hotel", highlights: ["Hadimba Temple", "Old Manali Cafe Crawl"] },
      { day: 3, title: "Manali to Kaza", description: "The epic drive begins through Atal Tunnel and Kunzum Pass (if open) or via Shimla route depending on snow.", altitude: "3,800m", distance: "200 km", stay: "Kaza Homestay", highlights: ["Atal Tunnel Crossing", "Spiti River Views"] },
      { day: 4, title: "Kaza Local Sightseeing", description: "Visit the iconic Key Monastery and the highest inhabited village Kibber.", altitude: "4,200m", distance: "40 km", stay: "Kaza Homestay", highlights: ["Key Monastery", "Kibber Village"] },
      { day: 5, title: "Hikkim, Komic & Langza", description: "Visit the world's highest post office and the Buddha statue overlooking the valley.", altitude: "4,500m", distance: "50 km", stay: "Kaza Homestay", highlights: ["World's Highest Post Office", "Fossil Hunting in Langza"] },
      { day: 6, title: "Kaza to Manali", description: "Early morning departure back to Manali. Transfer to Volvo in the evening.", altitude: "2,050m", distance: "200 km", stay: "Overnight Bus", highlights: ["Final Spiti Views", "Shopping in Manali"] },
      { day: 7, title: "Reach Delhi", description: "Morning arrival in Delhi. End of your Himalayan expedition with lifelong memories.", altitude: undefined, distance: "550 km", stay: "Home", highlights: ["Trip Memories"] }
    ],
    inclusions: ["Volvo Delhi-Manali-Delhi", "All Transfers by 4x4", "Stay in Homestays/Hotels", "MAP Meal Plan (Breakfast & Dinner)", "Expert Guide & Driver"],
    exclusions: ["Personal Expenses", "Lunch during travel", "Insurance", "Any cost arising due to natural calamities"]
  },
  {
    id: "spiti-summer-4n5d",
    slug: "spiti-summer-4n5d",
    title: "The Great Spiti Summer Loop",
    duration: "4 Nights / 5 Days",
    location: "Kaza, Spiti",
    startingPrice: "₹18,500",
    price: 18500,
    image: "/images/spiti_summer.png",
    difficulty: "Moderate",
    groupSize: "10-12 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "A fast-paced summer escape to the middle land. Perfect for those who want to experience the essence of Spiti in a shorter duration with clear skies and turquoise rivers.",
    highlights: ["Chandratal Lake Camping", "Kunzum Pass Highpoint", "Turquoise Spiti River", "Clear Starry Nights"],
    itinerary: [
      { day: 1, title: "Manali to Kaza", description: "Early morning drive via Rohtang and Kunzum Pass. Reach Kaza by evening.", altitude: "3,800m", distance: "200 km", stay: "Kaza Hotel", highlights: ["Rohtang Pass", "Kunzum Top"] },
      { day: 2, title: "Spiti Monastery Trail", description: "Explore Key, Dhankar and Tabo Monasteries. Witness the ancient culture.", altitude: "3,300m", distance: "120 km", stay: "Tabo Homestay", highlights: ["Tabo Mud Monastery", "Dhankar Fort"] },
      { day: 3, title: "The Highest Villages", description: "Day trip to Langza, Hikkim and Komic villages. Highest motorable road in the world.", altitude: "4,587m", distance: "60 km", stay: "Kaza Hotel", highlights: ["Komic Monastery", "Postcard from Hikkim"] },
      { day: 4, title: "Kaza to Chandratal", description: "Drive to the mystical Chandratal Lake. Overnight camping under the stars.", altitude: "4,250m", distance: "100 km", stay: "Swiss Tents", highlights: ["Moon Lake Trek", "Milky Way Photography"] },
      { day: 5, title: "Chandratal to Manali", description: "Morning by the lake, then drive back to Manali through Batal and Gramphu.", altitude: "2,050m", distance: "120 km", stay: "Home", highlights: ["Batal Chacha Chachi Dhaba", "Manali Shopping"] }
    ],
    inclusions: ["Manali to Manali Transport", "All Stays", "Breakfast & Dinner", "Oxygen Cylinders", "Permits"],
    exclusions: ["Lunch", "Entry Fees", "Personal Expenses"]
  },
  {
    id: "winter-spiti-9d",
    slug: "winter-spiti-9d",
    title: "Ultimate Winter Spiti (9D)",
    duration: "8 Nights / 9 Days",
    location: "Spiti & Kinnaur",
    startingPrice: "₹32,000",
    price: 32000,
    image: "/images/kinnaur_chitkul.png",
    difficulty: "Extreme",
    groupSize: "6-8 Persons",
    weatherCoord: { lat: 31.4194, lon: 78.2449, label: "Sangla, Kinnaur" },
    description: "The complete winter experience covering both Kinnaur and Spiti. For those who want to see the transformation of the Himalayas from lush green to stark white.",
    highlights: ["India's Last Village Chitkul", "Kinner Kailash Views", "Kalpa Apple Orchards", "Tabo Ancient Caves"],
    itinerary: [
      { day: 1, title: "Delhi to Shimla", description: "Board Volvo from Delhi. Overnight journey to the Queen of Hills.", altitude: undefined, distance: "370 km", stay: "Overnight Bus", highlights: ["Night Drive"] },
      { day: 2, title: "Shimla to Sangla", description: "Meet our 4x4 team in Shimla. Drive along the Satluj river to the beautiful Sangla valley.", altitude: "2,600m", distance: "220 km", stay: "Sangla Homestay", highlights: ["Satluj River Road", "Kinnaur Gate"] },
      { day: 3, title: "Chitkul: The Last Village", description: "Explore Chitkul, the last inhabited village on the Indo-Tibetan border. Walk by the Baspa river.", altitude: "3,450m", distance: "40 km", stay: "Sangla Homestay", highlights: ["Baspa River Walk", "Last Post Office"] },
      { day: 4, title: "Sangla to Kalpa", description: "Short drive to Kalpa. Witness the majestic Kinner Kailash range turning gold at sunrise.", altitude: "2,960m", distance: "50 km", stay: "Kalpa Hotel", highlights: ["Suicide Point", "Roghi Village"] },
      { day: 5, title: "Kalpa to Tabo", description: "Enter the rain shadow region of Spiti. Visit the 1000 year old Tabo Monastery.", altitude: "3,280m", distance: "150 km", stay: "Tabo Homestay", highlights: ["Nako Lake", "Tabo Monastery"] },
      { day: 6, title: "Tabo to Kaza", description: "Drive via Dhankar Monastery and Fort. Reach Kaza, the sub-divisional HQ of Spiti.", altitude: "3,800m", distance: "60 km", stay: "Kaza Homestay", highlights: ["Dhankar Lake Trek", "Pin Valley Glimpse"] },
      { day: 7, title: "The Spiti Heartlands", description: "Full day exploring Key, Kibber, Hikkim and Komic. The highest points of the trip.", altitude: "4,587m", distance: "80 km", stay: "Kaza Homestay", highlights: ["Key Monastery", "Komic World Highest Village"] },
      { day: 8, title: "Kaza to Kalpa/Shimla", description: "Long drive back towards civilization. Reflections of the trip.", altitude: "2,050m", distance: "250 km", stay: "Hotel", highlights: ["Sunset in Mountains"] },
      { day: 9, title: "Return to Delhi", description: "Reach Delhi by morning. End of the ultimate expedition.", altitude: undefined, distance: "370 km", stay: "Home", highlights: ["Trip Wrap-up"] }
    ],
    inclusions: ["All 4x4 Transport", "Stay with Local Families", "All Meals (Himachali Cuisine)", "Professional Photography", "Inner Line Permits"],
    exclusions: ["Airfare", "Alcohol", "Tips", "Insurance"]
  }
];
