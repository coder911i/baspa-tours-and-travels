'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Mountains() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create displacement map procedurally
  const displacementMap = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const imageData = ctx.createImageData(512, 512);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const x = (i / 4) % 512;
      const y = Math.floor((i / 4) / 512);
      
      // Simple noise-like pattern for mountains
      const dist = Math.sqrt(Math.pow(x - 256, 2) + Math.pow(y - 256, 2));
      const val = (Math.sin(x / 30) * Math.cos(y / 30) * 50) + 
                  (Math.sin(x / 10) * Math.sin(y / 15) * 20) +
                  (Math.max(0, 256 - dist) * 0.5);
                  
      const color = Math.min(255, Math.max(0, val));
      imageData.data[i] = color;
      imageData.data[i+1] = color;
      imageData.data[i+2] = color;
      imageData.data[i+3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[100, 100, 256, 256]} />
      <meshStandardMaterial 
        color="#111318"
        displacementMap={displacementMap as THREE.Texture}
        displacementScale={8}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

function SnowParticles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = Math.random() * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
      const positions = points.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] -= delta * 0.5;
        if (positions[i * 3 + 1] < -5) positions[i * 3 + 1] = 20;
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05}
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
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Initial pan
      const panTween = gsap.to(camera.position, {
        x: 5,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Scroll parallax
      const trigger = ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(camera.position, {
            z: 5 - self.progress * 15,
            overwrite: 'auto'
          });
        }
      });

      return () => {
        panTween.kill();
        trigger.kill();
      };
    }
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={75} />
      <color attach="background" args={["#0A0A0A"]} />
      <fogExp2 attach="fog" args={["#0A0A0A", 0.05]} />
      
      <ambientLight intensity={0.2} color="#A8C5DA" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={2} 
        color="#C9A84C" 
      />
      
      <Mountains />
      <SnowParticles />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0A0A0A]">
      <Canvas shadows dpr={[1, 2]}>
        <SceneContent />
      </Canvas>
    </div>
  );
}
