import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 text-center text-xs text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
