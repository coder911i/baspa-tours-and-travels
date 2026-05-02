import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "chitkul",
    title: "Chitkul",
    slug: "chitkul",
    name: "Chitkul",
    elevation: "3450m",
    tagline: "The Last Village of India",
    description: "Chitkul is the last inhabited village on the Indo-Tibetan border. Known for its pristine beauty, unique architecture, and the crystal clear Baspa river, it offers a slice of paradise far removed from the modern world.",
    bestTimeToVisit: "May to October",
    howToReach: "Drive from Shimla via Sangla (approx. 240km)",
    attractions: [
      { name: "Baspa River", description: "The lifeline of the valley with crystal clear water." },
      { name: "Mathi Temple", description: "A 500-year-old temple dedicated to the local deity." },
      { name: "ITBP Check Post", description: "The gateway to the border region." }
    ],
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "kaza",
    title: "Kaza",
    slug: "kaza",
    name: "Kaza",
    elevation: "3800m",
    tagline: "Heart of Spiti Valley",
    description: "The administrative capital of Spiti, Kaza is a bustling town in a high-altitude cold desert. It serves as a base for exploring the surrounding high-altitude villages and monasteries.",
    bestTimeToVisit: "June to September",
    howToReach: "Via Manali or Shimla",
    attractions: [
      { name: "Key Monastery", description: "Iconic Buddhist monastery." },
      { name: "Kibber Village", description: "One of the highest villages in the world." }
    ],
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "kalpa",
    title: "Kalpa",
    slug: "kalpa",
    name: "Kalpa",
    elevation: "2960m",
    tagline: "Where Kinner Kailash Watches",
    description: "Offering the best views of the Kinner Kailash range, Kalpa is famous for its apple orchards and traditional wood-carved temples.",
    bestTimeToVisit: "April to October",
    howToReach: "Drive from Shimla (225km)",
    attractions: [
      { name: "Suicide Point", description: "A thrilling viewpoint with vertical drops." },
      { name: "Roghi Village", description: "A traditional village with ancient charm." }
    ],
    image: "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "sangla",
    title: "Sangla",
    slug: "sangla",
    name: "Sangla",
    elevation: "2680m",
    tagline: "The Valley of Gods",
    description: "A fertile valley known for its saffron, apples, and the Kamru Fort.",
    bestTimeToVisit: "April to November",
    howToReach: "Drive from Shimla (210km)",
    attractions: [
      { name: "Kamru Fort", description: "An ancient wooden fortress." },
      { name: "Bering Nag Temple", description: "A sacred temple in the heart of Sangla." }
    ],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "nako",
    title: "Nako",
    slug: "nako",
    name: "Nako",
    elevation: "3662m",
    tagline: "The Lake at the Edge of the World",
    description: "A small village centered around a sacred lake, offering a surreal desert landscape.",
    bestTimeToVisit: "June to October",
    howToReach: "On the route between Kinnaur and Spiti",
    attractions: [
      { name: "Nako Lake", description: "A high altitude lake reflecting the sky." },
      { name: "Nako Monastery", description: "Ancient Buddhist monastery with beautiful murals." }
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "tabo",
    title: "Tabo",
    slug: "tabo",
    name: "Tabo",
    elevation: "3050m",
    tagline: "The Ajanta of the Himalayas",
    description: "Home to the oldest continuously functioning Buddhist monastery in India.",
    bestTimeToVisit: "May to September",
    howToReach: "Near the border of Kinnaur and Spiti",
    attractions: [
      { name: "Tabo Monastery", description: "Famous for its ancient wall paintings." },
      { name: "Meditation Caves", description: "Caves used by monks for centuries." }
    ],
    image: "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "kibber",
    title: "Kibber",
    slug: "kibber",
    name: "Kibber",
    elevation: "4200m",
    tagline: "Highest Village with Road",
    description: "A high-altitude village known for its unique wildlife and proximity to Key Monastery.",
    bestTimeToVisit: "June to September",
    howToReach: "Short drive from Kaza",
    attractions: [
      { name: "Kibber Wildlife Sanctuary", description: "Home to the elusive snow leopard." },
      { name: "Chicham Bridge", description: "Highest bridge in Asia." }
    ],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  },
  {
    id: "langza",
    title: "Langza",
    slug: "langza",
    name: "Langza",
    elevation: "4400m",
    tagline: "Fossil Valley",
    description: "Famous for the giant Buddha statue and the abundance of marine fossils found in its fields.",
    bestTimeToVisit: "June to September",
    howToReach: "Drive from Kaza",
    attractions: [
      { name: "Buddha Statue", description: "A golden statue overlooking the valley." },
      { name: "Fossil Hunting", description: "Search for ancient marine fossils in the mountains." }
    ],
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000&auto=format&fit=crop",
    gallery: []
  }
];
