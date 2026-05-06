"use client";

import { motion } from 'framer-motion';
import { LineNode } from '@/components/ui/LineSystem';
import styles from './Signals.module.css';

const signals = [
  { label: "TRAJECTORY", value: "Hackathon Winner" },
  { label: "RESEARCH", value: "Agentic Workflows" },
  { label: "STRUCTURES", value: "Decentralized Systems" },
  { label: "INTERSECTION", value: "Software / Architecture / Culture" },
  { label: "IMPACT", value: "Education, Hunger Relief & Logistics" }
];

export function Signals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.lineTop} />
        <div className={styles.grid}>
          {signals.map((signal, index) => (
            <motion.div 
              key={signal.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.signal}
            >
              <div className={styles.meta}>
                <span className={styles.label}>{signal.label}</span>
                <LineNode className={styles.node} />
              </div>
              <span className={styles.value}>{signal.value}</span>
            </motion.div>
          ))}
        </div>
        <div className={styles.lineBottom} />
      </div>
    </section>
  );
}
