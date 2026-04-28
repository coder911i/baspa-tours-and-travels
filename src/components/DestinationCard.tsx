'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Destination } from '@/lib/types';

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-[500px] w-full overflow-hidden group"
    >
      <Link href={`/destinations/${destination.slug}`} className="block w-full h-full relative">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-2">{destination.elevation}</span>
          <h3 className="text-4xl font-display text-snow mb-2 group-hover:text-gold transition-colors">{destination.name}</h3>
          <p className="accent-text text-snow/70 text-lg mb-6">&quot;{destination.tagline}&quot;</p>
          <div className="w-12 h-[1px] bg-gold group-hover:w-full transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
