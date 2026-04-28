import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
            alt="Our Story"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 text-center">
          <span className="accent-text text-gold text-xl block mb-4">Dedicated to the Peaks</span>
          <h1 className="text-5xl md:text-8xl font-display text-snow">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-display text-snow">15 Years of Himalayan Expeditions</h2>
            <p className="text-text-muted leading-relaxed text-lg">
              Baspa Travels was born from a deep love for the high altitudes and the silent beauty of the Kinnaur and Spiti valleys. Founded by local mountain experts, we aim to bridge the gap between luxury travel and raw, authentic Himalayan experiences.
            </p>
            <p className="text-text-muted leading-relaxed">
              Our team consists of certified guides, local historians, and professional photographers who know every curve of the Baspa river and every peak of the Kinner Kailash. We don&apos;t just provide tours; we provide transformations.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-display text-gold mb-2">12+</p>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display text-gold mb-2">850+</p>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">Successful Trips</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=2000&auto=format&fit=crop"
              alt="Team in mountains"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Team */}
        <div className="mb-32">
          <h2 className="text-center text-4xl font-display text-snow mb-20">Meet the Guardians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Rigzin Negi', role: 'Founder & Lead Explorer', desc: '15 years in Himalayan expeditions.' },
              { name: 'Sonam Tsering', role: 'Operations Head', desc: 'Expert in remote logistics.' },
              { name: 'Tenzin Dorje', role: 'Lead Guide', desc: 'Certified Mountain Guide.' },
              { name: 'Maya Sharma', role: 'Photography Lead', desc: 'Capturing the soul of Spiti.' },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-charcoal">
                   <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-display text-snow mb-1 group-hover:text-gold transition-colors">{member.name}</h4>
                <p className="text-gold text-[10px] uppercase tracking-widest font-bold mb-3">{member.role}</p>
                <p className="text-text-muted text-xs px-4">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
