"use client";

import { Canvas, useThree } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import { ConcreteBlock } from './ConcreteBlock';
import * as THREE from 'three';

function SceneContent() {
  const { viewport } = useThree();
  
  // Se o aspect ratio for menor que 1 (retrato), estamos em mobile.
  const isMobile = viewport.aspect < 1.0;

  // Desktop (1.4): Puxado forte para a direita para respirar oposto ao texto.
  // Mobile (0.3): Levemente deslocado para manter o corte assimétrico editorial, mas sem sair da tela.
  const xOffset = isMobile ? 0.3 : 1.4;
  const yOffset = isMobile ? -0.2 : -0.6;
  const scale = isMobile ? 0.8 : 1.0;

  return (
    <>
      <group position={[xOffset, yOffset, 0]} scale={scale}>
        <ConcreteBlock />
        
        {/* Grounded drop-shadow physically locked to the bottom face of the mesh */}
        <ContactShadows 
          position={[0, -0.95, 0]} 
          opacity={0.9} 
          scale={12} 
          blur={2.8} 
          far={5} 
          color="#000000" 
        />
      </group>
      
      {/* Absolute minimal environment reflection purely for the PBR roughness specularity */}
      <Environment preset="city" environmentIntensity={0.03} />
    </>
  );
}

export function ConcreteScene() {
  return (
    <Canvas
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.8 }}
      dpr={[1, 2]}
      camera={{ position: [5.0, 4.0, 7.8], fov: 26 }}
    >
      <color attach="background" args={['#0a0a0a']} />
      
      <ambientLight intensity={0.05} />
      
      {/* 1. KEY LIGHT */}
      <directionalLight 
        position={[6, 8, 4]} 
        intensity={6.5} 
        castShadow 
        shadow-bias={-0.0005}
        shadow-mapSize={[2048, 2048]}
      />

      {/* 2. FILL LIGHT */}
      <directionalLight 
        position={[-4, 0, 5]} 
        intensity={0.25} 
        color="#a4b4c4" 
      />

      {/* 3. RIM LIGHT */}
      <spotLight 
        position={[-6, 6, -6]} 
        intensity={28.0} 
        angle={0.7} 
        penumbra={0.6} 
        color="#f4ebdb" 
        castShadow
        shadow-bias={-0.0005}
        shadow-mapSize={[1024, 1024]}
      />

      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
