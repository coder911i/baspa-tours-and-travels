'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const screenRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on mount
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
      }
    });

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Initial states
    gsap.set(logoRef.current, { opacity: 0, scale: 0.85 });
    gsap.set(taglineRef.current, { opacity: 0, y: 10 });

    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power2.out',
    })
    .to({}, { duration: 0.8 }) // Hold
    .to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
    .to({}, { duration: 1.5 }) // Stay for a bit to reach 3s+ total
    .to(screenRef.current, {
      y: '-100vh',
      duration: 1.2,
      ease: 'power4.inOut',
    });

    return () => {
      document.body.style.overflow = 'auto';
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={screenRef}
      className="fixed inset-0 z-[1000] bg-[#050508] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <div ref={logoRef} className="relative w-[300px] h-[300px] mb-6">
          <Image
            src="/images/baspa_fial_logo.png"
            alt="Baspa Travels Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div ref={taglineRef} className="text-center">
          <p className="text-gold font-accent italic text-xl md:text-2xl tracking-[0.2em]">
            Where Mountains Meet Luxury
          </p>
        </div>
      </div>
    </div>
  );
}
