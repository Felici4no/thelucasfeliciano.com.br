"use client";

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { SectionFrame, LineNode } from '@/components/ui/LineSystem';
import styles from './ProjectTemplate.module.css';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function ProjectTemplate({ project }: { project: Project }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} /> BACK
        </Link>
        <div className={styles.line} />
      </header>

      <main className={styles.main}>
        <SectionFrame title="PROJECT OVERVIEW" number="01.">
          <div className={styles.hero}>
            <div className={styles.metaRail}>
              <div className={styles.metaItem}>
                <span className={styles.label}>YEAR</span>
                <span className={styles.value}>{project.year}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>TYPE</span>
                <span className={styles.value}>{project.type}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>STATUS</span>
                <span className={styles.value}>{project.status}</span>
              </div>
            </div>
            
            <h1 className={styles.title}>{project.name}</h1>
            <p className={styles.description}>{project.description}</p>
          </div>
        </SectionFrame>

        <SectionFrame title="SYSTEM ARCHITECTURE" number="02.">
          <div className={styles.diagramSection}>
            <div className={styles.stackGrid}>
              {project.stack.map((tech, i) => (
                <div key={tech} className={styles.stackNode}>
                  <LineNode />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
            <div className={styles.placeholderVisual}>
              <svg width="100%" height="200" viewBox="0 0 800 200" fill="none">
                <path d="M50 100 C 200 50, 400 150, 750 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="50" cy="100" r="4" fill="currentColor" />
                <circle cx="750" cy="100" r="4" fill="currentColor" />
              </svg>
            </div>
          </div>
        </SectionFrame>

        <SectionFrame title="OUTCOME" number="03.">
          <div className={styles.outcome}>
            <p>This project represents a commitment to solving real problems through modular systems and technical precision.</p>
            {project.link && project.link !== "#" && (
              <a href={project.link} className={styles.visitButton} target="_blank" rel="noopener noreferrer">
                VISIT LIVE SYSTEM
              </a>
            )}
          </div>
        </SectionFrame>
      </main>
    </div>
  );
}
