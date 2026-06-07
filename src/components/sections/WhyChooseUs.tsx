'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '500+',
    label: 'Happy Travelers',
    desc: 'Hundreds of adventurers have traversed the high valleys of Spiti and Kinnaur with us.'
  },
  {
    number: '8+',
    label: 'Years Experience',
    desc: 'Local expertise and deep geographical knowledge of the terrain since 2016.'
  },
  {
    number: '15+',
    label: 'Routes Explored',
    desc: 'From flagship circuits to custom high-altitude trails off the beaten path.'
  },
  {
    number: 'Zero',
    label: 'Hidden Costs',
    desc: 'Transparent pricing with all permits, stays, and essential transport included.'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-center text-center hover:border-gold/30 transition-all duration-500"
            >
              <div className="text-5xl md:text-7xl font-display text-gold font-bold mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-snow mb-3 uppercase tracking-wider font-body">
                {stat.label}
              </h3>
              <p className="text-text-muted leading-relaxed text-sm font-body">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
