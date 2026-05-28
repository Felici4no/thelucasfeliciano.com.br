"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.css';

const MICROCOPY = [
  "Loading archive...",
  "Assembling systems...",
  "Preparing dossier..."
];

export function LoadingScreen() {
  const [microcopyIndex, setMicrocopyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMicrocopyIndex((prev) => (prev + 1) % MICROCOPY.length);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className={styles.overlay}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        {/* Animated Line System */}
        <div className={styles.lineWrapper}>
          <motion.div 
            className={styles.horizontalLine}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Embossed Name */}
        <motion.h1 
          className={styles.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Lucas Feliciano
        </motion.h1>

        {/* Rotating Microcopy */}
        <div className={styles.microcopyContainer}>
          <motion.div
            key={microcopyIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className={styles.microcopy}
          >
            {MICROCOPY[microcopyIndex]}
          </motion.div>
        </div>

        <div className={styles.lineWrapper}>
          <motion.div 
            className={styles.horizontalLine}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
