"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionFrame, LineNode } from '@/components/ui/LineSystem';
import styles from './SelectedWork.module.css';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export function SelectedWork() {
  return (
    <section className={styles.section} id="projects">
      <SectionFrame title="PROJECT ARCHIVE" number="02.">
        <div className={styles.header}>
          <p className={styles.desc}>
            Selected works from 2023–2024. A collection of systems, products, and movements 
            organized through technical research and editorial structure.
          </p>
        </div>

        <div className={styles.archive}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${styles.dossier} ${index % 2 === 1 ? styles.alternate : ''}`}
            >
              <div className={styles.metaRail}>
                <div className={styles.metaGroup}>
                  <span className={styles.label}>YEAR</span>
                  <span className={styles.value}>{project.year}</span>
                </div>
                <div className={styles.metaGroup}>
                  <span className={styles.label}>ROLE</span>
                  <span className={styles.value}>{project.role}</span>
                </div>
                <div className={styles.metaGroup}>
                  <span className={styles.label}>STATUS</span>
                  <span className={styles.value}>{project.status}</span>
                </div>
              </div>

              <div className={styles.mainInfo}>
                <div className={styles.titleArea}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                </div>
                
                <p className={styles.projectDesc}>
                  {project.description}
                </p>

                <div className={styles.details}>
                  {project.problem && (
                    <div className={styles.detailBlock}>
                      <span className={styles.detailLabel}>PROBLEM</span>
                      <p className={styles.detailText}>{project.problem}</p>
                    </div>
                  )}
                  {project.whatIBuilt && (
                    <div className={styles.detailBlock}>
                      <span className={styles.detailLabel}>IMPLEMENTATION</span>
                      <p className={styles.detailText}>{project.whatIBuilt}</p>
                    </div>
                  )}
                </div>

                <div className={styles.actions}>
                  <Link href={project.link} className={styles.caseStudyLink}>
                    EXPLORE DOSSIER <ArrowUpRight size={14} />
                  </Link>
                  
                  <div className={styles.externalLinks}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source">
                        <GithubIcon />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.visualAnchor}>
                <div className={styles.stack}>
                  {project.stack.map(s => (
                    <span key={s} className={styles.stackItem}>{s}</span>
                  ))}
                </div>
                <div className={styles.connectorLine} />
                <LineNode className={styles.connectorNode} />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
