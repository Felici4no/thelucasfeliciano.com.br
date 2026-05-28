"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionFrame } from '@/components/ui/LineSystem';
import styles from './BuiltUnderPressure.module.css';
import Link from 'next/link';

export function BuiltUnderPressure() {
  return (
    <section className={styles.section} id="built-under-pressure">
      <SectionFrame title="BUILT UNDER PRESSURE" number="02." theme="light">
        <div className={styles.container}>
          <p className={styles.intro}>
            Systems, prototypes and coordination mechanisms built to solve high-friction problems.
            Designed for execution, resilience and tactile utility.
          </p>
          
          <div className={styles.grid}>
            {projects.map((project, index) => {
              // Extracting badges based on project status
              const badgeText = project.status;

              return (
                <motion.article 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.card}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.number}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={styles.badge}>{badgeText}</span>
                  </div>
                  
                  <h3 className={styles.title}>{project.name}</h3>
                  
                  <div className={styles.sectionBlock}>
                    <span className={styles.label}>CONTEXT / CHALLENGE</span>
                    <p className={styles.text}>{project.problem || project.subtitle}</p>
                  </div>
                  
                  <div className={styles.sectionBlock}>
                    <span className={styles.label}>OUTCOME / IMPLEMENTATION</span>
                    <p className={styles.text}>{project.whatIBuilt || project.description}</p>
                  </div>
                  
                  <div className={styles.footer}>
                    <div className={styles.stack}>
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className={styles.stackItem}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={project.link} className={styles.button}>
                      Open dossier →
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
