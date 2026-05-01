import React from 'react';
import Image from 'next/image';

export default function BookingCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
          alt="Mountain background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-8xl font-display text-snow mb-8 leading-tight">
          Ready to <br /> <span className="text-gold">Disappear?</span>
        </h2>
        <p className="text-text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Your next journey begins with one message. Let us handcrafted an expedition that will stay with you forever.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="/contact" className="btn-gold-filled px-12 py-5 text-lg">
            Book Your Expedition →
          </a>
          <a href="https://wa.me/919876543210" className="btn-gold px-12 py-5 text-lg">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
