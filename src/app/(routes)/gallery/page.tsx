'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { galleryPhotos, galleryCategories, GalleryPhoto } from '@/lib/data/gallery';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeCategory);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="pt-40 pb-12 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-3">
            Gallery
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-[#F5F0E8] mb-4">
            Visual Expedition of the Himalayas
          </h1>
          <p className="text-[#E8E0D0]/60 text-lg max-w-xl">
            From the border village of Chitkul to the cold deserts of Spiti and the sacred heights of Kalpa—experience the route through our lens.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/5 px-4 py-4">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {galleryCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0"
              style={{
                background: activeCategory === cat.key ? '#C9A84C' : 'rgba(255,255,255,0.06)',
                color: activeCategory === cat.key ? '#0A0A0A' : '#E8E0D0',
                border: activeCategory === cat.key ? 'none' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-4 py-10 bg-[#0A0A0A] min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Count */}
          <p className="text-[#E8E0D0]/40 text-sm mb-6">
            Showing {filtered.length} high-resolution photographs
          </p>

          {/* Grid — Pinterest-style columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setLightboxPhoto(photo)}
              >
                <div className="relative w-full overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-xl" />
                  {/* Location badge */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-[#C9A84C] text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                    <svg className="w-3.5 h-3.5 text-[#C9A84C] mr-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#E8E0D0]/40">
              No photos found in this category. New uploads coming soon!
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl z-10"
            onClick={() => setLightboxPhoto(null)}
          >
            ✕
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={lightboxPhoto.src.replace('w=1200', 'w=1920')}
              alt={lightboxPhoto.alt}
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              priority
            />
            <div className="mt-4 text-center">
              <p className="text-[#C9A84C] font-medium">{lightboxPhoto.location}</p>
              <p className="text-[#E8E0D0]/60 text-sm mt-1">{lightboxPhoto.alt}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
