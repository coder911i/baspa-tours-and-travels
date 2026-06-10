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
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[56px] md:h-auto flex items-center px-6 md:px-12 bg-transparent',
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-white/5 h-[56px] md:py-4 md:h-auto' 
          : 'md:py-6'
      )}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group max-w-[120px] md:max-w-none">
          <div className="relative w-6 h-6 md:w-12 md:h-12 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Baspa Travels Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display text-[10px] md:text-3xl text-snow tracking-tighter group-hover:text-gold transition-colors duration-300 truncate uppercase">
            BASPA <span className="text-gold">TRAVELS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm uppercase tracking-widest transition-colors duration-300 relative py-1',
                pathname === link.href ? 'text-gold' : 'text-text-primary hover:text-gold'
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gold"
                />
              )}
            </Link>
          ))}
          <Link href="/book" className="btn-gold ml-4">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-snow p-3 -mr-3 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          style={{ minHeight: '44px' }}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={cn("w-full h-[0.5px] bg-current transition-all duration-300", isMobileMenuOpen && "rotate-45 translate-y-[9px]")} />
            <span className={cn("w-full h-[0.5px] bg-current transition-all duration-300", isMobileMenuOpen && "opacity-0")} />
            <span className={cn("w-full h-[0.5px] bg-current transition-all duration-300", isMobileMenuOpen && "-rotate-45 -translate-y-[10px]")} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 w-full h-screen bg-[#0a0a0a] flex flex-col items-center justify-start pt-32 pb-12 gap-8 z-[100] md:hidden overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-display text-snow hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="btn-gold-filled mt-4"
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
