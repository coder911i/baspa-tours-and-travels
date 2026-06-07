'use client';

import React, { useId } from 'react';

export interface RouteStop {
  name?: string;
  day?: number | string;
  highlight?: boolean;
  note?: string;
  isStart?: boolean;
  isEnd?: boolean;
  // Legacy support for old data format
  label?: string;
}

interface RouteMapProps {
  stops: RouteStop[];
  tourName?: string;
  color?: string; // default: #C9A84C
}

export default function RouteMap({ stops, tourName = "Route Map", color = "#C9A84C" }: RouteMapProps) {
  const uid = useId().replace(/:/g, '');
  const lineAnimId = `draw-route-${uid}`;
  const markerAnimId = `fade-marker-${uid}`;
  const pulseAnimId = `pulse-ring-${uid}`;

  if (!stops || stops.length === 0) return null;

  // Normalize stops — support both old format (label) and new format (name)
  const normalizedStops = stops.map(s => ({
    ...s,
    name: s.name || s.label || '',
  }));

  const SVG_WIDTH = 480;
  const STOP_HEIGHT = 80;
  const TOP_PADDING = 60;
  const BOTTOM_PADDING = 40;
  const SVG_HEIGHT = Math.max(340, normalizedStops.length * STOP_HEIGHT + TOP_PADDING + BOTTOM_PADDING);

  // Layout: points in a gentle S-curve from bottom to top
  const points = normalizedStops.map((stop, idx) => {
    const t = normalizedStops.length === 1 ? 0.5 : idx / (normalizedStops.length - 1);
    // S-curve: center is 240, amplitude 60px
    const x = 240 + 60 * Math.sin(t * Math.PI * 1.5);
    // Distribute from top (TOP_PADDING) to bottom (SVG_HEIGHT - BOTTOM_PADDING)
    const y = TOP_PADDING + t * (SVG_HEIGHT - TOP_PADDING - BOTTOM_PADDING);
    return { ...stop, x, y };
  });

  // Build smooth cubic bezier path through all points
  let pathD = '';
  if (points.length > 0) {
    pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cpX1 = (p0.x + p1.x) / 2;
      const cpX2 = (p0.x + p1.x) / 2;
      pathD += ` C ${cpX1} ${p0.y}, ${cpX2} ${p1.y}, ${p1.x} ${p1.y}`;
    }
  }

  // Approximate path length for stroke-dasharray
  // Use rough estimate: sum of segment distances * 1.2 for curves
  let approxLength = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const dx = points[i + 1].x - points[i].x;
    const dy = points[i + 1].y - points[i].y;
    approxLength += Math.sqrt(dx * dx + dy * dy) * 1.3;
  }
  const pathLength = Math.ceil(approxLength) || 1000;

  return (
    <div className="w-full print:hidden" style={{ background: 'transparent' }}>
      <style>{`
        @keyframes ${lineAnimId} {
          from { stroke-dashoffset: ${pathLength}; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ${markerAnimId} {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes ${pulseAnimId} {
          0%   { r: 10px; opacity: 0.6; }
          100% { r: 22px; opacity: 0; }
        }
        .route-line-${uid} {
          stroke-dasharray: ${pathLength};
          stroke-dashoffset: ${pathLength};
          animation: ${lineAnimId} 2s ease-in-out forwards;
        }
        .route-marker-${uid} {
          opacity: 0;
          animation: ${markerAnimId} 0.4s ease-out forwards;
          transform-box: fill-box;
          transform-origin: center;
        }
        .route-pulse-${uid} {
          animation: ${pulseAnimId} 1.6s ease-out infinite;
        }
      `}</style>

      <svg
        width="100%"
        height={SVG_HEIGHT}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
        aria-label={tourName}
      >
        <title>{tourName}</title>

        {/* Dark background */}
        <rect width="100%" height="100%" fill="#0D0D0D" rx="12" />

        {/* Subtle grid lines */}
        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1="40" y1={SVG_HEIGHT * t}
            x2={SVG_WIDTH - 40} y2={SVG_HEIGHT * t}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        ))}

        {/* Route title */}
        <text
          x={SVG_WIDTH / 2}
          y={28}
          textAnchor="middle"
          fill={color}
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "13px",
            fontStyle: "italic",
            letterSpacing: "0.04em",
            fontWeight: "600"
          }}
        >
          {tourName}
        </text>
        <line x1="60" y1="28" x2={SVG_WIDTH / 2 - 80} y2="28" stroke={color} strokeWidth="0.5" opacity="0.4" />
        <line x1={SVG_WIDTH / 2 + 80} y1="28" x2={SVG_WIDTH - 60} y2="28" stroke={color} strokeWidth="0.5" opacity="0.4" />

        {/* Glow trail under route */}
        {pathD && (
          <path
            d={pathD}
            fill="none"
            stroke={color}
            strokeWidth="6"
            opacity="0.08"
            strokeLinecap="round"
          />
        )}

        {/* Main animated route line — plays on mount */}
        {pathD && (
          <path
            d={pathD}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`route-line-${uid}`}
          />
        )}

        {/* Waypoint markers and labels */}
        {points.map((stop, idx) => {
          const r = stop.highlight ? 10 : 7;
          const fillColor = stop.isStart ? '#22c55e' : stop.isEnd ? '#ef4444' : color;
          const labelText = stop.name || '';
          const labelLines = labelText.split('\n');
          // Alternate label left/right
          const isRight = idx % 2 === 0;
          const labelX = isRight ? stop.x + 18 : stop.x - 18;
          const labelAnchor = isRight ? 'start' : 'end';
          const markerDelay = `${0.3 + idx * 0.18}s`;

          return (
            <g key={idx} className={`route-marker-${uid}`} style={{ animationDelay: markerDelay }}>
              {/* Pulse ring for highlighted stops */}
              {stop.highlight && (
                <circle
                  cx={stop.x}
                  cy={stop.y}
                  r={r}
                  fill="none"
                  stroke={color}
                  strokeWidth="1.5"
                  opacity="0"
                  className={`route-pulse-${uid}`}
                  style={{ animationDelay: markerDelay }}
                />
              )}

              {/* Marker circle */}
              <circle
                cx={stop.x}
                cy={stop.y}
                r={r}
                fill={fillColor}
                stroke="#0D0D0D"
                strokeWidth="2"
              />

              {/* Inner dot for highlight markers */}
              {stop.highlight && (
                <circle
                  cx={stop.x}
                  cy={stop.y}
                  r={3}
                  fill="#0D0D0D"
                />
              )}

              {/* Start/End icon glyph */}
              {(stop.isStart || stop.isEnd) && (
                <text
                  x={stop.x}
                  y={stop.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  style={{ fontSize: '8px', fontWeight: 'bold', fontFamily: 'sans-serif' }}
                >
                  {stop.isStart ? '▶' : '■'}
                </text>
              )}

              {/* Leader line to label */}
              <line
                x1={stop.x + (isRight ? r : -r)}
                y1={stop.y}
                x2={labelX - (isRight ? 4 : -4)}
                y2={stop.y}
                stroke={color}
                strokeWidth="0.8"
                opacity="0.4"
                strokeDasharray="2 2"
              />

              {/* Label background */}
              <rect
                x={isRight ? labelX - 2 : labelX - 90}
                y={stop.y - 14}
                width={92}
                height={labelLines.length > 1 ? 30 : 18}
                rx="3"
                fill="rgba(10,10,10,0.8)"
              />

              {/* Label text lines */}
              {labelLines.map((line, li) => (
                <text
                  key={li}
                  x={labelX}
                  y={stop.y - 5 + li * 13}
                  textAnchor={labelAnchor}
                  fill={stop.highlight ? color : '#E8E0D0'}
                  style={{
                    fontSize: stop.highlight ? '11px' : '10px',
                    fontFamily: 'system-ui, sans-serif',
                    fontWeight: stop.highlight ? '700' : '400',
                    letterSpacing: '0.02em',
                  }}
                >
                  {line}
                </text>
              ))}

              {/* Note badge for highlighted stops */}
              {stop.note && (
                <text
                  x={labelX}
                  y={stop.y + (labelLines.length > 1 ? 26 : 14)}
                  textAnchor={labelAnchor}
                  fill={color}
                  style={{
                    fontSize: '8px',
                    fontFamily: 'system-ui, sans-serif',
                    fontStyle: 'italic',
                    opacity: 0.7,
                  }}
                >
                  {stop.note.length > 28 ? stop.note.slice(0, 28) + '…' : stop.note}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
