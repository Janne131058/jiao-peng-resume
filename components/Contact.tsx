"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-10 text-center backdrop-blur-sm sm:p-16"
      >
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Get in touch
        </p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s build something reliable.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Open to roles in systems / network engineering, IT infrastructure, and
          full-stack software. The fastest way to reach me is email.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
