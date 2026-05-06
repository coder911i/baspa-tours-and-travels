'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Tours', href: '/tours' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-700 py-6 px-6 md:px-12',
        isScrolled ? 'bg-[#050508]/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/images/baspa_fial_logo.png"
              alt="Logo"
              fill
              className="object-contain"
              style={{ 
                filter: 'invert(67%) sepia(85%) saturate(3015%) hue-rotate(185deg) brightness(101%) contrast(101%)' 
              }}
            />
          </div>
          <span className="font-display text-xl md:text-2xl text-snow tracking-tighter transition-all duration-500 group-hover:tracking-[0.1em]">
            BASPA <span className="text-blue-400 group-hover:text-blue-300 transition-colors">TRAVELS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative py-1',
                pathname === link.href ? 'text-blue-400' : 'text-text-primary/70 hover:text-blue-400'
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
              )}
            </Link>
          ))}
          <Link href="/book" className="px-6 py-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all duration-500 rounded-full ml-4 shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
            Reserve Expedition
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-snow p-3 -mr-3" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span className={cn("w-full h-[1px] bg-blue-400 transition-all duration-500", isMobileMenuOpen && "rotate-45 translate-y-[7.5px]")} />
            <span className={cn("w-full h-[1px] bg-blue-400 transition-all duration-500", isMobileMenuOpen && "opacity-0")} />
            <span className={cn("w-full h-[1px] bg-blue-400 transition-all duration-500", isMobileMenuOpen && "-rotate-45 -translate-y-[7.5px]")} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050508] flex flex-col items-center justify-center gap-10 z-40 md:hidden"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-display text-snow hover:text-blue-400 transition-all tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="px-10 py-4 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_10px_30px_rgba(59,130,246,0.3)] mt-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
