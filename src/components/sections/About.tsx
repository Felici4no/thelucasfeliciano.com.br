"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.number}>05.</span>
          <h2 className={styles.title}>ABOUT</h2>
        </div>
        
        <div className={styles.content}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.text}
          >
            Sou Lucas Feliciano. Estudo Engenharia de Software e Arquitetura, e uso tecnologia 
            como ferramenta para construir produtos, sistemas e movimentos com impacto real.
          </motion.p>
          <div className={styles.technicalInfo}>
            <div className={styles.infoBlock}>
              <span className={styles.label}>LOCATION</span>
              <span className={styles.value}>São Paulo, Brazil</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.label}>FOCUS</span>
              <span className={styles.value}>Systems Architecture</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.label}>STATUS</span>
              <span className={styles.value}>Building for the future</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
