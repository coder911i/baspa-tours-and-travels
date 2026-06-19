'use client';

import React, { useState } from 'react';
import { Tour } from '@/types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BookingWidget from '@/components/ui/BookingWidget';
import RouteMap from '@/components/RouteMap';
import SightseeingSection from '@/components/sections/SightseeingSection';
import { cn } from '@/lib/utils';
import { useReviews } from '@/hooks/useReviews';

export default function TourDetailContent({ tour }: { tour: Tour }) {
  const [activeDay, setActiveDay] = useState(0);
  const { reviewUrl, trackReviewClick } = useReviews();
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
                    {tour.inclusions.map((item) => (
                      <li key={item} className="flex gap-4 text-text-muted text-sm">
                        <span className="text-gold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold/20 pb-4 mb-6">
                <h2 className="text-3xl font-display text-snow">The Master Itinerary</h2>
                <a
                  href="https://drive.google.com/file/d/1bEIICymClBwMtm9fe6iQavzB4OIglRb5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal transition-all text-xs uppercase tracking-widest font-bold w-fit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                  Get PDF Itinerary
                </a>
              </div>

              {/* Route Map inside itinerary */}
              <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#0D0D0D] p-4">
                <RouteMap stops={tour.routeWaypoints ?? tour.routeStops} tourName={tour.title} />
              </div>

              {/* Day Tabs */}
              <div className="space-y-6">
                {/* Horizontal Scrollable Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-white/5">
                  {tour.itinerary.map((day, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveDay(idx)}
                      style={{ minHeight: '44px' }}
                      className={cn(
                        "whitespace-nowrap px-6 py-3 border text-xs font-bold uppercase tracking-widest transition-all duration-300",
                        activeDay === idx
                          ? "bg-gold text-charcoal border-gold shadow-[0_0_15px_rgba(201,168,76,0.3)]"
                          : "border-white/5 text-text-muted hover:border-gold/30 hover:text-snow"
                      )}
                    >
                      Day {day.day}
                    </button>
                  ))}
                </div>

                {/* Day Content Panel */}
                {tour.itinerary.map((day, idx) => 
                  activeDay === idx && (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card p-8 space-y-8"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                        <div>
                          <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] block mb-1">Day {day.day}</span>
                          <h3 className="text-2xl md:text-3xl font-display text-snow">{day.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-widest font-bold">
                          {day.altitude && <span className="px-3 py-1.5 bg-white/5 text-text-muted border border-white/5">Alt: {day.altitude}</span>}
                          {day.distance && <span className="px-3 py-1.5 bg-white/5 text-text-muted border border-white/5">Dist: {day.distance}</span>}
                          {day.stay && <span className="px-3 py-1.5 bg-gold/10 text-gold border border-gold/20">Stay: {day.stay}</span>}
                        </div>
                      </div>

                      <p className="text-text-muted leading-relaxed">
                        {day.description}
                      </p>

                      {day.images && day.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-48 md:h-64 relative rounded-xl overflow-hidden border border-white/5">
                          {day.images.map((img, imgIdx) => (
                            <div key={imgIdx} className="relative h-full w-full">
                              <Image 
                                src={img} 
                                alt={`${day.title} view ${imgIdx + 1}`}
                                fill
                                loading="lazy"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {day.highlights && day.highlights.length > 0 && (
                        <div className="pt-6 border-t border-white/5">
                          <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4">Day Highlights</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {day.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-3 text-snow text-sm">
                                <span className="text-gold text-lg">•</span>
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* Review CTA Card */}
            <div className="glass-card p-8 border border-white/5 bg-[#0D0D0D] flex flex-col md:flex-row md:items-center justify-between gap-6 mt-16">
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">⭐ Share Your Experience</h4>
                <p className="text-text-muted text-sm max-w-xl">
                  Have you traveled on one of our Himalayan loop circuits before? Support our local Chitkul team by writing a quick Google review!
                </p>
              </div>
              <a 
                href={reviewUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={trackReviewClick}
                className="px-6 py-3 bg-gold text-charcoal font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all whitespace-nowrap"
              >
                ⭐ Write a Review
              </a>
            </div>
          </div>

          <div className="lg:w-1/3">
            <BookingWidget tour={tour} />
          </div>
        </div>
      </section>

      {/* Sightseeing Section */}
      {tour.sightseeing && tour.sightseeing.length > 0 && (
        <SightseeingSection sightseeing={tour.sightseeing} />
      )}

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-charcoal border-t border-white/10 p-4 z-[40] lg:hidden flex items-center justify-between backdrop-blur-md">
        <div>
          <span className="text-text-muted text-[10px] uppercase tracking-widest block">Expedition starting</span>
          <div className="flex items-center gap-2">
            <span className="text-xl font-display text-snow">₹{typeof tour.price === 'number' ? tour.price.toLocaleString() : tour.price.perPerson.toLocaleString()}</span>
            {tour.originalPrice && (
              <span className="text-xs line-through text-text-muted font-display">₹{tour.originalPrice.toLocaleString()}</span>
            )}
          </div>
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
