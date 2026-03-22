"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, FileText, Send } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Section, SectionHeader, Reveal, Button } from "@/components/ui";

const socialLinks = [
  { icon: Github, label: "GitHub", href: siteConfig.socials.github, desc: "See my code" },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.socials.linkedin, desc: "Connect professionally" },
  { icon: Twitter, label: "Twitter / X", href: siteConfig.socials.twitter, desc: "Follow my thoughts" },
  { icon: FileText, label: "Resume", href: siteConfig.socials.resume, desc: "Download PDF" },
];

export function ContactSection() {
  return (
    <Section id="contact" className="pb-40">
      <div className="text-center mb-16">
        <Reveal>
          <p className="section-label justify-center mb-3">
            <span className="inline-block w-5 h-px bg-accent" />
            Get In Touch
            <span className="inline-block w-5 h-px bg-accent" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-ink mb-5">
            Let's work together.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-ink-muted font-body text-lg max-w-md mx-auto leading-relaxed">
            Whether you have a project in mind, a role to fill, or just want to connect — my inbox is always open.
          </p>
        </Reveal>
      </div>

      {/* Main CTA */}
      <Reveal delay={0.2}>
        <div className="flex justify-center mb-16">
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl text-base font-body font-medium shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send size={16} />
            Say Hello — {siteConfig.email}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </div>
      </Reveal>

      {/* Divider */}
      <Reveal delay={0.25}>
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-12">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-mono text-ink-subtle uppercase tracking-widest">or find me on</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </Reveal>

      {/* Social grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {socialLinks.map((s, i) => (
          <Reveal key={s.label} delay={0.3 + i * 0.07}>
            <motion.a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 bg-card border border-default rounded-2xl card-hover group text-center"
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-default flex items-center justify-center text-ink-muted group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-200">
                <s.icon size={16} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-body font-semibold text-ink">{s.label}</p>
                <p className="text-[11px] text-ink-subtle">{s.desc}</p>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>

      {/* Footer note */}
      <Reveal delay={0.5}>
        <p className="text-center text-xs font-mono text-ink-subtle mt-16">
          Designed & built by {siteConfig.name} · {new Date().getFullYear()}
        </p>
      </Reveal>
    </Section>
  );
}
