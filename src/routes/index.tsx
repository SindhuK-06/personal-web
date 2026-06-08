import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sindhu K — CS Engineering Student & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Sindhu K, a Computer Science Engineering student at CMR University specializing in full-stack development, AI, and software engineering." },
      { property: "og:title", content: "Sindhu K — Portfolio" },
      { property: "og:description", content: "Projects, skills, experience and certifications of a CS Engineering student." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
