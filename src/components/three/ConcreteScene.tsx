"use client";

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { ConcreteBlock } from './ConcreteBlock';
import * as THREE from 'three';

interface SceneContentProps {
  scrollDecay: number;
}

function SceneContent({ scrollDecay }: SceneContentProps) {
  const { viewport } = useThree();
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.SpotLight>(null);
  const ambientRef = useRef<THREE.AmbientLight>(null);
  
  const isMobile = viewport.aspect < 1.0;

  const xOffset = isMobile ? 0.3 : 1.4;
  const yOffset = isMobile ? -0.2 : -0.6;
  const baseScale = isMobile ? 0.8 : 1.0;

  // Animate lights falling off on every frame based on scroll
  useFrame(() => {
    // Invert: 1 at rest, 0 at full decay
    const life = Math.max(0, 1 - scrollDecay);

    if (keyLightRef.current) {
      keyLightRef.current.intensity = 6.5 * life;
    }
    if (rimLightRef.current) {
      rimLightRef.current.intensity = 28.0 * life;
    }
    if (ambientRef.current) {
      // Ambient falls to near-zero but never fully dies (keeps silhouette)
      ambientRef.current.intensity = 0.05 * life + 0.005;
    }
  });

  // Scale reduction driven by scroll (block recedes)
  const groupScale = baseScale * (1 - scrollDecay * 0.12);

  return (
    <>
      {/* Lights as refs so useFrame can mutate them without re-renders */}
      <ambientLight ref={ambientRef} intensity={0.05} />
      
      {/* 1. KEY LIGHT */}
      <directionalLight 
        ref={keyLightRef}
        position={[6, 8, 4]} 
        intensity={6.5} 
        castShadow 
        shadow-bias={-0.0005}
        shadow-mapSize={[2048, 2048]}
      />

      {/* 2. FILL LIGHT (stays constant — just prevents total black) */}
      <directionalLight 
        position={[-4, 0, 5]} 
        intensity={0.25} 
        color="#a4b4c4" 
      />

      {/* 3. RIM LIGHT */}
      <spotLight 
        ref={rimLightRef}
        position={[-6, 6, -6]} 
        intensity={28.0} 
        angle={0.7} 
        penumbra={0.6} 
        color="#f4ebdb" 
        castShadow
        shadow-bias={-0.0005}
        shadow-mapSize={[1024, 1024]}
      />

      <group position={[xOffset, yOffset, 0]} scale={groupScale}>
        <ConcreteBlock />
        
        <ContactShadows 
          position={[0, -0.95, 0]} 
          opacity={0.9 * (1 - scrollDecay)} 
          scale={12} 
          blur={2.8} 
          far={5} 
          color="#000000" 
        />
      </group>
      
      <Environment preset="city" environmentIntensity={0.03 * (1 - scrollDecay)} />
    </>
  );
}

interface ConcreteSceneProps {
  scrollDecay?: number;
}

export function ConcreteScene({ scrollDecay = 0 }: ConcreteSceneProps) {
  return (
    <Canvas
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.8 }}
      dpr={[1, 2]}
      camera={{ position: [5.0, 4.0, 7.8], fov: 26 }}
    >
      <color attach="background" args={['#0a0a0a']} />

      <Suspense fallback={null}>
        <SceneContent scrollDecay={scrollDecay} />
      </Suspense>
    </Canvas>
  );
}
