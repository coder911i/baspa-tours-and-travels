import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <span className="accent-text text-gold text-xl block mb-6">Off The Map</span>
      <h1 className="text-5xl md:text-8xl font-display text-snow mb-8">404</h1>
      <p className="text-text-muted text-xl mb-12 max-w-md mx-auto italic font-display">
        &quot;Not all those who wander are lost, but this path seems to have no summit.&quot;
      </p>
      <Link href="/" className="btn-gold-filled group">
        Return to the Main Trail ──→
      </Link>
    </div>
  );
}
