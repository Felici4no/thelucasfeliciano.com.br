"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import { Mail } from 'lucide-react';

export function Contact() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.number}>06.</span>
          <h2 className={styles.title}>CONTACT / CONNECT</h2>
        </div>
        
        <div className={styles.linksGrid}>
          <a href="https://github.com/Felici4no" className={styles.link} target="_blank" rel="noopener noreferrer">
            <span className={styles.linkText}>GITHUB</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="mailto:lucas.for.study.42@gmail.com" className={styles.link}>
            <span className={styles.linkText}>EMAIL</span>
            <Mail size={20} />
          </a>
          <a href="https://www.instagram.com/thelucasfeliciano/" className={styles.link} target="_blank" rel="noopener noreferrer">
            <span className={styles.linkText}>INSTAGRAM</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
        </div>

        <div className={styles.bottom}>
          <div className={styles.coord}>
            <span>COORD: 23.5505° S, 46.6333° W</span>
            <span>SAO PAULO / BR</span>
          </div>
          <div className={styles.copyright}>
            © {mounted ? currentYear : '2024'} LUCAS FELICIANO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
