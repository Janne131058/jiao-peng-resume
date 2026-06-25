"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Full-screen white intro overlay with a single bordered arrow button,
 * mirroring lawted.tech/resume. Clicking it fades the overlay away to reveal
 * the resume underneath.
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
        >
          <motion.button
            onClick={() => setEntered(true)}
            aria-label="Enter resume"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-foreground text-foreground"
          >
            <svg
              width="22"
              height="22"
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
