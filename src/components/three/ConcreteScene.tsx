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
  const fillLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.SpotLight>(null);
  const ambientRef = useRef<THREE.AmbientLight>(null);
  
  const isMobile = viewport.aspect < 1.0;
  const isTablet = viewport.aspect >= 1.0 && viewport.aspect < 1.4;

  let restScale: number;
  let xOffset: number;
  let yOffset: number;

  if (isMobile) {
    restScale = 0.6;
    xOffset = 0.2;
    yOffset = -0.8;
  } else if (isTablet) {
    restScale = 0.78;
    xOffset = 0.8;
    yOffset = -0.6;
  } else {
    restScale = 0.92;
    xOffset = 1.4;
    yOffset = -0.6;
  }

  // Scroll decay only — no intro ramp
  useFrame(() => {
    const life = Math.max(0, 1 - scrollDecay);

    if (ambientRef.current) ambientRef.current.intensity = 0.05 * life + 0.005;
    if (keyLightRef.current) keyLightRef.current.intensity = 6.5 * life;
    if (fillLightRef.current) fillLightRef.current.intensity = 0.25 * life;
    if (rimLightRef.current) rimLightRef.current.intensity = 28.0 * life;
  });

  const groupScale = restScale * (1 - scrollDecay * 0.12);

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.05} />
      
      <directionalLight 
        ref={keyLightRef}
        position={[6, 8, 4]} 
        intensity={6.5} 
        castShadow 
        shadow-bias={-0.0005}
        shadow-mapSize={[2048, 2048]}
      />

      <directionalLight 
        ref={fillLightRef}
        position={[-4, 0, 5]} 
        intensity={0.25} 
        color="#a4b4c4" 
      />

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
        <ConcreteBlock isMobile={isMobile} />
        
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
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <color attach="background" args={['#0a0a0a']} />

      <Suspense fallback={null}>
        <SceneContent scrollDecay={scrollDecay} />
      </Suspense>
    </Canvas>
  );
}
