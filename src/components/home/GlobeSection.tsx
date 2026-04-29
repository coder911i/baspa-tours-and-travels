'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

const locations = [
  { name: 'Chitkul', pos: [1.2, 0.8, 1], alt: '3450m' },
  { name: 'Kaza', pos: [0.5, 1.5, 0.8], alt: '3800m' },
  { name: 'Kalpa', pos: [1.5, 0.5, 0.5], alt: '2960m' },
  { name: 'Sangla', pos: [1.3, 0.3, 1.2], alt: '2680m' },
  { name: 'Nako', pos: [0.2, 1.2, 1.5], alt: '3662m' },
  { name: 'Tabo', pos: [-0.5, 1, 1.8], alt: '3050m' },
];

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#111318"
          emissive="#C9A84C"
          emissiveIntensity={0.05}
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
      
      {locations.map((loc, i) => (
        <LocationMarker key={i} {...loc} />
      ))}
    </group>
  );
}

function LocationMarker({ name, pos, alt }: { name: string; pos: number[]; alt: string }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <group position={new THREE.Vector3(...pos).normalize().multiplyScalar(2.1)}>
      <mesh 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#E8C96D" : "#C9A84C"} />
      </mesh>
      
      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-surface/90 backdrop-blur-md border border-gold/50 p-3 whitespace-nowrap pointer-events-none">
            <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">{name}</p>
            <p className="text-snow text-[10px]">{alt}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

export default function GlobeSection() {
  return (
    <section className="py-32 bg-background h-[800px] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-32 text-center z-10">
        <span className="accent-text text-gold text-xl block mb-4">Regional Presence</span>
        <h2 className="text-4xl md:text-6xl font-display text-snow">Our Territories</h2>
      </div>

      <div className="w-full h-full max-w-4xl cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#C9A84C" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Globe />
          </Float>
        </Canvas>
      </div>
      
      <div className="absolute bottom-32 text-center text-text-muted text-sm uppercase tracking-widest font-medium max-w-xs">
        Navigating the high altitudes of the Western Himalayas
      </div>
    </section>
  );
}
