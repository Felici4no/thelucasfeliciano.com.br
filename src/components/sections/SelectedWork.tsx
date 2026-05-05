"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import styles from './SelectedWork.module.css';
import { ArrowUpRight } from 'lucide-react';

export function SelectedWork() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.number}>02.</span>
          <h2 className={styles.title}>SELECTED WORK</h2>
        </div>
        <p className={styles.desc}>A collection of systems, products, and experiments built with intention.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <div className={styles.meta}>
                <span className={styles.year}>{project.year}</span>
                <span className={styles.status}>{project.status}</span>
              </div>
              <h3 className={styles.projectName}>{project.name}</h3>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.projectType}>{project.type}</p>
              <p className={styles.projectDesc}>{project.description}</p>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.stack}>
                {project.stack.map(s => (
                  <span key={s} className={styles.stackItem}>{s}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                  VIEW <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
