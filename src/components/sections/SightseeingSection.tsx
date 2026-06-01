'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SightseeingDestination } from '@/types';

interface SightseeingSectionProps {
  sightseeing: SightseeingDestination[];
}

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
            Destination-wise highlights across your journey
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {sightseeing.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: "-20% 0px -60% 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#141414] border border-[#2A2A2A] rounded-[12px] p-[24px] flex flex-col justify-between transition-all duration-300 hover:border-[#D4A853] hover:shadow-[0_4px_20px_rgba(212,168,83,0.15)] group"
            >
              <div className="space-y-[12px]">
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
                      className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#D4A853] whitespace-nowrap"
                      style={{ 
                        fontFamily: "'DM Sans', sans-serif",
                        padding: "10px 12px", 
                        borderRadius: "20px" 
                      }}
                    >
                      {item.elevation}
                    </span>
                  )}
                </div>

                {/* Spots List */}
                <ul className="space-y-2 mt-[12px]">
                  {item.spots.map((spot, spotIdx) => {
                    const isWinter = spot.includes('❄️') || spot.startsWith('🐾') || spot.startsWith('📸') || spot.startsWith('🧊') || spot.startsWith('⛺') || spot.startsWith('Winter');
                    return (
                      <li 
                        key={spotIdx} 
                        className="flex items-start"
                      >
                        <span 
                          className="text-[#D4A853] mr-[8px] select-none shrink-0" 
                          style={{ fontSize: "14px", lineHeight: "1" }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
