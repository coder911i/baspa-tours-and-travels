import { tours } from '@/lib/data/tours';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import TourDetailContent from '@/components/sections/TourDetailContent';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tour = tours.find((t) => t.slug === params.slug);
  return {
    title: `${tour?.title || 'Tour'} | Baspa Travels`,
    description: tour?.description || 'Premium Himalayan expeditions.',
  };
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = tours.find((t) => t.slug === params.slug);

  if (!tour) notFound();

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <TourDetailContent tour={tour} />
      <Footer />
    </main>
  );
}
