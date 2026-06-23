"use client";

import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.eyebrow}>
          <span>Portfolio / 2026</span>
          <span>São Paulo, Brazil</span>
        </div>

        <h1 className={styles.name}>Lucas<br />Feliciano</h1>

        <p className={styles.role}>Software Engineer / Systems Builder</p>
        <p className={styles.subtitle}>
          Interfaces, produtos digitais, IA, protótipos e sistemas de coordenação.
        </p>

        <div className={styles.footer}>
          <span className={styles.secondary}>Software · Architecture · Systems · Culture</span>
        </div>
      </motion.div>
    </section>
  );
}
