import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Himalayan Journal & Travel Blog | Baspa Tour Center Travels',
  description: 'Expert Spiti Valley guides, Chitkul visitor blueprints, motorcycle trip routes, and high-altitude packing advice. Written by local Himalayan explorers.',
  alternates: { canonical: 'https://www.baspatravels.com/blog' }
};

interface ArticleCard {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const ARTICLES: ArticleCard[] = [
  {
    slug: 'spiti-valley-complete-travel-guide',
    title: 'Spiti Valley Complete Travel Guide — Everything You Need to Know',
    excerpt: 'Complete Spiti Valley planning blueprint. Discover high-altitude permits, maps, itineraries, local stays, and safety instructions.',
    date: 'June 01, 2026',
    readTime: '8 min',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'chitkul-last-village-india',
    title: 'Chitkul — The Last Village of India: Complete Visitor\'s Guide',
    excerpt: 'Explore the scenic border village of Chitkul in the Baspa Valley. Uncover wooden bridges, historic temples, and Indo-Tibet highway views.',
    date: 'May 28, 2026',
    readTime: '6 min',
    category: 'Destination Spotlight',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'best-time-visit-spiti-valley',
    title: 'Best Time to Visit Spiti Valley — Month by Month Guide',
    excerpt: 'Compare Spiti in summer (May–October) vs. winter (December–March). Plan for weather changes, highway loops, and seasonal road blocks.',
    date: 'May 24, 2026',
    readTime: '5 min',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'spiti-valley-bike-trip-guide',
    title: 'Spiti Valley Bike Trip — Complete Route, Itinerary & Tips',
    excerpt: 'The ultimate Himalayan motorcycle blueprint. Explore the Manali Sissu bypass, Jispa loops, key pass crossings, and motorcycle checks.',
    date: 'May 18, 2026',
    readTime: '7 min',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1568909363592-166e5a6a6cc2?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'chandratal-lake-guide',
    title: 'Chandratal Lake — The Moon Lake of Spiti: Travel Guide',
    excerpt: 'Plan a high-altitude expedition to the crescent-shaped Moon Lake. Navigate altitude acclimation, overnight camping, and stargazing.',
    date: 'May 12, 2026',
    readTime: '5 min',
    category: 'Camp Guide',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'spiti-valley-winter-guide',
    title: 'Spiti Valley in Winter — A Guide to Snow-Covered Himalayas',
    excerpt: 'Conquer sub-zero terrain. Understand road access via the Shimla route, frozen waterfalls, snow leopard safaris, and winter stays.',
    date: 'May 06, 2026',
    readTime: '6 min',
    category: 'Winter Survival',
    image: 'https://images.unsplash.com/photo-1559827291-72ebf59d5f8b?auto=format&fit=crop&w=800&q=80'
  }
];

export default function BlogIndexPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Title */}
      <section className="relative h-[50vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#050508]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center space-y-4 max-w-4xl px-6">
          <span className="accent-text text-gold text-2xl block tracking-widest uppercase">Visual Journals</span>
          <h1 className="text-5xl md:text-8xl font-display text-snow" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Mountain Chronicles
          </h1>
          <p className="text-text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed italic">
            Handcrafted travel guides, local survival blueprints, and high-altitude narratives from our base in Chitkul.
          </p>
        </div>
      </section>

      {/* Article Listing Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ARTICLES.map((article, i) => (
            <div 
              key={i} 
              className="bg-[#141414] border border-[#2A2A2A] rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-gold hover:shadow-[0_0_20px_rgba(201,168,76,0.1)]"
            >
              <Link href={`/blog/${article.slug}`} className="block relative h-56 w-full overflow-hidden">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-gold text-charcoal text-[9px] font-bold uppercase tracking-wider rounded-md shadow-lg">
                    {article.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">
                    {article.date} • {article.readTime}
                  </span>
                  <h3 className="text-xl font-display text-snow font-bold leading-snug group-hover:text-gold transition-colors">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/5">
                  <Link 
                    href={`/blog/${article.slug}`} 
                    className="text-gold text-xs font-bold tracking-wider hover:text-gold-light transition-colors uppercase block"
                  >
                    Read Journal ──→
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
