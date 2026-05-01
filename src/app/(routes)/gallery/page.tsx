import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalleryContent from '@/components/sections/GalleryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Baspa Travels',
  description: 'A visual journal of our expeditions across the Himalayas. Experience the raw majesty of high altitudes through our lens.',
};

export default function GalleryPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <GalleryContent />
      <Footer />
    </main>
  );
}
