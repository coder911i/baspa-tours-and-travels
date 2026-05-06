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
      gsap.set(logoRef.current, { opacity: 0, scale: 0.85, filter: 'drop-shadow(0 0 0px rgba(59,130,246,0))' });
      gsap.set(taglineRef.current, { opacity: 0, y: 10 });
      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left' });

      // Simulate progress for the first 2s
      gsap.to({}, {
        duration: 2.5,
        onUpdate: function() {
          setProgress(Math.round(this.progress() * 100));
          gsap.set(progressRef.current, { scaleX: this.progress() });
        }
      });

      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power3.out',
      })
      .to(logoRef.current, {
        filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.4))',
        duration: 1.5,
        repeat: -1,
        yoyo: true
      }, "-=1")
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }, "-=1")
      .to({}, { duration: 1 }) // Buffer
      .to(screenRef.current, {
        opacity: 0,
        duration: 1.5,
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
      {/* Ambient Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="flex flex-col items-center max-w-sm w-full px-12 z-10">
        <div ref={logoRef} className="relative w-[280px] h-[280px] mb-12">
          <Image
            src="/images/baspa_fial_logo.png"
            alt="Baspa Travels Logo"
            fill
            className="object-contain brightness-110 saturate-150 contrast-125"
            style={{ 
              filter: 'invert(67%) sepia(85%) saturate(3015%) hue-rotate(185deg) brightness(101%) contrast(101%)' 
            }}
            priority
          />
        </div>
        
        <div ref={taglineRef} className="text-center w-full">
          <p className="text-blue-400 font-accent italic text-lg md:text-xl tracking-[0.3em] mb-12 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            Where Mountains Meet Luxury
          </p>
          
          <div className="relative w-full h-[1px] bg-white/5 overflow-hidden rounded-full">
            <div 
              ref={progressRef}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 origin-left"
            />
          </div>
          <div className="mt-6 flex justify-between items-center text-[9px] uppercase tracking-[0.6em] font-bold">
            <span className="text-blue-400/40 italic">Elevating</span>
            <span className="text-blue-400">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
