import { motion } from "framer-motion";
import { Trophy, Medal, Star, GitBranch } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Trophy, title: "Smart India Hackathon 2024", text: "National Finalist — Top 30 teams out of 200,000+." },
  { icon: Medal, title: "LeetCode Knight", text: "Global rank in top 5% with 500+ problems solved." },
  { icon: Star, title: "Dean's List", text: "Recognized for academic excellence (CGPA 9.2)." },
  { icon: GitBranch, title: "Open Source", text: "10+ merged PRs across React, Node.js, and ML repos." },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Moments worth celebrating"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 shadow-card text-center hover:shadow-glow hover:-translate-y-1 transition-all"
          >
            <div className="size-12 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4">
              <a.icon className="size-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
