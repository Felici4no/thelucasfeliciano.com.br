"use client";

import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

const ticker = ['Software', 'Architecture', 'Systems', 'Culture'];

export function HeroSection() {
  return (
    <section id="intro" className={styles.hero}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.eyebrow}>
          <span className={styles.tag}>Portfolio / 2026</span>
          <span className={styles.tag}>São Paulo, Brazil</span>
        </div>

        <h1 className={styles.name}>
          <span>Lucas</span>
          <span className={styles.surname}>Feliciano</span>
        </h1>

        <div className={styles.row}>
          <p className={styles.role}>Software Engineer / Systems Builder</p>
          <p className={styles.subtitle}>
            Interfaces, produtos digitais, IA, protótipos e sistemas de coordenação.
          </p>
        </div>
      </motion.div>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.track}>
          {[0, 1].map((n) => (
            <span key={n} className={styles.group}>
              {ticker.map((t) => (
                <span key={t} className={styles.item}>{t} <b>✦</b></span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
