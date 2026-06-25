import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/lib/data";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});
// Cybertruck Regular — free font based on the Cybertruck logo (famfonts.com)
const cybertruck = localFont({
  src: "./fonts/Cybertruck-Regular.ttf",
  variable: "--font-cyber",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | Resume - ${profile.title}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | Resume - ${profile.title}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${cybertruck.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
