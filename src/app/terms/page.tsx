import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Baspa Travels',
  description: 'Our terms and conditions for Himalayan expeditions.',
};

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <span className="accent-text text-gold text-xl block mb-6">Legal</span>
        <h1 className="text-5xl font-display text-snow mb-12">Terms of Service</h1>
        
        <div className="prose prose-invert prose-gold max-w-none space-y-8 text-text-muted">
          <p>By booking an expedition with Baspa Travels, you agree to the following terms and conditions. Please read them carefully before making a reservation.</p>
          
          <div>
            <h3 className="text-snow font-bold text-xl mb-4">1. Booking & Payments</h3>
            <p>A deposit is required to secure your spot on any expedition. Full payment must be completed at least 30 days prior to the departure date.</p>
          </div>

          <div>
            <h3 className="text-snow font-bold text-xl mb-4">2. Cancellation Policy</h3>
            <p>Cancellations made 45 days before the trip are eligible for a full refund minus processing fees. Cancellations within 30 days are subject to partial refunds as outlined in your specific itinerary package.</p>
          </div>

          <div>
            <h3 className="text-snow font-bold text-xl mb-4">3. Health & Safety</h3>
            <p>Himalayan expeditions involve high altitudes. Travelers are responsible for ensuring they are physically fit and have consulted a doctor prior to the trip. Baspa Travels is not liable for health issues arising from undisclosed pre-existing conditions.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
