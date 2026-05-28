"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { SectionFrame } from '@/components/ui/LineSystem';
import styles from './ProjectArchive.module.css';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ProjectArchive() {
  return (
    <section className={styles.section} id="project-archive">
      <SectionFrame title="PROJECT ARCHIVE" number="03." theme="light">
        <div className={styles.container}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thIndex}>ID</th>
                  <th className={styles.thProject}>PROJECT</th>
                  <th className={styles.thYear}>YEAR</th>
                  <th className={styles.thRole}>ROLE</th>
                  <th className={styles.thStatus}>STATUS</th>
                  <th className={styles.thStack}>STACK</th>
                  <th className={styles.thAction}></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <motion.tr 
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={styles.row}
                  >
                    <td className={styles.tdIndex}>
                      {(index + 1).toString().padStart(2, '0')}
                    </td>
                    <td className={styles.tdProject}>
                      <span className={styles.projectName}>{project.name}</span>
                      <span className={styles.projectSubtitle}>{project.subtitle}</span>
                    </td>
                    <td className={styles.tdYear}>{project.year}</td>
                    <td className={styles.tdRole}>{project.role}</td>
                    <td className={styles.tdStatus}>
                      <span className={styles.statusBadge}>{project.status}</span>
                    </td>
                    <td className={styles.tdStack}>
                      <div className={styles.stackWrapper}>
                        {project.stack.slice(0, 3).map(tech => (
                          <span key={tech} className={styles.stackItem}>{tech}</span>
                        ))}
                      </div>
                    </td>
                    <td className={styles.tdAction}>
                      <Link href={project.link} className={styles.link}>
                        <span className={styles.linkText}>DOSSIER</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
