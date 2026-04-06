"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';
import { ConcreteMaterial } from './ConcreteMaterial';

interface ConcreteBlockProps {
  isMobile?: boolean;
}

export function ConcreteBlock({ isMobile = false }: ConcreteBlockProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();

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
    if (!meshRef.current) return;

    const elapsed = state.clock.getElapsedTime();

    // Micro drift — always active, imperceptible
    const IDLE_VELOCITY = isMobile ? 0.008 : 0.015;
    const drift = elapsed * IDLE_VELOCITY;

    const baseAngle = isMobile ? -Math.PI / 24 : -Math.PI / 7;
    const mouseScale = isMobile ? 0.04 : 0.12;

    const targetY = baseAngle + drift + (mouse.x * mouseScale);
    const targetX = mouse.y * (isMobile ? 0.015 : 0.04);
    const targetZ = -mouse.y * (isMobile ? 0.015 : 0.04);

    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.02);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.02);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetZ, 0.02);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <ConcreteMaterial />
    </mesh>
  );
}
