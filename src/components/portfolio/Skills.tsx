import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Wrench, Sparkles } from "lucide-react";
import { Section } from "./Section";

const categories = [
  { icon: Code, title: "Programming Languages", items: [
    { name: "Python", level: 96 }, { name: "Java", level: 85 },
    { name: "C", level: 80 }, { name: "C++", level: 82 }, { name: "JavaScript", level: 90 },
  ]},
  { icon: Layout, title: "Frontend", items: [
    { name: "HTML", level: 95 }, { name: "CSS", level: 90 },
    { name: "React.js", level: 88 }, { name: "Tailwind CSS", level: 92 },
  ]},
  { icon: Server, title: "Backend", items: [
    { name: "Node.js", level: 85 }, { name: "Express.js", level: 82 },
  ]},
  { icon: Database, title: "Databases", items: [
    { name: "MySQL", level: 100 }, { name: "MongoDB", level: 84 }, { name: "PostgreSQL", level: 78 },
  ]},
  { icon: Wrench, title: "Tools", items: [
    { name: "Git", level: 90 }, { name: "GitHub", level: 92 },
    { name: "VS Code", level: 95 }, { name: "Google Cloud Platform", level: 80 },
  ]},
  { icon: Sparkles, title: "Emerging Tech", items: [
    { name: "Artificial Intelligence", level: 96 }, { name: "Machine Learning", level: 82 },
    { name: "Generative AI", level: 88 }, { name: "Cloud Computing", level: 80 },
  ]},
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit built for modern software"
      subtitle="A blend of fundamentals and modern frameworks I use to ship full-stack and AI-driven products."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass rounded-2xl p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-xl gradient-bg flex items-center justify-center">
                <cat.icon className="size-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">{cat.title}</h3>
            </div>
            <ul className="space-y-3">
              {cat.items.map((s) => (
                <li key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full gradient-bg rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
