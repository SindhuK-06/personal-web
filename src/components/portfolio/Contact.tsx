import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2, "Subject is too short").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1500),
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "sindhukamalashekar@gmail.com", href: "mailto:sindhukamalashekar@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 95918 21025", href: "tel:+919591821025" },
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sindhu-kamalashekar", href: "https://www.linkedin.com/in/sindhu-kamalashekar/" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have an opportunity, idea, or just want to say hi? I'd love to hear from you."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {contactInfo.map((c, i) => {
            const Inner = (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 shadow-card flex items-center gap-4 hover:shadow-glow transition"
              >
                <div className="size-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <c.icon className="size-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                  <div className="font-medium truncate">{c.value}</div>
                </div>
              </motion.div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">{Inner}</a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={100} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" maxLength={255} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" maxLength={150} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about your project or opportunity…" rows={6} maxLength={1500} />
          </div>
          <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-bg text-primary-foreground border-0 shadow-glow">
            <Send className="size-4" /> {submitting ? "Sending…" : "Send message"}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
