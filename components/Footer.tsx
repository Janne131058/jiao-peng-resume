import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
