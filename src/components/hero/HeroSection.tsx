"use client";

import styles from './HeroSection.module.css';
import { ConcreteScene } from '@/components/three/ConcreteScene';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.textColumn}>
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
      <div className={styles.modelColumn}>
        <ConcreteScene />
      </div>
    </section>
  );
}
