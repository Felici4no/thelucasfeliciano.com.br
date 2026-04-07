"use client";

import styles from './HeroSection.module.css';
import { ConcreteScene } from '@/components/three/ConcreteScene';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function HeroSection() {
  const scrollDecay = useScrollProgress(0.3, 1.4);

  const textOpacity = Math.max(0, 1 - scrollDecay * 2.5);
  const blockOpacity = Math.max(0, 1 - scrollDecay * 1.2);

  return (
    <div className={styles.heroFixed}>
      <section className={styles.hero}>
        {/* Canvas fills the entire viewport — no transforms on this container */}
        <div
          className={styles.modelColumn}
          style={{ opacity: blockOpacity }}
        >
          <ConcreteScene scrollDecay={scrollDecay} />
        </div>

        {/* Text floats above */}
        <div
          className={styles.textColumn}
          style={{ opacity: textOpacity }}
        >
          <div className={styles.name}>Lucas Feliciano</div>
          <div className={styles.titleGroup}>
            <h1 className={styles.headline}>I build things.</h1>
            <p className={styles.tagline}>
              Nothing exists before it is built.
            </p>
          </div>
          <h2 className={styles.subheadline}>Not a freelancer. Not an agency. A builder.</h2>
          <div className={styles.tags}>
            <span className={styles.tag}>Real Problems</span>
            <span className={styles.tag}>Systems</span>
            <span className={styles.tag}>Solutions</span>
            <span className={styles.tag}>Cities</span>
            <span className={styles.tag}>Impact</span>
          </div>
        </div>
      </section>
    </div>
  );
}
