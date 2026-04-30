'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const noise2D = createNoise2D();

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  
  const { geometry, colors } = useMemo(() => {
    const size = 200;
    const segments = 128;
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
  }, []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      if (materialRef.current) materialRef.current.dispose();
    };
  }, [geometry]);

  if (!colors || colors.length === 0) return null;

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
        flatShading={false}
      />
    </mesh>
  );
}

function SnowParticles({ count = 2000 }) {
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

  useFrame((_state, delta) => {
    if (!pointsRef.current || !pointsRef.current.geometry) return;
    
    const attr = pointsRef.current.geometry.attributes.position;
    if (!attr || !attr.array) return;
    
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
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement> }) {
  const { camera, gl } = useThree();
  
  useEffect(() => {
    const canvas = gl.domElement;
    if (!canvas || !scrollRef.current) return;

    const onContextLost = (event: Event) => {
      event.preventDefault();
      console.warn('WebGL Context Lost');
    };
    
    const onContextRestored = () => {
      console.info('WebGL Context Restored');
    };

    canvas.addEventListener('webglcontextlost', onContextLost, false);
    canvas.addEventListener('webglcontextrestored', onContextRestored, false);

    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        once: false,
        refreshPriority: 1
      }
    });

    tl.to(camera.position, { x: 0, y: 20, z: 60, duration: 1 }, 0);
    tl.to(camera.position, { x: -30, y: 12, z: 40, duration: 1 }, 1);
    tl.to(camera.position, { x: 0, y: 60, z: 180, duration: 1 }, 2);

    return () => {
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      gl.dispose();
    };
  }, [camera, gl, scrollRef]);

  useFrame(() => {
    if (!camera) return;
    camera.position.y += Math.sin(Date.now() * 0.001) * 0.02;
  });

  return (
    <>
      <Terrain />
      <SnowParticles />
    </>
  );
}

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#050508]">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 45, 120]} fov={60} />
        <fog attach="fog" args={['#0A0A1A', 80, 300]} />
        <ambientLight intensity={0.5} color="#334466" />
        <directionalLight position={[50, 50, 50]} intensity={1.5} color="#ffd4a0" />
        <SceneContent scrollRef={containerRef} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark pointer-events-none" />
    </div>
  );
}
