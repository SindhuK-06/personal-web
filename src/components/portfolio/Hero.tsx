import { motion } from "framer-motion";
import { Download, FolderGit2, Mail, Github, Linkedin, Code2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com" },
  { icon: Trophy, label: "HackerRank", href: "https://hackerrank.com" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            >
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Hi, I'm <span className="gradient-text">Sindhu K</span>
              <br />
              <span className="text-foreground/90">Building tomorrow's software.</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground font-medium">
              Computer Science Engineering Student
            </p>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl">
              Passionate about Full Stack Development, Artificial Intelligence, and Software
              Engineering — crafting clean, scalable, and human-centered digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-bg text-primary-foreground border-0 shadow-glow hover:opacity-95 hover:scale-[1.02] transition">
                <a href="/resume.pdf" download>
                  <Download className="size-4" /> Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass">
                <a href="#projects"><FolderGit2 className="size-4" /> View Projects</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#contact"><Mail className="size-4" /> Contact Me</a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass size-11 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 gradient-bg rounded-[2rem] blur-2xl opacity-40 scale-95" />
            <div className="relative glass p-2 rounded-[2rem] shadow-glow">
              <img
                src={profile}
                alt="Sindhu K — Computer Science Engineering Student"
                width={500}
                height={500}
                className="rounded-[1.75rem] w-72 sm:w-80 lg:w-[420px] h-auto object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="font-semibold text-sm">Open to Internships</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-card"
            >
              <div className="text-xs text-muted-foreground">CGPA</div>
              <div className="font-semibold text-sm gradient-text">8.8 / 10</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
