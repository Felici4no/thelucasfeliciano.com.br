"use client";

import { motion } from 'framer-motion';
import styles from './EvidenceBelt.module.css';

const evidences = [
  {
    role: "1st Place",
    event: "ElevenLabs Worldwide Hackathon SP",
    detail: "AI & voice accessibility"
  },
  {
    role: "Winner",
    event: "Tech Mahindra Challenge",
    detail: "Telemetry systems"
  },
  {
    role: "Exhibited",
    event: "Latam Mobility 2025",
    detail: "Urban systems"
  },
  {
    role: "Founder",
    event: "Talent Hack",
    detail: "Social impact education"
  }
];

export function EvidenceBelt() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.belt}>
          {evidences.map((item, index) => (
            <motion.div 
              key={item.event}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.header}>
                <span className={styles.roleBadge}>{item.role}</span>
              </div>
              <h3 className={styles.event}>{item.event}</h3>
              <p className={styles.detail}>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
