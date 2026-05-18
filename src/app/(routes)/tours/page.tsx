import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TourGrid from '@/components/sections/TourGrid';
import { tours } from '@/lib/data/tours';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expeditions | Baspa Travels',
  description: 'Discover our handcrafted luxury expeditions across the Himalayas. From Chitkul to Zanskar, experience the raw beauty of the high altitudes.',
};

export default function ToursPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=2000&auto=format&fit=crop"
            alt="All Expeditions"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <span className="accent-text text-gold text-xl block mb-4">The Complete Collection</span>
          <h1 className="text-5xl md:text-8xl font-display text-snow">All Expeditions</h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <TourGrid tours={tours} />
      </section>

      <Footer />
    </main>
  );
}

