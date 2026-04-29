import { Tour } from '../types';

export const tours: Tour[] = [
  {
    id: 'chitkul-valley-expedition',
    slug: 'chitkul-valley-expedition',
    title: 'Chitkul Valley Expedition',
    description: 'A premium journey to the last village of India. Experience the raw beauty of the Indo-Tibetan border.',
    price: 45000,
    duration: '7 Days',
    difficulty: 'Moderate',
    location: 'Kinnaur',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop',
    altitude: '3,450m',
    groupSize: '8-12',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Shimla',
        description: 'Orientation and preparation at the queen of hills. Local exploration and briefing.',
        altitude: '2,276m',
        stay: 'Premium Heritage Hotel'
      },
      {
        day: 2,
        title: 'Shimla to Sangla',
        description: 'A scenic drive through the Hindustan-Tibet road along the Sutlej river.',
        altitude: '2,680m',
        distance: '220km',
        stay: 'Luxury Riverside Camp'
      },
      {
        day: 3,
        title: 'Sangla & Kamru Fort',
        description: 'Explore the ancient Kamru Fort and the beautiful Sangla meadow. Acclimatization walk.',
        altitude: '2,680m',
        stay: 'Luxury Riverside Camp'
      },
      {
        day: 4,
        title: 'Sangla to Chitkul',
        description: 'Drive to the last village. Walk through the ITBP check post and the Baspa river banks.',
        altitude: '3,450m',
        distance: '24km',
        stay: 'Boutique Mountain Lodge'
      },
      {
        day: 5,
        title: 'Chitkul Exploration',
        description: 'Visit the local temple, explore the buckwheat fields, and hike towards the Nagasti ITBP post.',
        altitude: '3,450m',
        stay: 'Boutique Mountain Lodge'
      },
      {
        day: 6,
        title: 'Chitkul to Kalpa',
        description: 'Return journey with a stop at Kalpa to witness the sunset over Kinner Kailash.',
        altitude: '2,960m',
        distance: '65km',
        stay: 'Premium View Hotel'
      },
      {
        day: 7,
        title: 'Departure from Kalpa',
        description: 'Final breakfast with the giants. Transfer back to Shimla/Chandigarh.',
        altitude: '2,276m',
        distance: '240km',
        stay: 'None'
      }
    ]
  },
  {
    id: 'spiti-circuit',
    slug: 'spiti-circuit',
    title: 'The Great Spiti Circuit',
    description: 'Cross the high passes of Rohtang and Kunzum into the cold desert of Spiti.',
    price: 58000,
    duration: '10 Days',
    difficulty: 'High',
    location: 'Lahaul & Spiti',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop',
    altitude: '4,590m',
    groupSize: '6-10',
    itinerary: [
      { day: 1, title: 'Manali Arrival', description: 'Gearing up in Manali.', altitude: '2,050m', stay: 'Manali Boutique Stay' },
      { day: 2, title: 'Manali to Kaza', description: 'Crossing Rohtang and Kunzum.', altitude: '3,800m', distance: '180km', stay: 'Kaza Luxury Guest House' },
      { day: 3, title: 'Kaza Exploration', description: 'Visit Key Monastery and Hikkim.', altitude: '4,440m', stay: 'Kaza Luxury Guest House' },
      { day: 4, title: 'Komic & Langza', description: 'The fossil village and highest post office.', altitude: '4,587m', stay: 'Kaza Luxury Guest House' },
      { day: 5, title: 'Pin Valley Hike', description: 'Search for the Snow Leopard.', altitude: '3,700m', stay: 'Mud Village Homestay' },
      { day: 6, title: 'Dhankar Monastery', description: 'Cliff-hanging monastery exploration.', altitude: '3,894m', stay: 'Dhankar Homestay' },
      { day: 7, title: 'Tabo to Nako', description: 'The Ajanta of the Himalayas.', altitude: '3,662m', stay: 'Nako Lake View Camp' }
    ]
  },
  {
    id: 'kinnaur-apple-trail',
    slug: 'kinnaur-apple-trail',
    title: 'Kinnaur Apple Trail',
    description: 'A sensory journey through the blooming orchards of the Kinnaur valley.',
    price: 38000,
    duration: '6 Days',
    difficulty: 'Easy',
    location: 'Kinnaur',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
    altitude: '2,670m',
    groupSize: '10-15',
    itinerary: [
      { day: 1, title: 'Shimla Start', description: 'Meet at the Ridge.', altitude: '2,276m', stay: 'Hotel Willow Banks' },
      { day: 2, title: 'Sarahan', description: 'Visit Bhimakali Temple.', altitude: '2,313m', stay: 'HPTDC Srikhand' },
      { day: 3, title: 'Sangla', description: 'Riverside relaxation.', altitude: '2,680m', stay: 'Banjara Camp' },
      { day: 4, title: 'Batseri Village', description: 'Apple orchard tour.', altitude: '2,700m', stay: 'Banjara Camp' },
      { day: 5, title: 'Kalpa View', description: 'Kinner Kailash views.', altitude: '2,960m', stay: 'The Grand View' },
      { day: 6, title: 'Return', description: 'Back to Shimla.', altitude: '2,276m', stay: 'None' }
    ]
  },
  {
    id: 'pin-parvati-pass',
    slug: 'pin-parvati-pass',
    title: 'Pin Parvati Pass Trek',
    description: 'The ultimate challenge connecting Kullu to Spiti. For experienced trekkers only.',
    price: 75000,
    duration: '12 Days',
    difficulty: 'Extreme',
    location: 'Kullu/Spiti',
    image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=2000&auto=format&fit=crop',
    altitude: '5,319m',
    groupSize: '4-8',
    itinerary: [
      { day: 1, title: 'Kullu Base', description: 'Pre-trek briefing.', altitude: '1,200m', stay: 'Alpine Tents' },
      { day: 2, title: 'Kheerganga', description: 'Hot springs hike.', altitude: '2,960m', stay: 'Camps' },
      { day: 3, title: 'Tunda Bhuj', description: 'Alpine meadows.', altitude: '3,285m', stay: 'Camps' }
    ]
  },
  {
    id: 'kalpa-starlight-retreat',
    slug: 'kalpa-starlight-retreat',
    title: 'Kalpa Starlight Retreat',
    description: 'A soul-stirring retreat focused on astrophotography and meditation.',
    price: 32000,
    duration: '5 Days',
    difficulty: 'Easy',
    location: 'Kalpa',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2000&auto=format&fit=crop',
    altitude: '2,960m',
    groupSize: '6-10',
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Check-in with Kinner Kailash views.', altitude: '2,960m', stay: 'Luxury Villa' }
    ]
  },
  {
    id: 'zanskar-hidden-valley',
    slug: 'zanskar-hidden-valley',
    title: 'Zanskar Hidden Valley',
    description: 'Explore the most remote corners of the Zanskar range and its ancient gompas.',
    price: 82000,
    duration: '14 Days',
    difficulty: 'High',
    location: 'Zanskar',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop',
    altitude: '5,000m',
    groupSize: '6-8',
    itinerary: [
      { day: 1, title: 'Leh Arrival', description: 'Acclimatization in Leh.', altitude: '3,500m', stay: 'Leh Boutique Hotel' }
    ]
  },
  {
    id: 'rohtang-lahaul-loop',
    slug: 'rohtang-lahaul-loop',
    title: 'Rohtang & Lahaul Loop',
    description: 'Drive through the Atal Tunnel and Rohtang pass into the lush Lahaul valley.',
    price: 42000,
    duration: '6 Days',
    difficulty: 'Moderate',
    location: 'Lahaul',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop',
    altitude: '3,978m',
    groupSize: '8-12',
    itinerary: [
      { day: 1, title: 'Manali Start', description: 'Meet and greet.', altitude: '2,050m', stay: 'Manali Resort' }
    ]
  },
  {
    id: 'himalayan-photo-masterclass',
    slug: 'himalayan-photo-masterclass',
    title: 'Himalayan Photo Masterclass',
    description: 'Learn landscape photography from professionals in the most photogenic terrain.',
    price: 55000,
    duration: '8 Days',
    difficulty: 'Easy',
    location: 'Kinnaur/Spiti',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop',
    altitude: '3,800m',
    groupSize: '5-7',
    itinerary: [
      { day: 1, title: 'Shimla Meeting', description: 'Camera settings and basics.', altitude: '2,276m', stay: 'Heritage Stay' }
    ]
  },
  {
    id: 'sangla-cultural-immersion',
    slug: 'sangla-cultural-immersion',
    title: 'Sangla Cultural Immersion',
    description: 'Live with the locals, learn the Kinnauri language, and cook traditional meals.',
    price: 28000,
    duration: '5 Days',
    difficulty: 'Easy',
    location: 'Sangla',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop',
    altitude: '2,680m',
    groupSize: '4-8',
    itinerary: [
      { day: 1, title: 'Village Welcome', description: 'Traditional welcome ceremony.', altitude: '2,680m', stay: 'Local Homestay' }
    ]
  },
  {
    id: 'ancient-spiti-monasteries',
    slug: 'ancient-spiti-monasteries',
    title: 'Ancient Spiti Monasteries',
    description: 'A spiritual pilgrimage to Tabo, Key, and Dhankar monasteries.',
    price: 49000,
    duration: '8 Days',
    difficulty: 'Moderate',
    location: 'Spiti',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2000&auto=format&fit=crop',
    altitude: '3,800m',
    groupSize: '8-10',
    itinerary: [
      { day: 1, title: 'Kaza Reach', description: 'Starting the spiritual trail.', altitude: '3,800m', stay: 'Monastery Guest House' }
    ]
  }
];
