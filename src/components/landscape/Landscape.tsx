"use client";

import { useRef, type ReactNode } from 'react';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import styles from './Landscape.module.css';

interface LandscapeProps {
  /** Brand and the three columns, fixed on the sky. */
  top: ReactNode;
  /** Small links, bottom right. */
  legal: ReactNode;
  /** Copyright line, bottom left. */
  copyright: ReactNode;
}

/** One depth of the scene: slides up with the scroll at its own pace and sways with the pointer. */
function Layer({
  rise,
  sway,
  progress,
  pointer,
  reduce,
  children,
}: {
  rise: number;
  sway: number;
  progress: MotionValue<number>;
  pointer: MotionValue<number>;
  reduce: boolean | null;
  children: ReactNode;
}) {
  const y = useTransform(progress, [0, 1], ['0vh', `${-rise}vh`]);
  const x = useTransform(pointer, (v) => v * sway);
  return (
    <motion.div className={styles.layer} style={reduce ? undefined : { y, x }}>
      {children}
    </motion.div>
  );
}

export function Landscape({ top, legal, copyright }: LandscapeProps) {
  const trackRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  const raw = useMotionValue(0);
  const pointer = useSpring(raw, { stiffness: 60, damping: 18, mass: 0.6 });

  // text that belongs to a layer travels with it
  const groundY = useTransform(scrollYProgress, [0, 1], ['0vh', '-3.5vh']);

  const layerProps = { progress: scrollYProgress, pointer, reduce };

  return (
    <main
      ref={trackRef}
      className={styles.track}
      data-static={reduce ? 'true' : undefined}
      onPointerMove={(e) => raw.set(e.clientX / window.innerWidth - 0.5)}
    >
      <div className={styles.stage}>
        <svg className={styles.defs} width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <filter id="grain" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="9" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.1" />
            </filter>
          </defs>
        </svg>

        {/* sun and moon: far away, barely move */}
        <Layer rise={1} sway={3} {...layerProps}>
          <Image src="/scene/sun.webp" alt="" width={560} height={560} priority className={styles.sun} />
          <Image src="/scene/moon.webp" alt="" width={520} height={519} priority className={styles.moon} />
        </Layer>

        {/* clouds drift at their own paces */}
        <Layer rise={2} sway={6} {...layerProps}>
          <Image src="/scene/cloud.webp" alt="" width={875} height={260} className={styles.cloudRight} />
        </Layer>
        <Layer rise={3.5} sway={10} {...layerProps}>
          <Image src="/scene/cloud.webp" alt="" width={875} height={260} className={styles.cloudLeft} />
        </Layer>
        <Layer rise={4.5} sway={12} {...layerProps}>
          <Image src="/scene/cloud.webp" alt="" width={875} height={260} className={styles.cloudSmall} />
        </Layer>

        {/* the city: a far row that fades into haze, then a nearer row */}
        <Layer rise={2.5} sway={10} {...layerProps}>
          <div className={styles.cityBack} />
        </Layer>
        <Layer rise={4} sway={14} {...layerProps}>
          <div className={styles.ground} />
          <div className={styles.cityFront} />
        </Layer>

        {/* trees stand in front of the city and move the most */}
        <Layer rise={6} sway={18} {...layerProps}>
          <div className={styles.treeFar} />
        </Layer>
        <Layer rise={8} sway={24} {...layerProps}>
          <div className={styles.treeNear} />
        </Layer>

        <svg className={styles.grain} aria-hidden="true" focusable="false">
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <div className={styles.content}>{top}</div>
        <motion.div className={styles.legal} style={reduce ? undefined : { y: groundY }}>
          {legal}
        </motion.div>
        <motion.div className={styles.copy} style={reduce ? undefined : { y: groundY }}>
          {copyright}
        </motion.div>
      </div>
    </main>
  );
}
