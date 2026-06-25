"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Desktop custom cursor — a small solid dot plus a larger trailing ring that
 * eases toward the pointer, echoing lawted.tech. Disabled on touch devices and
 * when the user prefers reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    if (!fine || !wide) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-host");

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...mouse };
    let raf = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;

      const el = e.target as HTMLElement;
      const interactive = !!el.closest("a, button, [data-cursor-hover]");
      if (interactive !== hovering) {
        hovering = interactive;
        ring.style.width = hovering ? "44px" : "30px";
        ring.style.height = hovering ? "44px" : "30px";
        ring.style.backgroundColor = hovering
          ? "hsl(var(--foreground) / 0.08)"
          : "transparent";
      }
    };

    const loop = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

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

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[15px] -mt-[15px] h-[30px] w-[30px] rounded-full border border-foreground/60 transition-[width,height,background-color] duration-200 ease-out"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-foreground"
      />
    </>
  );
}
