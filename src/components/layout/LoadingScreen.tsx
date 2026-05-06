"use client";

import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.css';

export function LoadingScreen() {
  return (
    <motion.div 
      className={styles.overlay}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <svg className={styles.svg} viewBox="0 0 200 200" fill="none">
          {/* A geometric structure being drawn */}
          <motion.path
            d="M 40 100 L 160 100"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M 100 40 L 100 160"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="40"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
          />
          <motion.path
            d="M 60 60 L 140 140 M 140 60 L 60 140"
            stroke="currentColor"
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          />
        </svg>
        <motion.div 
          className={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1 }}
        >
          <span>BUILDER SYSTEM / v2.0</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
