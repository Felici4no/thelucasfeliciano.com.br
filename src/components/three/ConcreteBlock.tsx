"use client";

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';
import { ConcreteMaterial } from './ConcreteMaterial';

/**
 * Awakening physics:
 * 
 * The block begins with residual angular momentum (as if it was spinning
 * in the dark before we arrived). Over ~2.5 seconds, friction bleeds the 
 * energy away until it reaches the idle drift state.
 */

interface ConcreteBlockProps {
  isMobile?: boolean;
}

export function ConcreteBlock({ isMobile = false }: ConcreteBlockProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();
  
  // Awakening state stored in refs to avoid re-renders
  const awakeningRef = useRef({
    startTime: -1,
    // Mobile: gentler initial velocity for stability
    initialVelocity: isMobile ? 1.0 : 1.8,
    currentVelocity: isMobile ? 1.0 : 1.8,
    accumulatedRotation: 0,
    settled: false,
  });

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

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const aw = awakeningRef.current;
    const elapsed = state.clock.getElapsedTime();

    if (aw.startTime < 0) {
      aw.startTime = elapsed;
    }

    const timeSinceStart = elapsed - aw.startTime;

    // --- AWAKENING PHASE ---
    const FRICTION_DECAY = isMobile ? 2.2 : 1.8; // Mobile: settles faster
    const IDLE_VELOCITY = isMobile ? 0.008 : 0.015; // Mobile: calmer drift
    
    if (!aw.settled) {
      aw.currentVelocity = aw.initialVelocity * Math.exp(-FRICTION_DECAY * timeSinceStart) + IDLE_VELOCITY;
      aw.accumulatedRotation += aw.currentVelocity * delta;

      if (aw.currentVelocity - IDLE_VELOCITY < 0.01) {
        aw.settled = true;
      }
    } else {
      aw.accumulatedRotation += IDLE_VELOCITY * delta;
    }

    // Mobile: nearly frontal to present the face clearly, just enough angle for depth
    // Desktop: asymmetric lateral angle for editorial depth
    const baseAngle = isMobile ? -Math.PI / 24 : -Math.PI / 7;
    const baseRotationY = baseAngle + aw.accumulatedRotation;

    // Mouse influence: reduced on mobile (touch doesn't track position the same way)
    const mouseScale = isMobile ? 0.04 : 0.12;
    const mouseInfluence = aw.settled ? 1.0 : Math.max(0, 1 - Math.exp(-0.8 * timeSinceStart));
    const targetY = baseRotationY + (mouse.x * mouseScale * mouseInfluence);
    const targetX = mouse.y * (isMobile ? 0.015 : 0.04) * mouseInfluence;
    const targetZ = -mouse.y * (isMobile ? 0.015 : 0.04) * mouseInfluence;

    const lerpFactor = aw.settled ? 0.02 : 0.06;
    
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, lerpFactor);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, lerpFactor);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetZ, lerpFactor);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <ConcreteMaterial />
    </mesh>
  );
}
