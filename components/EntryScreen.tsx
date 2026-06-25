"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

/**
 * Full-screen white intro overlay: the name animates in with a Cybertruck-style
 * angular type (Chakra Petch), then a bordered arrow button to enter. Clicking
 * the arrow fades the overlay away to reveal the resume.
 */
export default function EntryScreen() {
  const [entered, setEntered] = useState(false);

  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          key="entry"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-9 bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 14, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.18em" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-cyber text-4xl font-bold uppercase text-foreground sm:text-6xl"
          >
            {profile.name}
          </motion.div>

          <motion.button
            onClick={() => setEntered(true)}
            aria-label="Enter resume"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-foreground text-foreground"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
