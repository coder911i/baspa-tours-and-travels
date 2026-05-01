import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 border-2 border-gold/20 rounded-full" />
        <div className="absolute inset-0 border-2 border-t-gold rounded-full animate-spin" />
      </div>
      <p className="mt-8 text-gold text-[10px] uppercase tracking-[0.5em] animate-pulse">
        Navigating the Peaks
      </p>
    </div>
  );
}
