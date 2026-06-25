"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { profile } from "@/lib/data";

const personal: { label: string; value: string; href?: string }[] = [
  { label: "Role", value: profile.title },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^0-9]/g, "")}`,
  },
];

export default function Hero() {
  return (
    <header id="top">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-[32px] font-semibold tracking-tight text-foreground"
      >
        {profile.name}
      </motion.h1>

      <Section id="personal" title="Personal Information">
        <div className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
          {personal.map((p) => (
            <p key={p.label} className="text-[15px] text-foreground/90">
              <span className="text-muted-foreground">{p.label}: </span>
              {p.href ? (
                <a
                  href={p.href}
                  className="underline-offset-2 hover:underline"
                  data-cursor-hover
                >
                  {p.value}
                </a>
              ) : (
                <span>{p.value}</span>
              )}
            </p>
          ))}
        </div>
      </Section>
    </header>
  );
}
