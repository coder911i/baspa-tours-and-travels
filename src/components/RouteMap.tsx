'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface RouteStop {
  day: string;
  label: string;
  isStart?: boolean;
  isEnd?: boolean;
}

interface RouteMapProps {
  stops: RouteStop[];
  tourName?: string;
}

export default function RouteMap({ stops, tourName = "Route Map" }: RouteMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const dynamicHeight = stops.length * 90 + 120;
  const width = 480;

  // Generate coordinates for stops from bottom to top
  const points = stops.map((stop, idx) => {
    // S-curve wave centered at x=240
    const x = 240 + 40 * Math.sin((idx / (stops.length - 1 || 1)) * Math.PI * 1.6);
    // Spaced vertically from bottom (height - 60) to top (100)
    const y = dynamicHeight - 60 - (idx / (stops.length - 1 || 1)) * (dynamicHeight - 160);
    return { ...stop, x, y };
  });

  // Build cubic Bezier curve path connecting all points
  let pathD = "";
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpY1 = p0.y - (p0.y - p1.y) / 2;
      const cpY2 = p0.y - (p0.y - p1.y) / 2;
      pathD += ` C ${p0.x} ${cpY1}, ${p1.x} ${cpY2}, ${p1.x} ${p1.y}`;
    }
  }

  return (
    <div ref={containerRef} className="w-full flex justify-center py-10 px-4 print:hidden">
      <div 
        className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl border border-[#d6cfbe] bg-[#F5F0E4]"
        style={{ filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3))" }}
      >
        <svg 
          width="100%" 
          height={dynamicHeight} 
          viewBox={`0 0 ${width} ${dynamicHeight}`}
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{tourName || "Route Map"}</title>
          <defs>
            <style>{`
              @media (max-width: 400px) {
                .route-map-title { font-size: 20px !important; }
                .route-map-day { font-size: 9px !important; }
                .route-map-label { font-size: 10px !important; }
              }
            `}</style>
            {/* Subtle paper grain texture */}
            <filter id="subtle-grain" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.96  0 0 0 0 0.94  0 0 0 0 0.89  0 0 0 0.05 0" />
              <feBlend mode="multiply" in="SourceGraphic" in2="noise" />
            </filter>
          </defs>

          {/* Background Parchment Rect */}
          <rect 
            width="100%" 
            height="100%" 
            fill="#F5F0E4" 
            rx="16" 
            filter="url(#subtle-grain)" 
          />

          {/* Title and Flanking Lines */}
          <g>
            {/* y = 50 is the title centerline */}
            <line x1="40" y1="50" x2="160" y2="50" stroke="#D4A853" strokeWidth="1.5" />
            <line x1="320" y1="50" x2="440" y2="50" stroke="#D4A853" strokeWidth="1.5" />

            <text 
              x={width / 2} 
              y="56" 
              className="route-map-title"
              textAnchor="middle" 
              fill="#1A1A1A" 
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "22px",
                fontStyle: "italic",
                fontWeight: "600",
                letterSpacing: "0.02em"
              }}
            >
              Route Map
            </text>
          </g>

          {/* Dash S-Curve Pathway */}
          {pathD && (
            <>
              {/* Soft glow trail underneath */}
              <path 
                d={pathD} 
                fill="none" 
                stroke="#1A1A1A" 
                strokeWidth="4" 
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.05" 
              />
              {/* Main animated path */}
              <motion.path 
                d={pathD} 
                fill="none" 
                stroke="#1A1A1A" 
                strokeWidth="1.5" 
                strokeDasharray="6 4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
            </>
          )}

          {/* Map Stops */}
          {points.map((stop, idx) => {
            const isLeft = idx % 2 !== 0; // Odd stops: LEFT. Even stops: RIGHT.
            const badgeWidth = 170;
            const badgeHeight = 44;
            const rx = 8;

            const badgeX = isLeft ? 40 : 270;
            const badgeY = stop.y - badgeHeight / 2;

            return (
              <g key={idx}>
                {/* Leader Line */}
                <motion.line 
                  x1={isLeft ? 210 : stop.x} 
                  y1={stop.y} 
                  x2={isLeft ? stop.x : 270} 
                  y2={stop.y} 
                  stroke="#D4A853" 
                  strokeWidth="1" 
                  strokeDasharray="3 3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.8 + idx * 0.2 }}
                />

                {/* Animated Badge Group */}
                <motion.g 
                  initial={{ opacity: 0, y: -8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, delay: 1.8 + idx * 0.2, ease: "easeOut" }}
                >
                  {/* Badge Container */}
                  <rect 
                    x={badgeX} 
                    y={badgeY} 
                    width={badgeWidth} 
                    height={badgeHeight} 
                    rx={rx} 
                    fill="#D4A853" 
                  />

                  {/* Line 1: Day Number */}
                  <text 
                    x={badgeX + badgeWidth / 2} 
                    y={badgeY + 18} 
                    className="route-map-day"
                    textAnchor="middle" 
                    fill="#1A1A1A"
                    style={{
                      fontFamily: "var(--font-inter), 'DM Sans', sans-serif",
                      fontSize: "11px",
                      fontWeight: "700"
                    }}
                  >
                    {stop.day} —
                  </text>

                  {/* Line 2: Location Name */}
                  <text 
                    x={badgeX + badgeWidth / 2} 
                    y={badgeY + 32} 
                    className="route-map-label"
                    textAnchor="middle" 
                    fill="#1A1A1A"
                    style={{
                      fontFamily: "var(--font-inter), 'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: "500"
                    }}
                  >
                    {stop.label}
                  </text>
                </motion.g>

                {/* Stop Marker Node */}
                {stop.isStart || stop.isEnd ? (
                  // Teardrop Pin for Start & End
                  <motion.g 
                    transform={`translate(${stop.x - 14}, ${stop.y - 36})`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 1.8 + idx * 0.2 }}
                  >
                    <path 
                      d="M14 2C8.48 2 4 6.48 4 12c0 7.5 10 18 10 18s10-10.5 10-18c0-5.52-4.48-10-10-10zm0 13.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" 
                      fill="#1A1A1A" 
                      stroke="#D4A853"
                      strokeWidth="1"
                    />
                    <circle cx="14" cy="12" r="3.5" fill="#D4A853" />
                  </motion.g>
                ) : (
                  // Gold Circle Dot for Intermediate Stops
                  <motion.circle 
                    cx={stop.x} 
                    cy={stop.y} 
                    r="8" 
                    fill="#D4A853" 
                    stroke="#1A1A1A" 
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, delay: 1.8 + idx * 0.2 }}
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
