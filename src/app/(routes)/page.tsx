import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroContent from '@/components/sections/HeroContent';
import StatsBar from '@/components/sections/StatsBar';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollProgress from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  title: 'Baspa Travels | Where Mountains Meet Luxury',
  description: 'Experience the Himalayas like never before with Baspa Travels. Bespoke luxury expeditions to Kinnaur, Spiti, and beyond.',
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
const GalleryStrip = dynamic(() => import('@/components/sections/GalleryStrip'), { ssr: false });
const BookingCTA = dynamic(() => import('@/components/sections/BookingCTA'), { ssr: false });

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
