import { destinations } from '@/lib/data/destinations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import DestinationDetailContent from '@/components/DestinationDetailContent';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const dest = destinations.find((d) => d.slug === params.slug);
  return {
    title: `${dest?.name || 'Destination'} | Baspa Travels`,
    description: dest?.description || 'Explore the majestic territories of the Himalayas.',
  };
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const dest = destinations.find((d) => d.slug === params.slug);

  if (!dest) notFound();

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <DestinationDetailContent dest={dest} />
      <Footer />
    </main>
  );
}
