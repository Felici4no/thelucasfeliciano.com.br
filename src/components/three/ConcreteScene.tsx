"use client";

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { ConcreteBlock } from './ConcreteBlock';
import * as THREE from 'three';

/**
 * Light awakening timeline:
 * 
 * 0.0s - 0.4s : Total darkness.
 * 0.4s - 1.0s : Ambient whisper.
 * 1.0s - 2.2s : Key light rises.
 * 1.4s - 2.8s : Rim light rises.
 * 2.8s+       : Full studio state.
 */

interface SceneContentProps {
  scrollDecay: number;
}

function SceneContent({ scrollDecay }: SceneContentProps) {
  const { viewport } = useThree();
  const keyLightRef = useRef<THREE.DirectionalLight>(null);
  const fillLightRef = useRef<THREE.DirectionalLight>(null);
  const rimLightRef = useRef<THREE.SpotLight>(null);
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const startTimeRef = useRef(-1);
  
  const isMobile = viewport.aspect < 1.0;
  const isTablet = viewport.aspect >= 1.0 && viewport.aspect < 1.4;

  // ── RESPONSIVE SCALE (the ONLY responsive control) ──
  // The camera stays fixed. Only the block scales to fit the viewport.
  let blockScale: number;
  let xOffset: number;
  let yOffset: number;

  if (isMobile) {
    blockScale = 0.65;   // Smaller to fit portrait safely
    xOffset = 0.2;       // Barely offset — near center
    yOffset = -0.8;      // Lower to sit below the text
  } else if (isTablet) {
    blockScale = 0.85;
    xOffset = 0.8;
    yOffset = -0.6;
  } else {
    blockScale = 1.0;    // Full size on desktop
    xOffset = 1.4;       // Editorial offset right
    yOffset = -0.6;
  }

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    
    if (startTimeRef.current < 0) {
      startTimeRef.current = elapsed;
    }

    const t = elapsed - startTimeRef.current;

    // --- AWAKENING RAMP ---
    const ambientAwaken = t < 0.4 ? 0 : Math.min(1, (t - 0.4) / 1.2);
    const ambientTarget = 0.05 * smoothStep(ambientAwaken);

    const keyAwaken = t < 1.0 ? 0 : Math.min(1, (t - 1.0) / 1.2);
    const keyTarget = 6.5 * smoothStep(keyAwaken);

    const fillAwaken = t < 1.2 ? 0 : Math.min(1, (t - 1.2) / 1.0);
    const fillTarget = 0.25 * smoothStep(fillAwaken);

    const rimAwaken = t < 1.4 ? 0 : Math.min(1, (t - 1.4) / 1.4);
    const rimTarget = 28.0 * smoothStep(rimAwaken);

    // --- SCROLL DECAY ---
    const life = Math.max(0, 1 - scrollDecay);

    if (ambientRef.current) {
      ambientRef.current.intensity = ambientTarget * life + 0.005;
    }
    if (keyLightRef.current) {
      keyLightRef.current.intensity = keyTarget * life;
    }
    if (fillLightRef.current) {
      fillLightRef.current.intensity = fillTarget * life;
    }
    if (rimLightRef.current) {
      rimLightRef.current.intensity = rimTarget * life;
    }
  });

  const groupScale = blockScale * (1 - scrollDecay * 0.12);

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0} />
      
      <directionalLight 
        ref={keyLightRef}
        position={[6, 8, 4]} 
        intensity={0} 
        castShadow 
        shadow-bias={-0.0005}
        shadow-mapSize={[2048, 2048]}
      />

      <directionalLight 
        ref={fillLightRef}
        position={[-4, 0, 5]} 
        intensity={0} 
        color="#a4b4c4" 
      />

      <spotLight 
        ref={rimLightRef}
        position={[-6, 6, -6]} 
        intensity={0} 
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

function smoothStep(x: number): number {
  return x * x * (3 - 2 * x);
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
