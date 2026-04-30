'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { tours } from '@/lib/data/tours';
import { cn } from '@/lib/utils';

export default function ItineraryPreview() {
  const tour = (tours && tours.length > 0) ? tours[0] : null;
  const sampleItinerary = tour?.itinerary || [];
  
  const [activeDay, setActiveDay] = useState(sampleItinerary[0]?.day || 1);
  const currentDay = sampleItinerary.find(d => d.day === activeDay) || sampleItinerary[0];

  if (!tour || sampleItinerary.length === 0) return null;

  return (
    <section className="py-32 bg-background px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="accent-text text-gold text-xl block mb-4">Journey Blueprint</span>
          <h2 className="text-4xl md:text-6xl font-display text-snow">The Blueprint of Your Journey</h2>
        </div>
        
        {/* CSS-based journey path instead of 3D */}
        <div className="h-[200px] w-full bg-charcoal/50 rounded-3xl overflow-hidden border border-white/5 my-20 relative flex items-center justify-center">
          <div className="flex items-center gap-0 w-full max-w-4xl px-8">
            {sampleItinerary.map((day, i) => (
              <React.Fragment key={day.day}>
                <button
                  onClick={() => setActiveDay(day.day)}
                  className={cn(
                    "relative flex flex-col items-center group z-10 transition-all duration-300",
                    activeDay === day.day ? "scale-110" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 transition-all duration-500",
                    activeDay === day.day 
                      ? "bg-gold border-gold shadow-[0_0_20px_rgba(201,168,76,0.6)]" 
                      : "bg-transparent border-white/30 group-hover:border-gold/50"
                  )} />
                  <span className={cn(
                    "text-[10px] uppercase tracking-widest mt-3 font-bold whitespace-nowrap transition-colors",
                    activeDay === day.day ? "text-gold" : "text-text-muted"
                  )}>
                    D{day.day}
                  </span>
                  <span className={cn(
                    "text-[8px] uppercase tracking-wider mt-1 whitespace-nowrap max-w-[80px] truncate transition-colors hidden md:block",
                    activeDay === day.day ? "text-snow" : "text-text-muted/50"
                  )}>
                    {day.title.split(' ').slice(-1)[0]}
                  </span>
                </button>
                {i < sampleItinerary.length - 1 && (
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-white/10 via-gold/20 to-white/10 mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Interactive Journey Timeline</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-20">
          {/* Day Navigation */}
          <div className="lg:col-span-3 space-y-2">
            {sampleItinerary.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={cn(
                  "w-full text-left px-6 py-4 border transition-all duration-500 flex items-center justify-between group",
                  activeDay === day.day 
                    ? "bg-gold border-gold text-charcoal" 
                    : "border-white/10 text-text-muted hover:border-gold/50"
                )}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest block opacity-70">Day</span>
                  <span className="text-xl font-display font-bold">0{day.day}</span>
                </div>
                <div className={cn(
                  "w-2 h-2 rounded-full transition-all duration-500",
                  activeDay === day.day ? "bg-charcoal scale-150" : "bg-gold/30 group-hover:bg-gold"
                )} />
              </button>
            ))}
          </div>

          {/* Day Content */}
          <div className="lg:col-span-9 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-8 md:p-16 h-full"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-12">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-display text-snow mb-4">{currentDay.title}</h3>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Altitude</span>
                        <span className="text-snow text-sm">{currentDay.altitude}</span>
                      </div>
                      {currentDay.distance && (
                        <div className="flex items-center gap-2">
                          <span className="text-gold text-[10px] uppercase tracking-widest font-bold">Travel</span>
                          <span className="text-snow text-sm">{currentDay.distance}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-gold text-[10px] uppercase tracking-widest block mb-1">Stay</span>
                    <span className="text-snow font-bold text-lg">{currentDay.stay}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="text-text-muted text-lg leading-relaxed">
                      {currentDay.description}
                    </p>
                    <ul className="space-y-3">
                      {['Premium Logistics', 'Expert Mountain Guide', 'Curated Meals'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-snow/80 text-sm">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="aspect-[4/3] bg-surface rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                    <Image 
                      src={`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop`}
                      alt="Journey stage"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
