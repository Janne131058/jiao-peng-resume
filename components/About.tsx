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
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-6"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs text-foreground/80"
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
