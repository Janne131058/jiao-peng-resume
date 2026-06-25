"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-5">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl text-foreground">{edu.school}</h3>
              <span className="text-[15px] text-muted-foreground">
                {edu.detail}
              </span>
            </div>
            <p className="mt-0.5 text-[15px] text-muted-foreground">
              {edu.degree}
            </p>
            {edu.note && (
              <p className="mt-1.5 text-[14px] leading-relaxed text-foreground/70">
                {edu.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
