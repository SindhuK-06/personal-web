import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="One-page snapshot of my work"
      subtitle="Download my latest resume or preview it in your browser."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-8 sm:p-12 shadow-card grid md:grid-cols-[1fr_auto] gap-8 items-center"
      >
        <div className="flex items-center gap-5">
          <div className="size-16 rounded-2xl gradient-bg flex items-center justify-center shrink-0">
            <FileText className="size-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Sindhu_K_Resume.pdf</h3>
            <p className="text-sm text-muted-foreground mt-1">Updated June 2026 · 1 page</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="outline" className="glass">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Eye className="size-4" /> View Resume
            </a>
          </Button>
          <Button asChild size="lg" className="gradient-bg text-primary-foreground border-0 shadow-glow">
            <a href="/resume.pdf" download>
              <Download className="size-4" /> Download
            </a>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
