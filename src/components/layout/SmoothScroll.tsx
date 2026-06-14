'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      // Instantly scroll to top and reset Lenis scroll calculations
      window.scrollTo(0, 0);
      lenisRef.current.scrollTo(0, { immediate: true });
      
      // Allow a brief delay for Next.js to complete page rendering, then force recalculate heights
      const timer = setTimeout(() => {
        lenisRef.current?.resize();
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
