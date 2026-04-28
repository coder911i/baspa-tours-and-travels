'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TourCard from '../TourCard';
import { tours } from '@/lib/data/tours';

export default function FeaturedTours() {
  const targetRef = useRef<HTMLDivElement>(null);
  const featured = tours.filter(t => t.featured);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-background pt-32">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="accent-text text-gold text-xl block mb-4"
          >
            Handcrafted Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-snow"
          >
            Signature Expeditions
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12">
          {featured.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
