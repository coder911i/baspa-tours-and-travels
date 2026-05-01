'use client';

import React from 'react';
import { Destination } from '@/types';
import Image from 'next/image';

export default function DestinationDetailContent({ dest }: { dest: Destination }) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src={dest.image}
            alt={dest.name || dest.title}
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>
        <div className="relative z-10 px-6">
          <span className="text-gold font-bold text-xl uppercase tracking-[0.4em] block mb-4">{dest.elevation}</span>
          <h1 className="text-6xl md:text-9xl font-display text-snow mb-4">{dest.name || dest.title}</h1>
          <p className="accent-text text-snow text-2xl md:text-3xl">&quot;{dest.tagline}&quot;</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div>
            <h2 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">About the Destination</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {dest.description}
            </p>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <p className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2">Best Time to Visit</p>
                <p className="text-snow">{dest.bestTimeToVisit || dest.bestTime}</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2">How to Reach</p>
                <p className="text-snow">{dest.howToReach}</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
             <Image 
                src={dest.image} 
                alt={dest.name || dest.title} 
                fill 
                className="object-cover border border-white/10 p-4"
             />
             <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-gold/20 -z-10 hidden md:block" />
          </div>
        </div>

        {/* Attractions */}
        {dest.attractions && dest.attractions.length > 0 && (
          <div className="mb-32">
            <h2 className="text-center text-4xl font-display text-snow mb-20">Key Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dest.attractions.map((attr, i) => {
                const name = typeof attr === 'string' ? attr : attr.name;
                const description = typeof attr === 'string' ? '' : attr.description;
                return (
                  <div key={i} className="glass-card p-10 group hover:border-gold/50 transition-all">
                    <h3 className="text-2xl font-display text-snow mb-4 group-hover:text-gold transition-colors">{name}</h3>
                    {description && <p className="text-text-muted leading-relaxed">{description}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
