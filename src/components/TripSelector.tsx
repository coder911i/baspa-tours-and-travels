'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeather } from '@/lib/useWeather';
import { cn } from '@/lib/utils';

// These IDs MUST match the IDs in src/lib/data/tours.ts
const destinations = [
  { id: "spiti-valley-7d", name: "Spiti Winter (7D)", days: 7, lat: 31.3497, lon: 78.4428, location: "Chitkul" },
  { id: "spiti-summer-4n5d", name: "Spiti Summer (5D)", days: 5, lat: 32.2461, lon: 78.0153, location: "Kaza, Spiti" },
  { id: "winter-spiti-9d", name: "Winter Spiti (9D)", days: 9, lat: 32.2461, lon: 78.0153, location: "Kaza, Spiti" },
];

function WeatherCard({ lat, lon, locationName }: { lat: number; lon: number; locationName: string }) {
  const { temp, condition, wind, loading, error } = useWeather(lat, lon);

  if (error) {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-surface/50 backdrop-blur-md border border-gold/10 flex items-center justify-center">
        <p className="text-text-muted text-xs uppercase tracking-widest font-bold">Weather Unavailable</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-5 rounded-2xl bg-surface/80 backdrop-blur-md border border-gold/20 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold block mb-1">Live Conditions</span>
          <h4 className="text-snow text-sm font-medium flex items-center gap-2">
            📍 {locationName}
          </h4>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[9px] text-snow/60 font-bold uppercase tracking-widest">Live</span>
        </div>
      </div>

      {loading ? (
        <div className="animate-pulse flex gap-4">
          <div className="h-10 w-20 bg-white/5 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-white/5 rounded w-full"></div>
            <div className="h-4 bg-white/5 rounded w-2/3"></div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <div className="text-4xl font-display text-gold flex items-start">
            {Math.round(temp)}
            <span className="text-lg mt-1 ml-1">°C</span>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-snow font-bold uppercase tracking-widest flex items-center gap-2">
               {condition}
            </p>
            <p className="text-[10px] text-text-muted uppercase tracking-widest flex items-center gap-2">
               Wind {wind} km/h
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TripSelector() {
  const [selectedDestId, setSelectedDestId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedDestId(id);
    
    // Dispatch custom event for ItineraryPreview to listen to
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tourSelected', { detail: id }));
    }
  };

  const selectedDest = destinations.find(d => d.id === selectedDestId);

  return (
    <div className="w-full max-w-md mx-auto md:mx-0 z-20 relative">
      <div className="glass-card p-6 rounded-3xl border border-gold/10 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-6">
           <h3 className="font-display text-xl text-snow tracking-wide">Expedition Selector</h3>
           <div className="px-2 py-1 bg-gold/10 border border-gold/20 rounded text-[8px] text-gold font-bold uppercase tracking-widest">Interactive</div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {destinations.map(dest => (
            <button
              key={dest.id}
              onClick={() => handleSelect(dest.id)}
              className={cn(
                "px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border",
                selectedDestId === dest.id 
                  ? "bg-gold text-charcoal border-gold shadow-[0_0_20px_rgba(201,168,76,0.3)] scale-105" 
                  : "bg-white/5 text-text-muted hover:bg-gold/10 hover:text-gold border-white/5 hover:border-gold/20"
              )}
            >
              {dest.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedDest ? (
            <motion.div
              key={selectedDest.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <WeatherCard 
                lat={selectedDest.lat} 
                lon={selectedDest.lon} 
                locationName={selectedDest.location} 
              />
              <button
                onClick={() => handleSelect(selectedDest.id)}
                className="w-full mt-4 py-4 bg-gold/5 border border-gold/20 rounded-2xl text-[10px] text-gold font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-charcoal transition-all duration-500 shadow-[inset_0_0_20px_rgba(201,168,76,0.05)]"
              >
                View Digital Itinerary
              </button>
            </motion.div>
          ) : (
             <div className="py-12 border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                </div>
                <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">Select a journey to begin</p>
             </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
