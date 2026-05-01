'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000',
  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000',
  'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=1000',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=1000',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000',
  'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000',
  'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000',
  'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000',
];

export default function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') setSelectedImage((prev) => (prev! + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="accent-text text-gold text-xl block mb-4">Visual Journals</span>
          <h1 className="text-5xl md:text-8xl font-display text-snow">Captured Moments</h1>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedImage(i)}
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/5"
            >
              <Image
                src={img}
                alt={`Himalayan Moment ${i + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-10 right-10 flex gap-8 z-10">
               <span className="text-snow/50 font-display text-xl">{selectedImage + 1} / {images.length}</span>
               <button className="text-snow hover:text-gold transition-colors text-xl font-display">CLOSE</button>
            </div>
            
            <button 
              className="absolute left-10 text-snow hover:text-gold transition-all text-4xl hidden md:block"
              onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev! - 1 + images.length) % images.length); }}
            >
              ←
            </button>
            <button 
              className="absolute right-10 text-snow hover:text-gold transition-all text-4xl hidden md:block"
              onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => (prev! + 1) % images.length); }}
            >
              →
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage]}
                alt="Selected Himalayan Moment"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
