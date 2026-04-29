'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface TourCard3DProps {
  tour: {
    slug: string;
    title: string;
    price: number;
    duration: string;
    image: string;
    location: string;
    difficulty?: string;
  };
}

export default function TourCard3D({ tour }: TourCard3DProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[500px] w-full rounded-2xl bg-charcoal border border-white/5 overflow-hidden group cursor-pointer"
    >
      <Link href={`/tours/${tour.slug}`}>
        <div 
          style={{ transform: "translateZ(0px)" }}
          className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
        >
          <Image 
            src={tour.image} 
            alt={tour.title} 
            fill 
            className="object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-0 p-8 flex flex-col justify-end"
        >
          <div className="flex justify-between items-start mb-2">
            <span 
              style={{ transform: "translateZ(30px)" }}
              className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold block"
            >
              {tour.location}
            </span>
            {tour.difficulty && (
              <span 
                style={{ transform: "translateZ(30px)" }}
                className="px-2 py-1 bg-gold/20 text-gold text-[8px] uppercase tracking-widest font-bold border border-gold/20"
              >
                {tour.difficulty}
              </span>
            )}
          </div>
          <h3 
            style={{ transform: "translateZ(60px)" }}
            className="text-3xl font-display text-snow mb-4 leading-tight"
          >
            {tour.title}
          </h3>
          
          <div 
            style={{ transform: "translateZ(40px)" }}
            className="flex items-center justify-between pt-6 border-t border-white/10"
          >
            <div>
              <p className="text-text-muted text-[10px] uppercase tracking-widest mb-1">Starts From</p>
              <p className="text-gold font-bold text-xl">₹{tour.price.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-text-muted text-[10px] uppercase tracking-widest mb-1">Duration</p>
              <p className="text-snow font-bold">{tour.duration}</p>
            </div>
          </div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000" />
      </Link>
    </motion.div>
  );
}
