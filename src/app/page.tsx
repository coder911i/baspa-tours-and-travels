import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroContent from '@/components/home/HeroContent';
import StatsBar from '@/components/home/StatsBar';
import FeaturedTours from '@/components/home/FeaturedTours';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ItineraryPreview from '@/components/home/ItineraryPreview';
import GalleryStrip from '@/components/home/GalleryStrip';
import Testimonials from '@/components/home/Testimonials';
import BookingCTA from '@/components/home/BookingCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';

const HeroScene3D = dynamic(() => import('@/components/3d/HeroScene3D'), { ssr: false });
const GlobeSection = dynamic(() => import('@/components/home/GlobeSection'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <HeroScene3D />
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
