import { Tour } from '@/types';

export const tours: Tour[] = [
  {
    id: "spiti-summer-loop",
    slug: "spiti-summer-loop",
    title: "Spiti Summer Expedition",
    subtitle: "The Great Himalayan Loop",
    duration: "8 Nights / 9 Days",
    location: "Kinnaur & Spiti Valley",
    startingPrice: "₹28,500",
    price: 28500,
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Moderate",
    groupSize: "10-12 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "Our flagship summer journey through the most dramatic landscapes of the trans-Himalayas. From the lush Baspa valley to the high-altitude desert of Spiti, experience a world where time stands still.",
    highlights: ["India's Last Village Chitkul", "Ancient Tabo Monastery", "World's Highest Post Office", "Chandratal Lake Camping"],
    itinerary: [
      { 
        day: 1, 
        title: "Delhi to Shimla", 
        description: "The transition from the sweltering plains to the cool Shivalik foothills. As the sun sets, watch the city lights of Shimla appear like stars on the mountain slope.", 
        images: [
          "https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "2,276m", 
        distance: "340 km", 
        stay: "Shimla Hotel", 
        highlights: ["Shivalik Foothills", "Pine Forests", "Shimla Night View"] 
      },
      { 
        day: 2, 
        title: "Shimla to Chitkul", 
        description: "Traverse the legendary Indo-Tibet road. Enter the Baspa Valley and reach Chitkul, the last inhabited village on the old trade route. The Baspa river flows clear and cold beside the village.", 
        images: [
          "https://images.unsplash.com/photo-1626621195611-8b87c19ac7a8?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1626622173428-8b87c19b2092?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "3,450m", 
        distance: "240 km", 
        stay: "Chitkul Homestay", 
        highlights: ["Kinnaur Gate", "Baspa River", "Mathi Temple", "Last Village of India"] 
      },
      { 
        day: 3, 
        title: "Chitkul to Kalpa", 
        description: "Wake up to the sound of the Baspa river. After a morning walk, drive to Kalpa. Behold the majestic Kinnaur Kailash range, its peaks changing colors with the moving sun.", 
        images: [
          "https://images.unsplash.com/photo-1626622173428-8b87c19b2092?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "2,960m", 
        distance: "60 km", 
        stay: "Kalpa Hotel", 
        highlights: ["Kinnaur Kailash View", "Suicide Point", "Roghi Village", "Apple Orchards"] 
      },
      { 
        day: 4, 
        title: "Kalpa to Nako & Tabo", 
        description: "Witness the Khab Sangam (Spiti-Sutlej confluence). Navigate the thrilling Ka Loops to reach Nako Lake. Continue to Tabo, the 'Ajanta of the Himalayas', housing a 1000-year-old monastery.", 
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1605000797499-3a8f1d84000e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1617211997091-6d9d45c72a17?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "3,625m", 
        distance: "160 km", 
        stay: "Tabo Homestay", 
        highlights: ["Khab Sangam", "Ka Loops", "Nako Lake", "Tabo Monastery"] 
      },
      { 
        day: 5, 
        title: "Tabo to Dhankar & Pin Valley", 
        description: "Explore the cliffside Dhankar Monastery. Descend into the lush green Pin Valley National Park. Visit Mud Village, the last point of civilization in this wild territory.", 
        images: [
          "https://images.unsplash.com/photo-1617211997091-6d9d45c72a17?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1626621390638-a6f4b28e1c4a?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "3,894m", 
        distance: "80 km", 
        stay: "Mud Village Homestay", 
        highlights: ["Dhankar Monastery", "Pin Valley", "Mud Village", "Wildlife Spotting"] 
      },
      { 
        day: 6, 
        title: "Pin Valley to Kaza & Key", 
        description: "Head to Kaza, the heart of Spiti. Visit the iconic Key Monastery, perched on a hill like a fortress. Cross the Chicham Bridge, one of the highest in Asia.", 
        images: [
          "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1571425046095-96a44e7b9a2c?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1631901711578-8e0f3db2c72e?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "4,166m", 
        distance: "60 km", 
        stay: "Kaza Hotel", 
        highlights: ["Key Monastery", "Chicham Bridge", "Kibber Village"] 
      },
      { 
        day: 7, 
        title: "Kaza to Highest Villages", 
        description: "Visit Langza, known for its giant Buddha statue and fossils. Send a postcard from Hikkim, the world's highest post office. End at Komic, the world's highest motorable village.", 
        images: [
          "https://images.unsplash.com/photo-1631901711578-8e0f3db2c72e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1626621195811-c24d4f5cbea3?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1605368661787-2df38fc2ab65?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "4,520m", 
        distance: "50 km", 
        stay: "Kaza Hotel", 
        highlights: ["Langza Buddha", "Hikkim Post Office", "Komic Village"] 
      },
      { 
        day: 8, 
        title: "Kaza to Chandratal Lake", 
        description: "Drive over the majestic Kunzum Pass to reach the mystical Moon Lake - Chandratal. Camp under the clearest stars you've ever seen, reflected in the turquoise waters.", 
        images: [
          "https://images.unsplash.com/photo-1544239649-43282a7f2f71?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "4,300m", 
        distance: "100 km", 
        stay: "Luxury Tents", 
        highlights: ["Kunzum Pass", "Chandratal Lake", "Stargazing"] 
      },
      { 
        day: 9, 
        title: "Chandratal to Manali", 
        description: "Cross the Rohtang Pass or the Atal Tunnel to descend into the lush green Manali valley. A final celebratory dinner before heading back to the plains.", 
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"
        ], 
        altitude: "2,050m", 
        distance: "140 km", 
        stay: "Manali Hotel", 
        highlights: ["Rohtang Pass", "Atal Tunnel", "Old Manali Cafes"] 
      }
    ],
    inclusions: ["All 4x4 Transport", "Stay in Luxury Camps & Homestays", "All Meals", "Oxygen Support", "Inner Line Permits"],
    exclusions: ["Airfare", "Personal Expenses", "Tips", "Insurance"]
  },
  {
    id: "spiti-bike-expedition",
    slug: "spiti-bike-expedition",
    title: "Spiti Bike Expedition",
    subtitle: "Ride the High Desert",
    duration: "10 Nights / 11 Days",
    location: "Manali to Spiti Circuit",
    startingPrice: "₹42,000",
    price: 42000,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    difficulty: "High",
    groupSize: "8-10 Riders",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "The ultimate test for any rider. Thousands of feet of elevation, river crossings, and some of the world's most dangerous roads. This is the ride of a lifetime.",
    highlights: ["Royal Enfield Himalayan", "Kunzum Pass Ascent", "River Crossings", "Highest Roads in the World"],
    itinerary: [
      { 
        day: 1, 
        title: "Arrive in Manali", 
        description: "Bike briefing and test rides around Old Manali. Familiarize yourself with your Royal Enfield and the mountain terrain.", 
        images: ["https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,050m", 
        distance: "Local", 
        stay: "Manali Hotel", 
        highlights: ["Bike Allotment", "Test Ride", "Old Manali Cafes"] 
      },
      { 
        day: 2, 
        title: "Manali to Jibhi", 
        description: "Ride through the lush Tirthan Valley to Jibhi. A gentle start to build confidence on mountain curves.", 
        images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "1,600m", 
        distance: "100 km", 
        stay: "Jibhi Homestay", 
        highlights: ["Tirthan Valley", "Jibhi Waterfall"] 
      },
      { 
        day: 3, 
        title: "Jibhi to Sangla", 
        description: "Cross the Jalori Pass and descend into the Satluj valley. Ride along the river towards the Baspa valley.", 
        images: ["https://images.unsplash.com/photo-1626621195611-8b87c19ac7a8?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,680m", 
        distance: "180 km", 
        stay: "Sangla Camp", 
        highlights: ["Jalori Pass", "Satluj River Ride"] 
      },
      { 
        day: 4, 
        title: "Sangla to Chitkul & Kalpa", 
        description: "Ride to the last village Chitkul and then back to Kalpa for the best views of Kinnaur Kailash.", 
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "3,450m", 
        distance: "120 km", 
        stay: "Kalpa Hotel", 
        highlights: ["Chitkul Ride", "Kinnaur Kailash View"] 
      },
      { 
        day: 5, 
        title: "Kalpa to Nako", 
        description: "Enter the rain shadow region. The roads get rugged and the landscape turns brown and barren.", 
        images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "3,625m", 
        distance: "100 km", 
        stay: "Nako Homestay", 
        highlights: ["Ka Loops", "Nako Lake"] 
      },
      { 
        day: 6, 
        title: "Nako to Kaza", 
        description: "Visit Tabo and Dhankar monasteries before reaching the administrative capital of Spiti.", 
        images: ["https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "3,800m", 
        distance: "110 km", 
        stay: "Kaza Hotel", 
        highlights: ["Tabo Monastery", "Dhankar Monastery"] 
      },
      { 
        day: 7, 
        title: "Kaza: Local Exploration", 
        description: "Ride to Key, Kibber, Chicham, Langza, and Komic. The highest motorable roads in the world.", 
        images: ["https://images.unsplash.com/photo-1571425046095-96a44e7b9a2c?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "4,520m", 
        distance: "80 km", 
        stay: "Kaza Hotel", 
        highlights: ["Key Monastery", "Chicham Bridge", "Komic Village"] 
      },
      { 
        day: 8, 
        title: "Kaza to Chandratal", 
        description: "The most challenging day. Cross Kunzum Pass and ride through multiple river crossings to reach Moon Lake.", 
        images: ["https://images.unsplash.com/photo-1544239649-43282a7f2f71?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "4,300m", 
        distance: "100 km", 
        stay: "Chandratal Camp", 
        highlights: ["Kunzum Pass", "River Crossings", "Chandratal Lake"] 
      },
      { 
        day: 9, 
        title: "Chandratal to Manali", 
        description: "Ride back to Manali via the Rohtang Pass or Atal Tunnel. A celebratory farewell dinner.", 
        images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,050m", 
        distance: "140 km", 
        stay: "Manali Hotel", 
        highlights: ["Rohtang Pass Ride", "Manali Finish"] 
      },
      { 
        day: 10, 
        title: "Departure", 
        description: "Check-out and head back home with memories of the most epic ride of your life.", 
        images: ["https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "N/A", 
        distance: "N/A", 
        stay: "Home", 
        highlights: ["Trip Memories"] 
      }
    ],
    inclusions: ["Royal Enfield Himalayan", "Fuel & Maintenance", "Backup Vehicle", "Mechanic & Guide", "Stays & Meals"],
    exclusions: ["Personal Gear", "Damage Costs", "Alcohol", "Tips"]
  },
  {
    id: "kinnaur-tibet-border",
    slug: "kinnaur-tibet-border",
    title: "Kinnaur Tibet Border Expedition",
    subtitle: "The Last Frontier",
    duration: "6 Nights / 7 Days",
    location: "Indo-Tibet Border Road",
    startingPrice: "₹22,500",
    price: 22500,
    image: "https://images.unsplash.com/photo-1626621195611-8b87c19ac7a8?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Moderate",
    groupSize: "6-8 Persons",
    weatherCoord: { lat: 31.4194, lon: 78.2449, label: "Sangla, Kinnaur" },
    description: "Explore the ancient trade routes that connected India and Tibet. Visit forbidden valleys, last villages, and the deep gorges of the Satluj river.",
    highlights: ["Chitkul - Last Village", "Sangla Valley", "Kalpa Apple Orchards", "Indo-Tibet Road"],
    itinerary: [
      { 
        day: 1, 
        title: "Delhi to Shimla", 
        description: "Overnight journey to the Queen of Hills.", 
        images: ["https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,276m", 
        distance: "340 km", 
        stay: "Shimla Hotel", 
        highlights: ["Night Drive"] 
      },
      { 
        day: 2, 
        title: "Shimla to Sangla", 
        description: "Drive along the Satluj river. Enter the fertile Sangla valley.", 
        images: ["https://images.unsplash.com/photo-1626621195611-8b87c19ac7a8?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,680m", 
        distance: "210 km", 
        stay: "Sangla Homestay", 
        highlights: ["Satluj Gorge", "Sangla Valley"] 
      },
      { 
        day: 3, 
        title: "Sangla & Chitkul", 
        description: "Spend the day in Chitkul, the last village on the border. Walk to the ITBP checkpost.", 
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "3,450m", 
        distance: "40 km", 
        stay: "Chitkul Homestay", 
        highlights: ["Baspa River", "Last Dhaba of India"] 
      },
      { 
        day: 4, 
        title: "Chitkul to Kalpa", 
        description: "Drive to Kalpa for the legendary Kinnaur Kailash views.", 
        images: ["https://images.unsplash.com/photo-1626622173428-8b87c19b2092?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,960m", 
        distance: "60 km", 
        stay: "Kalpa Hotel", 
        highlights: ["Kinnaur Kailash", "Suicide Point"] 
      },
      { 
        day: 5, 
        title: "Kalpa Local Exploration", 
        description: "Visit Roghi village and the ancient temples of Kalpa.", 
        images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,960m", 
        distance: "Local", 
        stay: "Kalpa Hotel", 
        highlights: ["Roghi Village", "Apple Orchards"] 
      },
      { 
        day: 6, 
        title: "Kalpa to Shimla", 
        description: "Return drive through the Kinnaur valley.", 
        images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,276m", 
        distance: "220 km", 
        stay: "Shimla Hotel", 
        highlights: ["Kinnaur Valley Farewell"] 
      },
      { 
        day: 7, 
        title: "Shimla to Delhi", 
        description: "End of the expedition. Return to the capital.", 
        images: ["https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "216m", 
        distance: "340 km", 
        stay: "Home", 
        highlights: ["Trip Memories"] 
      }
    ],
    inclusions: ["4x4 Transport", "Homestays & Hotels", "Breakfast & Dinner", "Guide", "Permits"],
    exclusions: ["Lunch", "Personal Expenses", "Tips", "Insurance"]
  },
  {
    id: "spiti-winter-expedition",
    slug: "spiti-winter-expedition",
    title: "Spiti Winter Expedition",
    subtitle: "The White Desert",
    duration: "7 Nights / 8 Days",
    location: "Spiti in Snow",
    startingPrice: "₹26,500",
    price: 26500,
    image: "https://images.unsplash.com/photo-1559827291-72ebf59d5f8b?auto=format&fit=crop&w=1200&q=80",
    difficulty: "Extreme",
    groupSize: "6-8 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "Experience the raw, sub-zero beauty of Spiti in winter. Frozen waterfalls, snow-covered monasteries, and the chance to spot the elusive snow leopard.",
    highlights: ["Frozen Spiti River", "Snow-covered Key Monastery", "Snow Leopard Territory", "Sub-zero Camping"],
    itinerary: [
      { 
        day: 1, 
        title: "Delhi to Shimla", 
        description: "Overnight Volvo to Shimla. Prepare for the cold.", 
        images: ["https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,276m", 
        distance: "340 km", 
        stay: "Shimla Hotel", 
        highlights: ["Volvo Journey"] 
      },
      { 
        day: 2, 
        title: "Shimla to Sangla", 
        description: "Drive through the snow-dusted Kinnaur valley.", 
        images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,680m", 
        distance: "210 km", 
        stay: "Sangla Homestay", 
        highlights: ["Snowy Satluj"] 
      },
      { 
        day: 3, 
        title: "Sangla to Chitkul & Kalpa", 
        description: "Chitkul in winter is a white paradise. Return to Kalpa for a cold night under the stars.", 
        images: ["https://images.unsplash.com/photo-1559827291-72ebf59d5f8b?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "3,450m", 
        distance: "100 km", 
        stay: "Kalpa Hotel", 
        highlights: ["Frozen Baspa", "White Chitkul"] 
      },
      { 
        day: 4, 
        title: "Kalpa to Nako", 
        description: "The road gets dangerous with black ice. Reach the frozen Nako Lake.", 
        images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "3,625m", 
        distance: "100 km", 
        stay: "Nako Homestay", 
        highlights: ["Frozen Nako Lake"] 
      },
      { 
        day: 5, 
        title: "Nako to Kaza", 
        description: "Enter the heart of the winter desert. Tabo and Dhankar in snow.", 
        images: ["https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "3,800m", 
        distance: "110 km", 
        stay: "Kaza Homestay", 
        highlights: ["Snowy Monasteries"] 
      },
      { 
        day: 6, 
        title: "Kaza: Key & Highest Villages", 
        description: "Visit Key Monastery and the world's highest post office, all buried in snow.", 
        images: ["https://images.unsplash.com/photo-1571425046095-96a44e7b9a2c?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "4,520m", 
        distance: "60 km", 
        stay: "Kaza Homestay", 
        highlights: ["Key Monastery in Snow", "White Hikkim"] 
      },
      { 
        day: 7, 
        title: "Kaza to Kalpa", 
        description: "Long return drive through the frozen landscape.", 
        images: ["https://images.unsplash.com/photo-1626766790743-2f1baa5ac93f?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "2,960m", 
        distance: "210 km", 
        stay: "Kalpa Hotel", 
        highlights: ["Winter Road"] 
      },
      { 
        day: 8, 
        title: "Kalpa to Shimla & Delhi", 
        description: "Final descent to the plains. End of the winter odyssey.", 
        images: ["https://images.unsplash.com/photo-1587474012512-a8e1cf1c31e2?auto=format&fit=crop&w=1200&q=80"], 
        altitude: "216m", 
        distance: "560 km", 
        stay: "Home", 
        highlights: ["Trip Memories"] 
      }
    ],
    inclusions: ["4x4 Winter Spec Vehicle", "Heated Stays", "Warm Meals", "Expert Winter Guide", "Permits"],
    exclusions: ["Winter Gear Rental", "Personal Expenses", "Tips", "Insurance"]
  }
];
