"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, FileText, ArrowDown, Sparkles, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Button, Pill } from "@/components/ui";

export function HeroSection() {
  const socials = [
    { icon: Github, href: siteConfig.socials.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
    { icon: FileText, href: siteConfig.socials.resume, label: "Resume" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Text */}
          <div className="space-y-8">
            {/* Status pill */}
            <motion.div variants={item}>
              <Pill variant="accent" className="text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                Available for new opportunities
              </Pill>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="space-y-2">
              <p className="section-label">
                <span className="inline-block w-5 h-px bg-accent" />
                Hi, I'm
              </p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
                <br />
                <span className="text-ink">{siteConfig.name.split(" ")[1]}</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={item}>
              <p className="text-xl sm:text-2xl font-body font-medium text-ink-muted">{siteConfig.role}</p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-lg text-ink-muted font-body max-w-lg leading-relaxed"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Location */}
            <motion.div variants={item} className="flex items-center gap-1.5 text-sm text-ink-subtle">
              <MapPin size={14} />
              <span>{siteConfig.location}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Sparkles size={14} />
                View Projects
              </Button>
              <Button
                variant="secondary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail size={14} />
                Contact Me
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-card border border-default text-ink-muted hover:text-accent hover:border-accent/40 transition-all duration-200"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <s.icon size={15} strokeWidth={1.5} />
                </motion.a>
              ))}
              <span className="text-xs text-ink-subtle ml-1 font-mono">{siteConfig.email}</span>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={item}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[-40px] rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Image container */}
              <motion.div
                className="relative w-64 h-64 rounded-3xl overflow-hidden border-2 border-default shadow-2xl shadow-accent/10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Gradient placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent/10 to-pink-500/20 dark:from-accent/20 dark:via-accent/5 dark:to-pink-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src = "/profile.jpg"
                    alt="Naveen Kumar"
                    className="absolute inset-0 w-full h-full object-cover"
                  ></img>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card/40 to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-3 py-2 bg-card border border-default rounded-xl shadow-lg flex items-center gap-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-ink-muted">Open to work</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
