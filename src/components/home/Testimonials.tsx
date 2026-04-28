'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-background px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="accent-text text-gold text-xl block mb-4">Traveler Stories</span>
        <h2 className="text-4xl md:text-6xl font-display text-snow mb-20">Voices From The Mountains</h2>

        <div className="relative h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card max-w-2xl p-12 md:p-16 relative"
            >
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-gold p-1">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>

              <p className="text-xl md:text-2xl font-display text-snow italic leading-relaxed mb-10">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              <div>
                <h4 className="text-snow font-bold tracking-widest uppercase text-sm mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gold text-xs uppercase tracking-widest">
                  {testimonials[currentIndex].location} — {testimonials[currentIndex].tourName}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-0">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-snow hover:border-gold hover:text-gold transition-all"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-snow hover:border-gold hover:text-gold transition-all"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
