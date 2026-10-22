"use client";

import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import styles from './HeroCover.module.css';

/** Moves its children slower than the page while the hero scrolls out of view. */
export function ParallaxLayer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <div ref={ref} className={styles.cover} aria-hidden="true">
      {/* scaled up so the shifted image never exposes an edge */}
      <motion.div className={styles.layer} style={{ y: reduce ? 0 : y, scale: reduce ? 1 : 1.4 }}>
        {children}
      </motion.div>
    </div>
  );
}
