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
import { CityOverlay } from './CityOverlay';
import { SceneProvider } from './SceneContext';
import styles from './Landscape.module.css';

interface LandscapeProps {
  /** Brand and the three columns, centred on the sky. */
  top: ReactNode;
  /** Copyright line, bottom left. */
  copyright: ReactNode;
}

interface LayerProps {
  /** How far the layer climbs over the whole scroll, in vh. Negative sinks. */
  rise: number;
  /** Pointer sway, in px at full tilt. */
  sway: number;
  /** Sideways drift over the whole scroll, in vw. */
  slide?: number;
  /** Scale reached at the end of the scroll; the camera creeps forward. */
  zoom?: number;
  progress: MotionValue<number>;
  pointer: MotionValue<number>;
  reduce: boolean | null;
  children: ReactNode;
}

/** One depth of the scene: scroll drives rise, drift and zoom; the pointer adds a gentle sway. */
function Layer({ rise, sway, slide = 0, zoom = 1, progress, pointer, reduce, children }: LayerProps) {
  const y = useTransform(progress, [0, 1], ['0vh', `${-rise}vh`]);
  const slideX = useTransform(progress, [0, 1], ['0vw', `${slide}vw`]);
  const scale = useTransform(progress, [0, 1], [1, zoom]);
  const swayX = useTransform(pointer, (v) => v * sway);
  return (
    <motion.div
      className={styles.layer}
      style={reduce ? undefined : { y, x: slideX, scale, transformOrigin: '50% 100%' }}
    >
      <motion.div className={styles.swayer} style={reduce ? undefined : { x: swayX }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Landscape({ top, copyright }: LandscapeProps) {
  const trackRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  const raw = useMotionValue(0);
  const pointer = useSpring(raw, { stiffness: 60, damping: 18, mass: 0.6 });

  // footer text travels with the ground it sits on
  const groundY = useTransform(scrollYProgress, [0, 1], ['0vh', '-4.5vh']);

  const common = { progress: scrollYProgress, pointer, reduce };

  return (
    <main
      ref={trackRef}
      className={styles.track}
      data-static={reduce ? 'true' : undefined}
      onPointerMove={(e) => raw.set(e.clientX / window.innerWidth - 0.5)}
    >
      <SceneProvider>
        <div className={styles.stage}>
          <svg className={styles.defs} width="0" height="0" aria-hidden="true" focusable="false">
            <defs>
              <filter id="grain" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="9" />
                <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.1" />
              </filter>
            </defs>
          </svg>

          {/* sun and moon sink slowly toward the middle as you go down */}
          <Layer rise={-4} sway={3} slide={5} {...common}>
            <Image src="/scene/sun.svg" alt="" width={400} height={400} priority className={styles.sun} />
          </Layer>
          <Layer rise={-4} sway={3} slide={-5} {...common}>
            <Image src="/scene/moon.svg" alt="" width={400} height={400} priority className={styles.moon} />
          </Layer>

          {/* clouds drift sideways at their own paces */}
          <Layer rise={4} sway={6} slide={-9} {...common}>
            <Image src="/scene/cloud.svg" alt="" width={420} height={240} className={styles.cloudRight} />
          </Layer>
          <Layer rise={6} sway={10} slide={7} {...common}>
            <Image src="/scene/cloud.svg" alt="" width={420} height={240} className={styles.cloudLeft} />
          </Layer>
          <Layer rise={8} sway={12} slide={11} {...common}>
            <Image src="/scene/cloud.svg" alt="" width={420} height={240} className={styles.cloudSmall} />
          </Layer>

          {/* a distant district, slow and faint, so the city has depth behind it */}
          <Layer rise={2.2} sway={7} zoom={1.04} {...common}>
            <div className={styles.farCity} />
          </Layer>

          {/* the avenue and its blocks: one layer, so sidewalks, houses and cars never slip apart */}
          <Layer rise={5} sway={12} zoom={1.16} {...common}>
            <div className={styles.ground} />
            <div className={styles.cityBox}>
              <div className={styles.city} />
              <CityOverlay progress={scrollYProgress} />
            </div>
          </Layer>

          {/* trees stand in front of the city and move the most */}
          <Layer rise={8} sway={18} zoom={1.22} {...common}>
            <div className={styles.treeFar} />
          </Layer>
          <Layer rise={11} sway={26} zoom={1.34} {...common}>
            <div className={styles.treeNear} />
          </Layer>

          <svg className={styles.grain} aria-hidden="true" focusable="false">
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>

          <div className={styles.content}>{top}</div>
          <motion.div className={styles.copy} style={reduce ? undefined : { y: groundY }}>
            {copyright}
          </motion.div>
        </div>
      </SceneProvider>
    </main>
  );
}
