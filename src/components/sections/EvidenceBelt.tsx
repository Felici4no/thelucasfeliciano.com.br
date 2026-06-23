"use client";

import { motion } from 'framer-motion';
import styles from './EvidenceBelt.module.css';

const evidences = [
  { role: "1st place", event: "ElevenLabs Worldwide Hackathon SP" },
  { role: "Winner", event: "Tech Mahindra Challenge" },
  { role: "Exhibited", event: "Latam Mobility 2025" },
  { role: "Founder", event: "Talent Hack" },
];

export function EvidenceBelt() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Evidence</span>
        <div className={styles.grid}>
          {evidences.map((item, i) => (
            <motion.div
              key={item.event}
              className={styles.item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.body}>
                <span className={styles.role}>{item.role}</span>
                <span className={styles.event}>{item.event}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
