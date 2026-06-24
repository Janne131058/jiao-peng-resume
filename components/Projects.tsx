"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-snug text-white group-hover:text-accent">
                {project.name}
              </h3>
              <span className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-accent-2">
                {project.period}
              </span>
            </div>
            <ul className="space-y-2">
              {project.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="flex gap-3 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
