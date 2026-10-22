"use client";

import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { art } from './art';
import styles from './Landscape.module.css';

const COLORS = {
  cream: '#fcefdd',
  orange: '#f68656',
  green: '#a9b46f',
  blue: '#6c9fdc',
};

interface LandscapeProps {
  /** Brand and the three columns, fixed on the sky. */
  top: ReactNode;
  /** Small links that sit on the cloud bank. */
  legal: ReactNode;
  /** Copyright line that sits in the field. */
  copyright: ReactNode;
}

/** One layer of the scene: slides up with the scroll at its own pace and sways with the pointer. */
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
      <svg
        className={styles.svg}
        viewBox="0 0 1200 705"
        preserveAspectRatio="xMinYMax slice"
        aria-hidden="true"
        focusable="false"
      >
        {children}
      </svg>
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
  const bankY = useTransform(scrollYProgress, [0, 1], ['0vh', '-3.5vh']);
  const fieldY = useTransform(scrollYProgress, [0, 1], ['0vh', '-10vh']);

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
            {/* hand-cut wobble on every edge */}
            <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="4" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="5" />
            </filter>
            {/* print grain */}
            <filter id="grain" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="9" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.1" />
            </filter>
          </defs>
        </svg>

        <Layer rise={2} sway={5} progress={scrollYProgress} pointer={pointer} reduce={reduce}>
          <g filter="url(#rough)" fill={COLORS.cream}>
            {art.far.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </Layer>

        <Layer rise={3.5} sway={9} progress={scrollYProgress} pointer={pointer} reduce={reduce}>
          <g filter="url(#rough)">
            <path d={art.bank} fill={COLORS.cream} />
            <g fill={COLORS.blue}>
              {art.slits.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
          </g>
        </Layer>

        <Layer rise={5.5} sway={14} progress={scrollYProgress} pointer={pointer} reduce={reduce}>
          <g filter="url(#rough)" fill={COLORS.blue}>
            <path d={art.foliage} />
            <path d={art.trunk} />
          </g>
        </Layer>

        <Layer rise={7} sway={18} progress={scrollYProgress} pointer={pointer} reduce={reduce}>
          <g filter="url(#rough)" fill={COLORS.orange}>
            <path d={art.shrubRight} />
            <path d={art.shrubLeftA} />
            <path d={art.shrubLeftB} />
          </g>
        </Layer>

        <Layer rise={10} sway={24} progress={scrollYProgress} pointer={pointer} reduce={reduce}>
          <g filter="url(#rough)">
            <path d={art.field} fill={COLORS.green} />
            <g fill={COLORS.cream}>
              {art.streaks.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
          </g>
        </Layer>

        <svg className={styles.grain} aria-hidden="true" focusable="false">
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <div className={styles.content}>{top}</div>
        <motion.div className={styles.legal} style={reduce ? undefined : { y: bankY }}>
          {legal}
        </motion.div>
        <motion.div className={styles.copy} style={reduce ? undefined : { y: fieldY }}>
          {copyright}
        </motion.div>
      </div>
    </main>
  );
}
