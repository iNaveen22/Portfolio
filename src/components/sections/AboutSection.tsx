"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Layers, Zap } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Section, SectionHeader, Reveal, Card } from "@/components/ui";

const highlights = [
  { icon: Cpu, label: "Backend", desc: "Scalable APIs and data systems" },
  { icon: Layers, label: "Full-Stack", desc: "End-to-end product engineering" },
  { icon: Brain, label: "DSA", desc: "Strong focus on problem-solving" },
  { icon: Zap, label: "AI Explorer", desc: "0→1 product thinking" },
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeader label="About Me" title="Solving problems, building systems and growing every day" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
        {/* Bio */}
        <div className="space-y-6">
          {siteConfig.bio.split("\n\n").map((para, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-ink-muted font-body text-lg leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>

        {/* Highlight cards */}
        <Reveal className="grid grid-cols-2 gap-3 min-w-[280px]">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="flex flex-col gap-2 p-4 rounded-2xl bg-card border border-default card-hover"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <h.icon size={16} strokeWidth={1.5} />
              </div>
              <p className="text-sm font-body font-semibold text-ink">{h.label}</p>
              <p className="text-xs text-ink-subtle">{h.desc}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
