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
              Transformando questões persistentes em sistemas, interfaces e protocolos de coordenação. 
              O ponto não é apenas a resolução técnica, mas o uso de software, arquitetura e cultura 
              como ferramentas para estruturas que saem da ideia e entram no uso — de fluxos de dados 
              a sistemas descentralizados.
            </p>
            <div className={styles.decorativeLine} />
            <p className={styles.subtext}>
              I build interfaces, data flows and coordination structures — sometimes with agents, 
              sometimes with wallets, always from problems that need form.
            </p>
          </motion.div>
        </div>
      </SectionFrame>
    </section>
  );
}
