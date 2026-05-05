"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionFrame, LineNode } from '@/components/ui/LineSystem';
import styles from './SelectedWork.module.css';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function SelectedWork() {
  return (
    <section className={styles.section}>
      <SectionFrame title="SELECTED WORK" number="02.">
        <div className={styles.header}>
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
              className={styles.projectRow}
            >
              <div className={styles.projectMain}>
                <div className={styles.projectInfo}>
                  <span className={styles.year}>{project.year}</span>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectType}>{project.type}</p>
                </div>
                <div className={styles.projectDesc}>
                  {project.description}
                </div>
              </div>

              <div className={styles.projectFooter}>
                <div className={styles.stack}>
                  {project.stack.map(s => (
                    <span key={s} className={styles.stackItem}>{s}</span>
                  ))}
                </div>
                <Link href={`/projects/${project.id}`} className={styles.link}>
                  CASE STUDY <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className={styles.rowLine} />
              <LineNode className={styles.rowNode} />
            </motion.div>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
