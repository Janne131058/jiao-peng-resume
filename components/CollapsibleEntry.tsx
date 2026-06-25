"use client";

import { useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * A whole-entry-clickable disclosure: the entire header (title, meta, subtitle)
 * is the toggle, with a persistent chevron affordance that rotates on open and
 * an animated reveal of the detail below.
 */
export default function CollapsibleEntry({
  title,
  meta,
  subtitle,
  summary,
  children,
}: {
  title: string;
  meta?: string;
  subtitle?: string;
  summary?: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const hasDetail = !!children;

  const header = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="flex items-center gap-1.5 text-xl text-foreground">
          {title}
          {hasDetail && (
            <motion.svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-muted-foreground transition-colors group-hover:text-foreground"
            >
              <path d="m9 18 6-6-6-6" />
            </motion.svg>
          )}
        </h3>
        {meta && (
          <span className="text-[15px] text-muted-foreground">{meta}</span>
        )}
      </div>
      {subtitle && (
        <p className="mt-0.5 text-[15px] text-muted-foreground">{subtitle}</p>
      )}
      {summary && (
        <p className="mt-0.5 text-[15px] leading-relaxed text-muted-foreground">
          {summary}
        </p>
      )}
    </>
  );

  if (!hasDetail) return <div>{header}</div>;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-cursor-hover
        className="group block w-full text-left"
      >
        {header}
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
            <div className="pt-2.5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always render for print / no-JS */}
      <div className="hidden pt-2.5 print:block">{children}</div>
    </div>
  );
}
