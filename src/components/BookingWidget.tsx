'use client';

import React, { useState } from 'react';
import { formatPrice } from '@/lib/utils';
import { Tour } from '@/lib/types';
import toast from 'react-hot-toast';

export default function BookingWidget({ tour }: { tour: Tour }) {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [type, setType] = useState<'group' | 'private'>('group');

  const totalPrice = tour.price.perPerson * guests;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error('Please select a travel date');
      return;
    }
    toast.success('Booking request sent! Our experts will contact you shortly.');
  };

  return (
    <div className="glass-card p-8 sticky top-32">
      <div className="mb-8 pb-8 border-b border-white/10">
        <span className="text-text-muted text-xs uppercase tracking-widest block mb-2">From</span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-display text-snow">{formatPrice(tour.price.perPerson)}</span>
          <span className="text-text-muted text-sm">/ person</span>
        </div>
      </div>

      <form onSubmit={handleBook} className="space-y-6">
        <div>
          <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-charcoal border border-white/10 p-3 text-snow outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">Travelers</label>
            <input
              type="number"
              min="1"
              max={tour.groupSize.max}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full bg-charcoal border border-white/10 p-3 text-snow outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as 'group' | 'private')}
              className="w-full bg-charcoal border border-white/10 p-3 text-snow outline-none focus:border-gold transition-colors"
            >
              <option value="group">Group</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-muted">Base Price (x{guests})</span>
            <span className="text-snow">{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t border-white/10 pt-4">
            <span className="text-snow">Total Amount</span>
            <span className="text-gold">{formatPrice(totalPrice)}</span>
          </div>
        </div>

        <button type="submit" className="w-full btn-gold-filled py-4 text-sm">
          Book This Expedition →
        </button>
        
        <a 
          href={`https://wa.me/919876543210?text=Hi, I want to book ${tour.name} for ${guests} people on ${date}`}
          target="_blank"
          className="w-full btn-gold flex justify-center py-4 text-sm border-green-600 text-green-500 hover:bg-green-600 hover:text-white"
        >
          Ask on WhatsApp
        </a>

        <p className="text-[10px] text-text-muted text-center uppercase tracking-widest">
          Free cancellation up to 7 days before departure
        </p>
      </form>
    </div>
  );
}
