'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/types';
import { cn } from '@/lib/utils';

export default function TourCard({ tour }: { tour: Tour }) {
  // Safe data access
  const displayImage = tour.images?.[0] || tour.image;
  const displayName = tour.title || tour.name || 'Expedition';
  const displayPrice = typeof tour.price === 'number' ? tour.price : tour.price.perPerson;

  return (
    <div className="relative w-full overflow-hidden bg-[#0A0A0A] border-2 border-white/5 hover:border-[#C9A84C] transition-all duration-300 rounded-xl flex flex-col h-[480px] group shadow-xl">
      <Link href={`/tours/${tour.slug}`} className="block w-full h-full flex flex-col justify-between">
        {/* Top Image Part */}
        <div className="relative w-full h-[200px] overflow-hidden flex-shrink-0">
          <Image
            src={displayImage}
            alt={displayName}
            fill
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />
          
          {/* Overlay Badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <span className="px-3 py-1 bg-[#C9A84C] text-[#0A0A0A] text-[9px] font-bold uppercase tracking-widest rounded-sm">
              {tour.duration}
            </span>
            <span className={cn(
              "px-3 py-1 text-white text-[9px] font-bold uppercase tracking-widest rounded-sm",
              tour.difficulty === 'Easy' ? 'bg-green-600' : tour.difficulty === 'Moderate' ? 'bg-blue-600' : 'bg-red-600'
            )}>
              {tour.difficulty}
            </span>
          </div>
        </div>

        {/* Bottom Body Part */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl md:text-2xl font-display text-snow mb-2 group-hover:text-[#C9A84C] transition-colors duration-300 line-clamp-1">
              {displayName}
            </h3>
            
            <p className="text-text-muted text-xs md:text-sm mb-4 line-clamp-2 leading-relaxed">
              {tour.tagline || tour.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-4 mt-auto">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-text-muted block mb-1">Starting from</span>
                <span className="text-2xl font-display text-[#C9A84C] font-semibold">₹{displayPrice.toLocaleString()}</span>
              </div>
            </div>
            
            {/* Book Karo CTA (Full-width) */}
            <div className="w-full text-center py-3 bg-[#C9A84C] text-[#0A0A0A] font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-colors duration-300 rounded-sm">
              Book Karo
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
