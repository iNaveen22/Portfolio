"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, User, Briefcase, Code2, FolderOpen, Trophy, GraduationCap, Mail, Home } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  // { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderOpen },
  // { id: "hackathons", label: "Achievements", icon: Trophy },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

function DockItem({
  item,
  onClick,
}: {
  item: (typeof navItems)[0];
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.button
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-default text-ink-muted hover:text-accent transition-colors duration-200"
      whileHover={{ scale: 1.2, y: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      aria-label={item.label}
    >
      <Icon size={16} strokeWidth={1.5} />
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-ink text-bg text-xs font-body font-medium whitespace-nowrap shadow-lg"
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            {item.label}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-ink" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export function FloatingDock() {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 z-50"
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
      style={{ transform: "translateX(-50%)" }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-card/80 backdrop-blur-xl border border-default shadow-2xl shadow-black/10 dark:shadow-black/40">
        {navItems.map((item) => (
          <DockItem key={item.id} item={item} onClick={() => scrollTo(item.id)} />
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-border mx-1" />

        {/* Theme toggle */}
        <motion.button
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-default text-ink-muted hover:text-accent transition-colors duration-200"
          whileHover={{ scale: 1.2, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "light" ? <Moon size={16} strokeWidth={1.5} /> : <Sun size={16} strokeWidth={1.5} />}
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}
