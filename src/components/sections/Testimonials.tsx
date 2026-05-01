'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused || !testimonials?.length) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="py-32 bg-background px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="accent-text text-gold text-xl block mb-4">Traveler Stories</span>
        <h2 className="text-4xl md:text-6xl font-display text-snow mb-20">Voices From The Mountains</h2>

        <div 
          className="relative min-h-[500px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card max-w-2xl p-12 md:p-16 relative w-full"
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-charcoal font-bold text-xl mb-8 shadow-xl"
                  style={{ backgroundColor: current.color }}
                >
                  {current.initials}
                </div>

                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(current.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-display text-snow italic leading-relaxed mb-10">
                  &quot;{current.text}&quot;
                </p>

                <div>
                  <h4 className="text-snow font-bold tracking-widest uppercase text-sm mb-1">
                    {current.name}
                  </h4>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em]">
                    {current.location} — {current.tour}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-0 pointer-events-none">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-snow hover:border-gold hover:text-gold transition-all pointer-events-auto bg-background/50 backdrop-blur-sm"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 flex items-center justify-center text-snow hover:border-gold hover:text-gold transition-all pointer-events-auto bg-background/50 backdrop-blur-sm"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
