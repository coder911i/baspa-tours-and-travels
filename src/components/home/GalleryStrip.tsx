'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000&auto=format&fit=crop',
];

export default function GalleryStrip() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="accent-text text-gold text-xl block mb-4">Visual Narratives</span>
          <h2 className="text-4xl md:text-6xl font-display text-snow">Through Our Lens</h2>
        </div>
        <a href="/gallery" className="btn-gold">View Full Gallery →</a>
      </div>

      <div className="space-y-8">
        <motion.div style={{ x: x1 }} className="flex gap-8 px-4">
          {galleryImages.slice(0, 4).map((img, i) => (
            <div key={i} className="relative w-[300px] md:w-[500px] h-[300px] md:h-[400px] shrink-0 overflow-hidden group">
              <Image
                src={img}
                alt="Mountain landscape"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-8 px-4 justify-end">
          {galleryImages.slice(2, 6).map((img, i) => (
            <div key={i} className="relative w-[300px] md:w-[500px] h-[300px] md:h-[400px] shrink-0 overflow-hidden group">
              <Image
                src={img}
                alt="Mountain landscape"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
