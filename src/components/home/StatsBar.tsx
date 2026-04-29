'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import { SITE_CONFIG } from '@/lib/config';

const StatsOrbs3D = dynamic(() => import('@/components/3d/StatsOrbs3D'), { ssr: false });

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const elements = barRef.current?.querySelectorAll('.stat-value');
    if (elements) {
      elements.forEach((el, i) => {
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
  }, []);

  return (
    <div ref={barRef} className="w-full bg-charcoal border-y border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <StatsOrbs3D />
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
