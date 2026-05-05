"use client";

import { motion } from 'framer-motion';
import { Project, projects } from '@/data/projects';
import { SectionFrame, LineNode } from '@/components/ui/LineSystem';
import styles from './ProjectTemplate.module.css';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export function ProjectTemplate({ project }: { project: Project }) {
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "creator": {
      "@type": "Person",
      "name": "Lucas Feliciano"
    },
    "datePublished": project.year,
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className={styles.header}>
        <Link href="/#projects" className={styles.backLink}>
          <ArrowLeft size={16} /> BACK TO ARCHIVE
        </Link>
        <div className={styles.headerLine} />
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
                <span className={styles.label}>ROLE</span>
                <span className={styles.value}>{project.role}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.label}>STATUS</span>
                <span className={styles.value}>{project.status}</span>
              </div>
            </div>
            
            <h1 className={styles.title}>{project.name}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
            
            <div className={styles.overviewGrid}>
              <div className={styles.overviewText}>
                <p>{project.description}</p>
              </div>
              <div className={styles.stackArea}>
                <span className={styles.label}>TECHNICAL STACK</span>
                <div className={styles.stackList}>
                  {project.stack.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            </div>

            <div className={styles.heroActions}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                  <GithubIcon size={16} /> SOURCE CODE
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                  <ExternalLink size={16} /> LIVE SYSTEM
                </a>
              )}
            </div>
          </div>
        </SectionFrame>

        <SectionFrame title="THE PROBLEM & GOAL" number="02.">
          <div className={styles.contentGrid}>
            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>The Challenge</h3>
              <p>Every system I build starts with a real-world friction point. For {project.name}, the primary challenge was bridging the gap between technical complexity and human accessibility.</p>
            </div>
            <div className={styles.contentBlock}>
              <h3 className={styles.blockTitle}>The Objectives</h3>
              <p>We aimed to construct a scalable architecture that not only solves the immediate problem but also serves as a resilient foundation for future growth and cultural impact.</p>
            </div>
          </div>
        </SectionFrame>

        <SectionFrame title="PROCESS & ARCHITECTURE" number="03.">
          <div className={styles.processArea}>
            <div className={styles.diagramPlaceholder}>
              <svg width="100%" height="150" viewBox="0 0 800 150" fill="none">
                <path d="M50 75 C 200 25, 400 125, 750 75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                <motion.circle 
                  cx="50" cy="75" r="4" fill="currentColor" 
                  animate={{ cx: [50, 750, 50] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <span className={styles.stepNum}>01</span>
                <span className={styles.stepLabel}>RESEARCH & DISCOVERY</span>
              </div>
              <div className={styles.processStep}>
                <span className={styles.stepNum}>02</span>
                <span className={styles.stepLabel}>SYSTEM DESIGN</span>
              </div>
              <div className={styles.processStep}>
                <span className={styles.stepNum}>03</span>
                <span className={styles.stepLabel}>TECHNICAL BUILD</span>
              </div>
            </div>
          </div>
        </SectionFrame>

        <div className={styles.pagination}>
          <div className={styles.pageLine} />
          <div className={styles.pageLinks}>
            {prevProject ? (
              <Link href={prevProject.link} className={styles.pageBtn}>
                <ArrowLeft size={16} /> PREV: {prevProject.name}
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link href={nextProject.link} className={styles.pageBtn}>
                NEXT: {nextProject.name} <ArrowRight size={16} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>
    </div>
  );
}
