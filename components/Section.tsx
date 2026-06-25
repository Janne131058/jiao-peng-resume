"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        <span className="h-px w-6 bg-foreground/30" />
        {title}
      </motion.h2>
      {children}
    </section>
  );
}
