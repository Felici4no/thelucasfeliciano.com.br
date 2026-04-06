"use client";

import styles from './HeroSection.module.css';
import { ConcreteScene } from '@/components/three/ConcreteScene';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function HeroSection() {
  // Transition starts after 30% vh of scroll, completes at 140% vh
  const scrollDecay = useScrollProgress(0.3, 1.4);

  // Text fades out faster than the block (text is secondary during transition)
  const textOpacity = Math.max(0, 1 - scrollDecay * 2.5);
  // Block fades more slowly, maintaining presence longer
  const blockOpacity = Math.max(0, 1 - scrollDecay * 1.2);
  // Subtle scale reduction to simulate camera pulling back
  const blockScale = 1 - scrollDecay * 0.15;

  return (
    <div className={styles.heroFixed}>
      <section className={styles.hero}>
        <div 
          className={styles.textColumn}
          style={{ opacity: textOpacity }}
        >
          <div className={styles.name}>Lucas Feliciano</div>
          <h1 className={styles.headline}>I build things.</h1>
          <h2 className={styles.subheadline}>Not a freelancer. Not an agency. A builder.</h2>
          <p className={styles.tagline}>
            Systems, products, and culture — constructed from first principles.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Web3</span>
            <span className={styles.tag}>Mobile</span>
            <span className={styles.tag}>AI</span>
            <span className={styles.tag}>Design</span>
            <span className={styles.tag}>Music</span>
          </div>
        </div>
        <div 
          className={styles.modelColumn}
          style={{ 
            opacity: blockOpacity,
            transform: `scale(${blockScale})`,
            transformOrigin: 'center center',
          }}
        >
          <ConcreteScene scrollDecay={scrollDecay} />
        </div>
      </section>
    </div>
  );
}
