'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

interface BlogLayoutProps {
  title: string;
  readTime: string;
  publishDate: string;
  category: string;
  coverImage: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  readTime,
  publishDate,
  category,
  coverImage,
  children
}: BlogLayoutProps) {
  return (
    <main className="bg-background min-h-screen font-inter">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[65vh] flex items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full">
              {category}
            </span>
            <span className="text-text-muted text-[10px] uppercase tracking-widest font-bold">
              {publishDate} • {readTime} Read
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display text-snow max-w-5xl leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mt-6 border-t border-white/5 pt-6 w-fit"
          >
            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-display text-xs font-bold">
              B
            </div>
            <span className="text-xs text-snow/80 uppercase tracking-wider font-bold">
              By Baspa Tour Center Travels Team
            </span>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Article Content Column */}
          <div className="lg:w-2/3 space-y-12">
            <article 
              className="prose prose-invert max-w-none text-text-muted leading-relaxed text-base md:text-lg space-y-8"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              {children}
            </article>

            {/* Bottom CTA Block */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 space-y-6">
                <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold block">Exclusive Mountain Escapes</span>
                <h3 className="text-3xl md:text-5xl font-display text-snow leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Ready to Experience the High Altitudes?
                </h3>
                <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
                  Join Baspa Tour Center Travels on an exceptional journey. Experience local Chitkul guidance, premium 4x4 transport, and luxury homestays.
                </p>
                <div className="pt-4">
                  <Link href="/tours" className="btn-gold-filled py-4 px-12 text-xs rounded-full">
                    View Tour Packages ──→
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar CTA Column */}
          <div className="lg:w-1/3">
            <aside className="sticky top-32 space-y-8">
              {/* Tour Promotion Widget */}
              <div className="glass-card p-8 rounded-3xl border border-gold/10 space-y-6 shadow-2xl bg-black/40 backdrop-blur-md">
                <span className="text-gold text-[9px] uppercase tracking-widest font-bold block">Handcrafted Circuits</span>
                <h4 className="text-2xl font-display text-snow" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Himalayan Tour Circuits 2025
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Premium, all-inclusive tour packages starting at just **₹7,999** per person. Specialized in:
                </p>
                <ul className="space-y-3 text-xs text-snow/90">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> Spiti Summer Loop (8 Days)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> Spiti Motorcycle Expedition</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> Kinnaur Tibet Border Escape</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" /> Snowy Spiti Winter Safari</li>
                </ul>
                <div className="pt-4">
                  <Link href="/tours" className="w-full btn-gold-filled text-center block py-4 text-xs">
                    Explore Tour Packages
                  </Link>
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="p-6 rounded-2xl border border-white/5 bg-surface/30 space-y-4 text-center">
                <span className="text-text-muted text-[10px] uppercase tracking-widest font-bold block">Need Consultation?</span>
                <p className="text-xs text-text-muted leading-relaxed">
                  Call our base office in Sangla for a free travel consultation.
                </p>
                <Link href="/contact" className="text-gold text-xs font-bold tracking-wider hover:text-gold-light transition-colors uppercase block">
                  Contact Base Office ──→
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
