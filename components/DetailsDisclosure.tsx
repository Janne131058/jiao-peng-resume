"use client";

import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A "Details" toggle that expands an inline panel below an item, mirroring the
 * lawted.tech/resume interaction: a muted "Details" label with a chevron that
 * rotates from › (collapsed) to ⌄ (expanded), and a height/opacity reveal.
 */
export default function DetailsDisclosure({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-1.5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-cursor-hover
        className="no-print flex items-center gap-1 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
      >
        Details
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <path d="m9 18 6-6-6-6" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always render details for print / no-JS, hidden on screen */}
      <div className="hidden print:block">{children}</div>
    </div>
  );
}
