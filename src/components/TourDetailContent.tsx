'use client';

import React from 'react';
import { Tour } from '@/lib/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BookingWidget from '@/components/BookingWidget';

export default function TourDetailContent({ tour }: { tour: Tour }) {
  const handleScrollToBooking = () => {
    document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="accent-text text-gold text-2xl block mb-4"
          >
            {tour.location}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-display text-snow max-w-4xl"
          >
            {tour.title}
          </motion.h1>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-charcoal border-y border-white/5 sticky top-[80px] z-30 hidden md:block backdrop-blur-md bg-charcoal/90">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="flex gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Duration</span>
              <span className="text-snow font-bold">{tour.duration}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Difficulty</span>
              <span className="text-snow font-bold capitalize">{tour.difficulty}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Max Altitude</span>
              <span className="text-snow font-bold">{tour.altitude}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Group Size</span>
              <span className="text-snow font-bold">{tour.groupSize.toString()} People</span>
            </div>
          </div>
          <button 
            onClick={handleScrollToBooking}
            className="btn-gold-filled py-3 px-8 text-[10px] font-bold tracking-widest uppercase"
          >
            Book This Expedition
          </button>
        </div>
      </div>

      {/* Content Layout */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-2/3 space-y-24">
            <div>
              <h2 className="text-3xl font-display text-snow mb-8 border-b border-gold/20 pb-4 inline-block">Expedition Overview</h2>
              <p className="text-text-muted leading-relaxed text-lg mb-12 max-w-3xl">
                {tour.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold" /> Highlights
                  </h3>
                  <ul className="space-y-4">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex gap-4 text-snow text-sm group">
                        <span className="text-gold group-hover:scale-110 transition-transform">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gold" /> What&apos;s Included
                  </h3>
                  <ul className="space-y-4">
                    {tour.included.map((item) => (
                      <li key={item} className="flex gap-4 text-text-muted text-sm">
                        <span className="text-gold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display text-snow mb-12 border-b border-gold/20 pb-4 inline-block">The Master Itinerary</h2>
              <div className="space-y-8 relative before:absolute before:left-[31px] before:top-8 before:bottom-8 before:w-[1px] before:bg-white/5">
                {tour.itinerary.map((day) => (
                  <div key={`${tour.slug}-day-${day.day}`} className="relative pl-20 group">
                    <div className="absolute left-0 top-0 w-16 h-16 bg-background border border-white/10 flex items-center justify-center text-gold font-display text-2xl z-10 group-hover:border-gold transition-colors">
                      {day.day}
                    </div>
                    <div className="glass-card p-8 group-hover:border-gold/30 transition-all bg-surface/30">
                      <h3 className="text-xl font-display text-snow mb-4 group-hover:text-gold transition-colors">{day.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-6">
                        {day.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-[9px] uppercase tracking-widest font-bold">
                        {day.altitude && <span className="px-3 py-1 bg-white/5 text-text-muted border border-white/5">Alt: {day.altitude}</span>}
                        {day.distance && <span className="px-3 py-1 bg-white/5 text-text-muted border border-white/5">Dist: {day.distance}</span>}
                        {day.stay && <span className="px-3 py-1 bg-white/5 text-gold border border-gold/10">Stay: {day.stay}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <BookingWidget tour={tour} />
          </div>
        </div>
      </section>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-charcoal border-t border-white/10 p-4 z-[40] lg:hidden flex items-center justify-between backdrop-blur-md">
        <div>
          <span className="text-text-muted text-[10px] uppercase tracking-widest block">Expedition starting</span>
          <span className="text-xl font-display text-snow">₹{typeof tour.price === 'number' ? tour.price.toLocaleString() : tour.price.perPerson.toLocaleString()}</span>
        </div>
        <button 
          onClick={handleScrollToBooking}
          className="btn-gold-filled py-3 px-8 text-xs"
        >
          Book Now
        </button>
      </div>
    </>
  );
}
