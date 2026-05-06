"use client";

import { motion } from 'framer-motion';
import styles from './Fields.module.css';

const fields = [
  "Software Engineering",
  "Systems Architecture",
  "AI & Agentic Workflows",
  "Web3 & Wallet-Based Systems",
  "Product Design",
  "Visual Systems"
];

export function Fields() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.number}>05.</span>
          <h2 className={styles.title}>FIELDS</h2>
        </div>
        
        <div className={styles.list}>
          {fields.map((field, index) => (
            <motion.div 
              key={field}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={styles.item}
            >
              <span className={styles.index}>{(index + 1).toString().padStart(2, '0')}</span>
              <span className={styles.fieldName}>{field}</span>
              <div className={styles.line} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
