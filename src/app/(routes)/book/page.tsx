'use client';

import React, { useState, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { tours } from '@/lib/data/tours';
import { SITE_CONFIG } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';
import { useReviews } from '@/hooks/useReviews';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  tourName: string;
  tourSlug: string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
  accommodation: string;
  specialRequirements: string;
  hearAboutUs: string;
  budget: string;
  sourcePage: string;
}

function BookingFormInner() {
  const searchParams = useSearchParams();
  const tourFromUrl = searchParams.get('tour') || '';
  const tourSlugFromUrl = searchParams.get('slug') || '';

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    tourName: '',
    tourSlug: '',
    departureDate: '',
    returnDate: '',
    adults: 2,
    children: 0,
    accommodation: 'Standard',
    specialRequirements: '',
    hearAboutUs: '',
    budget: '',
    sourcePage: '/book',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFormData(prev => ({
        ...prev,
        sourcePage: window.location.pathname + window.location.search
      }));
    }
  }, []);

  // Pre-fill tour and itinerary choices if query parameters exist
  useEffect(() => {
    const dateFromUrl = searchParams.get('date') || '';
    const guestsFromUrl = searchParams.get('guests') ? parseInt(searchParams.get('guests')!) : 0;

    setFormData(prev => ({
      ...prev,
      tourName: tourFromUrl || (tours.length > 0 ? tours[0].title : ''),
      tourSlug: tourSlugFromUrl || (tours.length > 0 ? tours[0].slug : ''),
      departureDate: dateFromUrl || prev.departureDate,
      adults: guestsFromUrl || prev.adults
    }));
  }, [tourFromUrl, tourSlugFromUrl, searchParams]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleTourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTitle = e.target.value;
    const selected = tours.find(t => t.title === selectedTitle);
    setFormData(prev => ({
      ...prev,
      tourName: selectedTitle,
      tourSlug: selected ? selected.slug : 'custom-tour'
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!formData.tourName) {
      setErrorMsg('Please select an expedition.');
      return;
    }
    if (!formData.departureDate) {
      setErrorMsg('Please select a departure date.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus('error');
        setErrorMsg(result.error || 'A problem occurred. Please WhatsApp or call us directly.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your internet connection and try again.');
    }
  };

  if (status === 'success') {
    const whatsappMsg = `Namaste! I have submitted a booking request for ${formData.tourName} starting ${formData.departureDate} for ${formData.adults} Adults. Please confirm.`;
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || SITE_CONFIG.WHATSAPP_NUMBER;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/30">
          <span className="text-4xl text-gold">✓</span>
        </div>
        <h2 className="text-4xl font-display text-snow mb-4">Request Logged!</h2>
        <p className="text-text-muted mb-6 max-w-md mx-auto">
          Thank you <strong>{formData.fullName}</strong>. Your booking details have been secured in our system. We will contact you within 24 hours.
        </p>

        <div className="bg-[#141414] border border-gold/10 rounded-2xl p-6 text-left max-w-md mx-auto mb-8 shadow-xl">
          <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold block mb-3">Booking Summary</span>
          <div className="space-y-2 text-sm text-snow/90">
            <div><span className="text-text-muted">Tour:</span> {formData.tourName}</div>
            <div><span className="text-text-muted">Departure:</span> {formData.departureDate}</div>
            <div><span className="text-text-muted">Travelers:</span> {formData.adults} Adults {formData.children > 0 ? `, ${formData.children} Children` : ''}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-filled py-4 px-8 rounded-full flex items-center gap-2"
          >
            Confirm on WhatsApp →
          </a>
          <button 
            onClick={() => setStatus('idle')}
            className="text-text-muted hover:text-gold uppercase tracking-widest text-xs font-bold transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-4 text-red-300 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Traveler Personal details */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name *</label>
            <input 
              type="text" 
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Phone Number *</label>
            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Tour details */}
      <div className="space-y-6 pt-6 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Select Expedition *</label>
            <select 
              name="tourName"
              value={formData.tourName}
              onChange={handleTourChange}
              className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
            >
              <option value="">-- Choose Tour --</option>
              {tours.map(t => (
                <option key={t.id} value={t.title}>{t.title} ({t.duration})</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Departure Date *</label>
            <input 
              type="date" 
              name="departureDate"
              required
              min={new Date().toISOString().split('T')[0]}
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Adults *</label>
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Children</label>
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full bg-background border border-white/10 rounded-none px-4 py-3 text-snow text-sm focus:border-gold outline-none transition-colors"
              >
                {[0,1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n === 0 ? 'None' : `${n} Child`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences & Special Requests */}
      <div className="space-y-6 pt-6 border-t border-white/5">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Special Requests or Requirements</label>
          <textarea 
            name="specialRequirements"
            placeholder="Vegetarian preference, medical conditions, custom route requests, or other details..." 
            rows={3}
            value={formData.specialRequirements}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors resize-none text-sm"
          />
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">Assisted Support</p>
          <p className="text-xs text-snow/60">Verification via WhatsApp / Call</p>
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="btn-gold-filled w-full sm:w-auto min-w-[200px]"
        >
          {status === 'loading' ? 'Submitting Request...' : 'Secure Booking Request'}
        </button>
      </div>
    </form>
  );
}

export default function BookingPage() {
  const { reviewUrl, trackReviewClick } = useReviews();
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Context Info */}
            <div>
              <span className="accent-text text-gold text-xl block mb-6">Reservation</span>
              <h1 className="text-5xl md:text-7xl font-display text-snow mb-8">Secure Your <br /><span className="text-gold italic">Expedition</span></h1>
              <p className="text-text-muted text-lg mb-12 max-w-md">
                Our windows of opportunity are limited. Complete the request to log your spot. Our expedition experts will contact you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="p-8 border border-white/5 bg-surface/50 rounded-2xl">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Included in Package</h4>
                  <ul className="space-y-3 text-sm text-text-muted">
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> Luxury Stays & Homestays</li>
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> Expert Local Guides from Chitkul</li>
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> All Inner-line Permits & Clearances</li>
                    <li className="flex items-center gap-3"><span className="w-1 h-1 bg-gold rounded-full" /> Premium Logistics (4x4 Expedition Vehicles)</li>
                  </ul>
                </div>

                <div className="p-8 border border-white/5 bg-surface/50 rounded-2xl">
                  <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">⭐ Reviews & Ratings</h4>
                  <p className="text-text-muted text-sm mb-6">
                    Loved your last expedition with Baspa Travels? Share your story with other travelers by leaving a review on our Google page!
                  </p>
                  <a 
                    href={reviewUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={trackReviewClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-charcoal font-bold uppercase tracking-widest text-[10px] transition-all duration-300"
                  >
                    ⭐ Write a Review
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Google Sheets Connected Booking Form */}
            <div className="glass-card p-8 md:p-12 relative">
              <Suspense fallback={
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
                  <p className="text-gold text-xs uppercase tracking-widest">Loading details...</p>
                </div>
              }>
                <BookingFormInner />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
