'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SightseeingDestination } from '@/types';

interface SightseeingSectionProps {
  sightseeing: SightseeingDestination[];
}

// Verified high-resolution destination images matching the Himalayan route stops
const DESTINATION_IMAGES: Record<string, string> = {
  "Shimla": "https://images.unsplash.com/photo-1626622173428-8b87c19b2092?auto=format&fit=crop&w=600&q=80",
  "Sangla Valley": "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=600&q=80",
  "Chitkul": "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?auto=format&fit=crop&w=600&q=80",
  "Chitkul in Winter": "https://images.unsplash.com/photo-1716128033373-60b172383931?auto=format&fit=crop&w=600&q=80",
  "Kalpa": "https://images.unsplash.com/photo-1640035209336-df638dd26c4d?auto=format&fit=crop&w=600&q=80",
  "Nako": "https://images.unsplash.com/photo-PnuT63PYfZk?auto=format&fit=crop&w=600&q=80",
  "Nako in Winter": "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=600&q=80",
  "Tabo": "https://images.unsplash.com/photo-1506905925346-21bda4d32df7?auto=format&fit=crop&w=600&q=80",
  "Tabo in Winter": "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=600&q=80",
  "Kaza": "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=600&q=80",
  "Kaza in Winter": "https://images.unsplash.com/photo-1698753935121-153a106616d5?auto=format&fit=crop&w=600&q=80",
  "Langza": "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=600&q=80",
  "Hikkim": "https://images.unsplash.com/photo-1681798805445-2b24c2cb8f64?auto=format&fit=crop&w=600&q=80",
  "Chandratal": "https://images.unsplash.com/photo-slcdg2PVlNg?auto=format&fit=crop&w=600&q=80",
  "Manali": "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=600&q=80",
  "Atal Tunnel": "https://images.unsplash.com/photo-slcdg2PVlNg?auto=format&fit=crop&w=600&q=80",
  "Jispa": "https://images.unsplash.com/photo-slcdg2PVlNg?auto=format&fit=crop&w=600&q=80",
  "Kunzum Pass": "https://images.unsplash.com/photo-slcdg2PVlNg?auto=format&fit=crop&w=600&q=80",
  "Baspa Valley": "https://images.unsplash.com/photo-1612638039814-1a67ea727114?auto=format&fit=crop&w=600&q=80",
  "Langza & Hikkim": "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=600&q=80",
  "Langza & Hikkim in Winter": "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=600&q=80",
  "Winter Special Activities": "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=600&q=80",
  "Special Winter Activities": "https://images.unsplash.com/photo-1698753935263-0eca2103d2db?auto=format&fit=crop&w=600&q=80"
};

export default function SightseeingSection({ sightseeing }: SightseeingSectionProps) {
  if (!sightseeing || sightseeing.length === 0) return null;

  return (
    <section className="bg-[#0A0A0A] py-[80px] px-6 print:hidden">
      <div className="max-w-[900px] mx-auto space-y-12">
        {/* Headings */}
        <div className="text-center space-y-4">
          <h2 
            className="text-4xl font-semibold text-[#D4A853]"
            style={{ 
              fontFamily: "var(--font-playfair), Georgia, serif",
              letterSpacing: "0.02em"
            }}
          >
            What You&apos;ll See
          </h2>
          <p 
            className="text-sm md:text-base text-snow/60"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Explore actual route stops and highlights along your circuit
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {sightseeing.map((item, index) => {
            const imageUrl = DESTINATION_IMAGES[item.destination] || DESTINATION_IMAGES["Kaza"];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "-20% 0px -60% 0px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#141414] border border-[#2A2A2A] rounded-[12px] p-[20px] flex flex-col justify-between transition-all duration-300 hover:border-[#D4A853] hover:shadow-[0_4px_20px_rgba(212,168,83,0.15)] group overflow-hidden"
              >
                <div>
                  {/* Location Picture */}
                  <div className="relative h-[180px] w-full mb-6 overflow-hidden rounded-[8px] border border-white/5">
                    <Image 
                      src={imageUrl} 
                      alt={item.destination} 
                      fill 
                      loading="lazy" 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Card Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 
                      className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#D4A853]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.destination}
                    </h3>
                    
                    {item.elevation && (
                      <span 
                        className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#D4A853] whitespace-nowrap"
                        style={{ 
                          fontFamily: "'DM Sans', sans-serif",
                          padding: "4px 10px", 
                          borderRadius: "20px" 
                        }}
                      >
                        {item.elevation}
                      </span>
                    )}
                  </div>

                  {/* Spots List */}
                  <ul className="space-y-2 mt-[16px]">
                    {item.spots.map((spot, spotIdx) => {
                      const isWinter = spot.includes('❄️') || spot.includes('Winter');
                      return (
                        <li 
                          key={spotIdx} 
                          className="flex items-start"
                        >
                          <span 
                            className="text-[#D4A853] mr-[8px] select-none shrink-0" 
                            style={{ fontSize: "14px", lineHeight: "1.2" }}
                          >
                            ▸
                          </span>
                          <span 
                            className="text-[13px] leading-relaxed transition-colors duration-300"
                            style={{ 
                              fontFamily: "'DM Sans', sans-serif",
                              color: isWinter ? "#7EB8E8" : "#B0B0B0" 
                            }}
                          >
                            {spot}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
