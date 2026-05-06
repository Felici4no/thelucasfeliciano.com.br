"use client";

import { motion } from 'framer-motion';
import { SectionFrame, LineNode } from '@/components/ui/LineSystem';
import styles from './OperatingPrinciples.module.css';

const principles = [
  {
    id: "01",
    title: "Build from friction",
    desc: "Start where people are improvising, repeating work or losing information."
  },
  {
    id: "02",
    title: "Make systems legible",
    desc: "A system only matters if people can understand, use and question it."
  },
  {
    id: "03",
    title: "Prototype before posture",
    desc: "Test the structure before naming it as a product, startup or movement."
  },
  {
    id: "04",
    title: "Keep the human layer visible",
    desc: "Agents, dashboards and automations should increase agency, not hide responsibility."
  }
];

export function OperatingPrinciples() {
  return (
    <section className={styles.section}>
      <SectionFrame title="OPERATING PRINCIPLES" number="04.">
        <div className={styles.container}>
          <div className={styles.grid}>
            {principles.map((principle, index) => (
              <motion.article 
                key={principle.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.principle}
              >
                <div className={styles.lineVertical} />
                <div className={styles.content}>
                  <div className={styles.header}>
                    <span className={styles.number}>{principle.id}</span>
                    <h3 className={styles.title}>{principle.title}</h3>
                  </div>
                  <p className={styles.desc}>{principle.desc}</p>
                </div>
                {index < principles.length - 1 && (
                  <div className={styles.connector} aria-hidden="true">
                    <LineNode className={styles.node} />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
