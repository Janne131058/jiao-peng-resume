import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main" className="mx-auto max-w-2xl px-6 pb-8">
        <Hero />
        <div className="divide-y divide-border">
          <Experience />
          <Education />
          <About />
          <Projects />
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
