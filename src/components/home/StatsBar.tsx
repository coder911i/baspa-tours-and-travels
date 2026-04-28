'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { label: 'Years', value: 12, suffix: '+' },
  { label: 'Travelers', value: 847, suffix: '+' },
  { label: 'Tours', value: 15, suffix: '+' },
  { label: 'Rating', value: 4.9, suffix: '★' },
];

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      stats.forEach((_, i) => {
        const target = { val: 0 };
        const element = document.getElementById(`stat-value-${i}`);
        if (element) {
          gsap.to(target, {
            val: stats[i].value,
            duration: 2,
            scrollTrigger: {
              trigger: barRef.current,
              start: 'top 90%',
            },
            onUpdate: () => {
              element.innerText = target.val.toFixed(i === 3 ? 1 : 0);
            },
          });
        }
      });
    }, barRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={barRef} className="w-full bg-charcoal border-y border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center md:border-r last:border-r-0 border-white/10 px-4">
            <div className="text-4xl md:text-5xl font-display text-gold mb-2">
              <span id={`stat-value-${i}`}>0</span>
              <span>{stat.suffix}</span>
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-text-muted font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
