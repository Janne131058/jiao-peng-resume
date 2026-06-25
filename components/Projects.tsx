"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import DetailsDisclosure from "./DetailsDisclosure";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-7">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl text-foreground">{project.name}</h3>
              <span className="text-[15px] text-muted-foreground">
                {project.period}
              </span>
            </div>
            {/* First bullet shown as an always-visible summary line */}
            <p className="mt-0.5 text-[15px] leading-relaxed text-muted-foreground">
              {project.bullets[0]}
            </p>
            {project.bullets.length > 1 && (
              <DetailsDisclosure>
                <ul className="space-y-1.5">
                  {project.bullets.slice(1).map((b, bi) => (
                    <li
                      key={bi}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/75"
                    >
                      <span className="mt-[9px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-muted-foreground" />
                      {b}
                    </li>
                  ))}
                </ul>
              </DetailsDisclosure>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
