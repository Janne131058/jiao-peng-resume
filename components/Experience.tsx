"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.company + exp.period}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/30"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold">
                {exp.company}
                <span className="font-normal text-muted-foreground">
                  {" "}
                  · {exp.role}
                </span>
              </h3>
              <span className="text-xs font-medium tabular-nums text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {exp.location}
            </p>

            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((b, bi) => (
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
