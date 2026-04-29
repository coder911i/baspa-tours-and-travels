'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { tours } from '@/lib/data/tours';
import { SITE_CONFIG, formatWhatsAppLink } from '@/lib/config';
import { cn } from '@/lib/utils';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    tourId: tours[0].id,
    date: '',
    adults: 2,
    children: 0,
    type: 'Group',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const selectedTour = tours.find(t => t.id === formData.tourId) || tours[0];
  const totalPrice = (selectedTour.price * formData.adults) + (selectedTour.price * 0.5 * formData.children);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Booking Request:
Tour: ${selectedTour.title}
Date: ${formData.date}
Travelers: ${formData.adults} Adults, ${formData.children} Children
Type: ${formData.type}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Special Requests: ${formData.message}`;

    const whatsappUrl = formatWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, message);
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Info */}
            <div>
              <span className="accent-text text-gold text-xl block mb-6">Reservation</span>
              <h1 className="text-5xl md:text-7xl font-display text-snow mb-8">Secure Your <br /><span className="text-gold italic">Expedition</span></h1>
              <p className="text-text-muted text-lg mb-12 max-w-md">
                Our windows of opportunity are limited. Complete the request to hold your spot. Our expedition experts will contact you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="p-8 border border-white/5 bg-surface/50 rounded-2xl">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Included in Package</h4>
                  <ul className="space-y-3 text-sm text-text-muted">
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> Luxury Stays & Camps</li>
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> Expert Local Guides</li>
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> All Inner-line Permits</li>
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> Premium Logistics (4x4)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="glass-card p-8 md:p-12 relative">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-4xl text-gold">✓</span>
                  </div>
                  <h2 className="text-3xl font-display text-snow mb-4">Request Received</h2>
                  <p className="text-text-muted mb-8">
                    We've opened WhatsApp to finalize your booking. If it didn't open, please check your browser pop-up settings.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-gold uppercase tracking-widest text-xs font-bold border-b border-gold"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Select Expedition</label>
                      <select 
                        value={formData.tourId}
                        onChange={(e) => setFormData({...formData, tourId: e.target.value})}
                        className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                      >
                        {tours.map(t => (
                          <option key={t.id} value={t.id}>{t.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Preferred Date</label>
                      <input 
                        type="date" 
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Adults</label>
                      <input 
                        type="number" 
                        min="1"
                        value={formData.adults}
                        onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}
                        className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Children</label>
                      <input 
                        type="number" 
                        min="0"
                        value={formData.children}
                        onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}
                        className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Type</label>
                      <select 
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
                      >
                        <option>Group</option>
                        <option>Private</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-white/5">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors"
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors"
                      />
                    </div>
                    <textarea 
                      placeholder="Special Requests or Questions" 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-8 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Estimated Total</p>
                      <p className="text-2xl font-display text-gold">₹{totalPrice.toLocaleString()}</p>
                    </div>
                    <button type="submit" className="btn-gold-filled">
                      Submit Request ──→
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
