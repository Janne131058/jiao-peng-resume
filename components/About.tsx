"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Skills & Expertise">
      <div className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
        Engineer spanning IT infrastructure, networking, security, and full-stack
        software development. I build and run secure, compliant systems end to
        end — from multi-site networks and cloud infrastructure to automation
        scripts and web applications.
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-ink-soft px-3 py-1 text-sm text-slate-300"
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
