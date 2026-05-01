'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TourCard3D from '@/components/3d/TourCard';
import { tours } from '@/lib/data/tours';

export default function FeaturedTours() {
  return (
    <section className="py-32 bg-background px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="accent-text text-gold text-xl block mb-4">Signature Expeditions</span>
            <h2 className="text-4xl md:text-6xl font-display text-snow mb-8">Choose Your Path to the Sky</h2>
            <p className="text-text-muted text-lg">
              From the last villages of Kinnaur to the cold deserts of Spiti, we have curated the 10 most iconic journeys in the Himalayas.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/tours" className="btn-gold">View All Expeditions</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
            >
              <TourCard3D tour={tour} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
