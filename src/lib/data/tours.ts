import { Tour } from '@/types';

export const tours: Tour[] = [
  {
    id: "spiti-valley-7d",
    slug: "spiti-valley-7d",
    title: "Spiti Valley Winter — 7 Days (Shimla Route)",
    subtitle: "Cold Desert · Indo-Tibetan Trail · Monastery Circuit",
    description: "Experience the raw beauty of Spiti Valley in winter. A journey through the frozen landscapes of the Himalayas.",
    startingPrice: "₹14,999",
    price: 14999,
    duration: "7 Days · 6 Nights",
    difficulty: "Moderate-Hard",
    location: "Spiti Valley",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    highlights: ["Gue Monastery Mummy", "Key Gompa", "Chicham Bridge", "Chitkul Village"],
    included: [
      "Volvo/Deluxe bus transfer Delhi to Shimla",
      "Shimla to Shimla journey in Tempo Traveller/SUV/4x4",
      "Accommodation: 1N Chitkul, 2N Kalpa, 1N Nako/Tabo, 2N Kaza",
      "12 meals (Dinner Day 1 → Breakfast Day 7)",
      "Experienced trip leader throughout"
    ],
    inclusions: [
      "Volvo/Deluxe bus transfer Delhi to Shimla",
      "Shimla to Shimla journey in Tempo Traveller/SUV/4x4",
      "Accommodation: 1N Chitkul, 2N Kalpa, 1N Nako/Tabo, 2N Kaza",
      "12 meals (Dinner Day 1 → Breakfast Day 7)",
      "Experienced trip leader throughout",
      "24×7 onboard assistance",
      "Oxygen can + medical kit",
      "Driver allowances, toll taxes, parking, state taxes",
      "Local team support in Kinnaur and Kaza"
    ],
    exclusions: [
      "5% GST",
      "Alcoholic beverages & personal medical expenses",
      "Room heater, laundry, and personal expenses",
      "Any cost due to natural calamities or itinerary change",
      "Anything not mentioned in inclusions"
    ],
    itinerary: [
      { day: 0, title: "Delhi to Shimla", description: "Assemble at Kashmiri Gate / Majnu Ka Tila. Meet your boarding captain and co-travelers. Group briefing and induction. Overnight journey to Shimla.", altitude: null, distance: "~360 km", stay: "Overnight Bus", highlights: ["Boarding Point: Kashmiri Gate", "Group Induction Session", "Overnight Volvo/Deluxe Bus"] },
      { day: 1, title: "Shimla to Kalpa", description: "Arrive Shimla in the morning. Journey continues to Kalpa via the scenic riverside route through Rampur Bushar. Check in, freshen up, dinner with fellow travelers.", altitude: "2,960 m", distance: "~230 km", stay: "Hotel, Kalpa", highlights: ["Riverside Drive via Rampur Bushar", "Kinnaur Kailash Views", "Hearty Group Dinner"] },
      { day: 2, title: "Kalpa to Nako / Tabo", description: "Post breakfast, drive towards Nako/Tabo crossing Khab Bridge — confluence of Spiti and Satluj rivers. Enter Spiti Valley via Sumdo. Visit Gue Monastery and its famous 500-year-old naturally preserved mummy.", altitude: "3,625 m", distance: "~170 km", stay: "Homestay, Nako/Tabo", highlights: ["Khab Bridge — Spiti-Satluj Confluence", "Gue Monastery Mummy (500 years old)", "Stargazing Experience"] },
      { day: 3, title: "Nako / Tabo to Kaza", description: "Early breakfast and visit Tabo Monastery — one of the oldest Buddhist monasteries. Drive to Dhankar, a 1000-year-old monastery perched on rocky spurs. Arrive Kaza for dinner. Stargazing under crystal-clear skies.", altitude: "3,800 m", distance: "~110 km", stay: "Hotel/Homestay, Kaza", highlights: ["Tabo Monastery Visit", "Dhankar Monastery — 1000 Years Old", "Milky Way Stargazing"] },
      { day: 4, title: "Kaza Sightseeing", description: "Full day excursion of Spiti Valley. Visit Langza village with its giant Buddha statue. Drive to Komic — world's highest motorable village. Hikkim — world's highest post office. Chi Cham Bridge — Asia's highest suspension bridge. Key Gompa — oldest monastery in Spiti.", altitude: "4,587 m (Komic)", distance: "~90 km round", stay: "Hotel/Homestay, Kaza", highlights: ["Langza Buddha Statue", "Komic Village — 4587m", "Hikkim Post Office", "Chi Cham Bridge", "Key Gompa Monastery"] },
      { day: 5, title: "Kaza to Kalpa", description: "Post breakfast, drive back towards Kinnaur Valley through Spiti River. Visit Lingti Waterfall en route. Reach Powari, turn towards RecKong Peo and climb to Kalpa. Evening visit to local monastery if time permits.", altitude: "2,960 m", distance: "~190 km", stay: "Hotel, Kalpa", highlights: ["Lingti Waterfall", "Kinnaur Kailash Mountain Views", "Local Monastery Visit"] },
      { day: 6, title: "Kalpa to Chitkul", description: "Post breakfast, visit the famous Suicide Point. Drive to Chitkul — India's last village on the Indo-Tibetan border. Check in, village walk, monastery visit, and dinner at Hindustan Ka Akhri Dhaba. Overnight in Chitkul village.", altitude: "3,450 m", distance: "~80 km", stay: "Homestay, Chitkul/Rakcham/Sangla", highlights: ["Suicide Point Viewpoint", "Chitkul — India's Last Village", "Hindustan Ka Akhri Dhaba"] },
      { day: 7, title: "Departure via Shimla", description: "Morning visit to Baspa River. Begin return journey to Shimla. Board evening Volvo to Delhi. Overnight journey back with memories of a lifetime.", altitude: null, distance: "~360 km", stay: "Overnight Bus", highlights: ["Baspa River Morning Visit", "Evening Volvo to Delhi", "Return with Lifetime Memories"] }
    ]
  },
  {
    id: "spiti-summer-4n5d",
    slug: "spiti-summer-4n5d",
    title: "Spiti Valley Summer — 4N/5D (Manali Route)",
    subtitle: "Manali · Kunzum Pass · Chandratal Lake · Kaza",
    description: "A quick escape to the magical Spiti Valley during summer. Cross the high passes and camp by the crescent lake.",
    startingPrice: "₹11,999",
    price: 11999,
    duration: "5 Days · 4 Nights",
    difficulty: "Moderate",
    location: "Spiti Valley",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    highlights: ["Atal Tunnel", "Kunzum Pass", "Chandratal Lake", "Key Monastery"],
    included: [
      "Volvo transfer Delhi to Manali & back",
      "Manali to Manali in Tempo Traveller/SUV",
      "Accommodation: 1N Manali, 2N Kaza, 1N Chandratal",
      "8 meals (Dinner ×4, Breakfast ×4)",
      "Riding gear: Helmets, Elbow & Knee Guards"
    ],
    inclusions: [
      "Volvo transfer Delhi to Manali & back",
      "Manali to Manali in Tempo Traveller/SUV",
      "Accommodation: 1N Manali, 2N Kaza, 1N Chandratal",
      "8 meals (Dinner ×4, Breakfast ×4)",
      "Riding gear: Helmets, Elbow & Knee Guards",
      "Fuel & mechanical backup",
      "Bonfire & music",
      "24×7 onboard assistance",
      "Oxygen cylinder + medical kit",
      "Driver allowances, tolls, parking"
    ],
    exclusions: [
      "Alcoholic beverages",
      "Personal & medical expenses",
      "Anything not in inclusions",
      "Expenses due to landslides or roadblocks"
    ],
    itinerary: [
      { day: 0, title: "Delhi to Manali", description: "Depart Delhi at 7 PM. Board overnight Volvo to Manali.", altitude: null, distance: "~550 km", stay: "Overnight Bus", highlights: ["Depart 7 PM from Delhi", "Overnight Volvo Bus"] },
      { day: 1, title: "Reach Manali — Local Sightseeing", description: "Arrive Manali morning, check in and freshen up. Visit Hadimba Devi Temple and Manu Temple. Explore old Manali streets and hippie cafés. Overnight in Manali.", altitude: "2,050 m", distance: "Local", stay: "Hotel, Manali", highlights: ["Hadimba Devi Temple", "Manu Temple", "Old Manali Street Food & Cafés"] },
      { day: 2, title: "Manali to Kaza", description: "Early morning drive via Atal Tunnel (Rohtang). Cross Kunzum Pass — gateway to Spiti Valley. Scenic high-altitude desert landscapes all the way to Kaza. Dinner under a sky full of stars.", altitude: "3,800 m", distance: "~200 km", stay: "Hotel/Homestay, Kaza", highlights: ["Atal Tunnel — Rohtang", "Kunzum Pass Crossing", "Starlit Dinner in Spiti"] },
      { day: 3, title: "Kaza Sightseeing", description: "Full day Spiti excursion. Langza village, Komic — world's highest motorable village, Hikkim post office, Key Gompa Monastery. Return to Kaza for dinner.", altitude: "4,587 m (Komic)", distance: "~90 km round", stay: "Hotel/Homestay, Kaza", highlights: ["Langza Buddha Statue", "Komic Village — World's Highest", "Hikkim Post Office"] },
      { day: 4, title: "Kaza to Chandratal", description: "Post breakfast drive to the stunning crescent-shaped Chandratal Lake. En route visit Chi Cham Bridge (Asia's highest) and Key Gompa. Overnight camp under the Milky Way.", altitude: "4,300 m", distance: "~70 km", stay: "Camp, Chandratal", highlights: ["Chi Cham Bridge", "Chandratal Lake — Crescent Moon Lake", "Milky Way Camp Overnight"] },
      { day: 5, title: "Departure via Manali", description: "Post breakfast, drive back to Manali via Atal Tunnel. Leisure time at cafés. Board evening Volvo to Delhi. Reach Delhi next morning.", altitude: null, distance: "~230 km", stay: "Overnight Bus", highlights: ["Atal Tunnel Return", "Café Time in Manali", "Evening Volvo to Delhi"] }
    ]
  },
  {
    id: "winter-spiti-9d",
    slug: "winter-spiti-9d",
    title: "Winter Spiti — 8N/9D (Delhi to Delhi)",
    subtitle: "Sarahan · Chitkul · Nako · Kaza · Kalpa · Frozen Himalayas",
    description: "The ultimate winter expedition through the heart of the Himalayas. Witness the frozen magic of Spiti.",
    startingPrice: "₹17,999",
    price: 17999,
    duration: "9 Days · 8 Nights",
    difficulty: "Hard",
    location: "Kinnaur & Spiti",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2000&auto=format&fit=crop",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    highlights: ["Bhimkali Temple", "Chitkul Village", "Frozen Nako Lake", "Key Monastery"],
    included: [
      "Volvo transfer Delhi to Shimla & return",
      "Entire sightseeing in Tempo Traveller/SUV",
      "6 nights: 1N Rampur, 1N Chitkul, 1N Tabo/Nako, 2N Kaza, 1N Kalpa",
      "12 meals across the trip",
      "All inner line permits"
    ],
    inclusions: [
      "Volvo transfer Delhi to Shimla & return",
      "Entire sightseeing in Tempo Traveller/SUV",
      "6 nights: 1N Rampur, 1N Chitkul, 1N Tabo/Nako, 2N Kaza, 1N Kalpa",
      "12 meals across the trip",
      "All inner line permits",
      "Driver night charges, toll tax, parking",
      "Team Captain throughout",
      "Oxygen cylinder + snow chain 24×7"
    ],
    exclusions: [
      "Air/Train/Bus fare not mentioned",
      "Personal shopping",
      "Extra meals/snacks not mentioned",
      "Alcoholic or non-alcoholic drinks",
      "Expenses from natural calamities or breakdowns"
    ],
    itinerary: [
      { day: 1, title: "Delhi to Shimla", description: "Depart Delhi around 9:30 PM. Reach Shimla the next morning.", altitude: null, distance: "~370 km", stay: "Overnight Bus", highlights: ["Night departure from Delhi"] },
      { day: 2, title: "Sarahan", description: "Sarahan sits at 7,100 ft with the Shrikhand Mahadev Peak towering above and the Satluj flowing below. Visit the famous Bhimkali Temple. Overnight at Sarahan.", altitude: "2,165 m", distance: "~175 km", stay: "Hotel, Sarahan", highlights: ["Bhimkali Temple", "Shrikhand Mahadev Peak Views", "Scenic River Valley"] },
      { day: 3, title: "Chitkul — Stay in Sangla", description: "Drive to Chitkul, the last village on the old Indo-Tibetan trade route. Walk through orchards by the brilliant Baspa stream. Return to Sangla for overnight stay.", altitude: "3,450 m", distance: "~100 km", stay: "Homestay, Sangla", highlights: ["Chitkul — Indo-Tibetan Border Village", "Baspa River Walk", "Apple Orchard Trails"] },
      { day: 4, title: "Nako — The Frozen Lake", description: "Drive to Nako Village at 3,600m. Visit the sacred Nako Lake (frozen in winter) and the ancient Nako Monastery. Overnight at homestay.", altitude: "3,625 m", distance: "~130 km", stay: "Homestay, Nako", highlights: ["Nako Lake — Sacred Frozen Lake", "Nako Monastery", "Traditional Kinnauri Homestay"] },
      { day: 5, title: "Kaza — The Himalayan Town", description: "Drive to Kaza via Gue (500-year-old mummy) and Tabo Monastery (one of India's oldest). Visit Dhankar Monastery — 1000 years old. Overnight in Kaza.", altitude: "3,800 m", distance: "~160 km", stay: "Hotel/Homestay, Kaza", highlights: ["Gue Mummy — 500 Years Old", "Tabo Monastery", "Dhankar Monastery — 1000 Years Old"] },
      { day: 6, title: "Hamlets of Spiti — Komic, Hikkim, Langza", description: "Full day excursion: Key Monastery, Chi Cham Bridge, Hikkim (world's highest post office), Komic (4,600m — world's highest motorable village), Langza Buddha statue. Return Kaza.", altitude: "4,600 m (Komic)", distance: "~90 km round", stay: "Hotel/Homestay, Kaza", highlights: ["Key Monastery", "Chi Cham Bridge — Asia's Highest", "Hikkim Post Office — World's Highest", "Komic Village — 4600m"] },
      { day: 7, title: "Kaza to Kalpa", description: "Drive back to Kalpa via Spiti River, Roghi Cliff, and Roghi Village. Cross Khab Bridge. Overnight at Kalpa/Reckong Peo.", altitude: "2,960 m", distance: "~190 km", stay: "Hotel, Kalpa/Reckong Peo", highlights: ["Roghi Cliff Drive", "Khab Bridge — Spiti Gateway", "Kinnaur Kailash Night Views"] },
      { day: 8, title: "Kalpa to Shimla", description: "Post breakfast, drive to Shimla through Satluj riverside and Deodhar forests. Board AC Volvo bus to Delhi from Shimla Bus Stand.", altitude: null, distance: "~235 km", stay: "Overnight Bus", highlights: ["Deodhar Forest Drive", "Satluj Riverside Road", "Board Volvo to Delhi"] },
      { day: 9, title: "Reach Delhi", description: "Arrive Delhi around 7–8 AM with a lifetime of memories.", altitude: null, distance: null, stay: "Home", highlights: ["Arrive Delhi 7–8 AM", "Trip Ends with Memories"] }
    ]
  }
];
