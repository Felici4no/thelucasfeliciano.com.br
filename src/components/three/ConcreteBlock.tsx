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
 * 
 * This is NOT an animation — it's a physics simulation of deceleration.
 */

export function ConcreteBlock() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMousePosition();
  
  // Awakening state stored in refs to avoid re-renders
  const awakeningRef = useRef({
    startTime: -1,
    // Initial angular velocity (radians/second) — fast but not spinner-fast
    initialVelocity: 1.8,
    // Current angular velocity — decays over time
    currentVelocity: 1.8,
    // Accumulated rotation from the awakening phase
    accumulatedRotation: 0,
    // Whether we've settled into idle
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

    // Initialize start time on first frame
    if (aw.startTime < 0) {
      aw.startTime = elapsed;
    }

    const timeSinceStart = elapsed - aw.startTime;

    // --- AWAKENING PHASE (0 to ~3s) ---
    // Deceleration curve: exponential decay with heavy friction
    // The block arrives with momentum and friction steals it away
    const FRICTION_DECAY = 1.8; // Higher = faster settling
    const IDLE_VELOCITY = 0.015; // The final imperceptible drift
    
    if (!aw.settled) {
      // Exponential friction: v(t) = v0 * e^(-friction * t) + idle
      aw.currentVelocity = aw.initialVelocity * Math.exp(-FRICTION_DECAY * timeSinceStart) + IDLE_VELOCITY;
      
      // Accumulate rotation from velocity
      aw.accumulatedRotation += aw.currentVelocity * delta;

      // Check if we've essentially settled (within 1% of idle)
      if (aw.currentVelocity - IDLE_VELOCITY < 0.01) {
        aw.settled = true;
      }
    } else {
      // --- IDLE PHASE (post-awakening) ---
      // Imperceptible drift continues forever
      aw.accumulatedRotation += IDLE_VELOCITY * delta;
    }

    // Base angle: the asymmetric viewing angle + accumulated physics rotation
    const baseRotationY = -Math.PI / 7 + aw.accumulatedRotation;

    // Mouse influence only kicks in after settling (block is too heavy during awakening)
    const mouseInfluence = aw.settled ? 1.0 : Math.max(0, 1 - Math.exp(-0.8 * timeSinceStart));
    const targetY = baseRotationY + (mouse.x * 0.12 * mouseInfluence);
    const targetX = mouse.y * 0.04 * mouseInfluence;
    const targetZ = -mouse.y * 0.04 * mouseInfluence;

    // Lerp factor: heavier during awakening, lighter once settled
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
