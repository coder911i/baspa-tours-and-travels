'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '@/lib/data/tours';
import { cn } from '@/lib/utils';

export default function ItineraryPreview() {
  const [activeDay, setActiveDay] = useState(1);
  const sampleItinerary = tours[0].itinerary;

  return (
    <section className="py-32 bg-background px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="accent-text text-gold text-xl block mb-4">Journey Blueprint</span>
            <h2 className="text-4xl md:text-6xl font-display text-snow mb-8">How Your Journey Unfolds</h2>
            <p className="text-text-muted mb-12">
              Every expedition is meticulously planned to balance adventure, comfort, and cultural immersion. Here is a sample day-by-day breakdown of our flagship Chitkul Valley Expedition.
            </p>
            <a href="/tours/chitkul-valley-expedition" className="btn-gold">
              Full Itinerary →
            </a>
          </div>

          <div className="lg:w-2/3">
            <div className="relative pl-12 md:pl-20 space-y-8 before:absolute before:left-[19px] md:before:left-[27px] before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">
              {sampleItinerary.map((day) => (
                <div key={day.day} className="relative">
                  <button
                    onClick={() => setActiveDay(day.day === activeDay ? 0 : day.day)}
                    className="flex flex-col text-left group"
                  >
                    <div className={cn(
                      "absolute left-[-45px] md:left-[-61px] top-0 w-10 h-10 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-500 bg-background z-10",
                      activeDay === day.day ? "border-gold text-gold scale-110" : "border-white/10 text-text-muted group-hover:border-gold/50"
                    )}>
                      <span className="text-xs font-bold">D{day.day}</span>
                    </div>
                    
                    <h3 className={cn(
                      "text-xl md:text-2xl font-display transition-colors duration-300",
                      activeDay === day.day ? "text-gold" : "text-snow group-hover:text-gold/70"
                    )}>
                      {day.title}
                    </h3>
                    <div className="flex gap-4 mt-2 text-[10px] uppercase tracking-widest text-text-muted font-bold">
                      {day.altitude && <span>Alt: {day.altitude}</span>}
                      {day.distance && <span>Dist: {day.distance}</span>}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDay === day.day && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="py-6 text-text-muted leading-relaxed max-w-xl">
                          {day.description}
                        </p>
                        {day.accommodation && (
                          <div className="pb-4 text-xs">
                            <span className="text-gold font-bold uppercase tracking-widest mr-2">STAY:</span>
                            <span className="text-snow">{day.accommodation}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
