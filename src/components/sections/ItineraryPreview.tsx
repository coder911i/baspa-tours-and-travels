'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { tours } from '@/lib/data/tours';
import { useWeather } from '@/lib/useWeather';
import { cn } from '@/lib/utils';
import { Tour } from '@/types';

// Simple SVG Icon Components to avoid lucide-react dependency
const Icons = {
  X: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
  ),
  MapPin: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  Mountain: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 20l4-9 4 9 M4 20l4-9 4 9 M12 20l4-9 4 9" /></svg>
  ),
  Navigation: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>
  ),
  Home: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
  ),
  Star: ({ className, fill }: { className?: string, fill?: string }) => (
    <svg className={className} fill={fill || "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
  ),
  Check: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
  ),
  AlertCircle: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
  )
};

function LiveWeatherCard({ tour }: { tour: Tour }) {
  const coords = tour.weatherCoord || { lat: 32.2461, lon: 78.0153, label: "Kaza, Spiti" };
  const { temp, condition, wind, loading, error } = useWeather(coords.lat, coords.lon);

  return (
    <div className="bg-surface/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Icons.MapPin className="w-3 h-3 text-gold" />
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
            <Icons.Navigation className="w-3 h-3 text-gold/60" />
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
  // Pure onClick tab state — NO scroll listeners, NO IntersectionObserver
  const [activeDay, setActiveDay] = useState(0);

  const tour = tours.find(t => t.id === selectedTourId);

  useEffect(() => {
    const handleOpen = (e: CustomEvent) => {
      setSelectedTourId(e.detail);
      setActiveDay(0); // Reset to day 0 when opening a new tour
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

  const closeOverlay = () => {
    setSelectedTourId(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrint = () => {
    window.open('https://drive.google.com/file/d/1bEIICymClBwMtm9fe6iQavzB4OIglRb5/view?usp=sharing', '_blank');
  };

  return (
    <AnimatePresence>
      {selectedTourId && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] text-[#e5e5e5] overflow-hidden flex flex-col print:bg-white print:text-black print:overflow-visible print:relative"
        >
          {tour ? (
            <>
              {/* Header */}
              <div className="relative z-50 flex items-center justify-between p-4 md:p-6 md:px-12 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md shrink-0 print:border-black print:bg-white print:px-0">
                <div className="flex flex-col min-w-0 pr-2">
                  <span className="text-[8px] md:text-[10px] text-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mb-0.5 md:mb-1 print:text-black">Itinerary Blueprint</span>
                  <h2 className="text-base md:text-2xl font-display text-snow truncate md:overflow-visible print:text-black">{tour.title}</h2>
                </div>
                <div className="flex items-center gap-2 md:gap-4 shrink-0 print:hidden">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gold/20 text-[9px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest hover:bg-gold hover:text-charcoal transition-all"
                  >
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
                    <span className="hidden sm:inline">Export PDF</span>
                    <span className="sm:hidden">PDF</span>
                  </button>
                  <button
                    onClick={closeOverlay}
                    className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-gold/20 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300 group"
                  >
                    <Icons.X className="w-4 h-4 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-hidden flex flex-col md:flex-row h-full print:overflow-visible print:block">
                {/* SIDEBAR - Sticky for Desktop */}
                <div className="hidden md:flex w-[350px] shrink-0 border-r border-white/5 flex-col p-8 overflow-y-auto scrollbar-hide space-y-10 bg-[#0a0a0a] print:hidden">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-display text-snow">{tour.title}</h3>
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
                        id={`day-tab-${idx}`}
                        onClick={() => setActiveDay(idx)}
                        className={cn(
                          "w-full text-left px-6 py-4 transition-all duration-300 flex items-center justify-between group",
                          activeDay === idx
                            ? "bg-gold text-[#0a0a0a] font-bold shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                            : "text-text-muted hover:bg-white/5"
                        )}
                      >
                        <span className="text-xs uppercase tracking-widest">Day {day.day}</span>
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          activeDay === idx ? "bg-charcoal" : "bg-gold/30 group-hover:bg-gold"
                        )} />
                      </button>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <div className="flex gap-4 mb-6">
                      <button
                        onClick={() => setActiveTab('inclusions')}
                        className={cn(
                          "flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border transition-all",
                          activeTab === 'inclusions' ? "bg-gold text-charcoal border-gold" : "border-white/10 text-text-muted hover:border-gold/30"
                        )}
                      >
                        Inclusions
                      </button>
                      <button
                        onClick={() => setActiveTab('exclusions')}
                        className={cn(
                          "flex-1 py-3 text-[10px] font-bold uppercase tracking-widest border transition-all",
                          activeTab === 'exclusions' ? "bg-gold text-charcoal border-gold" : "border-white/10 text-text-muted hover:border-gold/30"
                        )}
                      >
                        Exclusions
                      </button>
                    </div>
                    <ul className="space-y-4">
                      {(activeTab === 'inclusions' ? tour.inclusions : tour.exclusions)?.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[11px] text-snow/70 leading-relaxed">
                          {activeTab === 'inclusions' ? <Icons.Check className="w-3.5 h-3.5 text-gold shrink-0" /> : <Icons.AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* MOBILE PILL STRIP - Sticky */}
                <div className="md:hidden sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 p-4 flex flex-col gap-4 print:hidden">
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide px-2">
                    {tour.itinerary.map((day, idx) => (
                      <button
                        key={idx}
                        id={`mobile-day-tab-${idx}`}
                        onClick={() => setActiveDay(idx)}
                        style={{ minHeight: '40px' }}
                        className={cn(
                          "whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 flex-shrink-0",
                          activeDay === idx
                            ? "bg-gold text-charcoal shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            : "bg-white/5 text-text-muted border border-white/5"
                        )}
                      >
                        Day {day.day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CONTENT AREA — Conditionally renders ONLY activeDay panel */}
                <div className="flex-1 overflow-y-auto p-6 md:p-20 bg-[#0a0a0a] print:overflow-visible print:p-0">
                  {tour.itinerary.map((day, idx) =>
                    activeDay === idx && (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-12 max-w-5xl mx-auto min-h-[400px] print:break-after-page print:pt-10"
                      >
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <span className="h-[1px] w-12 bg-gold/50 print:bg-black" />
                            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.5em] print:text-black">Chronicle {idx + 1}</span>
                          </div>
                          <h4 className="text-5xl md:text-7xl font-display text-snow leading-none print:text-black">
                            Day {day.day} &mdash; <span className="text-gold italic print:text-black">{day.title}</span>
                          </h4>
                        </div>

                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light max-w-4xl print:text-black">
                          {day.description}
                        </p>

                        {/* Cinematic Editorial Image Grid */}
                        {day.images && day.images.length > 0 && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-12 gap-4 h-[400px] md:h-[600px]">
                              {day.images.length >= 3 ? (
                                <>
                                  <div className="col-span-12 md:col-span-8 h-full relative group/img overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                                    <Image
                                      src={day.images[0]}
                                      alt={`${day.title} Hero`}
                                      fill
                                      loading="lazy"
                                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                                  </div>
                                  <div className="col-span-12 md:col-span-4 flex flex-col gap-4 h-full">
                                    <div className="flex-1 relative group/img overflow-hidden rounded-2xl border border-white/5 shadow-xl">
                                      <Image
                                        src={day.images[1]}
                                        alt={`${day.title} Detail 1`}
                                        fill
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                      />
                                    </div>
                                    <div className="flex-1 relative group/img overflow-hidden rounded-2xl border border-white/5 shadow-xl">
                                      <Image
                                        src={day.images[2]}
                                        alt={`${day.title} Detail 2`}
                                        fill
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                      />
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className="col-span-12 h-full relative group/img overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                                  <Image
                                    src={day.images[0]}
                                    alt={day.title}
                                    fill
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Info Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/5">
                          <div className="p-6 border-l-2 border-gold flex flex-col gap-2 bg-white/[0.02]">
                            <div className="flex items-center gap-2 text-gold">
                              <Icons.Mountain className="w-4 h-4" />
                              <span className="text-[9px] uppercase tracking-widest font-bold">Altitude</span>
                            </div>
                            <span className="text-2xl font-bold text-snow">{day.altitude || 'N/A'}</span>
                          </div>
                          <div className="p-6 border-l-2 border-gold flex flex-col gap-2 bg-white/[0.03] border-t md:border-t-0 border-white/5">
                            <div className="flex items-center gap-2 text-gold">
                              <Icons.Navigation className="w-4 h-4" />
                              <span className="text-[9px] uppercase tracking-widest font-bold">Distance</span>
                            </div>
                            <span className="text-2xl font-bold text-snow">{day.distance || 'Local'}</span>
                          </div>
                          <div className="p-6 border-l-2 border-gold flex flex-col gap-2 bg-white/[0.04] border-t md:border-t-0 border-white/5">
                            <div className="flex items-center gap-2 text-gold">
                              <Icons.Home className="w-4 h-4" />
                              <span className="text-[9px] uppercase tracking-widest font-bold">Stay</span>
                            </div>
                            <span className="text-2xl font-bold text-snow">{day.stay}</span>
                          </div>
                        </div>

                        <div className="space-y-8 pt-6">
                          <div className="flex items-center gap-6">
                            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em] whitespace-nowrap">Daily Highlights</span>
                            <div className="h-[1px] flex-1 bg-white/5" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            {day.highlights?.map((highlight, i) => (
                              <div key={i} className="flex items-start gap-3 text-[#e5e5e5] text-sm group">
                                <Icons.Star className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="currentColor" />
                                <span className="group-hover:text-gold transition-colors">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Navigation arrows between days */}
                        <div className="flex items-center justify-between pt-8 border-t border-white/5">
                          <button
                            onClick={() => setActiveDay(Math.max(0, idx - 1))}
                            disabled={idx === 0}
                            className="flex items-center gap-2 px-6 py-3 border border-white/10 text-text-muted text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            ← Previous Day
                          </button>
                          <span className="text-text-muted text-xs">{idx + 1} / {tour.itinerary.length}</span>
                          <button
                            onClick={() => setActiveDay(Math.min(tour.itinerary.length - 1, idx + 1))}
                            disabled={idx === tour.itinerary.length - 1}
                            className="flex items-center gap-2 px-6 py-3 border border-white/10 text-text-muted text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            Next Day →
                          </button>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
              <div className="text-gold text-lg font-display tracking-widest animate-pulse">Route load ho raha hai...</div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
