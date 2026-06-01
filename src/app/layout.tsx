import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Cinzel } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL('https://www.baspatravels.com'),
  title: {
    default: 'Baspa Tour Center Travels | Spiti Valley & Chitkul Tours',
    template: '%s | Baspa Tour Center Travels'
  },
  description: 'Best Spiti Valley tour packages from Delhi. Chitkul, Kinnaur, Tabo, Chandratal. Handcrafted Himalayan circuits starting ₹7,999. Expert local guides from Chitkul.',
  keywords: [
    'Spiti Valley tour package',
    'Chitkul tour from Delhi',
    'Spiti Valley trip 2025',
    'Kinnaur tour package',
    'Spiti winter tour',
    'best Spiti Valley travel agency',
    'Chitkul last village India tour',
    'Chandratal lake trip',
    'Himalayan tour operator',
    'Tabo monastery tour',
    'Hikkim post office tour',
    'Chicham bridge Spiti',
    'Spiti Valley bike trip',
    'budget Spiti tour package',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Baspa Tour Center Travels',
    images: [{ url: 'https://www.baspatravels.com/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image', site: '@baspatravels' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://www.baspatravels.com' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "name": "Baspa Tour Center Travels",
    "image": "https://www.baspatravels.com/og-image.jpg",
    "@id": "https://www.baspatravels.com",
    "url": "https://www.baspatravels.com",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chitkul Village",
      "addressLocality": "Sangla",
      "addressRegion": "Himachal Pradesh",
      "postalCode": "172107",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 31.3481, "longitude": 78.4395 },
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "20:00" },
    "sameAs": ["https://www.instagram.com/baspatravels", "https://wa.me/91XXXXXXXXXX"]
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
