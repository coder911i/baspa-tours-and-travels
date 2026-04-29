'use client';

import React, { useState } from 'react';
import { formatPrice } from '@/lib/utils';
import { Tour } from '@/lib/types';
import { SITE_CONFIG, formatWhatsAppLink } from '@/lib/config';
import toast from 'react-hot-toast';

export default function BookingWidget({ tour }: { tour: Tour }) {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [type, setType] = useState('Group');

  // Harmonize price access (BUG-015 check)
  const basePrice = typeof tour.price === 'number' ? tour.price : tour.price.perPerson;
  const totalPrice = basePrice * guests;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error('Please select a travel date');
      return;
    }

    const message = `Hi! I want to book the ${tour.title} for ${guests} travelers on ${date}. (Type: ${type})`;
    const whatsappUrl = formatWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, message);
    window.open(whatsappUrl, '_blank');
    toast.success('Opening WhatsApp for your booking...');
  };

  return (
    <div className="glass-card p-8 sticky top-32 border-gold/10" id="booking-widget">
      <div className="mb-8 pb-8 border-b border-white/10">
        <span className="text-gold text-[10px] uppercase tracking-widest font-bold block mb-2">Expedition Price</span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-display text-snow">₹{basePrice.toLocaleString()}</span>
          <span className="text-text-muted text-sm">/ person</span>
        </div>
      </div>

      <form onSubmit={handleBook} className="space-y-6">
        <div>
          <label className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">Select Date</label>
          <input
            type="date"
            required
            min={new Date().toISOString().split('T')[0]} // BUG-013 Fix
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-background border border-white/10 p-4 text-snow outline-none focus:border-gold transition-colors text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">Travelers</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full bg-background border border-white/10 p-4 text-snow outline-none focus:border-gold transition-colors text-sm"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">Tour Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-background border border-white/10 p-4 text-snow outline-none focus:border-gold transition-colors text-sm"
            >
              <option>Group</option>
              <option>Private</option>
            </select>
          </div>
        </div>

        <div className="py-6 border-t border-white/5 space-y-3">
          <div className="flex justify-between text-xs">
            <span className="text-text-muted uppercase tracking-widest">Base Rate (x{guests})</span>
            <span className="text-snow">₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-xl font-display border-t border-white/5 pt-4">
            <span className="text-snow">Estimated</span>
            <span className="text-gold">₹{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <button type="submit" className="w-full btn-gold-filled py-5 text-xs group">
          Book This Expedition ──→
        </button>
        
        <p className="text-[9px] text-text-muted text-center uppercase tracking-widest leading-relaxed">
          * Final price may vary based on customization.<br />
          Free consultation with local experts.
        </p>
      </form>
    </div>
  );
}
