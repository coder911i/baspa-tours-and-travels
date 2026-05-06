'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWeather } from '@/lib/useWeather';
import { cn } from '@/lib/utils';

const destinations = [
  { id: "chitkul-valley-expedition", name: "Chitkul Valley Expedition", days: 7, lat: 31.3497, lon: 78.4428, location: "Chitkul" },
  { id: "spiti-circuit", name: "The Great Spiti Circuit", days: 10, lat: 32.2461, lon: 78.0153, location: "Kaza, Spiti" },
  { id: "kinnaur-apple-trail", name: "Kinnaur Apple Trail", days: 6, lat: 31.5885, lon: 78.2674, location: "Kalpa, Kinnaur" },
  { id: "pin-parvati-pass", name: "Pin Parvati Pass Trek", days: 12, lat: 31.7833, lon: 77.5167, location: "Kullu" },
  { id: "kalpa-starlight-retreat", name: "Kalpa Starlight Retreat", days: 5, lat: 31.5185, lon: 78.2595, location: "Kalpa" },
  { id: "zanskar-hidden-valley", name: "Zanskar Hidden Valley", days: 14, lat: 33.4333, lon: 76.2167, location: "Padum, Zanskar" },
  { id: "rohtang-lahaul-loop", name: "Rohtang & Lahaul Loop", days: 6, lat: 32.2985, lon: 77.0685, location: "Keylong, Lahaul" },
  { id: "himalayan-photo-masterclass", name: "Himalayan Photo Masterclass", days: 8, lat: 32.2461, lon: 78.0153, location: "Spiti Valley" },
  { id: "sangla-cultural-immersion", name: "Sangla Cultural Immersion", days: 5, lat: 31.4167, lon: 78.3333, location: "Sangla" },
  { id: "ancient-spiti-monasteries", name: "Ancient Spiti Monasteries", days: 8, lat: 32.0998, lon: 78.3215, location: "Tabo, Spiti" },
];

function WeatherCard({ lat, lon, locationName }: { lat: number; lon: number; locationName: string }) {
  const { temp, condition, wind, loading, error } = useWeather(lat, lon);

  if (error) {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-surface/50 backdrop-blur-md border border-white/5 flex items-center justify-center">
        <p className="text-text-muted text-sm">Weather data unavailable</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-5 rounded-2xl bg-surface/80 backdrop-blur-md border border-white/10 relative overflow-hidden">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-gold text-[10px] uppercase tracking-widest block mb-1">Live Weather &middot; Updated Now</span>
          <h4 className="text-snow text-sm font-medium flex items-center gap-2">
            📍 {locationName}
          </h4>
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
          <div className="text-4xl font-display text-snow flex items-start">
            {temp.toFixed(1)}
            <span className="text-lg text-gold ml-1 mt-1 animate-pulse">°C</span>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-snow flex items-center gap-2">
              ☁️ {condition}
            </p>
            <p className="text-xs text-text-muted flex items-center gap-2">
              💨 {wind} km/h
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
      
      // Scroll to itinerary
      const element = document.getElementById('itinerary-preview');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const selectedDest = destinations.find(d => d.id === selectedDestId);

  return (
    <div className="w-full max-w-md mx-auto md:mx-0 z-20 relative">
      <div className="glass-card p-6 rounded-3xl border border-white/10 bg-surface/30 backdrop-blur-xl">
        <h3 className="font-display text-2xl text-snow mb-4">Choose Your Destination</h3>
        
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {destinations.map(dest => (
            <button
              key={dest.id}
              onClick={() => handleSelect(dest.id)}
              className={cn(
                "snap-start whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all",
                selectedDestId === dest.id 
                  ? "bg-gold text-charcoal shadow-[0_0_15px_rgba(201,168,76,0.4)]" 
                  : "bg-white/5 text-text-muted hover:bg-white/10 hover:text-snow border border-white/5"
              )}
            >
              {dest.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedDest && (
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
