"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

export default function About() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <p className="mb-2 text-[15px] text-muted-foreground">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-neutral-100 px-2.5 py-[3px] text-xs text-neutral-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
