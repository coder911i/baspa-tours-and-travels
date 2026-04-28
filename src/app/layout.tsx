import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

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
  title: "Baspa Travels | Where The Roads End, We Begin",
  description: "Premium mountain travel company operating in Chitkul, Spiti Valley, Kinnaur, and Himachal Pradesh. Handcrafted journeys to the roof of India.",
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
