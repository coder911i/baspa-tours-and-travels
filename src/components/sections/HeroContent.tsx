'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function HeroContent() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
          Ascend to <br />
          <span className="text-gold italic">Pure Serenity</span>
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Bespoke expeditions to the last villages of India. Experience the raw majesty of the Himalayas with curated luxury and expert guidance.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/tours" className="btn-gold-filled group overflow-hidden relative">
            <span className="relative z-10">Explore Expeditions</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="group flex items-center gap-4 text-snow font-bold uppercase tracking-widest text-xs hover:text-gold transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1" />
            </div>
            Watch Film
          </button>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-10 right-10 text-snow hover:text-gold transition-colors text-xl font-display"
            >
              CLOSE
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl aspect-video bg-black shadow-2xl relative"
            >
              <iframe
                src={`https://www.youtube.com/embed/${SITE_CONFIG.VIDEO_ID}?autoplay=1`}
                title="Baspa Travels Film"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-text-muted">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </div>
  );
}
