import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-widest uppercase gradient-text mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
