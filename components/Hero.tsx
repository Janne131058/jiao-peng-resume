"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 text-xl font-semibold text-accent-2 sm:text-2xl"
        >
          {profile.title}
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            View experience
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block text-2xl"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
