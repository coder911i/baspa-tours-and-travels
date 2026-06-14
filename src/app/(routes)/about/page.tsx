import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Story | Baspa Travels',
  description: 'Learn about our 15-year journey leading premium Himalayan expeditions in Kinnaur and Spiti Valley.',
};

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
            alt="Our Story"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <span className="accent-text text-gold text-xl block mb-4">Dedicated to the Peaks</span>
          <h1 className="text-5xl md:text-8xl font-display text-snow">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-display text-snow">15 Years of Himalayan Expeditions</h2>
            <p className="text-text-muted leading-relaxed text-lg">
              Baspa Travels was born from a deep love for the high altitudes and the silent beauty of the Kinnaur and Spiti valleys. Founded by local mountain experts, we aim to bridge the gap between luxury travel and raw, authentic Himalayan experiences.
            </p>
            <p className="text-text-muted leading-relaxed">
              Our team consists of certified guides, local historians, and professional photographers who know every curve of the Baspa river and every peak of the Kinner Kailash. We don&apos;t just provide tours; we provide transformations.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-display text-gold mb-2">{SITE_CONFIG.STATS[0].value}{SITE_CONFIG.STATS[0].suffix}</p>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">{SITE_CONFIG.STATS[0].label} Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display text-gold mb-2">{SITE_CONFIG.STATS[1].value}{SITE_CONFIG.STATS[1].suffix}</p>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">{SITE_CONFIG.STATS[1].label} Handled</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=2000&auto=format&fit=crop"
              alt="Team in mountains"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Team */}
        <div className="mb-32">
          <h2 className="text-center text-4xl font-display text-snow mb-20">Meet the Founder</h2>
          <div className="flex justify-center">
            <div className="text-center group max-w-sm">
              <div className="relative aspect-[3/4] w-72 mb-6 overflow-hidden bg-charcoal mx-auto">
                 <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-2xl font-display text-snow mb-1 group-hover:text-gold transition-colors">Rajbir Negi</h4>
              <p className="text-gold text-xs uppercase tracking-widest font-bold mb-3">Founder</p>
              <p className="text-text-muted text-sm px-4">Local mountain expert with 15+ years of leading premium expeditions in Kinnaur and Spiti Valley.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
