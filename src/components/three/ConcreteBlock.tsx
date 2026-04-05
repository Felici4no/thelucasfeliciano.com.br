"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useBlockState } from '@/hooks/useBlockState';
import { ConcreteMaterial } from './ConcreteMaterial';

export function ConcreteBlock() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();
  const { rotation } = useBlockState();

  const geometry = useMemo(() => {
    const w = 3.9;
    const d = 1.9;
    const depthEx = 1.9;
    
    const shape = new THREE.Shape();
    shape.moveTo(-w/2, d/2);
    shape.lineTo(w/2, d/2);
    shape.lineTo(w/2, -d/2);
    shape.lineTo(-w/2, -d/2);
    shape.lineTo(-w/2, d/2);

    const h1Left = -1.65, h1Right = -0.15;
    const hBot = -0.65, hTop = 0.65;
    const hole1 = new THREE.Path();
    hole1.moveTo(h1Left, hTop);
    hole1.lineTo(h1Left, hBot);
    hole1.lineTo(h1Right, hBot);
    hole1.lineTo(h1Right, hTop);
    hole1.lineTo(h1Left, hTop);
    shape.holes.push(hole1);

    const h2Left = 0.15, h2Right = 1.65;
    const hole2 = new THREE.Path();
    hole2.moveTo(h2Left, hTop);
    hole2.lineTo(h2Left, hBot);
    hole2.lineTo(h2Right, hBot);
    hole2.lineTo(h2Right, hTop);
    hole2.lineTo(h2Left, hTop);
    shape.holes.push(hole2);

    const extrudeSettings = {
      depth: depthEx,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1, 
      bevelSize: 0.04,
      bevelThickness: 0.04, 
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();
    geometry.rotateX(-Math.PI / 2);

    return geometry;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Added a strong aesthetic angle (-Math.PI / 6) to show dimensions clearly
      const baseRotationY = state.clock.getElapsedTime() * 0.02 + rotation - Math.PI / 6;
      
      meshRef.current.rotation.y = baseRotationY + mouse.x * 0.15;
      meshRef.current.rotation.z = -mouse.y * 0.05;
      meshRef.current.rotation.x = mouse.y * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <ConcreteMaterial />
    </mesh>
  );
}
