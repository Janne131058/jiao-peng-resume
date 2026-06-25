"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.company + exp.period}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl text-foreground">{exp.company}</h3>
              <span className="text-[15px] text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <p className="mt-0.5 text-[15px] text-muted-foreground">
              {exp.role} · {exp.location}
            </p>
            <ul className="mt-3 space-y-1.5">
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
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
