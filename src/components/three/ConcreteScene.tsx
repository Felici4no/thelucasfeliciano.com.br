"use client";

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { ConcreteBlock } from './ConcreteBlock';
import * as THREE from 'three';

/**
 * Light awakening timeline:
 * 
 * 0.0s - 0.4s : Total darkness. Nothing visible.
 * 0.4s - 1.0s : Ambient whisper (0 → 0.02). The faintest silhouette.
 * 1.0s - 2.2s : Key light rises (0 → 6.5). The form is revealed.
 * 1.4s - 2.8s : Rim light rises (0 → 28). Edges separate from void.
 * 2.8s+       : Full studio state. Steady.
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

  const xOffset = isMobile ? 0.3 : 1.4;
  const yOffset = isMobile ? -0.2 : -0.6;
  const baseScale = isMobile ? 0.8 : 1.0;

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    
    if (startTimeRef.current < 0) {
      startTimeRef.current = elapsed;
    }

    const t = elapsed - startTimeRef.current;

    // --- AWAKENING RAMP ---
    // Each light has its own emergence curve (custom easing per element)
    
    // Ambient: whispers from darkness starting at 0.4s
    const ambientAwaken = t < 0.4 ? 0 : Math.min(1, (t - 0.4) / 1.2);
    const ambientTarget = 0.05 * smoothStep(ambientAwaken);

    // Key light: the dramatic reveal starting at 1.0s
    const keyAwaken = t < 1.0 ? 0 : Math.min(1, (t - 1.0) / 1.2);
    const keyTarget = 6.5 * smoothStep(keyAwaken);

    // Fill light: subtle and delayed
    const fillAwaken = t < 1.2 ? 0 : Math.min(1, (t - 1.2) / 1.0);
    const fillTarget = 0.25 * smoothStep(fillAwaken);

    // Rim light: the final edge separation
    const rimAwaken = t < 1.4 ? 0 : Math.min(1, (t - 1.4) / 1.4);
    const rimTarget = 28.0 * smoothStep(rimAwaken);

    // --- SCROLL DECAY (modulates final values) ---
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

  const groupScale = baseScale * (1 - scrollDecay * 0.12);

  return (
    <>
      {/* All lights start at intensity 0 — awakening drives them up */}
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

/**
 * Attempt: attempt a smooth step  easing for natural light ramps
 * (avoid linear or mechanical-looking transitions)
 */
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
    >
      <color attach="background" args={['#0a0a0a']} />

      <Suspense fallback={null}>
        <SceneContent scrollDecay={scrollDecay} />
      </Suspense>
    </Canvas>
  );
}
