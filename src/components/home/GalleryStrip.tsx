'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Gallery3DCarousel = dynamic(() => import('@/components/3d/Gallery3DCarousel'), { ssr: false });

export default function GalleryStrip() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <span className="accent-text text-gold text-xl block mb-4">Visual Odyssey</span>
        <h2 className="text-4xl md:text-6xl font-display text-snow mb-8">Capturing the High Altitudes</h2>
        <p className="text-text-muted max-w-2xl mx-auto italic">
          A glimpse into the raw, unfiltered beauty of the Himalayas. Every frame a story, every peak a memory.
        </p>
      </div>
      
      <Gallery3DCarousel />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {/* Supporting static grid for SEO and mobile fallback */}
        {[
          'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600',
          'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600',
          'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
          'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=600',
        ].map((img, i) => (
          <div key={i} className="aspect-[4/5] bg-surface overflow-hidden group relative">
            <Image 
              src={img} 
              alt="Himalayan landscape"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
