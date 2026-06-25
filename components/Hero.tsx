"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <header id="top" className="pt-28 sm:pt-32">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 text-lg font-medium text-muted-foreground"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <MailIcon />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <PhoneIcon />
            {profile.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <PinIcon />
            {profile.location}
          </span>
        </motion.div>
      </motion.div>
    </header>
  );
}
