"use client";

import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBackground}>
        <div className={styles.verticalLines}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.line} />
          ))}
        </div>
        <div className={styles.horizontalLines}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.line} />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.topInfo}
        >
          <span className={styles.label}>[ SYSTEM_INIT ]</span>
          <span className={styles.label}>00.1 / PORTFOLIO</span>
        </motion.div>

        <div className={styles.mainGroup}>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.headline}
          >
            Lucas Feliciano<br />
            <span className={styles.muted}>Software / Architecture / Systems / Culture</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className={styles.subheadline}
          >
            I build systems for real problems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className={styles.manifestoMini}
          >
            <p>Not a freelancer. Not an agency.</p>
            <p>A builder designing software, spaces and movements.</p>
          </motion.div>
        </div>

        <div className={styles.footerInfo}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={styles.tags}
          >
            {["REAL PROBLEMS", "SYSTEMS", "SOFTWARE", "CITIES", "CULTURE", "IMPACT"].map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </motion.div>
          
          <div className={styles.technicalVisual}>
            <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
              <path d="M10 90 L190 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M10 10 L10 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1" />
              <line x1="70" y1="30" x2="110" y2="10" stroke="currentColor" strokeWidth="1" />
              <line x1="70" y1="70" x2="110" y2="50" stroke="currentColor" strokeWidth="1" />
              <rect x="110" y="10" width="60" height="40" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="170" cy="90" r="2" fill="currentColor" />
              <text x="175" y="94" fontSize="6" fill="currentColor" fontFamily="monospace">REF_001</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
