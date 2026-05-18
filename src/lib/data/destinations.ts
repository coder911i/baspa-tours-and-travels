import { Destination } from "@/types";

const getImg = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const destinations: Destination[] = [
  {
    id: "chitkul",
    title: "Chitkul",
    slug: "chitkul",
    name: "Chitkul",
    elevation: "3,450m",
    tagline: "The Last Village of India",
    description: "Chitkul is the highest inhabited village near the old border. Known for its pristine beauty, unique architecture, and the crystal clear Baspa river, it offers a slice of paradise far removed from the modern world.",
    bestTimeToVisit: "May to October",
    howToReach: "Drive from Shimla via Sangla (approx. 240km)",
    attractions: [
      { name: "Baspa River", description: "The lifeline of the valley with crystal clear water." },
      { name: "Mathi Temple", description: "A 500-year-old temple dedicated to the local deity." },
      { name: "ITBP Check Post", description: "The gateway to the border region." }
    ],
    image: getImg('1558618666-fcd25c85cd64'),
    gallery: []
  },
  {
    id: "kaza",
    title: "Kaza",
    slug: "kaza",
    name: "Kaza",
    elevation: "3,800m",
    tagline: "Heart of Spiti Valley",
    description: "The administrative capital of Spiti, Kaza is a bustling town in a high-altitude cold desert. It serves as a base for exploring the surrounding high-altitude villages and monasteries.",
    bestTimeToVisit: "June to September",
    howToReach: "Via Manali or Shimla",
    attractions: [
      { name: "Key Monastery", description: "Iconic Buddhist monastery." },
      { name: "Kibber Village", description: "One of the highest villages in the world." }
    ],
    image: getImg('1561731216-c3a4d99437d5'),
    gallery: []
  },
  {
    id: "kalpa",
    title: "Kalpa",
    slug: "kalpa",
    name: "Kalpa",
    elevation: "2,960m",
    tagline: "Where Kinner Kailash Watches",
    description: "Offering the best views of the Kinner Kailash range, Kalpa is famous for its apple orchards and traditional wood-carved temples.",
    bestTimeToVisit: "April to October",
    howToReach: "Drive from Shimla (225km)",
    attractions: [
      { name: "Suicide Point", description: "A thrilling viewpoint with vertical drops." },
      { name: "Roghi Village", description: "A traditional village with ancient charm." }
    ],
    image: getImg('1626622173428-8b87c19b2092'),
    gallery: []
  },
  {
    id: "sangla",
    title: "Sangla",
    slug: "sangla",
    name: "Sangla",
    elevation: "2,680m",
    tagline: "The Valley of Gods",
    description: "A fertile valley known for its saffron, apples, and the Kamru Fort.",
    bestTimeToVisit: "April to November",
    howToReach: "Drive from Shimla (210km)",
    attractions: [
      { name: "Kamru Fort", description: "An ancient wooden fortress." },
      { name: "Bering Nag Temple", description: "A sacred temple in the heart of Sangla." }
    ],
    image: getImg('1626621195611-8b87c19ac7a8'),
    gallery: []
  },
  {
    id: "nako",
    title: "Nako",
    slug: "nako",
    name: "Nako",
    elevation: "3,625m",
    tagline: "The Lake at the Edge of the World",
    description: "A small village centered around a sacred lake, offering a surreal desert landscape.",
    bestTimeToVisit: "June to October",
    howToReach: "On the route between Kinnaur and Spiti",
    attractions: [
      { name: "Nako Lake", description: "A high altitude lake reflecting the sky." },
      { name: "Nako Monastery", description: "Ancient Buddhist monastery with beautiful murals." }
    ],
    image: getImg('1506905925346-21bda4d32df7'),
    gallery: []
  },
  {
    id: "tabo",
    title: "Tabo",
    slug: "tabo",
    name: "Tabo",
    elevation: "3,050m",
    tagline: "The Ajanta of the Himalayas",
    description: "Home to the oldest continuously functioning Buddhist monastery in India.",
    bestTimeToVisit: "May to September",
    howToReach: "Near the border of Kinnaur and Spiti",
    attractions: [
      { name: "Tabo Monastery", description: "Famous for its ancient wall paintings." },
      { name: "Meditation Caves", description: "Caves used by monks for centuries." }
    ],
    image: getImg('1605000797499-3a8f1d84000e'),
    gallery: []
  },
  {
    id: "kibber",
    title: "Kibber",
    slug: "kibber",
    name: "Kibber",
    elevation: "4,270m",
    tagline: "Highest Village with Road",
    description: "A high-altitude village known for its unique wildlife and proximity to Key Monastery.",
    bestTimeToVisit: "June to September",
    howToReach: "Short drive from Kaza",
    attractions: [
      { name: "Kibber Wildlife Sanctuary", description: "Home to the elusive snow leopard." },
      { name: "Chicham Bridge", description: "Highest bridge in Asia." }
    ],
    image: getImg('1617211844038-eb9ac2efbbf1'),
    gallery: []
  },
  {
    id: "langza",
    title: "Langza",
    slug: "langza",
    name: "Langza",
    elevation: "4,400m",
    tagline: "Fossil Valley",
    description: "Famous for the giant Buddha statue and the abundance of marine fossils found in its fields.",
    bestTimeToVisit: "June to September",
    howToReach: "Drive from Kaza",
    attractions: [
      { name: "Buddha Statue", description: "A golden statue overlooking the valley." },
      { name: "Fossil Hunting", description: "Search for ancient marine fossils in the mountains." }
    ],
    image: getImg('1605368661787-2df38fc2ab65'),
    gallery: []
  }
];
