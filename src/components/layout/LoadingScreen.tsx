'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial states
      gsap.set(logoRef.current, { opacity: 0, scale: 0.85 });
      gsap.set(taglineRef.current, { opacity: 0, y: 10 });
      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left' });

      // Simulate progress for the first 2s
      gsap.to({}, {
        duration: 2,
        onUpdate: function() {
          setProgress(Math.round(this.progress() * 100));
          gsap.set(progressRef.current, { scaleX: this.progress() });
        }
      });

      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power2.out',
      })
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, "-=0.5")
      .to({}, { duration: 0.5 }) // Buffer
      .to(screenRef.current, {
        y: '-100vh',
        duration: 1.2,
        ease: 'power4.inOut',
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = 'auto';
        }
      });

    }, screenRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={screenRef}
      className="fixed inset-0 z-[1000] bg-[#050508] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center max-w-sm w-full px-12">
        <div ref={logoRef} className="relative w-[240px] h-[240px] mb-8">
          <Image
            src="/images/baspa_fial_logo.png"
            alt="Baspa Travels Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <div ref={taglineRef} className="text-center mb-12">
          <p className="text-gold font-accent italic text-lg md:text-xl tracking-[0.2em] mb-8">
            Where Mountains Meet Luxury
          </p>
          
          <div className="relative w-full h-[1px] bg-white/10 overflow-hidden">
            <div 
              ref={progressRef}
              className="absolute inset-0 bg-gold origin-left"
            />
          </div>
          <div className="mt-4 text-gold/40 text-[10px] uppercase tracking-[0.5em]">
            Elevating {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}

