'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, Image as DreiImage, Float } from '@react-three/drei';
import * as THREE from 'three';

const IMAGES = [
  'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000',
  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000',
  'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?q=80&w=1000',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000',
  'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1000',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000',
  'https://images.unsplash.com/photo-1544084944-15269ec7b5a0?q=80&w=1000',
];

function Card({ url, angle, radius }: { url: string; angle: number; radius: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  return (
    <group position={[x, 0, z]} rotation={[0, angle, 0]}>
      <DreiImage
        url={url}
        scale={[2.4, 1.6]}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
      />
    </group>
  );
}

function Carousel() {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 6;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {IMAGES.map((url, i) => (
        <Card 
          key={i} 
          url={url} 
          angle={(i / IMAGES.length) * Math.PI * 2} 
          radius={radius} 
        />
      ))}
    </group>
  );
}

export default function Gallery3DCarousel() {
  return (
    <div className="h-[500px] w-full bg-dark/50 border-y border-white/5 my-32 cursor-grab active:cursor-grabbing">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={40} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Carousel />
      </Canvas>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <h3 className="text-2xl font-display text-snow mb-2">Infinite Perspective</h3>
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold">3D Rotating Gallery Carousel</p>
      </div>
    </div>
  );
}
