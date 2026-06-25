import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Chakra_Petch } from "next/font/google";
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
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-cyber",
  weight: ["500", "600", "700"],
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
      className={`${montserrat.variable} ${playfair.variable} ${chakraPetch.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
