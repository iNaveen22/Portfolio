"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section, SectionHeader, Reveal, Pill, Button } from "@/components/ui";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="Check out my latest work."
        subtitle="A selection of things I've built — from internal tools to public products."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08}>
            <motion.div
              className="relative h-full bg-card border border-default rounded-2xl overflow-hidden card-hover group flex flex-col"
              whileHover="hover"
            >
              {/* Gradient top bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.gradient.replace("/10", "")} opacity-60`}
              />

              {/* Card gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-body font-semibold text-ink text-base leading-snug group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="flex items-center gap-0.5 text-xs font-mono text-amber-500 flex-shrink-0 ml-2">
                      <Star size={10} fill="currentColor" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-ink-muted font-body leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Pill key={tag} variant="subtle" className="text-[11px]">
                      {tag}
                    </Pill>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-body text-ink-muted hover:text-ink transition-colors duration-150"
                    whileHover={{ x: 2 }}
                  >
                    <Github size={13} />
                    GitHub
                  </motion.a>
                  {project.demo && (
                    <>
                      <span className="text-border text-xs">·</span>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-body text-accent hover:text-accent/80 transition-colors duration-150 font-medium"
                        whileHover={{ x: 2 }}
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </motion.a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
