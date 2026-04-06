"use client";

import styles from './OrbitSection.module.css';
import { useScrollProgress } from '@/hooks/useScrollProgress';

interface OrbitItemProps {
  label: string;
  radius: number;
  duration: number;
  delay: number;
}

function OrbitItem({ label, radius, duration, delay }: OrbitItemProps) {
  return (
    <div 
      className={styles.spinContainer} 
      style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      <div 
        className={styles.itemWrapper} 
        style={{ transform: `translate(${radius}px, 0)` }}
      >
        <div 
          className={styles.counterSpinContainer} 
          style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
        >
          <div className={styles.antiTilt}>
            <span className={styles.orbitLabel}>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrbitSection() {
  // Orbit reveal begins at 60% vh scroll and completes at 180% vh scroll
  // This overlaps with hero decay (30%-140%), creating the coexistence window
  const revealProgress = useScrollProgress(0.6, 1.8);

  // Rings fade in at different rates (inner first, outer last) — cascade reveal
  const coreOpacity = Math.min(1, revealProgress * 2.5);
  const innerRingOpacity = Math.min(1, Math.max(0, (revealProgress - 0.1) * 2.2));
  const middleRingOpacity = Math.min(1, Math.max(0, (revealProgress - 0.25) * 2.0));
  const outerRingOpacity = Math.min(1, Math.max(0, (revealProgress - 0.4) * 1.8));
  const titleOpacity = Math.min(0.6, Math.max(0, (revealProgress - 0.5) * 1.5));

  return (
    <section className={styles.orbitSection}>
      <h2 className={styles.sectionTitle} style={{ opacity: titleOpacity }}>Ecosystem</h2>
      
      <div className={styles.scaleWrapper}>
        <div className={styles.centerAnchor}>
          
          {/* Core Level */}
          <div className={styles.coreWrapper} style={{ opacity: coreOpacity }}>
            <div className={styles.antiTilt}>
              <span className={styles.coreLabel}>Builder</span>
            </div>
          </div>

          {/* Inner Ring */}
          <div 
            className={styles.ring} 
            style={{ 
              width: '320px', height: '320px',
              opacity: innerRingOpacity,
            }}
          >
            <OrbitItem label="Design" radius={160} duration={80} delay={0} />
            <OrbitItem label="Mobile" radius={160} duration={80} delay={-40} />
          </div>

          {/* Middle Ring */}
          <div 
            className={styles.ring} 
            style={{ 
              width: '560px', height: '560px',
              opacity: middleRingOpacity,
            }}
          >
            <OrbitItem label="Web3" radius={280} duration={140} delay={-20} />
            <OrbitItem label="AI" radius={280} duration={140} delay={-90} />
          </div>

          {/* Outer Ring */}
          <div 
            className={styles.ring} 
            style={{ 
              width: '840px', height: '840px',
              opacity: outerRingOpacity,
            }}
          >
            <OrbitItem label="Music" radius={420} duration={220} delay={0} />
          </div>

        </div>
      </div>
    </section>
  );
}
