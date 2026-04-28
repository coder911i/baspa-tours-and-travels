'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000',
  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000',
  'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=1000',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000',
  'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=1000',
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1000',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000',
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="accent-text text-gold text-2xl block mb-4">The Himalayas Captured</span>
          <h1 className="text-6xl md:text-8xl font-display text-snow mb-8">Visual Gallery</h1>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative cursor-pointer group overflow-hidden"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt="Mountain gallery"
                width={800}
                height={1200}
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="w-12 h-12 border border-white flex items-center justify-center text-white text-xl">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-20"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full h-full"
            >
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-0 right-0 text-snow text-4xl hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
