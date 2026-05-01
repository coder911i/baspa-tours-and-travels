'use client';

import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const noise2D = createNoise2D();

function Terrain({ isLowEnd = false }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  const { geometry, colors } = useMemo(() => {
    const size = 200;
    // LOD: Lower segments for low-end devices
    const segments = isLowEnd ? 32 : 64; 
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    
    const pos = geo.attributes.position;
    const colorArr = new Float32Array(pos.count * 3);
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      const z = (noise2D(x * 0.008, y * 0.008) * 25) +
                (noise2D(x * 0.02, y * 0.02) * 12) +
                (noise2D(x * 0.05, y * 0.05) * 6);
      
      pos.setZ(i, z);

      let color = new THREE.Color('#0A0A1A');
      if (z > 5) color = new THREE.Color('#1B2E1D');
      if (z > 15) color = new THREE.Color('#4A4A4A');
      if (z > 22) color = new THREE.Color('#FFFFFF');

      colorArr[i * 3] = color.r;
      colorArr[i * 3 + 1] = color.g;
      colorArr[i * 3 + 2] = color.b;
    }
    
    geo.computeVertexNormals();
    return { geometry: geo, colors: colorArr };
  }, [isLowEnd]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      if (materialRef.current) materialRef.current.dispose();
    };
  }, [geometry]);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={geometry.attributes.position.count}
          array={geometry.attributes.position.array}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-normal"
          count={geometry.attributes.normal.count}
          array={geometry.attributes.normal.array}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial 
        ref={materialRef}
        vertexColors 
        roughness={0.8} 
        metalness={0.2} 
        flatShading={!isLowEnd} // Smoother on high end
      />
    </mesh>
  );
}

function SnowParticles({ count = 500 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 300;
      pos[i * 3 + 1] = Math.random() * 200;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current || !pointsRef.current.geometry) return;
    
    const attr = pointsRef.current.geometry.attributes.position;
    const pos = attr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= delta * 5;
      if (pos[i * 3 + 1] < -50) pos[i * 3 + 1] = 150;
    }
    attr.needsUpdate = true;
  });

  useEffect(() => {
    return () => {
      if (pointsRef.current?.geometry) pointsRef.current.geometry.dispose();
      if (materialRef.current) materialRef.current.dispose();
    };
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.4}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent({ scrollRef, isLowEnd }: { scrollRef: React.RefObject<HTMLDivElement>; isLowEnd: boolean }) {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5, // Smoother scroll
          invalidateOnRefresh: true,
        }
      });

      tl.to(camera.position, { x: 0, y: 20, z: 60, ease: "power2.inOut" }, 0);
      tl.to(camera.position, { x: -30, y: 12, z: 40, ease: "power2.inOut" }, 1);
      tl.to(camera.position, { x: 0, y: 60, z: 180, ease: "power2.inOut" }, 2);
    }, scrollRef);

    return () => {
      ctx.revert();
      gl.dispose();
    };
  }, [camera, gl, scrollRef]);

  useFrame((state) => {
    camera.position.y += Math.sin(state.clock.elapsedTime) * 0.01;
  });

  return (
    <>
      <Terrain isLowEnd={isLowEnd} />
      <SnowParticles count={isLowEnd ? 300 : 800} />
    </>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center><span className="text-gold text-xs uppercase tracking-widest">{progress.toFixed(0)}%</span></Html>;
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Check for mobile and WebGL
    const checkSupport = () => {
      setIsMobile(window.innerWidth < 768);
      try {
        const canvas = document.createElement('canvas');
        setWebglSupported(!!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))));
      } catch {
        setWebglSupported(false);
      }
    };
    
    checkSupport();
    window.addEventListener('resize', checkSupport);
    return () => window.removeEventListener('resize', checkSupport);
  }, []);

  // Fallback for Mobile or No WebGL
  if (isMobile || !webglSupported) {
    return (
      <div className="fixed inset-0 -z-10 bg-[#050508] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 scale-110"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#050508] will-change-transform">
      <Canvas 
        dpr={[1, 1.5]}
        frameloop="demand"
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: false,
          powerPreference: "high-performance" 
        }}
      >
        <Suspense fallback={<Loader />}>
          <PerspectiveCamera makeDefault position={[0, 45, 120]} fov={60} />
          <fog attach="fog" args={['#0A0A1A', 80, 300]} />
          <ambientLight intensity={0.5} color="#334466" />
          <directionalLight position={[50, 50, 50]} intensity={1.5} color="#ffd4a0" />
          <SceneContent scrollRef={containerRef} isLowEnd={false} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark pointer-events-none" />
    </div>
  );
}

