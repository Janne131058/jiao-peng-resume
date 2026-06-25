import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Dancing_Script } from "next/font/google";
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
  weight: ["400", "500"],
});
const signature = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["600", "700"],
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
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${signature.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
