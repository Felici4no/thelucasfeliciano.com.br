"use client";

import { motion } from 'framer-motion';
import styles from './Method.module.css';

const steps = [
  { id: "01", title: "RESEARCH", desc: "Deep diving into the problem, understanding constraints and finding the core truth." },
  { id: "02", title: "SYSTEM DESIGN", desc: "Architecting the logic, data structures and rules that will govern the solution." },
  { id: "03", title: "INTERFACE", desc: "Designing the human interaction layer with precision and visual clarity." },
  { id: "04", title: "PROTOTYPE", desc: "Building functional representations to validate assumptions and test flows." },
  { id: "05", title: "BUILD", desc: "Translating architecture into robust, scalable and clean code." },
  { id: "06", title: "ITERATE", desc: "Observing real-world impact and refining the system for excellence." }
];

export function Method() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.number}>03.</span>
        <h2 className={styles.title}>METHOD / HOW I BUILD</h2>
      </div>

      <div className={styles.grid}>
        {steps.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={styles.step}
          >
            <div className={styles.stepHeader}>
              <span className={styles.stepId}>{step.id}</span>
              <div className={styles.stepLine} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
