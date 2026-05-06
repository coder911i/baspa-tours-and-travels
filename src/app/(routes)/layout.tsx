'use client';

import { Toaster } from "react-hot-toast";
import dynamic from 'next/dynamic';
import LoadingScreen from "@/components/layout/LoadingScreen";

const SmoothScroll = dynamic(() => import('@/components/layout/SmoothScroll'), { ssr: false });

export default function RoutesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
