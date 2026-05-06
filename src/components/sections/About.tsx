"use client";

import { motion } from 'framer-motion';
import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.number}>06.</span>
          <h2 className={styles.title}>ABOUT</h2>
        </div>
        
        <div className={styles.content}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.text}
          >
            Sou Lucas Feliciano. Engenheiro de Software com trânsito entre
            arquitetura, cultura e sistemas. Exploro modelos de conexão, fluxos
            de dados e sistemas autônomos para construir estruturas que funcionam
            na prática. Trabalho onde problemas complexos exigem pesquisa,
            estrutura e construção — de interfaces a fluxos de agentes.
          </motion.p>
          <div className={styles.technicalInfo}>
            <div className={styles.infoBlock}>
              <span className={styles.label}>LOCATION</span>
              <span className={styles.value}>São Paulo, Brazil</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.label}>TRACK</span>
              <span className={styles.value}>Hackathon Winner / Systems Research</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.label}>FOCUS</span>
              <span className={styles.value}>Software / Architecture / Culture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
