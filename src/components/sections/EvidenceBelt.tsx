"use client";

import { motion } from 'framer-motion';
import { SectionHead } from '@/components/ui/SectionHead';
import styles from './EvidenceBelt.module.css';

const evidences = [
  { role: "1st place", event: "ElevenLabs Worldwide Hackathon SP" },
  { role: "1st place", event: "Devs de Impacto Rio" },
  { role: "3rd place", event: "AfroCapital Hack · Feira Preta" },
  { role: "Winner", event: "Tech Mahindra Challenge" },
  { role: "Exhibited", event: "Latam Mobility 2025" },
  { role: "Competing", event: "Colosseum Crypto World's Fair" },
  { role: "Founder", event: "Talent Hack" },
  { role: "Participant", event: "NASA Space Apps · Ideias Raras" },
];

function tone(role: string) {
  if (/1st|winner/i.test(role)) return 'win';
  if (/3rd|exhibited/i.test(role)) return 'mid';
  return 'plain';
}

export function EvidenceBelt() {
  return (
    <section id="evidence" className={styles.section} data-snap>
      <div className={styles.inner}>
        <SectionHead index="01" title="Evidence" aside="8 entries" />
        <div className={styles.grid}>
          {evidences.map((item, i) => (
            <motion.div
              key={item.event}
              className={styles.card}
              data-tone={tone(item.role)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.event}>{item.event}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
