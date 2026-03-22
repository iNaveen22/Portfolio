"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Scroll-reveal wrapper
export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 24 : 0,
      x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Section wrapper
export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 px-4 sm:px-6", className)}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

// Section header
export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-16">
      <p className="section-label mb-3">
        <span className="inline-block w-6 h-px bg-accent mr-2" />
        {label}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink leading-tight mb-4">{title}</h2>
      {subtitle && <p className="text-ink-muted text-lg max-w-xl font-body">{subtitle}</p>}
    </Reveal>
  );
}

// Pill / badge
export function Pill({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "subtle";
}) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium border transition-all duration-200",
        variant === "default" && "bg-surface-elevated text-ink-muted border-default hover:border-accent hover:text-accent",
        variant === "accent" && "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20",
        variant === "subtle" && "bg-transparent text-ink-subtle border-default/50 hover:border-default",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );
}

// Card
export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-card border border-default rounded-2xl",
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}

// Button
export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  external,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-200 whitespace-nowrap";
  const styles = {
    primary: "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-card border border-default text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5",
    ghost: "text-ink-muted hover:text-ink hover:bg-surface-elevated",
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: external ? "_blank" : undefined, rel: external ? "noopener noreferrer" : undefined } : { onClick };

  return (
    <Component
      className={cn(base, styles[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
