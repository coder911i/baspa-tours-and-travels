import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroContent from '@/components/sections/HeroContent';
import StatsBar from '@/components/sections/StatsBar';
import FeaturedTours from '@/components/sections/FeaturedTours';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ItineraryPreview from '@/components/sections/ItineraryPreview';
import GalleryStrip from '@/components/sections/GalleryStrip';
import Testimonials from '@/components/sections/Testimonials';
import BookingCTA from '@/components/sections/BookingCTA';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollProgress from '@/components/ui/ScrollProgress';
import GlobeSection from '@/components/sections/GlobeSection';

export const metadata: Metadata = {
  title: 'Baspa Travels | Where Mountains Meet Luxury',
  description: 'Experience the Himalayas like never before with Baspa Travels. Bespoke luxury expeditions to Kinnaur, Spiti, and beyond.',
};

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
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
        <GalleryStrip />
        <Testimonials />
        <BookingCTA />
      </div>

      <Footer />
    </main>
  );
}
