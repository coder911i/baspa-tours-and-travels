'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="relative z-10 text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="accent-text text-gold text-lg md:text-xl mb-4"
      >
        Baspa Travels
      </motion.p>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="text-5xl md:text-8xl lg:text-[120px] font-display text-snow leading-[0.9] mb-8"
      >
        Where The Roads <br /> End, We Begin
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans tracking-wide"
      >
        Handcrafted journeys to the roof of India. Experience the Himalayas like never before.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <a href="/tours" className="btn-gold min-w-[200px]">
          Explore Tours ──→
        </a>
        <button className="btn-ghost group">
          <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all duration-300">
            ▶
          </span>
          <span className="uppercase tracking-widest text-sm font-medium">Watch Film</span>
        </button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-text-muted">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </div>
  );
}
