import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './page.module.css';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Portfolio Archive | Lucas Feliciano',
  description: 'Technical dossier of selected works, systems and tools.',
};

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      {/* Paper Sheet Container */}
      <article className={styles.paper}>
        {/* Print crop marks (decorativos, estilo editorial/gráfico) */}
        <div className={styles.cropMarkTopLeft} />
        <div className={styles.cropMarkTopRight} />
        <div className={styles.cropMarkBottomLeft} />
        <div className={styles.cropMarkBottomRight} />

        {/* Paper Header */}
        <header className={styles.paperHeader}>
          <div className={styles.headerMeta}>
            <span>REF: LF-PORTFOLIO-2026</span>
            <span>STATUS: ACTIVE ARCHIVE</span>
          </div>
          
          <h1 className={styles.title}>SELECTED WORKS</h1>
          <p className={styles.subtitle}>
            An index of products, systems, and tools constructed between 2024 and 2026.
            Organized through technical parameters and implementation records.
          </p>
          
          <div className={styles.divider} />
        </header>

        {/* Project Listing */}
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.projectItem}>
              {/* Project Metadata Row */}
              <div className={styles.itemMeta}>
                <span className={styles.index}>
                  [{(index + 1).toString().padStart(2, '0')}]
                </span>
                <span className={styles.year}>{project.year}</span>
                <span className={styles.status}>{project.status}</span>
              </div>

              {/* Title & Type */}
              <div className={styles.itemMain}>
                <div className={styles.titleRow}>
                  <h2 className={styles.projectName}>{project.name}</h2>
                  <div className={styles.actions}>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.link}
                      >
                        Visit Live <ArrowUpRight size={12} />
                      </a>
                    )}
                    <Link href={project.link} className={styles.link}>
                      Open Dossier <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
                
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.description}>{project.description}</p>
                
                {/* Technical Details */}
                <div className={styles.techDetails}>
                  <div>
                    <span className={styles.label}>ROLE</span>
                    <span className={styles.value}>{project.role}</span>
                  </div>
                  <div>
                    <span className={styles.label}>STACK</span>
                    <div className={styles.stackTags}>
                      {project.stack.map(tech => (
                        <span key={tech} className={styles.tag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paper Footer */}
        <footer className={styles.paperFooter}>
          <div className={styles.divider} />
          <div className={styles.footerMeta}>
            <span>COORD: 23.5505° S, 46.6333° W</span>
            <span>PAGE 01 / 01</span>
            <span>© LUCAS FELICIANO</span>
          </div>
        </footer>
      </article>
    </main>
  );
}
