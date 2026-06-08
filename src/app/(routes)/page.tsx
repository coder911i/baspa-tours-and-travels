import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroContent from '@/components/sections/HeroContent';
import StatsBar from '@/components/sections/StatsBar';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Best Travel Agency in Himachal | Spiti Valley & Chitkul Tours',
  description: 'Baspa Tour Center Travels is the best travel agency in Himachal. Handcrafted, budget-friendly premium tour packages for Spiti Valley, Chitkul, Kinnaur, and Chandratal with experienced local guides.',
};

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#050508]" />
});

const FeaturedTours = dynamic(() => import('@/components/sections/FeaturedTours'), { ssr: false });
const GlobeSection = dynamic(() => import('@/components/sections/GlobeSection'), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: false });
const ItineraryPreview = dynamic(() => import('@/components/sections/ItineraryPreview'), { ssr: false });
const GalleryPreview = dynamic(() => import('@/components/sections/GalleryPreview'), { ssr: false });
const BookingCTA = dynamic(() => import('@/components/sections/BookingCTA'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <HeroScene />
        <HeroContent />
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-background">
        <StatsBar />
        <FeaturedTours />
        <GlobeSection />
        <WhyChooseUs />
        <ItineraryPreview />
        <GalleryPreview />
        <Testimonials />
        
        {/* Our Sightseeings Section */}
        <section className="py-24 px-6 md:px-12 bg-background border-t border-white/5 text-center">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Highlights
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#F5F0E8] mb-12">
              Our Sightseeings
            </h2>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface">
              <Image 
                src="/images/sightseeing_highlights.jpg"
                alt="Our Sightseeings"
                width={1200}
                height={1600}
                className="w-full h-auto object-contain mx-auto"
                priority
              />
            </div>
          </div>
        </section>

        <BookingCTA />
      </div>

      <Footer />
    </main>
  );
}
