import { Tour } from '@/types';

export const tours: Tour[] = [
  {
    id: "spiti-summer-circuit",
    slug: "spiti-summer-circuit",
    title: "The Great Spiti Summer Loop",
    subtitle: "The Great Himalayan Loop",
    duration: "6 Nights / 7 Days",
    location: "Spiti & Kinnaur",
    startingPrice: "₹21,500",
    price: 21500,
    altitude: "4,520m",
    image: "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85",
    difficulty: "Moderate",
    groupSize: "10-12 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "A comprehensive summer expedition through the heart of the Himalayas. Traverse from lush green valleys to stark high-altitude deserts. This flagship loop covers Chitkul, Tabo, Key Monastery, Chandratal Lake and the legendary Kunzum Pass.",
    highlights: ["Chitkul - India's Last Village", "Tabo Ancient Caves", "Key Monastery", "Pin Valley", "Chandratal Lake", "Kunzum Pass"],
    itinerary: [
      {
        day: 1, title: "Shimla to Sangla",
        description: "Drive 220km along the Satluj river. Arrive at the lush Sangla Valley. The journey follows the ancient Indo-Tibet highway through dramatic gorges.",
        images: [
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,600m", distance: "220 km", stay: "Sangla Homestay",
        highlights: ["Satluj River Gorge", "Sangla Valley Views"]
      },
      {
        day: 2, title: "Sangla to Chitkul to Kalpa",
        description: "Visit Chitkul, the last village before Tibet, then drive to Kalpa to witness the mighty Kinnaur Kailash peaks glowing at sunset.",
        images: [
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,960m", distance: "80 km", stay: "Kalpa Hotel",
        highlights: ["Chitkul", "Kinnaur Kailash", "Suicide Point"]
      },
      {
        day: 3, title: "Kalpa to Nako & Tabo",
        description: "Enter the rain shadow region. Visit Nako Lake, then drive to Tabo Monastery — the Ajanta of the Himalayas.",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,280m", distance: "150 km", stay: "Tabo Homestay",
        highlights: ["Nako Lake", "Khab Sangam", "Tabo Monastery"]
      },
      {
        day: 4, title: "Tabo to Dhankar & Pin Valley",
        description: "Explore the ancient Dhankar fort perched on a cliff. Enter the pristine Pin Valley National Park.",
        images: [
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,800m", distance: "90 km", stay: "Mud Village",
        highlights: ["Dhankar Monastery", "Mud Village"]
      },
      {
        day: 5, title: "Pin Valley to Kaza via Highest Villages",
        description: "Head to Kaza, then explore Key Monastery, Chicham Bridge (Asia's highest), and the post office at Hikkim.",
        images: [
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1698753935121-153a106616d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "4,400m", distance: "80 km", stay: "Kaza Homestay",
        highlights: ["Key Monastery", "Chicham Bridge", "Hikkim"]
      },
      {
        day: 6, title: "Kaza to Chandratal Lake",
        description: "Drive over the majestic Kunzum Pass to reach the mystical crescent-shaped Chandratal Lake. Camp under the clearest stars you have ever seen.",
        images: [
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "4,250m", distance: "110 km", stay: "Chandratal Camps",
        highlights: ["Kunzum Pass", "Chandratal"]
      },
      {
        day: 7, title: "Chandratal to Manali",
        description: "Descend to lush Manali via the engineering marvel of the Atal Tunnel. A celebratory dinner marks the end of the expedition.",
        images: [
          "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,050m", distance: "130 km", stay: "Manali",
        highlights: ["Atal Tunnel", "Manali"]
      }
    ],
    inclusions: ["Transport", "All Stays", "Breakfast & Dinner", "Oxygen Cylinders", "Permits"],
    exclusions: ["Lunch", "Entry Fees", "Personal Expenses"],
    routeStops: [
      { day: "Day 0", label: "Depart from Delhi", isStart: true },
      { day: "Day 1", label: "Shimla to Chitkul" },
      { day: "Day 2", label: "Chitkul to Kalpa" },
      { day: "Day 3", label: "Kalpa to Tabo via Nako" },
      { day: "Day 4", label: "Tabo to Kaza" },
      { day: "Day 5", label: "Kaza Sightseeing" },
      { day: "Day 6", label: "Kaza to Chandratal" },
      { day: "Day 7", label: "Chandratal to Manali", isEnd: true },
    ],
    routeWaypoints: [
      { name: "Delhi", isStart: true },
      { name: "Shimla" },
      { name: "Chitkul", highlight: true, note: "Last Village of India" },
      { name: "Kalpa", highlight: true, note: "Kinnaur Kailash views" },
      { name: "Nako" },
      { name: "Tabo", highlight: true, note: "Ancient Monastery" },
      { name: "Kaza", highlight: true, note: "Key Monastery & Hikkim" },
      { name: "Chandratal", highlight: true, note: "Crescent Moon Lake" },
      { name: "Manali", isEnd: true }
    ],
    sightseeing: [
      {
        destination: "Shimla",
        spots: ["The Ridge & Mall Road", "Jakhu Temple (8048 ft)", "Christ Church", "Kufri viewpoint"]
      },
      {
        destination: "Sangla Valley",
        spots: ["Sangla Meadows", "Kamru Fort & Kamru Nag Temple", "Bering Nag Temple", "Baspa River banks", "Apple & apricot orchards"]
      },
      {
        destination: "Chitkul",
        elevation: "3450m",
        spots: ["Mathi Temple", "Hindustan Ka Aakhri Dhaba", "ITBP Check Post", "Baspa River wooden bridge", "Last Village of India marker"]
      },
      {
        destination: "Kalpa",
        elevation: "2960m",
        spots: ["Kinnaur Kailash viewpoint (6050m peak)", "Suicide Point", "Roghi Village hanging bridge", "Hu-Bu-Lan-Kar Temple", "Narayan-Nagini Temple"]
      },
      {
        destination: "Nako",
        elevation: "3662m",
        spots: ["Nako Lake", "Nako Monastery (11th century)", "Khab Sangam — Sutlej + Spiti confluence", "Nako village walk"]
      },
      {
        destination: "Tabo",
        elevation: "3050m",
        spots: ["Tabo Monastery — Ajanta of Himalayas (996 AD)", "Ancient cave temples", "Tabo village mud houses", "Pin Valley National Park gate"]
      },
      {
        destination: "Kaza",
        elevation: "3800m",
        spots: ["Key Monastery (14th century, 4166m)", "Chicham Bridge — Asia's highest suspension bridge (4450m)", "Kibber Village", "Pin Valley National Park", "Kaza local market"]
      },
      {
        destination: "Langza",
        elevation: "4400m",
        spots: ["Langza Buddha Statue (15 ft)", "Marine fossil hunting", "Chau Chau Kang Nilda peak view"]
      },
      {
        destination: "Hikkim",
        elevation: "4400m",
        spots: ["World's Highest Post Office", "Hikkim village walk"]
      },
      {
        destination: "Chandratal",
        elevation: "4300m",
        spots: ["Chandratal Lake — crescent-shaped Moon Lake", "Sunrise & sunset photography", "Lakeside camping", "Baralacha La pass view"]
      }
    ]
  },
  {
    id: "spiti-bike-expedition",
    slug: "spiti-bike-expedition",
    title: "Spiti Bike Expedition",
    subtitle: "Ride the High Desert",
    duration: "8 Nights / 9 Days",
    location: "Himalayas",
    startingPrice: "₹35,000",
    altitude: "4,590m",
    price: 35000,
    image: "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&w=1200&q=85",
    difficulty: "Extreme",
    groupSize: "10-15 Riders",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "The ultimate Himalayan riding experience on Royal Enfields. Conquer the world's most treacherous and scenic roads through Kinnaur and Spiti. River crossings, high passes and frozen rivers await.",
    highlights: ["Royal Enfield Riding", "Off-roading in Spiti", "Kunzum Pass", "High Altitude Camps"],
    itinerary: [
      {
        day: 1, title: "Shimla to Sangla",
        description: "Start the epic ride along the Satluj river on your Royal Enfield. Navigate the dramatic gorge roads.",
        images: [
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,600m", distance: "220 km", stay: "Sangla Camps",
        highlights: ["Bike Allocation", "Satluj River Gorge"]
      },
      {
        day: 2, title: "Sangla to Chitkul to Kalpa",
        description: "Ride to the last Indian village before the Tibet border, then to Kalpa for stunning Kinnaur Kailash views.",
        images: [
          "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,960m", distance: "80 km", stay: "Kalpa",
        highlights: ["Chitkul", "Kinnaur Kailash"]
      },
      {
        day: 3, title: "Kalpa to Nako",
        description: "Experience the thrilling Ka Loops on your bike. Reach the serene Nako Lake high in the Hangrang valley.",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,625m", distance: "110 km", stay: "Nako",
        highlights: ["Ka Loops", "Nako Lake"]
      },
      {
        day: 4, title: "Nako to Kaza",
        description: "Long ride entering the core Spiti valley through arid desert terrain.",
        images: [
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1698753935121-153a106616d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,800m", distance: "110 km", stay: "Kaza",
        highlights: ["Spiti Desert", "Tabo"]
      },
      {
        day: 5, title: "Kaza Local Ride",
        description: "Ride to the highest villages in the world: Komic, Hikkim, Langza. Send a postcard from the world's highest post office.",
        images: [
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1698753935121-153a106616d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "4,520m", distance: "60 km", stay: "Kaza",
        highlights: ["World's Highest Post Office"]
      },
      {
        day: 6, title: "Kaza to Chandratal",
        description: "Off-roading to the magnificent Chandratal Lake across the high Kunzum Pass.",
        images: [
          "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "4,250m", distance: "110 km", stay: "Chandratal Camps",
        highlights: ["Kunzum Pass", "Off-road"]
      },
      {
        day: 7, title: "Chandratal to Manali",
        description: "Water crossings and treacherous terrain before reaching the green valley of Manali.",
        images: [
          "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,050m", distance: "130 km", stay: "Manali",
        highlights: ["Water Crossings", "Atal Tunnel"]
      },
      {
        day: 8, title: "Manali to Delhi",
        description: "Return journey back home. Rest and relive the memories.",
        images: [
          "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "216m", distance: "570 km", stay: "Home",
        highlights: ["Trip Wrap-up"]
      }
    ],
    inclusions: ["Royal Enfield 500cc/Himalayan", "Fuel", "Mechanic", "Backup Vehicle", "Stays & Meals"],
    exclusions: ["Security Deposit", "Personal Expenses", "Insurance"],
    routeStops: [
      { day: "Day 0", label: "Delhi / Manali", isStart: true },
      { day: "Day 1", label: "Manali to Jispa via Atal Tunnel" },
      { day: "Day 2", label: "Jispa to Chitkul" },
      { day: "Day 3", label: "Chitkul to Tabo via Nako" },
      { day: "Day 4", label: "Tabo to Kaza" },
      { day: "Day 5", label: "Kaza + Hikkim + Langza" },
      { day: "Day 6", label: "Kaza to Chandratal" },
      { day: "Day 7", label: "Chandratal to Manali", isEnd: true },
    ],
    routeWaypoints: [
      { name: "Manali", isStart: true },
      { name: "Rohtang" },
      { name: "Gramphoo" },
      { name: "Kaza", highlight: true, note: "Spiti Hub" },
      { name: "Komic", highlight: true, note: "Highest Village" },
      { name: "Kibber" },
      { name: "Manali", isEnd: true }
    ],
    sightseeing: [
      {
        destination: "Manali",
        spots: ["Hadimba Devi Temple", "Old Manali street walk", "Solang Valley snow point", "Mall Road & Tibetan market"]
      },
      {
        destination: "Atal Tunnel",
        spots: ["South Portal (3060m)", "North Portal — Sissu side (3071m)", "World's longest highway tunnel above 10,000 ft"]
      },
      {
        destination: "Jispa",
        elevation: "3200m",
        spots: ["Jispa Valley camp", "Bhaga River banks", "Keylong district views", "Lahaul Valley landscape"]
      },
      {
        destination: "Chitkul",
        elevation: "3450m",
        spots: ["Mathi Temple", "ITBP Check Post", "Baspa River wooden bridge", "Hindustan Ka Aakhri Dhaba", "Last Village of India marker"]
      },
      {
        destination: "Kunzum Pass",
        elevation: "4590m",
        spots: ["Kunzum Mata Temple", "360° panoramic mountain views", "Gateway to Spiti from Manali side"]
      },
      {
        destination: "Chandratal",
        elevation: "4300m",
        spots: ["Moon Lake crescent view", "High altitude camping", "Baralacha La pass views"]
      }
    ]
  },
  {
    id: "kinnaur-tibet-border",
    slug: "kinnaur-tibet-border",
    title: "Kinnaur Tibet Border",
    subtitle: "The Last Frontier",
    duration: "5 Nights / 6 Days",
    location: "Kinnaur Valley",
    startingPrice: "₹18,500",
    altitude: "3,450m",
    price: 18500,
    image: "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85",
    difficulty: "Moderate",
    groupSize: "8-12 Persons",
    weatherCoord: { lat: 31.5354, lon: 78.2612, label: "Kalpa, Kinnaur" },
    description: "Journey through the lush green valleys of Kinnaur, exploring the ancient Indo-Tibet roads, apple orchards, and border villages. This is the short, scenic Himalayan escape.",
    highlights: ["Indo-Tibet Highway", "Baspa Valley", "Kalpa Apple Orchards", "Kinnaur Kailash Peaks"],
    itinerary: [
      {
        day: 1, title: "Shimla to Narkanda/Sarahan",
        description: "Start towards Kinnaur on the old Hindustan-Tibet road. Visit the ancient Bhimakali Temple at Sarahan.",
        images: [
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,708m", distance: "160 km", stay: "Sarahan",
        highlights: ["Bhimakali Temple", "Pine Forests"]
      },
      {
        day: 2, title: "Sarahan to Sangla",
        description: "Drive into the breathtaking Baspa Valley, one of the most romantic valleys in the Himalayas.",
        images: [
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,600m", distance: "90 km", stay: "Sangla",
        highlights: ["Baspa River", "Kamru Fort"]
      },
      {
        day: 3, title: "Sangla to Chitkul",
        description: "A short drive to Chitkul, the last village on the Indo-Tibet border. Walk to the ITBP checkpost.",
        images: [
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,450m", distance: "40 km", stay: "Chitkul",
        highlights: ["Indo-Tibet Border", "Mathi Temple"]
      },
      {
        day: 4, title: "Chitkul to Kalpa",
        description: "Drive to Kalpa to witness the magnificent Kinnaur Kailash ranges glowing at sunrise.",
        images: [
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,960m", distance: "60 km", stay: "Kalpa",
        highlights: ["Apple Orchards", "Kinnaur Kailash"]
      },
      {
        day: 5, title: "Kalpa Local",
        description: "Visit Suicide point, Roghi village, and immerse in the local Kinnauri culture and handicrafts.",
        images: [
          "https://images.unsplash.com/photo-1698753935121-153a106616d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,960m", distance: "30 km", stay: "Kalpa",
        highlights: ["Suicide Point", "Roghi Village"]
      },
      {
        day: 6, title: "Kalpa to Shimla",
        description: "Return back with lasting memories of the Kinnaur valley.",
        images: [
          "https://images.unsplash.com/photo-1559827291-72ebf59d5f8b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,276m", distance: "220 km", stay: "Home",
        highlights: ["Return Journey"]
      }
    ],
    inclusions: ["Transport", "Stays", "Breakfast & Dinner", "Permits"],
    exclusions: ["Lunch", "Entry Fees", "Personal Expenses"],
    routeStops: [
      { day: "Day 0", label: "Delhi / Shimla", isStart: true },
      { day: "Day 1", label: "Shimla to Kalpa" },
      { day: "Day 2", label: "Kalpa to Sangla" },
      { day: "Day 3", label: "Sangla to Chitkul" },
      { day: "Day 4", label: "Chitkul to Delhi", isEnd: true },
    ],
    routeWaypoints: [
      { name: "Delhi", isStart: true },
      { name: "Shimla" },
      { name: "Kalpa", highlight: true, note: "Kinnaur Kailash View" },
      { name: "Sangla" },
      { name: "Chitkul", highlight: true, note: "Last Village of India" },
      { name: "Delhi", isEnd: true }
    ],
    sightseeing: [
      {
        destination: "Shimla",
        spots: ["The Ridge & Mall Road", "Jakhu Temple", "Christ Church", "Kufri day trip optional"]
      },
      {
        destination: "Kalpa",
        elevation: "2960m",
        spots: ["Kinnaur Kailash peak viewpoint (sunrise golden hour)", "Suicide Point", "Roghi Village hanging bridge", "Hu-Bu-Lan-Kar Temple", "Apple orchards (harvest season Sep–Oct)", "Kinnaur Gate"]
      },
      {
        destination: "Sangla Valley",
        elevation: "2680m",
        spots: ["Kamru Fort & Kamru Nag Temple", "Sangla Meadows", "Bering Nag Temple", "Baspa River views", "Kinnauri handicrafts market"]
      },
      {
        destination: "Chitkul",
        elevation: "3450m",
        spots: ["Mathi Temple", "ITBP Check Post & Indo-Tibet border landscape", "Baspa River wooden bridge", "Hindustan Ka Aakhri Dhaba", "Last Village of India marker", "Kinnaur Kailash backdrop"]
      },
      {
        destination: "Baspa Valley",
        spots: ["Baspa River valley walk", "Apple & apricot orchards", "Traditional Kinnauri slate-roofed villages", "Local homestay culture"]
      }
    ]
  },
  {
    id: "spiti-winter-expedition",
    slug: "spiti-winter-expedition",
    title: "Spiti Winter Expedition",
    subtitle: "The White Desert",
    duration: "7 Nights / 8 Days",
    location: "Kaza, Spiti Valley",
    startingPrice: "₹28,500",
    altitude: "4,520m",
    price: 28500,
    image: "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=1200&q=85",
    difficulty: "Challenging",
    groupSize: "8-10 Persons",
    weatherCoord: { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" },
    description: "Experience the raw, unfiltered beauty of Spiti Valley in its winter glory. A journey through sub-zero temperatures, frozen waterfalls, and snow-covered monasteries.",
    highlights: ["Snowy Chitkul", "Frozen Rivers", "Winter Monasteries", "Snow Leopard Territory"],
    itinerary: [
      {
        day: 1, title: "Shimla to Sangla",
        description: "Drive 240km to reach the winter wonderland of Sangla. The Satluj valley is dusted with fresh snow.",
        images: [
          "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,600m", distance: "240 km", stay: "Sangla Homestay",
        highlights: ["Winter Landscapes", "Satluj Gorge"]
      },
      {
        day: 2, title: "Sangla to Snowy Chitkul",
        description: "Witness Chitkul completely covered in snow. A magical sight that very few travelers ever see.",
        images: [
          "https://images.unsplash.com/photo-1716128033373-60b172383931?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,450m", distance: "40 km", stay: "Chitkul Homestay",
        highlights: ["Snowy Chitkul", "Baspa River Frozen"]
      },
      {
        day: 3, title: "Chitkul to Nako to Tabo",
        description: "Drive through frozen landscapes to Tabo. The roads are icy and dramatic in the winter light.",
        images: [
          "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,280m", distance: "150 km", stay: "Tabo Homestay",
        highlights: ["Frozen Nako Lake", "Tabo Winter"]
      },
      {
        day: 4, title: "Tabo to Dhankar to Kaza",
        description: "Explore the ancient Dhankar fort with snow all around, then reach Kaza.",
        images: [
          "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "3,800m", distance: "90 km", stay: "Kaza Homestay",
        highlights: ["Dhankar in Snow", "Kaza Town"]
      },
      {
        day: 5, title: "Kaza Winter Monasteries",
        description: "Visit the iconic Key Monastery surrounded by white snow. The most photogenic sight in the Himalayas.",
        images: [
          "https://images.unsplash.com/photo-1698753935121-153a106616d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "4,166m", distance: "40 km", stay: "Kaza Homestay",
        highlights: ["Key Monastery Snow", "Chicham Bridge"]
      },
      {
        day: 6, title: "Kaza to Kalpa",
        description: "Return journey begins through the same route as mountain passes are closed in winter.",
        images: [
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,960m", distance: "210 km", stay: "Kalpa",
        highlights: ["Winter Drive", "Kinnaur Kailash"]
      },
      {
        day: 7, title: "Kalpa to Shimla",
        description: "Final drive back to civilization with memories of frozen mountains.",
        images: [
          "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=1200&q=85"
        ],
        altitude: "2,276m", distance: "220 km", stay: "Home",
        highlights: ["Trip Wrap-up"]
      }
    ],
    inclusions: ["Transport 4x4", "Heated Stays", "Breakfast & Dinner", "Winter Gear Assistance"],
    exclusions: ["Lunch", "Entry Fees", "Personal Expenses"],
    routeStops: [
      { day: "Day 0", label: "Depart from Delhi", isStart: true },
      { day: "Day 1", label: "Delhi to Shimla" },
      { day: "Day 2", label: "Shimla to Chitkul" },
      { day: "Day 3", label: "Chitkul to Nako" },
      { day: "Day 4", label: "Nako to Tabo" },
      { day: "Day 5", label: "Tabo to Kaza" },
      { day: "Day 6", label: "Kaza Winter Sightseeing" },
      { day: "Day 7", label: "Kaza to Delhi via Shimla", isEnd: true },
    ],
    routeWaypoints: [
      { name: "Delhi", isStart: true },
      { name: "Shimla" },
      { name: "Chitkul", highlight: true, note: "Deep Snow & Frozen Valley" },
      { name: "Nako", highlight: true, note: "Frozen High Altitude Lake" },
      { name: "Tabo" },
      { name: "Kaza", highlight: true, note: "Snow Leopard Country" },
      { name: "Shimla" },
      { name: "Delhi", isEnd: true }
    ],
    sightseeing: [
      {
        destination: "Chitkul in Winter",
        elevation: "3450m",
        spots: ["Snow-blanketed last village", "Frozen Baspa River walk", "Mathi Temple in snow", "Winter ghost-town atmosphere", "White valley photography"]
      },
      {
        destination: "Nako in Winter",
        elevation: "3662m",
        spots: ["Frozen Nako Lake (walk on ice)", "Nako Monastery snow-capped", "Khab Sangam viewpoint", "Village life at -15°C"]
      },
      {
        destination: "Tabo in Winter",
        elevation: "3050m",
        spots: ["Tabo Monastery in snowfall", "Ancient cave temples", "Monks' winter prayer ceremonies", "Apple orchard under snow"]
      },
      {
        destination: "Kaza in Winter",
        elevation: "3800m",
        spots: ["Key Monastery snow-covered (most photogenic)", "Kibber Village in deep snow", "Chicham Bridge winter view", "Kaza market at -20°C", "Snow leopard sighting zone (Dec–Feb)"]
      },
      {
        destination: "Langza & Hikkim",
        elevation: "4400m",
        spots: ["Langza Buddha under snow — iconic photo", "Hikkim Post Office winter postcard", "Snow trekking on frozen trails"]
      },
      {
        destination: "Winter Special Activities",
        spots: ["Snow trekking", "Snow leopard safari (Pin Valley)", "Astrophotography (zero light pollution)", "Frozen river walk", "Winter camping experience"]
      }
    ]
  }
];
