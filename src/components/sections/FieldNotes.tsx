"use client";

import { motion } from "framer-motion";
import { SectionFrame, LineNode } from "@/components/ui/LineSystem";
import styles from "./FieldNotes.module.css";

const notes = [
  {
    id: "01",
    title: "One-person systems",
    desc: "A single person can now coordinate agents, tools and automations as an operating structure. The question is what remains human: judgment, taste, responsibility and direction."
  },
  {
    id: "02",
    title: "Tacit talent",
    desc: "Some students know more than they can say. Talent Hack is built around making practical intelligence visible through situations, not résumés."
  },
  {
    id: "03",
    title: "Wallet-based identity",
    desc: "A wallet can be more than a payment object. It can become access, memory, reputation and coordination."
  },
  {
    id: "04",
    title: "Artificial presence",
    desc: "The question is not only what AI can answer, but what it can make people perceive: presence, voice, timing, assistance and response."
  }
];

export function FieldNotes() {
  return (
    <section className={styles.section}>
      <SectionFrame title="FIELD NOTES" number="04.">
        <div className={styles.grid}>
          {notes.map((note, index) => (
            <motion.article
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={styles.note}
            >
              <div className={styles.noteHeader}>
                <h3 className={styles.noteTitle}>{note.title}</h3>
                <span className={styles.noteId}>{note.id}</span>
              </div>

              <p className={styles.noteDesc}>{note.desc}</p>

              <div className={styles.connector} aria-hidden="true">
                <div className={styles.line} />
                <LineNode className={styles.node} />
              </div>
            </motion.article>
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}