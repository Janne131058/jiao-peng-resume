"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl border border-border bg-muted/40 p-8 text-center sm:p-12"
      >
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s build something reliable.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Open to roles in systems / network engineering, IT infrastructure, and
          full-stack software. The fastest way to reach me is email.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
