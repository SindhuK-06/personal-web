import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import simplilearnCert from "@/assets/cert-simplilearn.pdf.asset.json";
import mindlusterCert from "@/assets/cert-mindluster.pdf.asset.json";
import infosysCert from "@/assets/cert-infosys.pdf.asset.json";

const certs = [
  {
    name: "Basics of Data Structures and Algorithms",
    org: "Simplilearn SkillUp",
    date: "Aug 2025",
    url: simplilearnCert.url,
  },
  {
    name: "Functional Data Structures and Algorithms",
    org: "Infosys Springboard",
    date: "Aug 2025",
    url: infosysCert.url,
  },
  {
    name: "Design and Analysis of Algorithms (DAA)",
    org: "Mind Luster",
    date: "Mar 2026",
    url: mindlusterCert.url,
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning"
      subtitle="Credentials backing the skills I use day-to-day."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass rounded-2xl p-5 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="size-11 rounded-xl gradient-accent-bg flex items-center justify-center mb-4">
              <Award className="size-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.org}</p>
            <p className="text-xs text-muted-foreground mt-1">{c.date}</p>
            <Button asChild size="sm" variant="ghost" className="mt-4 self-start">
              <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${c.name} certificate`}>
                <ExternalLink className="size-4" /> View Certificate
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
