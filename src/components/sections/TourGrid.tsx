'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TourCard from '@/components/ui/TourCard';
import { Tour } from '@/types';
import gsap from 'gsap';

interface TourGridProps {
  tours: Tour[];
}

const CATEGORIES = ['All', 'Moderate', 'High', 'Extreme'];

export default function TourGrid({ tours }: TourGridProps) {
  const [filter, setFilter] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredTours = useMemo(() => {
    if (filter === 'All') return tours;
    return tours.filter(t => t.difficulty === filter);
  }, [tours, filter]);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', overwrite: true }
      );
    }
  }, [filter]);

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 border ${
              filter === cat 
                ? 'bg-gold border-gold text-charcoal' 
                : 'border-white/10 text-text-muted hover:border-gold/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredTours.map((tour) => (
            <motion.div
              key={tour.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredTours.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-muted italic">No expeditions found matching this intensity.</p>
        </div>
      )}
    </div>
  );
}
