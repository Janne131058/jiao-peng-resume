"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold">{edu.school}</h3>
              <span className="text-xs font-medium text-muted-foreground">
                {edu.detail}
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground/80">{edu.degree}</p>
            {edu.note && (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {edu.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
