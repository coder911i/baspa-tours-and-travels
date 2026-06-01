import { RouteStop } from '@/components/RouteMap';

export interface SightseeingSpot {
  name: string;
  isWinterOnly?: boolean;
}

export interface DestinationSightseeing {
  name: string;
  elevation?: string;
  spots: SightseeingSpot[];
}

export interface TourSightseeingData {
  stops: RouteStop[];
  destinations: DestinationSightseeing[];
}

export const TOUR_SIGHTSEEING_RECORDS: Record<string, TourSightseeingData> = {
  "spiti-summer-circuit": {
    stops: [
      { day: "Day 0", label: "Depart from Delhi", isStart: true },
      { day: "Day 1", label: "Shimla to Chitkul" },
      { day: "Day 2", label: "Chitkul to Kalpa" },
      { day: "Day 3", label: "Kalpa to Tabo via Nako" },
      { day: "Day 4", label: "Tabo to Kaza" },
      { day: "Day 5", label: "Kaza Local Sightseeing" },
      { day: "Day 6", label: "Kaza to Chandratal to Sissu" },
      { day: "Day 7", label: "Sissu to Manali", isEnd: true },
    ],
    destinations: [
      {
        name: "Shimla",
        spots: [
          { name: "The Ridge & Mall Road" },
          { name: "Jakhu Temple (Hanuman idol, 8048 ft)" },
          { name: "Christ Church" },
          { name: "Kufri day trip optional" }
        ]
      },
      {
        name: "Sangla Valley",
        spots: [
          { name: "Sangla Meadows" },
          { name: "Kamru Fort & Kamru Nag Temple" },
          { name: "Bering Nag Temple" },
          { name: "Apple & apricot orchards" },
          { name: "Baspa River banks" }
        ]
      },
      {
        name: "Chitkul",
        elevation: "3450m",
        spots: [
          { name: "Mathi Temple (ancient Kinner Kailash deity)" },
          { name: "Hindustan Ka Aakhri Dhaba (last food stall)" },
          { name: "ITBP Check Post (Indo-Tibet border)" },
          { name: "Baspa River & wooden bridge" },
          { name: "Last village of India board" }
        ]
      },
      {
        name: "Kalpa",
        elevation: "2960m",
        spots: [
          { name: "Kinnaur Kailash peak viewpoint (6050m)" },
          { name: "Suicide Point (cliff viewpoint)" },
          { name: "Roghi Village hanging bridge" },
          { name: "Hu-Bu-Lan-Kar Temple" },
          { name: "Narayan-Nagini Temple" }
        ]
      },
      {
        name: "Nako",
        elevation: "3662m",
        spots: [
          { name: "Nako Lake (turquoise in summer)" },
          { name: "Nako Monastery (11th century)" },
          { name: "Nako Village walk" },
          { name: "Khab Sangam viewpoint (Sutlej + Spiti meet)" }
        ]
      },
      {
        name: "Tabo",
        elevation: "3050m",
        spots: [
          { name: "Tabo Monastery — 'Ajanta of Himalayas' (996 AD)" },
          { name: "Ancient cave temples & monk quarters" },
          { name: "Tabo village mud houses" },
          { name: "Pin Valley National Park entry" }
        ]
      },
      {
        name: "Dhankar",
        elevation: "3890m",
        spots: [
          { name: "Dhankar Monastery (perched on cliff)" },
          { name: "Dhankar Lake trek (1.5 hrs)" },
          { name: "Dhankar Fort ruins" },
          { name: "Spiti-Pin confluence viewpoint" }
        ]
      },
      {
        name: "Kaza",
        elevation: "3800m",
        spots: [
          { name: "Key Monastery (14th century, 4166m)" },
          { name: "Chicham Bridge (Asia's highest suspension bridge, 4450m)" },
          { name: "Kibber Village (one of world's highest motorable villages)" },
          { name: "Pin Valley National Park" },
          { name: "Kaza market & local cafes" }
        ]
      },
      {
        name: "Langza",
        elevation: "4400m",
        spots: [
          { name: "Giant Buddha Statue (Langza Buddha, 15 ft)" },
          { name: "Fossil hunting (marine fossils at 4400m)" },
          { name: "Chau Chau Kang Nilda peak view" }
        ]
      },
      {
        name: "Hikkim",
        elevation: "4400m",
        spots: [
          { name: "World's Highest Post Office (send a postcard!)" },
          { name: "Hikkim village walk" }
        ]
      },
      {
        name: "Komic",
        elevation: "4520m",
        spots: [
          { name: "Komic Monastery (world's highest motorable monastery)" },
          { name: "Komic Village (highest permanently inhabited village)" }
        ]
      },
      {
        name: "Chandratal",
        elevation: "4300m",
        spots: [
          { name: "Chandratal Lake — 'Moon Lake' crescent shaped" },
          { name: "Sunrise & sunset photography" },
          { name: "Camping by the lake" },
          { name: "Baralacha La pass view" }
        ]
      },
      {
        name: "Sissu / Lahaul",
        spots: [
          { name: "Sissu Waterfall" },
          { name: "Sissu Lake" },
          { name: "Gyephang Peak view" },
          { name: "Atal Tunnel (South Portal, world's longest highway tunnel at 10,000 ft)" }
        ]
      }
    ]
  },
  "spiti-bike-expedition": {
    stops: [
      { day: "Day 0", label: "Depart from Delhi / Manali", isStart: true },
      { day: "Day 1", label: "Manali to Jispa", isEnd: false },
      { day: "Day 2", label: "Jispa to Chitkul", isEnd: false },
      { day: "Day 3", label: "Chitkul to Tabo via Nako", isEnd: false },
      { day: "Day 4", label: "Tabo to Kaza", isEnd: false },
      { day: "Day 5", label: "Kaza Sightseeing", isEnd: false },
      { day: "Day 6", label: "Kaza to Chandratal", isEnd: false },
      { day: "Day 7", label: "Chandratal to Manali", isEnd: true },
    ],
    destinations: [
      {
        name: "Manali",
        spots: [
          { name: "Hadimba Devi Temple (ancient wood temple)" },
          { name: "Old Manali street walk" },
          { name: "Solang Valley (snow point)" },
          { name: "Rohtang Pass view (if open)" },
          { name: "Mall Road & Tibetan market" }
        ]
      },
      {
        name: "Atal Tunnel",
        spots: [
          { name: "South Portal entry (Solang side, 3060m)" },
          { name: "North Portal exit (Sissu, Lahaul side, 3071m)" },
          { name: "World's longest highway tunnel above 10,000 ft" },
          { name: "Rohtang bypass (year-round access)" }
        ]
      },
      {
        name: "Jispa",
        elevation: "3200m",
        spots: [
          { name: "Jispa Valley camp" },
          { name: "Keylong district headquarters" },
          { name: "Trilokinath Temple (60km detour optional)" },
          { name: "Lahaul Valley views" },
          { name: "Bhaga River banks" }
        ]
      },
      {
        name: "Chitkul",
        elevation: "3450m",
        spots: [
          { name: "Mathi Temple (ancient Kinner Kailash deity)" },
          { name: "Hindustan Ka Aakhri Dhaba (last food stall)" },
          { name: "ITBP Check Post (Indo-Tibet border)" },
          { name: "Baspa River & wooden bridge" },
          { name: "Last village of India board" }
        ]
      },
      {
        name: "Khab Sangam",
        elevation: "2440m",
        spots: [
          { name: "Confluence of Sutlej & Spiti rivers" },
          { name: "India-China border area landscape" },
          { name: "Khab Bridge (one of the highest bridges)" }
        ]
      },
      {
        name: "Nako",
        elevation: "3662m",
        spots: [
          { name: "Nako Lake (turquoise in summer)" },
          { name: "Nako Monastery (11th century)" },
          { name: "Nako Village walk" },
          { name: "Khab Sangam viewpoint" }
        ]
      },
      {
        name: "Tabo",
        elevation: "3050m",
        spots: [
          { name: "Tabo Monastery — 'Ajanta of Himalayas' (996 AD)" },
          { name: "Ancient cave temples & monk quarters" },
          { name: "Tabo village mud houses" },
          { name: "Pin Valley National Park entry" }
        ]
      },
      {
        name: "Kaza",
        elevation: "3800m",
        spots: [
          { name: "Key Monastery (14th century, 4166m)" },
          { name: "Chicham Bridge (Asia's highest suspension bridge, 4450m)" },
          { name: "Kibber Village (one of world's highest motorable villages)" },
          { name: "Pin Valley National Park" },
          { name: "Kaza market & local cafes" }
        ]
      },
      {
        name: "Langza",
        elevation: "4400m",
        spots: [
          { name: "Giant Buddha Statue (Langza Buddha, 15 ft)" },
          { name: "Fossil hunting (marine fossils at 4400m)" },
          { name: "Chau Chau Kang Nilda peak view" }
        ]
      },
      {
        name: "Hikkim",
        elevation: "4400m",
        spots: [
          { name: "World's Highest Post Office (send a postcard!)" },
          { name: "Hikkim village walk" }
        ]
      },
      {
        name: "Komic",
        elevation: "4520m",
        spots: [
          { name: "Komic Monastery (world's highest motorable monastery)" },
          { name: "Komic Village (highest permanently inhabited village)" }
        ]
      },
      {
        name: "Chandratal",
        elevation: "4300m",
        spots: [
          { name: "Chandratal Lake — 'Moon Lake' crescent shaped" },
          { name: "Sunrise & sunset photography" },
          { name: "Camping by the lake" },
          { name: "Baralacha La pass view" }
        ]
      },
      {
        name: "Kunzum Pass",
        elevation: "4590m",
        spots: [
          { name: "Kunzum Mata Temple (blessings before entering Spiti)" },
          { name: "360° panoramic mountain views" },
          { name: "Entry point to Spiti from Manali side" }
        ]
      }
    ]
  },
  "kinnaur-tibet-border": {
    stops: [
      { day: "Day 0", label: "Depart from Delhi / Shimla", isStart: true },
      { day: "Day 1", label: "Shimla to Kalpa", isEnd: false },
      { day: "Day 2", label: "Kalpa to Sangla", isEnd: false },
      { day: "Day 3", label: "Sangla to Chitkul", isEnd: false },
      { day: "Day 4", label: "Chitkul → Delhi", isEnd: true },
    ],
    destinations: [
      {
        name: "Shimla",
        spots: [
          { name: "The Ridge & Mall Road" },
          { name: "Jakhu Temple (Hanuman idol, 8048 ft)" },
          { name: "Christ Church" },
          { name: "Kufri day trip optional" }
        ]
      },
      {
        name: "Kalpa",
        elevation: "2960m",
        spots: [
          { name: "Kinnaur Kailash peak viewpoint (sunrise golden hour)" },
          { name: "Suicide Point (Rekong Peo side)" },
          { name: "Roghi Village & hanging bridge" },
          { name: "Hu-Bu-Lan-Kar Temple" },
          { name: "Narayan-Nagini Temple" },
          { name: "Apple orchards (Sep–Oct harvest season)" },
          { name: "Kinnaur Gate" }
        ]
      },
      {
        name: "Sangla Valley",
        elevation: "2680m",
        spots: [
          { name: "Kamru Fort & Kamru Nag Temple" },
          { name: "Sangla Meadows (perfect camping ground)" },
          { name: "Bering Nag Temple" },
          { name: "Baspa River white water views" },
          { name: "Local Kinnauri culture & handicrafts market" }
        ]
      },
      {
        name: "Chitkul",
        elevation: "3450m",
        spots: [
          { name: "Mathi Temple" },
          { name: "ITBP Check Post & Indo-Tibet border landscape" },
          { name: "Baspa River wooden bridge & riverside walk" },
          { name: "Hindustan Ka Aakhri Dhaba" },
          { name: "Last Village of India board & marker" },
          { name: "Snow-capped Kinnaur Kailash backdrop" }
        ]
      },
      {
        name: "Baspa Valley",
        spots: [
          { name: "Baspa River valley walk" },
          { name: "Apple & apricot orchards lining the road" },
          { name: "Traditional Kinnauri slate-roofed villages" },
          { name: "Local homestay culture" }
        ]
      }
    ]
  },
  "spiti-winter-expedition": {
    stops: [
      { day: "Day 0", label: "Depart from Delhi", isStart: true },
      { day: "Day 1", label: "Delhi to Shimla overnight", isEnd: false },
      { day: "Day 2", label: "Shimla to Chitkul (snow)", isEnd: false },
      { day: "Day 3", label: "Chitkul to Nako", isEnd: false },
      { day: "Day 4", label: "Nako to Tabo", isEnd: false },
      { day: "Day 5", label: "Tabo to Kaza", isEnd: false },
      { day: "Day 6", label: "Kaza Winter Sightseeing", isEnd: false },
      { day: "Day 7", label: "Kaza to Shimla to Delhi", isEnd: true },
    ],
    destinations: [
      {
        name: "Chitkul in Winter",
        elevation: "3450m",
        spots: [
          { name: "Snow-blanketed last village landscape" },
          { name: "Frozen Baspa River (walk on ice optional)" },
          { name: "Mathi Temple in snow" },
          { name: "Ghost-town winter atmosphere" },
          { name: "Photography — pristine white valley" }
        ]
      },
      {
        name: "Nako in Winter",
        elevation: "3662m",
        spots: [
          { name: "Frozen Nako Lake (walk on frozen lake)", isWinterOnly: true },
          { name: "Nako Monastery snow-capped" },
          { name: "Khab Sangam viewpoint" },
          { name: "Village life in extreme winter" }
        ]
      },
      {
        name: "Tabo in Winter",
        elevation: "3050m",
        spots: [
          { name: "Tabo Monastery in snowfall (magical atmosphere)", isWinterOnly: true },
          { name: "Ancient cave temples" },
          { name: "Monks' winter prayer ceremonies" },
          { name: "Tabo apple orchard under snow" }
        ]
      },
      {
        name: "Kaza in Winter",
        elevation: "3800m",
        spots: [
          { name: "Key Monastery snow-covered (most photogenic in winter)", isWinterOnly: true },
          { name: "Kibber Village in snow (road may be blocked, jeep needed)" },
          { name: "Chicham Bridge in winter" },
          { name: "Kaza market — local life at -20°C" },
          { name: "Snow leopard sighting zone (Dec–Feb, Pin Valley)", isWinterOnly: true }
        ]
      },
      {
        name: "Langza & Hikkim in Winter",
        elevation: "4400m",
        spots: [
          { name: "Langza Buddha under snow — iconic photo", isWinterOnly: true },
          { name: "Hikkim Post Office — send world's highest altitude winter postcard", isWinterOnly: true },
          { name: "Snow trekking on frozen trails" }
        ]
      },
      {
        name: "Komic in Winter",
        elevation: "4520m",
        spots: [
          { name: "Komic Monastery — highest motorable in deep snow" },
          { name: "World's highest village in winter isolation" }
        ]
      },
      {
        name: "Special Winter Activities",
        spots: [
          { name: "Snow trekking", isWinterOnly: true },
          { name: "Snow leopard safari (Pin Valley)", isWinterOnly: true },
          { name: "Astrophotography (zero light pollution, -15°C sky)", isWinterOnly: true },
          { name: "Frozen river walk", isWinterOnly: true },
          { name: "Winter camping experience", isWinterOnly: true }
        ]
      }
    ]
  }
};
