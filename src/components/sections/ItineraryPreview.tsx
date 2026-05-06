'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '@/lib/data/tours';
import { useWeather } from '@/lib/useWeather';
import { cn } from '@/lib/utils';
import { Tour } from '@/types';
import { X, MapPin, Mountain, Navigation, Home, Star, Check, AlertCircle } from 'lucide-react';

function LiveWeatherCard({ tour }: { tour: Tour }) {
  const coords = tour.weatherCoord || { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" };
  const { temp, condition, wind, loading, error } = useWeather(coords.lat, coords.lon);

  return (
    <div className="bg-surface/10 backdrop-blur-md border border-gold/15 p-6 rounded-2xl relative overflow-hidden group">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-gold" />
          <span className="text-[10px] text-snow font-medium uppercase tracking-[0.2em]">{coords.label}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] text-snow/60 font-bold uppercase tracking-widest">Live</span>
        </div>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-24 bg-white/5 rounded-lg" />
          <div className="h-4 w-full bg-white/5 rounded" />
        </div>
      ) : error ? (
        <p className="text-text-muted text-xs">Weather unavailable</p>
      ) : (
        <div className="space-y-4">
          <div>
            <div className="text-5xl font-display font-bold text-gold flex items-start">
              {Math.round(temp)}
              <span className="text-xl mt-1 ml-1">°C</span>
            </div>
            <p className="text-snow/80 text-sm font-medium mt-1 uppercase tracking-wider">{condition}</p>
          </div>
          <div className="flex items-center gap-2 pt-4 border-t border-white/5">
            <Navigation className="w-3 h-3 text-gold/60" />
            <span className="text-[10px] text-text-muted uppercase tracking-widest">Wind {wind} km/h</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ItineraryPreview() {
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'inclusions' | 'exclusions'>('inclusions');
  const [activeDay, setActiveDay] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleOpen = (e: CustomEvent) => {
      setSelectedTourId(e.detail);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('tourSelected', handleOpen as EventListener);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTourId(null);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('tourSelected', handleOpen as EventListener);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const tour = tours.find(t => t.id === selectedTourId);

  useEffect(() => {
    if (!scrollContainerRef.current || !tour) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-day-index'));
            setActiveDay(index);
          }
        });
      },
      { 
        root: scrollContainerRef.current,
        threshold: 0.5,
        rootMargin: '-10% 0px -80% 0px'
      }
    );

    dayRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [tour]);

  const closeOverlay = () => {
    setSelectedTourId(null);
    document.body.style.overflow = 'auto';
  };

  const scrollToDay = (index: number) => {
    const element = dayRefs.current[index];
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {selectedTourId && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-[#0A0C10] text-snow overflow-hidden flex flex-col"
        >
          {tour ? (
            <>
              {/* Background Watermark */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-end justify-center overflow-hidden">
                 <Mountain className="w-[120vw] h-[120vw] -mb-[40vw] text-gold" />
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between p-6 md:px-12 border-b border-gold/10 bg-[#0A0C10]/80 backdrop-blur-md">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-[0.4em] mb-1">Itinerary Blueprint</span>
                  <h2 className="text-xl md:text-2xl font-display text-snow">{tour.title}</h2>
                </div>
                <button 
                  onClick={closeOverlay}
                  className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300 group"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
                {/* LEFT PANEL - Desktop */}
                <div className="hidden lg:flex w-[35%] border-r border-gold/10 flex-col p-12 overflow-y-auto scrollbar-hide space-y-12">
                  <div>
                    <h3 className="text-4xl font-display text-snow mb-4">{tour.title}</h3>
                    <div className="inline-flex px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest">
                      {tour.duration}
                    </div>
                  </div>

                  <LiveWeatherCard tour={tour} />

                  <div className="space-y-2">
                    <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest block mb-4">Journey Path</span>
                    {tour.itinerary.map((day, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToDay(idx)}
                        className={cn(
                          "w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group",
                          activeDay === idx 
                            ? "bg-gold text-charcoal shadow-[0_0_20px_rgba(201,168,76,0.3)] border-l-4 border-gold" 
                            : "text-text-muted hover:bg-white/5 border border-transparent"
                        )}
                      >
                        <span className="text-sm font-bold uppercase tracking-widest">Day {day.day}</span>
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          activeDay === idx ? "bg-charcoal" : "bg-gold/30 group-hover:bg-gold"
                        )} />
                      </button>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-gold/10">
                    <div className="flex gap-4 mb-6">
                      <button 
                        onClick={() => setActiveTab('inclusions')}
                        className={cn(
                          "flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border transition-all",
                          activeTab === 'inclusions' ? "bg-gold/10 border-gold text-gold" : "border-white/10 text-text-muted hover:border-gold/30"
                        )}
                      >
                        Inclusions
                      </button>
                      <button 
                        onClick={() => setActiveTab('exclusions')}
                        className={cn(
                          "flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border transition-all",
                          activeTab === 'exclusions' ? "bg-gold/10 border-gold text-gold" : "border-white/10 text-text-muted hover:border-gold/30"
                        )}
                      >
                        Exclusions
                      </button>
                    </div>
                    <ul className="space-y-4">
                      {(activeTab === 'inclusions' ? tour.inclusions : tour.exclusions)?.map((item, i) => (
                        <li key={i} className="flex gap-3 text-xs text-snow/70 leading-relaxed">
                          {activeTab === 'inclusions' ? <Check className="w-4 h-4 text-gold shrink-0" /> : <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* MOBILE TOP STRIP */}
                <div className="lg:hidden p-6 border-b border-gold/10 space-y-6">
                   <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[8px] font-bold uppercase tracking-widest">
                          {tour.duration}
                        </span>
                        <span className="text-gold font-display text-lg">{tour.startingPrice}</span>
                      </div>
                      <LiveWeatherCard tour={tour} />
                   </div>
                   
                   {/* Horizontal Day Tabs */}
                   <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
                      {tour.itinerary.map((day, idx) => (
                        <button
                          key={idx}
                          onClick={() => scrollToDay(idx)}
                          className={cn(
                            "whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all",
                            activeDay === idx ? "bg-gold text-charcoal" : "bg-white/5 text-text-muted"
                          )}
                        >
                          Day {day.day}
                        </button>
                      ))}
                   </div>
                </div>

                {/* RIGHT PANEL - Content */}
                <div 
                  ref={scrollContainerRef}
                  className="flex-1 overflow-y-auto p-6 md:p-16 space-y-24 scroll-smooth"
                >
                  {tour.itinerary.map((day, idx) => (
                    <motion.div
                      key={idx}
                      ref={(el) => (dayRefs.current[idx] = el)}
                      data-day-index={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="space-y-8"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h4 className="text-3xl md:text-5xl font-display text-gold leading-tight">
                          Day {day.day} — {day.title}
                        </h4>
                      </div>
                      
                      <p className="text-lg text-text-muted leading-relaxed max-w-3xl">
                        {day.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                            <Mountain className="w-5 h-5 text-gold" />
                          </div>
                          <div>
                            <span className="text-[10px] text-text-muted uppercase tracking-widest block">Altitude</span>
                            <span className="text-snow font-bold">{day.altitude || 'N/A'}</span>
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                            <Navigation className="w-5 h-5 text-gold" />
                          </div>
                          <div>
                            <span className="text-[10px] text-text-muted uppercase tracking-widest block">Distance</span>
                            <span className="text-snow font-bold">{day.distance || 'Local'}</span>
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                            <Home className="w-5 h-5 text-gold" />
                          </div>
                          <div>
                            <span className="text-[10px] text-text-muted uppercase tracking-widest block">Stay</span>
                            <span className="text-snow font-bold">{day.stay}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em] block">Daily Highlights</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {day.highlights?.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-3 text-snow/90 text-sm">
                              <Star className="w-4 h-4 text-gold shrink-0" fill="currentColor" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {idx < tour.itinerary.length - 1 && (
                        <div className="pt-12 border-b border-gold/10" />
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile Inclusions/Exclusions at bottom */}
                  <div className="lg:hidden pt-12 space-y-12">
                     <div className="space-y-6">
                        <h5 className="text-xl font-display text-gold">Inclusions</h5>
                        <ul className="space-y-4">
                          {tour.inclusions?.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-snow/70">
                              <Check className="w-4 h-4 text-gold shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                     </div>
                     <div className="space-y-6">
                        <h5 className="text-xl font-display text-gold">Exclusions</h5>
                        <ul className="space-y-4">
                          {tour.exclusions?.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-snow/70">
                              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                     </div>
                  </div>

                  <div className="h-32" /> {/* Bottom spacing */}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-gold text-xl font-display animate-pulse">Loading Journey...</div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
