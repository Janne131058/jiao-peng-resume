"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">{edu.detail}</p>
            <p className="mt-3 text-base text-slate-200">{edu.degree}</p>
            {edu.note && (
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {edu.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
