"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all hover:border-foreground/30"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold leading-snug">
                {project.name}
              </h3>
              <span className="whitespace-nowrap text-xs font-medium tabular-nums text-muted-foreground">
                {project.period}
              </span>
            </div>
            <ul className="space-y-1.5">
              {project.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="flex gap-2.5 text-sm leading-relaxed text-foreground/80"
                >
                  <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
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
