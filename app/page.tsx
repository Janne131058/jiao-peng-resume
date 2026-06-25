import EntryScreen from "@/components/EntryScreen";
import CustomCursor from "@/components/CustomCursor";
import DownloadButton from "@/components/DownloadButton";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="no-print sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <CustomCursor />
      <EntryScreen />
      <DownloadButton />
      <main id="main" className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <Hero />
        <Experience />
        <Education />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
