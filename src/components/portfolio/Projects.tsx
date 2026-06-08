import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import portfolioImg from "@/assets/project-portfolio.jpg";
import aiResumeImg from "@/assets/project-ai-resume.jpg";
import smsImg from "@/assets/project-sms.jpg";
import ecomImg from "@/assets/project-ecommerce.jpg";

const projects = [
  {
    title: "Personal Portfolio Website",
    image: portfolioImg,
    description: "Full-stack portfolio with authentication, database integration, and a modern responsive UI.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com", demo: "#",
  },
  {
    title: "AI Resume Analyzer",
    image: aiResumeImg,
    description: "AI-powered application that reviews resumes against job descriptions and gives actionable suggestions.",
    tech: ["Python", "AI", "ML", "React", "Express.js"],
    github: "https://github.com", demo: "#",
  },
  {
    title: "Student Management System",
    image: smsImg,
    description: "Full-stack CRUD platform with role-based authentication, dashboards, and reporting.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    github: "https://github.com", demo: "#",
  },
  {
    title: "E-Commerce Platform",
    image: ecomImg,
    description: "Online shopping platform with cart, checkout, payment integration and admin console.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com", demo: "#",
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work & experiments"
      subtitle="A curated set of projects I've shipped across full-stack, AI, and product engineering."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition border ${
              filter === t
                ? "gradient-bg text-primary-foreground border-transparent shadow-glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="group glass rounded-2xl overflow-hidden shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-5">
                  <Button asChild size="sm" variant="outline" className="glass">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="gradient-bg text-primary-foreground border-0">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
