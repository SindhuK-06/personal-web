import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    role: "Full-Stack Intern",
    org: "Thiranex",
    duration: "2025",
    description: "Building end-to-end web features across React, Node.js, and MySQL — owning UI, API and database layers in a fast-moving product team.",
  },
  {
    role: "Full-Stack Developer",
    org: "Nxtwave Academy",
    duration: "2024 – 2025",
    description: "Developed responsive full-stack applications using modern JavaScript frameworks, REST APIs, and SQL databases as part of an intensive industry-grade program.",
  },
  {
    role: "Generative AI Mastery Workshop",
    org: "Hands-on AI Training",
    duration: "2025",
    description: "Worked with Generative AI frameworks, multimodal applications and LLMs — exploring automation, content generation, and responsible AI deployment.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Internships, training & workshops"
      subtitle="The places where I've learned by doing — and shipped real things."
    >
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-3 top-2 bottom-2 w-px gradient-bg" />
        {items.map((e, i) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-6 last:mb-0"
          >
            <span className="absolute -left-[1.6rem] sm:-left-[1.9rem] top-6 size-3 rounded-full gradient-bg ring-4 ring-background" />
            <div className="glass rounded-2xl p-5 shadow-card hover:shadow-glow transition">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Briefcase className="size-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h4 className="font-semibold">{e.role}</h4>
                    <span className="text-xs font-medium text-muted-foreground">{e.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{e.org}</p>
                  <p className="text-sm mt-3">{e.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
