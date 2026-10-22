"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHead } from '@/components/ui/SectionHead';
import styles from './EvidenceBelt.module.css';

const evidences = [
  { role: "1st place", event: "ElevenLabs Worldwide Hackathon SP", project: "voculos" },
  { role: "1st place", event: "Devs de Impacto Rio", project: "alimapa" },
  { role: "Winner", event: "Tech Mahindra Challenge · later exhibited at Latam Mobility 2025", project: "ecosimulator" },
  { role: "3rd place", event: "AfroCapital Hack · Feira Preta", project: "abias" },
  { role: "Competing", event: "Colosseum Crypto World's Fair · results pending", project: "upay3food" },
  { role: "Founder", event: "Talent Hack · partnerships and pilot in progress", project: "talent-hack" },
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
        <SectionHead index="01" title="Evidence" aside="Recognition · 6 highlights" />
        <div className={styles.grid}>
          {evidences.map((item, i) => (
            <motion.div
              key={item.event}
              className={styles.cell}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link href={`/projects/${item.project}`} className={styles.card} data-tone={tone(item.role)}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.role}>{item.role}</span>
                <span className={styles.event}>{item.event}</span>
                <span className={styles.more}>See the project →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
