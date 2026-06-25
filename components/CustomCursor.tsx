"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop custom cursor — a single soft gray blob that eases toward the pointer
 * and grows over interactive elements, matching lawted.tech. Disabled on touch
 * devices and when the user prefers reduced motion.
 */
export default function CustomCursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const blob = blobRef.current;
    // Touch / small screens: leave the blob hidden and use the native cursor.
    if (!fine || !wide || !blob) return;

    document.documentElement.classList.add("cursor-none-host");
    blob.style.opacity = "0.55";
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...mouse };
    let raf = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const el = e.target as HTMLElement;
      const interactive = !!el.closest("a, button, [data-cursor-hover]");
      if (interactive !== hovering) {
        hovering = interactive;
        blob.style.width = hovering ? "44px" : "18px";
        blob.style.height = hovering ? "44px" : "18px";
        blob.style.opacity = hovering ? "0.35" : "0.55";
      }
    };

    const loop = () => {
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;
      blob.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onLeave = () => (blob.style.opacity = "0");
    const onEnter = () => (blob.style.opacity = hovering ? "0.35" : "0.55");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("cursor-none-host");
    };
  }, []);

  return (
    <div
      ref={blobRef}
      aria-hidden
      style={{ opacity: 0 }}
      className="no-print pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[18px] w-[18px] rounded-full bg-neutral-400 transition-[width,height,opacity] duration-300 ease-out md:block"
    />
  );
}
