import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Cinzel, DM_Sans } from "next/font/google";
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

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    'Spiti Valley tour',
    'Kinnaur tour package',
    'Chitkul tour package',
    'Chandratal lake camp',
    'Delhi to Spiti Valley',
    'Delhi to Chitkul',
    'Baspa River tour',
    'Himalayan road trip',
    'Spiti winter expedition'
  ],
  authors: [{ name: 'Baspa Tour Center Travels' }],
  creator: 'Waterting Solutions',
  publisher: 'Baspa Tour Center Travels',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.baspatravels.com',
    title: 'Baspa Tour Center Travels | Spiti Valley & Chitkul Tours',
    description: 'Delhi se niklo, Spiti cross karo. Premium Himalayan expeditions to Chitkul, Spiti, and Kinnaur. Book your next tour package with local guides from Chitkul.',
    siteName: 'Baspa Tour Center Travels',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Baspa Tour Center Travels - Spiti Valley Panoramic View'
      }
    ]
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
    "telephone": "+91 94187 01460",
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
    "sameAs": ["https://www.instagram.com/baspatravels", "https://wa.me/919418701460"]
  };

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Disable right-click
                document.addEventListener('contextmenu', function(e) {
                  e.preventDefault();
                });
                
                // Disable developer shortcut keys
                document.addEventListener('keydown', function(e) {
                  // F12
                  if (e.keyCode === 123) {
                    e.preventDefault();
                  }
                  // Ctrl+Shift+I (Inspect)
                  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                    e.preventDefault();
                  }
                  // Ctrl+Shift+J (Console)
                  if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                    e.preventDefault();
                  }
                  // Ctrl+U (View Source)
                  if (e.ctrlKey && e.keyCode === 85) {
                    e.preventDefault();
                  }
                  // Ctrl+Shift+C (Inspect Element)
                  if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                    e.preventDefault();
                  }
                });

                // Clear console regularly and print security warning
                setInterval(function() {
                  console.clear();
                  console.log('%cWARNING!', 'color: red; font-size: 36px; font-weight: bold; text-shadow: 2px 2px 0px black;');
                  console.log('%cThis platform is protected by Waterting Solutions security filters. Direct inspection is prohibited.', 'color: #C9A84C; font-size: 14px; font-weight: bold;');
                }, 1000);
              }
            `
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${dmSans.variable} antialiased`}
      >
        <div className="grain-overlay" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
