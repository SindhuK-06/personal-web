import { Github, Linkedin, Mail, Code2, Trophy } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com" },
  { icon: Trophy, label: "HackerRank", href: "https://hackerrank.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <a href="#home" className="font-display font-bold text-xl gradient-text">&lt;Portfolio /&gt;</a>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Sindhu K — Computer Science Engineering student crafting modern, AI-powered software.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground transition">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="glass size-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground text-center">
          © 2026 Sindhu K. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
