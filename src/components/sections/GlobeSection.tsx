'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const locations = [
  { name: 'Chitkul', alt: '3,450m', angle: 30 },
  { name: 'Kaza', alt: '3,800m', angle: 90 },
  { name: 'Kalpa', alt: '2,960m', angle: 150 },
  { name: 'Sangla', alt: '2,680m', angle: 210 },
  { name: 'Nako', alt: '3,662m', angle: 270 },
  { name: 'Tabo', alt: '3,050m', angle: 330 },
];

function LocationDot({ name, alt, angle }: { name: string; alt: string; angle: number }) {
  const [hovered, setHovered] = useState(false);
  const radius = 42; // percentage from center
  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="absolute z-10"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
        hovered ? 'bg-gold-light scale-150 shadow-[0_0_20px_rgba(201,168,76,0.8)]' : 'bg-gold shadow-[0_0_10px_rgba(201,168,76,0.4)]'
      }`} />
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-surface/90 backdrop-blur-md border border-gold/50 p-3 whitespace-nowrap pointer-events-none"
        >
          <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">{name}</p>
          <p className="text-snow text-[10px]">{alt}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function GlobeSection() {
  return (
    <section className="py-32 bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 mb-16">
        <span className="accent-text text-gold text-xl block mb-4">Regional Presence</span>
        <h2 className="text-4xl md:text-6xl font-display text-snow">Our Territories</h2>
      </div>

      <div className="relative w-full max-w-lg aspect-square mx-auto">
        {/* Wireframe globe effect with CSS */}
        <div className="absolute inset-0 rounded-full border border-gold/10 animate-[spin_40s_linear_infinite]" />
        <div className="absolute inset-[10%] rounded-full border border-gold/8" style={{ transform: 'rotateX(60deg)' }} />
        <div className="absolute inset-[10%] rounded-full border border-gold/8" style={{ transform: 'rotateX(60deg) rotateZ(60deg)' }} />
        <div className="absolute inset-[10%] rounded-full border border-gold/8" style={{ transform: 'rotateX(60deg) rotateZ(120deg)' }} />
        <div className="absolute inset-[5%] rounded-full border border-gold/5" />
        <div className="absolute inset-[20%] rounded-full border border-gold/5" />
        <div className="absolute inset-[35%] rounded-full border border-gold/5" />
        
        {/* Glow center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-gold/30 shadow-[0_0_60px_20px_rgba(201,168,76,0.15)]" />
        </div>

        {/* Location markers */}
        {locations.map((loc) => (
          <LocationDot key={loc.name} {...loc} />
        ))}
      </div>
      
      <div className="text-center text-text-muted text-sm uppercase tracking-widest font-medium max-w-xs mt-16">
        Navigating the high altitudes of the Western Himalayas
      </div>
    </section>
  );
}
