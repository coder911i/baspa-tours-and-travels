'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredPhotos } from '@/lib/data/gallery';

export default function GalleryPreview() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Destinations
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#F5F0E8] leading-tight">
              See Through Our Lens
            </h2>
          </div>
          <Link
            href="/gallery"
            className="mt-4 md:mt-0 inline-flex items-center text-[#C9A84C] hover:text-[#e5c265] text-sm font-semibold tracking-wide group transition-colors"
          >
            <span>View Full Gallery</span>
            <svg 
              className="w-4 h-4 ml-1.5 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 5-photo asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Large featured photo — left/first column (spans 2 rows on desktop) */}
          {featuredPhotos[0] && (
            <div className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden h-[350px] md:h-full min-h-[350px] group border border-white/5">
              <Image
                src={featuredPhotos[0].src}
                alt={featuredPhotos[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[#C9A84C] text-[10px] font-bold tracking-widest uppercase bg-[#C9A84C]/10 border border-[#C9A84C]/25 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Featured
                </span>
                <p className="text-white font-display text-xl md:text-2xl mt-3 mb-1">
                  {featuredPhotos[0].location}
                </p>
                <p className="text-white/60 text-xs line-clamp-2">
                  {featuredPhotos[0].alt}
                </p>
              </div>
            </div>
          )}

          {/* 4 smaller photos — remaining grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 md:col-span-2 gap-4 md:gap-6">
            {featuredPhotos.slice(1, 5).map((photo) => (
              <div key={photo.id} className="relative rounded-2xl overflow-hidden h-52 md:h-60 group border border-white/5">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white/90 text-sm">
                    <svg className="w-3.5 h-3.5 text-[#C9A84C] mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="font-medium">{photo.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center border border-[#C9A84C]/35 hover:border-[#C9A84C] text-[#C9A84C] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all"
          >
            <span>View Full Gallery</span>
            <svg 
              className="w-4 h-4 ml-1.5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
