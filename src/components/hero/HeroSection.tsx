"use client";

import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.livingLineContainer}>
        <svg className={styles.livingLine} viewBox="0 0 1000 1000" fill="none">
          <motion.path
            d="M -100 200 C 200 100, 400 600, 600 400 S 800 200, 1100 500"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M 200 1100 C 300 800, 100 400, 500 300 S 900 100, 800 -100"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M 500 500 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.3, rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.topLabel}
        >
          <span>BUILDER SYSTEM / v2.0</span>
          <div className={styles.lineSmall} />
        </motion.div>

        <div className={styles.mainGroup}>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.headline}
          >
            Lucas Feliciano<br />
            <span className={styles.muted}>Software / Architecture / Systems / Culture</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={styles.subheadline}
          >
            Working where questions become systems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={styles.manifestoMini}
          >
            <p>Turning persistent questions into systems, interfaces and movements.</p>
            <p>Software, architecture and culture as tools for structures that can be tested, used and improved.</p>
          </motion.div>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.tags}>
            {["REAL PROBLEMS", "SYSTEMS", "SOFTWARE", "CITIES", "CULTURE", "IMPACT"].map((tag, i) => (
              <motion.span 
                key={tag} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                className={styles.tag}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className={styles.coord}>
            <span>COORD: 23.5505° S, 46.6333° W</span>
          </div>
        </div>
      </div>
    </section>
  );
}
