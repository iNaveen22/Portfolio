"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Section, SectionHeader, Reveal } from "@/components/ui";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader
        label="Skills"
        title="My tech toolkit."
        subtitle="Technologies I use to bring ideas to life."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.1}>
            <div className="bg-card border border-default rounded-2xl p-6 h-full card-hover">
              <h3 className="text-sm font-mono font-medium text-accent mb-4 uppercase tracking-widest">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-body font-medium bg-surface-elevated border border-default text-ink-muted hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.04, duration: 0.4 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
