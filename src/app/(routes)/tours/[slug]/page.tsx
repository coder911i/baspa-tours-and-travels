import { tours } from '@/lib/data/tours';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import TourDetailContent from '@/components/sections/TourDetailContent';
import TourSchema from '@/components/seo/TourSchema';

interface PageParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const slug = params.slug;

  if (slug === 'spiti-summer-circuit') {
    return {
      title: "Spiti Valley Summer Tour 8 Days | Delhi to Manali Circuit ₹16,999",
      description: "Complete Spiti Valley summer circuit — Delhi → Chitkul → Tabo → Kaza → Chandratal → Manali. 8 days, expert local guide, all meals included. Book at ₹16,999/person.",
      alternates: { canonical: "https://www.baspatravels.com/tours/spiti-summer-circuit" }
    };
  }

  if (slug === 'kinnaur-tibet-border') {
    return {
      title: "Kinnaur Chitkul Tour 4 Days | Tibet Border Trip from Delhi ₹7,999",
      description: "Kinnaur escape — Kalpa, Sangla, Chitkul, Indo-Tibet border. 4 days from Delhi or Shimla. Starting ₹7,999/person. Best Himalayan short trip.",
      alternates: { canonical: "https://www.baspatravels.com/tours/kinnaur-tibet-border" }
    };
  }

  if (slug === 'spiti-bike-expedition') {
    return {
      title: "Spiti Valley Bike Trip 8 Days | Manali to Kaza Motorcycle Expedition",
      description: "Epic Himalayan motorcycle expedition — Manali → Atal Tunnel → Chitkul → Tabo → Kaza → Chandratal. Royal Enfield friendly. Book your Spiti bike adventure.",
      alternates: { canonical: "https://www.baspatravels.com/tours/spiti-bike-expedition" }
    };
  }

  if (slug === 'spiti-winter-expedition') {
    return {
      title: "Spiti Valley Winter Tour 7 Days | Snow Spiti December–March ₹24,999",
      description: "Spiti in winter — frozen Chitkul, snow Kaza, Tabo monastery in snowfall, snow leopard zone. 7 days via Shimla route. Dec–Mar only. ₹24,999/person.",
      alternates: { canonical: "https://www.baspatravels.com/tours/spiti-winter-expedition" }
    };
  }

  // Fallback metadata
  const tour = tours.find((t) => t.slug === slug);
  return {
    title: `${tour?.title || 'Expedition'} | Baspa Tour Center Travels`,
    description: tour?.description || 'Premium Himalayan expeditions.',
    alternates: { canonical: `https://www.baspatravels.com/tours/${slug}` }
  };
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default function TourDetailPage({ params }: PageParams) {
  const tour = tours.find((t) => t.slug === params.slug);

  if (!tour) notFound();

  return (
    <main className="bg-background min-h-screen">
      {/* Schema Injection */}
      <TourSchema tour={tour} />
      
      <Navbar />
      <TourDetailContent tour={tour} />
      <Footer />
    </main>
  );
}
