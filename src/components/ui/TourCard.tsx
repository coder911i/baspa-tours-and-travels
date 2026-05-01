'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Tour } from '@/types';
import { cn } from '@/lib/utils';

export default function TourCard({ tour }: { tour: Tour }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Safe data access
  const displayImage = tour.images?.[0] || tour.image;
  const displayName = tour.title || tour.name || 'Expedition';
  const displayPrice = typeof tour.price === 'number' ? tour.price : tour.price.perPerson;

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[350px] md:w-[450px] h-[550px] shrink-0 group perspective-1000"
    >
      <Link href={`/tours/${tour.slug}`} className="block w-full h-full relative overflow-hidden bg-charcoal">
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <Image
            src={displayImage}
            alt={displayName}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-z-20">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-gold text-background text-[10px] font-bold uppercase tracking-widest">
              {tour.duration}
            </span>
            <span className={cn(
              "px-3 py-1 text-white text-[10px] font-bold uppercase tracking-widest",
              tour.difficulty === 'Easy' ? 'bg-green-600' : tour.difficulty === 'Moderate' ? 'bg-blue-600' : 'bg-red-600'
            )}>
              {tour.difficulty}
            </span>
          </div>

          <h3 className="text-3xl font-display text-snow mb-2 group-hover:text-gold transition-colors duration-300">
            {displayName}
          </h3>
          
          <p className="text-text-muted text-sm mb-6 line-clamp-2">
            {tour.tagline || tour.description.substring(0, 80) + '...'}
          </p>

          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Starting from</span>
              <span className="text-xl font-display text-snow">₹{displayPrice.toLocaleString()}</span>
            </div>
            <span className="text-gold text-sm font-medium uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
              View Expedition →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
