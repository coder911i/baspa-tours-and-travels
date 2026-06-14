'use client';

import React, { useRef, useEffect } from 'react';

export default function HeroScene() {
  const videoUrl = 'https://res.cloudinary.com/dj2awcwfo/video/upload/q_auto,f_auto/Cinematic_travel_montage_K_u_1_e7z0os.mp4';
  const fallbackPoster = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=90'; // Chitkul (Priority 1)
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay failed or was prevented:", err);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#050508] overflow-hidden w-full h-full">
      {/* Cinematic Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={fallbackPoster}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ zIndex: 0 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={fallbackPoster}
          alt="Baspa Valley Chitkul Himachal Pradesh"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </video>

      {/* Subtle Dark Gradient Overlay for Readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 100%)',
          zIndex: 1
        }}
      />
    </div>
  );
}
