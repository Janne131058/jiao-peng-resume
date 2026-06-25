"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop custom cursor — a 20px translucent gray rounded square that eases
 * toward the pointer and grows over interactive elements, matching
 * lawted.tech (rgba(140,140,140,0.2), 5px radius). Disabled on touch devices.
 */
export default function CustomCursor() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const box = boxRef.current;
    if (!fine || !wide || !box) return;

    document.documentElement.classList.add("cursor-none-host");
    box.style.opacity = "1";

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
        box.style.width = hovering ? "40px" : "20px";
        box.style.height = hovering ? "40px" : "20px";
        box.style.borderRadius = hovering ? "8px" : "5px";
      }
    };

    const loop = () => {
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      box.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onLeave = () => (box.style.opacity = "0");
    const onEnter = () => (box.style.opacity = "1");

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
      ref={boxRef}
      aria-hidden
      style={{ opacity: 0, backgroundColor: "rgba(140, 140, 140, 0.2)" }}
      className="no-print pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 rounded-[5px] transition-[width,height,border-radius] duration-200 ease-out md:block"
    />
  );
}
