"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import CollapsibleEntry from "./CollapsibleEntry";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((project, i) => {
          const rest = project.bullets.slice(1);
          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <CollapsibleEntry
                title={project.name}
                meta={project.period}
                summary={project.bullets[0]}
              >
                {rest.length > 0 ? (
                  <ul className="space-y-1.5">
                    {rest.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/75"
                      >
                        <span className="mt-[9px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-muted-foreground" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </CollapsibleEntry>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
