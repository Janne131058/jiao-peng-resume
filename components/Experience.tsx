"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import CollapsibleEntry from "./CollapsibleEntry";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company + exp.period}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <CollapsibleEntry
              title={exp.company}
              meta={exp.period}
              subtitle={`${exp.role} · ${exp.location}`}
            >
              <ul className="space-y-1.5">
                {exp.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/75"
                  >
                    <span className="mt-[9px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-muted-foreground" />
                    {b}
                  </li>
                ))}
              </ul>
            </CollapsibleEntry>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
