'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <span className="accent-text text-gold text-xl block mb-6">Expedition Interrupted</span>
      <h1 className="text-4xl md:text-6xl font-display text-snow mb-8">Even the Bravest Paths <br /><span className="text-gold italic">Have Storms</span></h1>
      <p className="text-text-muted text-lg mb-12 max-w-md mx-auto">
        We encountered a technical peak we couldn&apos;t summit. Our team has been notified.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button
          onClick={() => reset()}
          className="btn-gold-filled"
        >
          Try Scaling Again
        </button>
        <Link href="/" className="btn-gold">
          Return to Basecamp
        </Link>
      </div>
    </div>
  );
}
