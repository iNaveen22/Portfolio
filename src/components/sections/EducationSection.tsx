"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Star } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section, SectionHeader, Reveal, Pill } from "@/components/ui";

export function EducationSection() {
  return (
    <Section id="education">
      <SectionHeader
        label="Education"
        title="Where it all started."
      />

      <div className="space-y-5">
        {education.map((edu, i) => (
          <Reveal key={edu.id} delay={i * 0.1}>
            <div className="bg-card border border-default rounded-2xl p-6 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Logo */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-accent text-sm">{edu.logo}</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-body font-semibold text-ink">{edu.institution}</h3>
                      <p className="text-sm text-ink-muted font-body mt-0.5">{edu.degree}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-ink-subtle font-mono flex-shrink-0">
                      <Calendar size={11} />
                      {edu.period}
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-400 mb-3">
                      <Star size={11} fill="currentColor" />
                      GPA: {edu.gpa}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <Pill key={h} variant="subtle" className="text-xs">
                        {h}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
