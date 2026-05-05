"use client";

import styles from './LineSystem.module.css';

export function LineNode({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.node} ${className}`}>
      <div className={styles.dot} />
      <div className={styles.ring} />
    </div>
  );
}

export function SectionFrame({ children, title, number }: { children: React.ReactNode, title?: string, number?: string }) {
  return (
    <div className={styles.frame}>
      <div className={styles.topBar}>
        {number && <span className={styles.number}>{number}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.topLine} />
      </div>
      <div className={styles.content}>
        <div className={styles.sideLine} />
        <div className={styles.innerContent}>
          {children}
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomLine} />
        <LineNode className={styles.cornerNode} />
      </div>
    </div>
  );
}
