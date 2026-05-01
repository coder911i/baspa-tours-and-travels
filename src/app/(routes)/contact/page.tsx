'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG, formatWhatsAppLink } from '@/lib/constants';
import { toast } from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number").optional().or(z.literal('')),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);

  useEffect(() => {
    // Basic rate limit check
    const count = parseInt(localStorage.getItem('baspa_form_count') || '0');
    const lastSub = parseInt(localStorage.getItem('baspa_last_sub') || '0');
    const now = Date.now();
    
    // Reset count if an hour has passed
    if (now - lastSub > 3600000) {
      localStorage.setItem('baspa_form_count', '0');
      setSubmissionCount(0);
    } else {
      setSubmissionCount(count);
    }
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (submissionCount >= 3) {
      toast.error("Maximum submissions reached for this hour. Please try again later.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const whatsappMessage = `New Contact Form Submission:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}`;

      const whatsappUrl = formatWhatsAppLink(SITE_CONFIG.WHATSAPP_NUMBER, whatsappMessage);
      window.open(whatsappUrl, '_blank');
      
      const newCount = submissionCount + 1;
      setSubmissionCount(newCount);
      localStorage.setItem('baspa_form_count', newCount.toString());
      localStorage.setItem('baspa_last_sub', Date.now().toString());

      setIsSuccess(true);
      toast.success("Message sent! Opening WhatsApp...");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background min-h-screen font-inter">
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

            {/* Right: Form */}
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
                    We&apos;ll respond to your inquiry within 24 hours. Safe travels!
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-gold uppercase tracking-widest text-xs font-bold border-b border-gold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name</label>
                      <input 
                        {...register('name')}
                        type="text" 
                        className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-white/10'} py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Email Address</label>
                        <input 
                          {...register('email')}
                          type="email" 
                          className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-white/10'} py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors`}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Phone (Optional)</label>
                        <input 
                          {...register('phone')}
                          type="tel" 
                          className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-white/10'} py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors`}
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Your Message</label>
                      <textarea 
                        {...register('message')}
                        rows={4}
                        className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-white/10'} py-3 text-snow placeholder:text-text-muted focus:border-gold outline-none transition-colors resize-none`}
                      />
                      {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message.message}</p>}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-gold-filled w-full group relative overflow-hidden"
                  >
                    <span className={isSubmitting ? 'opacity-0' : 'opacity-100'}>Send Message ──→</span>
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-charcoal/20 border-t-charcoal rounded-full animate-spin" />
                      </div>
                    )}
                  </button>
                  <p className="text-[9px] text-text-muted uppercase tracking-widest text-center">
                    {submissionCount}/3 submissions used this hour
                  </p>
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

