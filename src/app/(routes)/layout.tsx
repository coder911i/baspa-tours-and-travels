import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Cinzel } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import dynamic from 'next/dynamic';
import LoadingScreen from "@/components/layout/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SmoothScroll = dynamic(() => import('@/components/layout/SmoothScroll'), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://baspa-travels.com'),
  title: {
    default: 'Baspa Travels | Premium Himalayan Expeditions',
    template: '%s | Baspa Travels',
  },
  description: 'Handcrafted luxury journeys to the heart of the Himalayas. Experience Chitkul, Spiti, and Kinnaur with expert guidance and bespoke itineraries.',
  keywords: ['Luxury Travel India', 'Himalayan Expeditions', 'Kinnaur Tourism', 'Spiti Valley Tours', 'Premium Travel Agency India'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://baspa-travels.com',
    title: 'Baspa Travels | Premium Himalayan Expeditions',
    description: 'Bespoke mountain adventures in Himachal Pradesh. Where Mountains Meet Luxury.',
    images: [
      {
        url: '/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Baspa Travels Himalayan Scene',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baspa Travels | Premium Himalayan Expeditions',
    description: 'Bespoke mountain adventures in Himachal Pradesh.',
    images: ['/images/og-main.jpg'],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Baspa Travels",
    "image": "https://baspa-travels.com/images/baspa_fial_logo.png",
    "@id": "https://baspa-travels.com",
    "url": "https://baspa-travels.com",
    "telephone": "+91-1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Market, Sangla",
      "addressLocality": "Kinnaur",
      "addressRegion": "HP",
      "postalCode": "172106",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.4194,
      "longitude": 78.2449
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${cinzel.variable} antialiased`}
      >
        <LoadingScreen />
        <SmoothScroll>
          <Toaster position="bottom-right" toastOptions={{
            style: {
              background: "#1C1F26",
              color: "#F0EDE8",
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: "var(--font-inter)",
            },
          }} />
          {children}
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

