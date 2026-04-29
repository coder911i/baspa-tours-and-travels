'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const points = [
  new THREE.Vector3(-6, 2, 0),    // D1
  new THREE.Vector3(-4, 2.5, 1),  // D2
  new THREE.Vector3(-2, 2.5, 0.5),// D3
  new THREE.Vector3(0, 3.8, 0),   // D4
  new THREE.Vector3(1, 3.8, -0.5),// D5
  new THREE.Vector3(3, 2.5, 0),   // D6
  new THREE.Vector3(5, 2, 0),     // D7
];

const curve = new THREE.CatmullRomCurve3(points);

function Path() {
  const linePoints = useMemo(() => curve.getPoints(100), []);
  const travelerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (travelerRef.current) {
      const t = (state.clock.elapsedTime * 0.1) % 1;
      const pos = curve.getPointAt(t);
      travelerRef.current.position.copy(pos);
    }
  });

  return (
    <group>
      <Line 
        points={linePoints} 
        color="#C9A84C" 
        lineWidth={2} 
      />
      {points.map((p, i) => (
        <Sphere key={i} position={p} args={[0.15, 16, 16]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Sphere>
      ))}
      <Sphere ref={travelerRef} args={[0.2, 16, 16]}>
        <meshStandardMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={2} />
        <pointLight intensity={1} color="#C9A84C" distance={5} />
      </Sphere>
    </group>
  );
}

export default function JourneyTimeline3D() {
  return (
    <div className="h-[500px] w-full bg-charcoal/50 rounded-3xl overflow-hidden border border-white/5 my-20 relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 4, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Path />
        <gridHelper args={[20, 20, '#ffffff', '#ffffff']} opacity={0.05} transparent rotation={[0, 0, 0]} />
      </Canvas>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Interactive 3D Timeline Path</p>
      </div>
    </div>
  );
}
