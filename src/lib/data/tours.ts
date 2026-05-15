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
      { day: 1, title: "The Journey Begins & Chitkul Arrival", description: "Enter the spectacular Kinnaur Valley via Karcham Dam and Sangla. Arrive at Chitkul, the last inhabited village on the Indo-Tibetan border. Visit the 500-year-old Mathi Temple and dine at the famous 'Last Dhaba of India'.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop", altitude: "3,450m", distance: "Shimla to Chitkul", stay: "Chitkul Homestay", highlights: ["Karcham Dam", "Sangla Valley", "Last Dhaba of India", "Mathi Temple"] },
      { day: 2, title: "Baspa River & Border Region", description: "Visit the Nagasthi ITBP Checkpost, the last civilian access point. Experience thrilling offroading along the Baspa River and immerse yourself in an authentic Kinnauri village experience.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop", altitude: "3,450m", distance: "Local", stay: "Chitkul Homestay", highlights: ["Nagasthi ITBP Checkpost", "Baspa River Offroad", "Kinnauri Culture"] },
      { day: 3, title: "The Confluence & Canyons", description: "Witness Khab Sangam (Spiti-Sutlej confluence) and navigate the thrilling Ka Loops. Visit Nako Lake, Gue Monastery, and the Shipki La View Region (Note: Civilians are not permitted at the actual border pass, but we view Tibet settlements from a designated region subject to visibility).", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop", altitude: "3,662m", distance: "150 km", stay: "Nako/Tabo Homestay", highlights: ["Khab Sangam", "Ka Loops", "Nako Lake", "Gue Mummy", "Shipki La View Region"] },
      { day: 4, title: "Ancient Caves & Mud Castles", description: "Step back in time at Tabo Monastery (996 AD), the 'Ajanta of the Himalayas'. Explore the cliffside Dhankar Monastery, hike to Dhankar Lake, and end the day with views of the majestic Pin Valley.", image: "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=2000&auto=format&fit=crop", altitude: "3,800m", distance: "80 km", stay: "Kaza Homestay", highlights: ["Tabo Monastery", "Dhankar Monastery", "Pin Valley"] },
      { day: 5, title: "The Spiti Heartlands", description: "Cross Chicham Bridge (Asia's highest suspension bridge). Visit Key Monastery, Kibber, and Hikkim (World's Highest Post Office). Hunt for fossils in Langza and explore Komic – World's Highest Motorable Village.", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop", altitude: "4,587m", distance: "60 km", stay: "Kaza Homestay", highlights: ["Chicham Bridge", "Komic - World's Highest Motorable Village", "Langza Fossils", "Key Monastery"] },
      { day: 6, title: "Adventure & Return Journey", description: "Enjoy ATV rides in the high-altitude desert, relax at cozy local cafes, and shop for authentic Spitian handicrafts before starting the descent towards Shimla.", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000&auto=format&fit=crop", altitude: "2,050m", distance: "250 km", stay: "Shimla Hotel / Volvo", highlights: ["ATV Rides", "Cafe Hopping", "Handicrafts Shopping"] },
      { day: 7, title: "Reach Delhi", description: "Morning arrival in Delhi via Volvo. End of your spectacular Winter Spiti and Kinnaur expedition with lifelong memories.", altitude: undefined, distance: "370 km", stay: "Home", highlights: ["Trip Memories"] }
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
      { day: 1, title: "Manali to Kaza", description: "Early morning drive through the iconic Atal Tunnel (9.02 km, world's longest highway tunnel above 10,000 ft). Ascend the legendary Rohtang Pass with panoramic views of Pir Panjal range, then cross the wind-swept Kunzum Pass (4,551m) adorned with prayer flags. Descend into the stark, otherworldly Spiti Valley as the landscape transforms from green to desert.", image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?q=80&w=2000&auto=format&fit=crop", altitude: "3,800m", distance: "200 km", stay: "Kaza Hotel", highlights: ["Atal Tunnel", "Rohtang Pass", "Kunzum Top", "Spiti River First Glimpse"] },
      { day: 2, title: "Spiti Monastery Trail", description: "Begin at the 1,000-year-old Key Monastery, perched dramatically on a hilltop — the largest monastic training centre in Spiti. Drive to Dhankar, the ancient capital of Spiti, where a crumbling fort-monastery clings to a 300m cliff above the confluence of Pin and Spiti rivers. End at Tabo Monastery (996 AD), known as the 'Ajanta of the Himalayas' for its exquisite Buddhist murals and meditation caves.", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop", altitude: "3,300m", distance: "120 km", stay: "Tabo Homestay", highlights: ["Key Monastery", "Dhankar Cliff Fort", "Tabo Mud Monastery", "Pin-Spiti Confluence"] },
      { day: 3, title: "The Highest Villages", description: "Explore the world's highest villages connected by motorable road. Start at Langza, the 'fossil village' where ancient marine fossils from the Tethys Sea lie scattered in the fields, overlooked by a towering golden Buddha statue. Visit Hikkim to post a letter from the World's Highest Post Office. Drive to Komic — World's Highest Motorable Village — home to the ancient Tangyud Monastery.", image: "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=2000&auto=format&fit=crop", altitude: "4,587m", distance: "60 km", stay: "Kaza Hotel", highlights: ["Langza Buddha Statue", "Fossil Hunting", "World's Highest Post Office", "Komic - World's Highest Motorable Village"] },
      { day: 4, title: "Kaza to Chandratal", description: "Drive through the barren high-altitude terrain to reach the mystical Chandratal ('Moon Lake'), a pristine crescent-shaped lake at 4,250m that changes colour from turquoise to deep blue throughout the day. Overnight camping in Swiss tents under one of the clearest night skies on Earth — a photographer's paradise for Milky Way captures.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop", altitude: "4,250m", distance: "100 km", stay: "Swiss Tents", highlights: ["Chandratal Lake", "Milky Way Photography", "Camping at 14,000 ft", "Sunrise Over the Lake"] },
      { day: 5, title: "Chandratal to Manali", description: "Wake to golden sunrise over the lake. After breakfast, drive back via Batal — stopping at the legendary 'Chacha Chachi Dhaba' (the most remote dhaba in India, run by a couple who has served travellers for decades). Navigate through Gramphu and back to Manali for last-minute shopping on Mall Road.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop", altitude: "2,050m", distance: "120 km", stay: "Home", highlights: ["Sunrise at Chandratal", "Batal Chacha Chachi Dhaba", "Gramphu Valley", "Manali Mall Road"] }
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
      { day: 1, title: "Delhi to Shimla", description: "Board a premium Volvo from Delhi for an overnight journey to the Queen of Hills. Watch the plains give way to pine forests as the bus climbs through the Shivalik foothills.", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2000&auto=format&fit=crop", altitude: undefined, distance: "370 km", stay: "Overnight Bus", highlights: ["Night Drive Through Shivaliks", "Pine Forest Entry"] },
      { day: 2, title: "Shimla to Sangla", description: "Meet our 4x4 team at Shimla. Drive along the mighty Satluj river through dramatic gorges and terraced hillsides. Cross the iconic Kinnaur Gate — a tunnel carved into the cliff face marking the boundary of Kinnaur district. Arrive at the lush Sangla Valley, one of the most fertile valleys in Himachal.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop", altitude: "2,600m", distance: "220 km", stay: "Sangla Homestay", highlights: ["Satluj River Gorge", "Kinnaur Gate Tunnel", "Sangla Valley Views", "Traditional Kinnauri Houses"] },
      { day: 3, title: "Chitkul: The Last Village", description: "Drive to Chitkul — the last inhabited village on the Indo-Tibetan border. Walk by the crystal-clear Baspa river, visit the 500-year-old Mathi Temple (dedicated to the local deity), and explore the unique Kinnauri wooden architecture. Stop at the legendary 'Last Dhaba of India' and the last Indian post office before the border.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop", altitude: "3,450m", distance: "40 km", stay: "Sangla Homestay", highlights: ["Baspa River Walk", "Mathi Temple", "Last Dhaba of India", "Last Post Office", "Kinnauri Architecture"] },
      { day: 4, title: "Sangla to Kalpa", description: "Short scenic drive to Kalpa, perched on the slopes of the Kinner Kailash range. Witness the majestic 6,050m peak turning gold at sunrise. Visit Suicide Point — a dramatic cliff viewpoint with vertical drops. Explore the ancient Roghi Village with its sacred Chandika Devi Temple and panoramic apple orchards stretching to the horizon.", image: "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=2000&auto=format&fit=crop", altitude: "2,960m", distance: "50 km", stay: "Kalpa Hotel", highlights: ["Kinner Kailash Sunrise", "Suicide Point", "Roghi Village", "Apple Orchards", "Chandika Devi Temple"] },
      { day: 5, title: "Kalpa to Tabo", description: "Enter the dramatic rain shadow region as the landscape transforms from green to stark desert. Navigate the thrilling Ka Loops — a series of hairpin bends carved into the cliff. Visit the serene Nako Lake (3,662m), a sacred high-altitude lake reflecting the sky. Arrive at Tabo Monastery (996 AD), the 'Ajanta of the Himalayas' housing 1,000-year-old Buddhist murals.", image: "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=2000&auto=format&fit=crop", altitude: "3,280m", distance: "150 km", stay: "Tabo Homestay", highlights: ["Ka Loops", "Nako Lake", "Tabo Monastery", "Ancient Buddhist Murals", "Rain Shadow Desert"] },
      { day: 6, title: "Tabo to Kaza", description: "Drive to the ancient Dhankar Monastery, the former capital of Spiti, precariously perched on a 300m cliff above the Pin-Spiti river confluence. Trek to the stunning Dhankar Lake (30 min hike) with turquoise waters reflecting the barren mountains. Catch a glimpse of Pin Valley — India's only cold desert national park, home to the rare snow leopard and ibex.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop", altitude: "3,800m", distance: "60 km", stay: "Kaza Homestay", highlights: ["Dhankar Monastery", "Dhankar Lake Trek", "Pin Valley National Park", "Pin-Spiti Confluence"] },
      { day: 7, title: "The Spiti Heartlands", description: "The crown jewel day. Cross the spectacular Chicham Bridge — Asia's highest suspension bridge at 13,596 ft spanning a 1,000 ft deep gorge. Visit the iconic Key Monastery (largest in Spiti) and Kibber Village. Post a letter from Hikkim — World's Highest Post Office. Hunt for ancient marine fossils in Langza beneath the towering golden Buddha statue. End at Komic — World's Highest Motorable Village.", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop", altitude: "4,587m", distance: "80 km", stay: "Kaza Homestay", highlights: ["Chicham Bridge", "Key Monastery", "Kibber Village", "Hikkim Post Office", "Langza Fossils", "Komic - World's Highest Motorable Village"] },
      { day: 8, title: "Kaza to Kalpa/Shimla", description: "Long but scenic drive back towards civilization through the Spiti and Kinnaur valleys. Watch the landscape transform back from cold desert to green forests. Stop for chai at local dhabas along the way. Reflect on the incredible journey as the sun sets behind the mountains.", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000&auto=format&fit=crop", altitude: "2,050m", distance: "250 km", stay: "Hotel", highlights: ["Spiti Valley Farewell", "Kinnaur Green Belt", "Mountain Sunset", "Roadside Chai Stops"] },
      { day: 9, title: "Return to Delhi", description: "Reach Delhi by morning via Volvo. End of the ultimate 9-day expedition covering the complete Kinnaur-Spiti circuit — a journey that transforms you forever.", altitude: undefined, distance: "370 km", stay: "Home", highlights: ["Trip Wrap-up", "Lifelong Memories"] }
    ],
    inclusions: ["All 4x4 Transport", "Stay with Local Families", "All Meals (Himachali Cuisine)", "Professional Photography", "Inner Line Permits"],
    exclusions: ["Airfare", "Alcohol", "Tips", "Insurance"]
  }
];
