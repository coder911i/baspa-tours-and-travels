'use client';

import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '🏔',
    title: 'Expert Mountain Guides',
    desc: '12+ years navigating Himalayan terrain with safety as priority.'
  },
  {
    icon: '🏕',
    title: 'Curated Campsites',
    desc: 'Handpicked locations with premium equipment and stunning views.'
  },
  {
    icon: '🍽',
    title: 'Authentic Cuisine',
    desc: 'Local recipes and fresh ingredients to fuel your journey.'
  },
  {
    icon: '🚐',
    title: 'Safe Transport',
    desc: 'Modified 4x4 vehicles handled by experienced mountain drivers.'
  },
  {
    icon: '📡',
    title: '24/7 Support',
    desc: 'Satellite communication and emergency protocols in remote areas.'
  },
  {
    icon: '🌿',
    title: 'Responsible Tourism',
    desc: 'We leave no trace and actively support local mountain communities.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-charcoal px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="accent-text text-gold text-xl block mb-4">The Baspa Standard</span>
          <h2 className="text-4xl md:text-6xl font-display text-snow mb-6">Why Choose Us</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-display text-snow mb-4 group-hover:text-gold transition-colors">
                {reason.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
