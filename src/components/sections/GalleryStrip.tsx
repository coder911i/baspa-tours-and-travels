'use client';

import React from 'react';
import Image from 'next/image';

export default function GalleryStrip() {
  const images = [
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600',
    'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600',
    'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=600',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600',
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=600',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600',
    'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=600',
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <span className="accent-text text-gold text-xl block mb-4">Visual Odyssey</span>
        <h2 className="text-4xl md:text-6xl font-display text-snow mb-8">Capturing the High Altitudes</h2>
        <p className="text-text-muted max-w-2xl mx-auto italic">
          A glimpse into the raw, unfiltered beauty of the Himalayas. Every frame a story, every peak a memory.
        </p>
      </div>
      
      {/* Horizontal scrolling strip instead of 3D carousel */}
      <div className="relative overflow-hidden py-8">
        <div className="flex gap-6 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused] w-max">
          {[...images, ...images].map((img, i) => (
            <div 
              key={i} 
              className="w-[300px] h-[200px] flex-shrink-0 overflow-hidden rounded-xl border border-white/5 group relative"
            >
              <Image 
                src={img} 
                alt={`Himalayan landscape ${(i % images.length) + 1}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {images.slice(0, 4).map((img, i) => (
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
