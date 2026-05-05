"use client";

import { motion } from 'framer-motion';
import { SectionFrame } from '@/components/ui/LineSystem';
import styles from './Manifesto.module.css';

export function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <SectionFrame title="MANIFESTO" number="01.">
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.titleWrapper}
          >
            <h2 className={styles.title}>BUILDER,<br />NOT A LABEL.</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.content}
          >
            <p className={styles.text}>
              Eu construo interfaces, sistemas, narrativas e estruturas. 
              O ponto não é fazer telas bonitas. É transformar problemas reais em produtos, 
              movimentos e experiências.
            </p>
            <div className={styles.decorativeLine} />
            <p className={styles.subtext}>
              I build systems for the real world. From architectural spaces to scalable software, 
              the objective remains constant: solve the problem with precision and impact.
            </p>
          </motion.div>
        </div>
      </SectionFrame>
    </section>
  );
}
