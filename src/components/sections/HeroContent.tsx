'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useReviews } from '@/hooks/useReviews';

const TAGLINES = [
  "Best Budget Trips",
  "Premium Accommodation",
  "Best in Himachal",
  "Local Chitkul Guides"
];

export default function HeroContent() {
  const [index, setIndex] = useState(0);
  const { reviewUrl, trackReviewClick } = useReviews();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl"
      >
        {/* Top Accent Title */}
        <span 
          className="text-gold text-2xl md:text-4xl block mb-6 tracking-wide font-medium italic"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Chale Himachal, Himachal Chale!
        </span>

        {/* Main Brand Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-snow mb-4 leading-[0.9] tracking-tighter uppercase font-extrabold">
          Baspa Travels
        </h1>

        {/* Animated Rotating Tagline */}
        <div className="h-[60px] md:h-[90px] overflow-hidden flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {TAGLINES[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Subtext description */}
        <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed">
          Delhi se niklo. Manali cross karo. Spiti ke upar pohoncho. Baspa Tours har mod pe saath hai.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/book" className="btn-gold-filled group overflow-hidden relative">
            <span className="relative z-10">Book Karo</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link 
            href="/tours"
            className="group flex items-center gap-4 text-snow font-bold uppercase tracking-widest text-xs hover:text-gold transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
              <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            Routes Dekho
          </Link>
          <a 
            href={reviewUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={trackReviewClick}
            className="px-8 py-4 border border-white/10 hover:border-gold hover:text-gold text-snow font-bold uppercase tracking-widest text-xs transition-all"
          >
            ⭐ Write a Review
          </a>
        </div>
      </motion.div>

      {/* Down arrow decorator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </div>
  );
}
