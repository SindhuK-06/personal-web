import { motion } from "framer-motion";
import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Section } from "./Section";

const education = [
  { degree: "B.Tech — Computer Science & Engineering", school: "CMR University, Bengaluru", year: "2024 – 2028", grade: "CGPA: 8.8 / 10" },
  { degree: "Higher Secondary (PCM + CS)", school: "Shri Adichunchanagiri Independent P U College", year: "2022 – 2024", grade: "Percentage: 92.8%" },
  { degree: "Secondary School", school: "St. Charles English High School", year: "2021 – 2022", grade: "Percentage: 96.0%" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A developer with a curious mind"
      subtitle="I blend engineering rigor with design sensibility — shipping ideas from a blank canvas to production-ready products."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 shadow-card lg:col-span-1"
        >
          <Sparkles className="size-6 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Who I am</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm a Computer Science Engineering student deeply curious about how software shapes the
            modern world. From neural networks to scalable web platforms, I love turning complex
            problems into elegant solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 shadow-card lg:col-span-1"
        >
          <Target className="size-6 text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Career objective</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            To join a forward-thinking engineering team where I can contribute to meaningful
            products, grow alongside experienced mentors, and push the boundaries of AI and
            full-stack development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 shadow-card lg:col-span-1"
        >
          <GraduationCap className="size-6 text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quick facts</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Based in Bengaluru, India</li>
            <li>• CMR University · B.Tech CSE</li>
            <li>• Full-Stack &amp; AI enthusiast</li>
            <li>• Quick learner &amp; team player</li>
          </ul>
        </motion.div>

        <div className="lg:col-span-3 mt-6">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-3 top-2 bottom-2 w-px gradient-bg" />
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-6 last:mb-0"
              >
                <span className="absolute -left-[1.6rem] sm:-left-[1.9rem] top-5 size-3 rounded-full gradient-bg ring-4 ring-background" />
                <div className="glass rounded-2xl p-5 shadow-card">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h4 className="font-semibold">{e.degree}</h4>
                    <span className="text-xs font-medium text-muted-foreground">{e.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
                  <p className="text-sm gradient-text font-semibold mt-2">{e.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
