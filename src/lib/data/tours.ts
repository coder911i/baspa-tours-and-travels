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
    image: "https://images.unsplash.com/photo-1559827291-72ebf59d5f8b?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Challenging",
    groupSize: "12-14 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "Experience the raw, unfiltered beauty of Spiti Valley in its winter glory. A journey through sub-zero temperatures, frozen waterfalls, and the legendary snow leopard territory.",
    highlights: ["Key Monastery in Snow", "Frozen Hikkim Village", "World's Highest Post Office", "Pin Valley Views"],
    itinerary: [
      { day: 1, title: "Delhi to Shimla", description: "Start the journey from Delhi to Shimla. Watch the plains give way to pine forests as you climb through the Shivalik foothills on this 340km, 8-9 hour drive.", images: ["https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"], altitude: "2,276m", distance: "340 km", stay: "Shimla Hotel", highlights: ["Night Drive Through Shivaliks", "Pine Forest Entry"] },
      { day: 2, title: "Shimla to Sangla & Chitkul", description: "Drive 240km (approx. 8-9 hours) along the mighty Satluj river through dramatic gorges. Arrive at the lush Sangla Valley, and continue to Chitkul (3,450m), the highest inhabited village near the old border.", images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626621195611-8b87c19ac7a8?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"], altitude: "3,450m", distance: "240 km", stay: "Chitkul Homestay", highlights: ["Satluj River Gorge", "Sangla Valley Views", "Baspa River Walk", "Mathi Temple"] },
      { day: 3, title: "Chitkul to Nako", description: "Witness Khab Sangam (Spiti-Sutlej confluence) and navigate the thrilling Ka Loops on this 150km, 6-7 hour drive. Visit Nako Lake (3,625m), a sacred high-altitude lake reflecting the sky.", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], altitude: "3,625m", distance: "150 km", stay: "Nako Homestay", highlights: ["Khab Sangam", "Ka Loops", "Nako Lake"] },
      { day: 4, title: "Nako to Tabo & Dhankar", description: "Drive 80km (approx. 4 hours) to step back in time at Tabo Monastery (996 AD), the 'Ajanta of the Himalayas'. Explore the cliffside Dhankar Monastery precariously perched on a cliff at 3,894m.", images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1605000797499-3a8f1d84000e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1617211997091-6d9d45c72a17?auto=format&fit=crop&w=1200&q=80"], altitude: "3,894m", distance: "80 km", stay: "Dhankar Homestay", highlights: ["Tabo Monastery", "Dhankar Monastery", "Dhankar Lake Trek"] },
      { day: 5, title: "Kaza, Key & Highest Villages", description: "Drive 60km (3-4 hours) to reach Kaza (3,800m). Cross the spectacular Chicham Bridge. Visit Key Monastery (4,166m), Hikkim (4,400m) with the World's Highest Post Office, and Komic (4,520m) — the World's Highest Motorable Village.", images: ["https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1571425046095-96a44e7b9a2c?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1631901711578-8e0f3db2c72e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626621195811-c24d4f5cbea3?auto=format&fit=crop&w=1200&q=80"], altitude: "4,520m", distance: "60 km", stay: "Kaza Homestay", highlights: ["Chicham Bridge", "Key Monastery", "Hikkim Post Office", "Komic Village"] },
      { day: 6, title: "Kaza to Manali via Kunzum", description: "Drive 200km (approx. 7-8 hours) from Kaza to Manali. Navigate over the majestic Kunzum Pass and Rohtang Pass to descend from the stark desert into the lush green Manali valley.", images: ["https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], altitude: "2,050m", distance: "200 km", stay: "Manali Hotel", highlights: ["Kunzum Pass", "Rohtang Pass", "Manali Valley"] },
      { day: 7, title: "Manali to Delhi", description: "After a relaxing morning exploring Manali, board the overnight bus for the 570km journey back to Delhi. End of your spectacular Spiti and Kinnaur expedition with lifelong memories.", images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"], altitude: "216m", distance: "570 km", stay: "Home", highlights: ["Trip Memories", "Manali Mall Road"] }
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
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Moderate",
    groupSize: "10-12 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "A fast-paced summer escape to the middle land. Perfect for those who want to experience the essence of Spiti in a shorter duration following the correct geographic sequence.",
    highlights: ["Nako Lake Views", "Ancient Monasteries", "Turquoise Spiti River", "Clear Starry Nights"],
    itinerary: [
      { day: 1, title: "Shimla to Nako", description: "Start the 310km journey (10-11 hours) traversing through the Kinnaur Valley, skipping the initial stops to head straight to the mystical Nako Lake (3,625m), reflecting the high-altitude skies.", images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], altitude: "3,625m", distance: "310 km", stay: "Nako Homestay", highlights: ["Kinnaur Valley", "Nako Lake"] },
      { day: 2, title: "Nako to Tabo & Dhankar", description: "Drive 80km (approx. 4 hours) to visit the 1,000-year-old Tabo Monastery, known as the 'Ajanta of the Himalayas'. Drive to Dhankar (3,894m), the ancient capital of Spiti, where a crumbling fort-monastery clings to a cliff.", images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1605000797499-3a8f1d84000e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1617211997091-6d9d45c72a17?auto=format&fit=crop&w=1200&q=80"], altitude: "3,894m", distance: "80 km", stay: "Dhankar Homestay", highlights: ["Tabo Mud Monastery", "Dhankar Cliff Fort"] },
      { day: 3, title: "Kaza, Key & Hikkim", description: "Head into Kaza (3,800m), then explore the world's highest villages connected by motorable road. Start at Key Monastery (4,166m), then visit Hikkim (4,400m) to post a letter from the World's Highest Post Office.", images: ["https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1571425046095-96a44e7b9a2c?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1631901711578-8e0f3db2c72e?auto=format&fit=crop&w=1200&q=80"], altitude: "4,400m", distance: "60 km", stay: "Kaza Hotel", highlights: ["Key Monastery", "World's Highest Post Office"] },
      { day: 4, title: "Komic to Pin Valley", description: "Drive 70km to Komic (4,520m) — World's Highest Motorable Village. Then descend into the majestic Pin Valley National Park, famous for its rare wildlife and pristine landscapes.", images: ["https://images.unsplash.com/photo-1626621195811-c24d4f5cbea3?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626621390638-a6f4b28e1c4a?auto=format&fit=crop&w=1200&q=80"], altitude: "4,520m", distance: "70 km", stay: "Pin Valley Homestay", highlights: ["Komic - World's Highest Motorable Village", "Pin Valley National Park"] },
      { day: 5, title: "Pin Valley to Manali", description: "Wake to a golden sunrise over the Pin River. After breakfast, navigate through Kunzum Pass and Atal Tunnel on a 180km drive, descending into Manali for a spectacular finish.", images: ["https://images.unsplash.com/photo-1626621390638-a6f4b28e1c4a?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], altitude: "2,050m", distance: "180 km", stay: "Home", highlights: ["Sunrise at Pin Valley", "Kunzum Pass", "Atal Tunnel", "Manali"] }
    ],
    inclusions: ["Transport", "All Stays", "Breakfast & Dinner", "Oxygen Cylinders", "Permits"],
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
    image: "https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Extreme",
    groupSize: "6-8 Persons",
    weatherCoord: { lat: 31.4194, lon: 78.2449, label: "Sangla, Kinnaur" },
    description: "The complete winter experience covering both Kinnaur and Spiti. For those who want to see the transformation of the Himalayas from lush green to stark white.",
    highlights: ["India's Last Village Chitkul", "Tabo Ancient Caves", "Kaza Snow", "Pin Valley"],
    itinerary: [
      { day: 1, title: "Delhi to Shimla", description: "Board a premium Volvo from Delhi for an overnight journey to the Queen of Hills. Watch the plains give way to pine forests as the bus climbs through the Shivalik foothills on this 370km drive.", images: ["https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"], altitude: "2,276m", distance: "370 km", stay: "Overnight Bus", highlights: ["Night Drive Through Shivaliks", "Pine Forest Entry"] },
      { day: 2, title: "Shimla to Sangla", description: "Meet our 4x4 team at Shimla. Drive 220km (7-8 hours) along the mighty Satluj river through dramatic gorges and terraced hillsides. Arrive at the lush Sangla Valley, one of the most fertile valleys in Himachal.", images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626621195611-8b87c19ac7a8?auto=format&fit=crop&w=1200&q=80"], altitude: "2,600m", distance: "220 km", stay: "Sangla Homestay", highlights: ["Satluj River Gorge", "Sangla Valley Views", "Traditional Kinnauri Houses"] },
      { day: 3, title: "Sangla to Chitkul", description: "Drive 40km to Chitkul (3,450m) — the highest inhabited village near the old border. Walk by the crystal-clear Baspa river, visit the 500-year-old Mathi Temple, and explore unique wooden architecture.", images: ["https://images.unsplash.com/photo-1626621195611-8b87c19ac7a8?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"], altitude: "3,450m", distance: "40 km", stay: "Chitkul Homestay", highlights: ["Baspa River Walk", "Mathi Temple", "Last Dhaba of India"] },
      { day: 4, title: "Chitkul to Nako", description: "Enter the dramatic rain shadow region on a 140km (6 hours) drive. Navigate the thrilling Ka Loops — a series of hairpin bends carved into the cliff. Visit the serene Nako Lake (3,625m), a sacred high-altitude lake.", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], altitude: "3,625m", distance: "140 km", stay: "Nako Homestay", highlights: ["Ka Loops", "Nako Lake", "Rain Shadow Desert"] },
      { day: 5, title: "Nako to Tabo & Dhankar", description: "Drive 90km (4 hours) to arrive at Tabo Monastery (996 AD), the 'Ajanta of the Himalayas'. Then drive to the ancient Dhankar Monastery (3,894m), perched precariously on a 300m cliff.", images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1605000797499-3a8f1d84000e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1617211997091-6d9d45c72a17?auto=format&fit=crop&w=1200&q=80"], altitude: "3,894m", distance: "90 km", stay: "Dhankar Homestay", highlights: ["Tabo Monastery", "Ancient Buddhist Murals", "Dhankar Monastery"] },
      { day: 6, title: "Dhankar to Kaza", description: "Trek to the stunning Dhankar Lake with turquoise waters reflecting the barren mountains, then head 40km to Kaza (3,800m), the bustling administrative heart of Spiti Valley.", images: ["https://images.unsplash.com/photo-1617211997091-6d9d45c72a17?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80"], altitude: "3,800m", distance: "40 km", stay: "Kaza Homestay", highlights: ["Dhankar Lake Trek", "Kaza Town"] },
      { day: 7, title: "Key, Hikkim & Komic", description: "Cross the spectacular Chicham Bridge. Visit the iconic Key Monastery (4,166m). Post a letter from Hikkim (4,400m) — World's Highest Post Office. End at Komic (4,520m) — World's Highest Motorable Village.", images: ["https://images.unsplash.com/photo-1571425046095-96a44e7b9a2c?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1631901711578-8e0f3db2c72e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626621195811-c24d4f5cbea3?auto=format&fit=crop&w=1200&q=80"], altitude: "4,520m", distance: "80 km", stay: "Kaza Homestay", highlights: ["Chicham Bridge", "Key Monastery", "Hikkim Post Office", "Komic - World's Highest Motorable Village"] },
      { day: 8, title: "Kaza to Kalpa/Shimla", description: "Rohtang Pass remains closed in winter months (Nov-Mar). The return route via Kinnaur and Shimla is the only motorable option during this season. Long scenic drive (250km, 8-10 hours) back through the Spiti and Kinnaur valleys.", images: ["https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"], altitude: "2,050m", distance: "250 km", stay: "Hotel", highlights: ["Spiti Valley Farewell", "Kinnaur Green Belt", "Winter Route Only"] },
      { day: 9, title: "Shimla to Delhi", description: "Reach Delhi by morning via Volvo. End of the ultimate 9-day expedition covering the complete Kinnaur-Spiti circuit — a journey that transforms you forever.", images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"], altitude: "216m", distance: "370 km", stay: "Home", highlights: ["Trip Wrap-up", "Lifelong Memories"] }
    ],
    inclusions: ["All 4x4 Transport", "Stay with Local Families", "All Meals (Himachali Cuisine)", "Professional Photography", "Inner Line Permits"],
    exclusions: ["Airfare", "Alcohol", "Tips", "Insurance"]
  }
];
