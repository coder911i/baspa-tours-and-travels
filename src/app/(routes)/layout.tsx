import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import dynamic from 'next/dynamic';
import LoadingScreen from "@/components/layout/LoadingScreen";

const SmoothScroll = dynamic(() => import('@/components/layout/SmoothScroll'), { ssr: false });
// const GlobalParticles = dynamic(() => import('@/components/3d/GlobalParticles'), { ssr: false });

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

export const metadata: Metadata = {
  title: 'Baspa Travels | Premium Himalayan Expeditions',
  description: 'Handcrafted luxury journeys to the heart of the Himalayas. Experience Chitkul, Spiti, and Kinnaur with expert guidance.',
  openGraph: {
    title: 'Baspa Travels',
    description: 'Bespoke mountain adventures in Himachal Pradesh.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
      >
        <LoadingScreen />
        {/* <GlobalParticles /> */}
        <SmoothScroll>
          <Toaster position="bottom-right" toastOptions={{
            style: {
              background: "#1C1F26",
              color: "#F0EDE8",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }} />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
