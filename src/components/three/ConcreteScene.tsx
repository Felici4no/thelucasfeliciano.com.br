"use client";

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import { ConcreteBlock } from './ConcreteBlock';
import * as THREE from 'three';

export function ConcreteScene() {
  return (
    <Canvas
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.8 }}
      dpr={[1, 2]}
      // Micro recuo para nao cortar (fov 32 -> z=5.5)
      camera={{ position: [3.5, 2.8, 5.5], fov: 32 }}
    >
      <color attach="background" args={['#0a0a0a']} />
      
      {/* Luz ambiente quase morta (0.01) para forçar o breu absoluto dentro dos vazados do cimento */}
      <ambientLight intensity={0.01} />
      
      {/* Luz Principal projetando sombras ricas */}
      <directionalLight 
        position={[4, 6, 2]} 
        intensity={5.0} 
        castShadow 
        shadow-bias={-0.0005}
        shadow-mapSize={[2048, 2048]}
      />

      {/* Luz de Rim forte, MAS AGORA COM CAST SHADOW.
          Isso evita que a luz perfore as paredes grossas e ilumine o interior dos vazados */}
      <spotLight 
        position={[-5, 5, -5]} 
        intensity={15.0} 
        angle={0.6} 
        penumbra={0.7} 
        color="#e8dcca" 
        castShadow
        shadow-bias={-0.0005}
        shadow-mapSize={[1024, 1024]}
      />

      <Suspense fallback={null}>
        {/* Recuo sutil do bloco para respeitar as margens de visualização */}
        <group position={[0.2, -0.6, 0]}>
          <ConcreteBlock />
        </group>
        
        {/* Environment abaixado para 0.05 (só um reflexo fantasma minimalista) */}
        <Environment preset="city" environmentIntensity={0.05} />
        
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.8} 
          scale={10} 
          blur={2.5} 
          far={6} 
          color="#000000" 
        />
      </Suspense>
    </Canvas>
  );
}
