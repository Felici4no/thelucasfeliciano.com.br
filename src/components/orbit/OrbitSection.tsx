"use client";

import styles from './OrbitSection.module.css';

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
  return (
    <section className={styles.orbitSection}>
      <h2 className={styles.sectionTitle}>Ecosystem</h2>
      
      <div className={styles.scaleWrapper}>
        <div className={styles.centerAnchor}>
          
          {/* Core Level */}
          <div className={styles.coreWrapper}>
            <div className={styles.antiTilt}>
              <span className={styles.coreLabel}>Builder</span>
            </div>
          </div>

          {/* Inner Ring */}
          <div className={styles.ring} style={{ width: '320px', height: '320px' }}>
            <OrbitItem label="Design" radius={160} duration={80} delay={0} />
            <OrbitItem label="Mobile" radius={160} duration={80} delay={-40} />
          </div>

          {/* Middle Ring */}
          <div className={styles.ring} style={{ width: '560px', height: '560px' }}>
            <OrbitItem label="Web3" radius={280} duration={140} delay={-20} />
            <OrbitItem label="AI" radius={280} duration={140} delay={-90} />
          </div>

          {/* Outer Ring */}
          <div className={styles.ring} style={{ width: '840px', height: '840px' }}>
            <OrbitItem label="Music" radius={420} duration={220} delay={0} />
          </div>

        </div>
      </div>
    </section>
  );
}
