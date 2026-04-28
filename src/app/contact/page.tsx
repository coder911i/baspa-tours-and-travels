'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="space-y-12">
            <div>
              <span className="accent-text text-gold text-2xl block mb-4">Get in Touch</span>
              <h1 className="text-5xl md:text-7xl font-display text-snow mb-8">Begin Your <br /> Journey</h1>
              <p className="text-text-muted max-w-md">
                Have questions about a specific expedition or need a custom itinerary? Our mountain experts are here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">Name</label>
                  <input type="text" required className="w-full bg-charcoal border border-white/10 p-4 text-snow focus:border-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">Email</label>
                  <input type="email" required className="w-full bg-charcoal border border-white/10 p-4 text-snow focus:border-gold outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">Phone</label>
                <input type="tel" required className="w-full bg-charcoal border border-white/10 p-4 text-snow focus:border-gold outline-none transition-colors" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">Message</label>
                <textarea rows={5} required className="w-full bg-charcoal border border-white/10 p-4 text-snow focus:border-gold outline-none transition-colors" />
              </div>
              <button type="submit" className="btn-gold-filled w-full py-5 text-sm uppercase tracking-widest font-bold">
                Send Message →
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-16">
            <div className="glass-card p-12 space-y-12">
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Base Office</h4>
                <p className="text-snow text-lg">Main Bazaar, Sangla, <br /> Himachal Pradesh - 172106</p>
              </div>
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Enquiries</h4>
                <p className="text-snow text-lg">+91 98765 43210</p>
                <p className="text-snow text-lg">hello@baspatravels.com</p>
              </div>
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Social Connect</h4>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'Twitter'].map(s => (
                    <a key={s} href="#" className="text-text-muted hover:text-gold transition-colors text-sm underline decoration-gold/30">{s}</a>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                 <a href="https://wa.me/919876543210" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div>
                      <p className="text-snow font-bold">Fast Response</p>
                      <p className="text-text-muted text-sm uppercase tracking-widest">Connect via WhatsApp</p>
                    </div>
                 </a>
              </div>
            </div>
            
            <div className="w-full h-80 bg-charcoal border border-white/10 relative overflow-hidden">
               {/* Map Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-text-muted uppercase tracking-[0.4em] text-xs">Google Maps Integration</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
