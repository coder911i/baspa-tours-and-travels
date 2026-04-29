'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_CONFIG, formatWhatsAppLink } from '@/lib/config';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const whatsappMessage = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

      const whatsappUrl = formatWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, whatsappMessage);
      window.open(whatsappUrl, '_blank');
      
      setIsSuccess(true);
      toast.success("Message sent! Opening WhatsApp...");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Info */}
            <div>
              <span className="accent-text text-gold text-xl block mb-6">Connect With Us</span>
              <h1 className="text-5xl md:text-7xl font-display text-snow mb-8">Reach the <br /><span className="text-gold italic">Summit</span></h1>
              <p className="text-text-muted text-lg mb-12 max-w-md">
                Have questions about our expeditions? Our base office in Sangla is ready to assist you in planning your ultimate Himalayan escape.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-snow font-bold uppercase tracking-widest text-xs mb-2">Base Office</h4>
                    <p className="text-text-muted leading-relaxed">{SITE_CONFIG.ADDRESS}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-snow font-bold uppercase tracking-widest text-xs mb-2">Direct Line</h4>
                    <p className="text-text-muted leading-relaxed">{SITE_CONFIG.PHONE}</p>
                    <p className="text-text-muted leading-relaxed">{SITE_CONFIG.EMAIL}</p>
                  </div>
                </div>

                {/* Google Maps Integration (BUG-012) */}
                <div className="rounded-2xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.1234!2d78.2449!3d31.4194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e2fcf6a2df%3A0x6b70ca3a5c8d8a23!2sSangla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right: Form (BUG-011) */}
            <div className="glass-card p-8 md:p-12 relative h-fit">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-4xl text-gold">✓</span>
                  </div>
                  <h2 className="text-3xl font-display text-snow mb-4">Message Sent</h2>
                  <p className="text-text-muted mb-8">
                    We'll respond to your inquiry within 24 hours. Safe travels!
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-gold uppercase tracking-widest text-xs font-bold border-b border-gold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name</label>
                      <input 
                        type="text" 
                        required
                        minLength={2}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Phone (Optional)</label>
                        <input 
                          type="tel" 
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Your Message</label>
                      <textarea 
                        required
                        minLength={10}
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gold-filled w-full group"
                  >
                    {isSubmitting ? 'Ascending...' : 'Send Message ──→'}
                  </button>
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
