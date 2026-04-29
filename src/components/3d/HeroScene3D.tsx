'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const noise2D = createNoise2D();

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const { geometry, colors } = useMemo(() => {
    const size = 200;
    const segments = 128;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    
    const pos = geo.attributes.position;
    const colorArr = new Float32Array(pos.count * 3);
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      
      // Layered noise for mountains
      const z = (noise2D(x * 0.008, y * 0.008) * 25) +
                (noise2D(x * 0.02, y * 0.02) * 12) +
                (noise2D(x * 0.05, y * 0.05) * 6);
      
      pos.setZ(i, z);

      // Height-based coloring
      let color = new THREE.Color('#0A0A1A'); // Deep valley
      if (z > 5) color = new THREE.Color('#1B2E1D'); // Forest
      if (z > 15) color = new THREE.Color('#4A4A4A'); // Rock
      if (z > 22) color = new THREE.Color('#FFFFFF'); // Snow

      colorArr[i * 3] = color.r;
      colorArr[i * 3 + 1] = color.g;
      colorArr[i * 3 + 2] = color.b;
    }
    
    geo.computeVertexNormals();
    return { geometry: geo, colors: colorArr };
  }, []);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <primitive object={geometry} attach="geometry">
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </primitive>
      <meshStandardMaterial 
        vertexColors 
        roughness={0.8} 
        metalness={0.2} 
        flatShading={false}
      />
    </mesh>
  );
}

function SnowParticles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null);
  
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
    if (points.current) {
      const pos = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] -= delta * 5; // Downward drift
        if (pos[i * 3 + 1] < -50) pos[i * 3 + 1] = 150;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.4}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent() {
  const { camera } = useThree();
  
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5
          }
        });

        // scroll 0% → 30%: flying into mountains
        tl.to(camera.position, {
          x: 0,
          y: 20,
          z: 60,
          duration: 1
        }, 0);

        // scroll 30% → 60%: pan left and descend
        tl.to(camera.position, {
          x: -30,
          y: 12,
          z: 40,
          duration: 1
        }, 1);

        // scroll 60% → 100%: wide aerial view
        tl.to(camera.position, {
          x: 0,
          y: 60,
          z: 180,
          duration: 1
        }, 2);
      });
    });
  }, [camera]);

  useFrame(() => {
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
  return (
    <div className="fixed inset-0 -z-10 bg-[#050508]">
      <Canvas dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={[0, 45, 120]} fov={60} />
        <fog attach="fog" args={['#0A0A1A', 80, 300]} />
        
        <ambientLight intensity={0.5} color="#334466" />
        <directionalLight position={[50, 50, 50]} intensity={1.5} color="#ffd4a0" />
        
        <SceneContent />
        
        <EffectComposer>
          <Bloom luminanceThreshold={0.8} intensity={0.4} />
        </EffectComposer>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark pointer-events-none" />
    </div>
  );
}
