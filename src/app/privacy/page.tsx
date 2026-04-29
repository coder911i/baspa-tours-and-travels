import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Baspa Travels',
  description: 'How we handle your data at Baspa Travels.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <span className="accent-text text-gold text-xl block mb-6">Legal</span>
        <h1 className="text-5xl font-display text-snow mb-12">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-gold max-w-none space-y-8 text-text-muted">
          <p>At Baspa Travels, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you book an expedition or contact us.</p>
          
          <div>
            <h3 className="text-snow font-bold text-xl mb-4">1. Information Collection</h3>
            <p>We collect information such as your name, email address, phone number, and travel preferences primarily through our booking and contact forms to facilitate your travel arrangements.</p>
          </div>

          <div>
            <h3 className="text-snow font-bold text-xl mb-4">2. Use of Data</h3>
            <p>Your data is used to customize your Himalayan experience, communicate trip details, and ensure your safety during expeditions. We do not sell your data to third parties.</p>
          </div>

          <div>
            <h3 className="text-snow font-bold text-xl mb-4">3. Security</h3>
            <p>We implement industry-standard security measures to protect your information from unauthorized access. However, no method of transmission over the internet is 100% secure.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
