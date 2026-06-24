"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <div className="mt-4 h-px w-20 bg-gradient-to-r from-accent to-accent-2" />
      </motion.div>
      {children}
    </section>
  );
}
