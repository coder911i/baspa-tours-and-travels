'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_CONFIG } from '@/lib/config';

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const elements = barRef.current?.querySelectorAll('.stat-value');
    if (elements && elements.length > 0) {
      Array.from(elements).forEach((el, i) => {
        if (!SITE_CONFIG.STATS[i]) return;
        const targetValue = SITE_CONFIG.STATS[i].value;
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 85%",
          },
          onUpdate: () => {
            if (el) el.textContent = obj.val % 1 === 0 ? Math.floor(obj.val).toString() : obj.val.toFixed(1);
          }
        });
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={barRef} className="w-full bg-charcoal border-y border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Decorative orbs - CSS only */}
        <div className="h-40 w-full mb-8 flex items-center justify-center gap-16 relative">
          {['#C9A84C', '#C9A84C', '#C9A84C', '#C9A84C'].map((color, i) => (
            <div 
              key={i}
              className="w-12 h-12 rounded-full opacity-60 animate-pulse"
              style={{ 
                background: `radial-gradient(circle, ${color}, transparent)`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: `0 0 30px ${color}40`
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {SITE_CONFIG.STATS.map((stat) => (
            <div key={stat.label} className="text-center md:border-r last:border-r-0 border-white/10 px-4">
              <div className="text-4xl md:text-5xl font-display text-gold mb-2">
                <span className="stat-value">0</span>
                {stat.suffix}
              </div>
              <p className="text-text-muted text-[10px] uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
