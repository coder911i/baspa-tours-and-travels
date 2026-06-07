'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroContent() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <span className="accent-text text-gold text-xl md:text-2xl block mb-6 tracking-[0.3em] uppercase">
          Himachal Pradesh
        </span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-snow mb-8 leading-[0.9] tracking-tighter">
          Spiti. Kinnaur. Chitkul. <br />
          <span className="text-gold italic">Asal Himachal.</span>
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Delhi se niklo. Manali cross karo. Spiti ke upar pohoncho. Baspa Tours har mod pe saath hai.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/tours" className="btn-gold-filled group overflow-hidden relative">
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
        </div>
      </motion.div>

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
