'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function Orb({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} ref={meshRef}>
        <icosahedronGeometry args={[0.5, 2]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.6} 
          roughness={0.1} 
          metalness={0.9} 
        />
      </mesh>
    </Float>
  );
}

export default function StatsOrbs3D() {
  return (
    <div className="h-40 w-full mb-8">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Orb position={[-3, 0, 0]} color="#D4AF37" />
        <Orb position={[-1, 0, 0]} color="#D4AF37" />
        <Orb position={[1, 0, 0]} color="#D4AF37" />
        <Orb position={[3, 0, 0]} color="#D4AF37" />
      </Canvas>
    </div>
  );
}
