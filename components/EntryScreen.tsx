"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

/**
 * Full-screen white intro overlay: a hand-written signature draws itself in
 * (stroke draw + ink fill) then a bordered arrow button to enter — mirroring
 * lawted.tech/resume. Clicking the arrow fades the overlay away.
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
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-background"
        >
          <svg
            viewBox="0 0 640 220"
            className="h-auto w-[300px] sm:w-[400px]"
            aria-label={profile.name}
            role="img"
          >
            <text
              x="320"
              y="150"
              textAnchor="middle"
              className="signature-path font-signature"
              fontSize="170"
              fill="hsl(var(--foreground))"
              stroke="hsl(var(--foreground))"
              strokeWidth="1"
            >
              {profile.name}
            </text>
          </svg>

          <motion.button
            onClick={() => setEntered(true)}
            aria-label="Enter resume"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.3 }}
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
