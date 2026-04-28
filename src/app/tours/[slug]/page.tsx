import { formatPrice } from '@/lib/utils';
import { tours } from '@/lib/data/tours';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingWidget from '@/components/BookingWidget';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={tour.images[0]}
            alt={tour.name}
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <span className="accent-text text-gold text-2xl block mb-4">{tour.tagline}</span>
          <h1 className="text-5xl md:text-8xl font-display text-snow max-w-4xl">{tour.name}</h1>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-charcoal border-y border-white/5 sticky top-[72px] z-30 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="flex gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Duration</span>
              <span className="text-snow font-bold">{tour.duration} Days</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Difficulty</span>
              <span className="text-snow font-bold capitalize">{tour.difficulty}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Max Altitude</span>
              <span className="text-snow font-bold">{tour.maxAltitude}m</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-text-muted block mb-1">Group Size</span>
              <span className="text-snow font-bold">{tour.groupSize.min}-{tour.groupSize.max} People</span>
            </div>
          </div>
          <button className="btn-gold-filled py-3">Book This Expedition</button>
        </div>
      </div>

      {/* Content Layout */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-20">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-display text-snow mb-8 border-b border-gold/20 pb-4 inline-block">Expedition Overview</h2>
              <p className="text-text-muted leading-relaxed text-lg mb-12">
                {tour.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-6">Highlights</h3>
                  <ul className="space-y-4">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-snow text-sm">
                        <span className="text-gold">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-6">What&apos;s Included</h3>
                  <ul className="space-y-4">
                    {tour.included.map((item, i) => (
                      <li key={i} className="flex gap-3 text-text-muted text-sm">
                        <span className="text-green-500">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-3xl font-display text-snow mb-12 border-b border-gold/20 pb-4 inline-block">The Journey</h2>
              <div className="space-y-8">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="glass-card p-8 group hover:border-gold/30 transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-16 h-16 shrink-0 bg-charcoal border border-white/10 flex items-center justify-center text-gold font-display text-2xl">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display text-snow mb-4 group-hover:text-gold transition-colors">{day.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-6">
                          {day.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-widest font-bold">
                          {day.altitude && <span className="px-3 py-1 bg-white/5 text-text-muted">Alt: {day.altitude}</span>}
                          {day.distance && <span className="px-3 py-1 bg-white/5 text-text-muted">Dist: {day.distance}</span>}
                          {day.accommodation && <span className="px-3 py-1 bg-white/5 text-text-muted">Stay: {day.accommodation}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BookingWidget tour={tour} />
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-charcoal border-t border-white/10 p-4 z-[40] lg:hidden flex items-center justify-between">
        <div>
          <span className="text-text-muted text-[10px] uppercase tracking-widest block">Starting from</span>
          <span className="text-xl font-display text-snow">{formatPrice(tour.price.perPerson)}</span>
        </div>
        <button className="btn-gold-filled py-3 px-6 text-xs">Book Now</button>
      </div>
    </main>
  );
}
