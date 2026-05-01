import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-32 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="flex flex-col items-start">
            <div className="relative h-20 w-32 mb-6">
              <Image 
                src="/images/baspa_fial_logo.png" 
                alt="Baspa Travels Logo" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gold font-accent italic text-sm tracking-widest mb-10">
              © 2025 Baspa Travels. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/tours" className="px-8 py-4 bg-gold text-charcoal font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all">
                Explore Expeditions
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-gold text-gold font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal transition-all">
                Consult an Expert
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/tours" className="text-text-muted hover:text-snow transition-colors">Expeditions</Link></li>
                <li><Link href="/destinations" className="text-text-muted hover:text-snow transition-colors">Territories</Link></li>
                <li><Link href="/gallery" className="text-text-muted hover:text-snow transition-colors">Visuals</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/about" className="text-text-muted hover:text-snow transition-colors">Our Story</Link></li>
                <li><Link href="/contact" className="text-text-muted hover:text-snow transition-colors">Base Office</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold uppercase tracking-widest text-[10px] font-bold mb-6">Connect</h4>
              <ul className="space-y-4 text-sm">
                {Object.entries(SITE_CONFIG.SOCIAL_LINKS).map(([name, url]) => (
                  url !== '#' && (
                    <li key={name}>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-snow transition-colors capitalize">
                        {name}
                      </a>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.2em] text-text-muted">
          <p>Handcrafted for the High Altitudes.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
