"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Work Experience">
      <div className="relative border-l border-white/10 pl-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company + exp.period}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative mb-12 last:mb-0"
          >
            <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center">
              <span className="h-3 w-3 rounded-full border-2 border-accent bg-ink" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <span className="text-sm font-medium text-accent">
                {exp.period}
              </span>
            </div>
            <p className="mt-1 text-base font-medium text-accent-2">
              {exp.company}
              <span className="text-slate-400"> · {exp.location}</span>
            </p>

            <ul className="mt-4 space-y-2">
              {exp.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="flex gap-3 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
