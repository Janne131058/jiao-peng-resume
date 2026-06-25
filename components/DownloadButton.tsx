"use client";

export default function DownloadButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Download / print resume"
      data-cursor-hover
      className="no-print fixed right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-neutral-100"
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </button>
  );
}
