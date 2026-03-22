import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        surface: {
          DEFAULT: "#FAFAF9",
          dark: "#0C0C0E",
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#141418",
        },
        border: {
          DEFAULT: "#E8E8E4",
          dark: "#242428",
        },
        ink: {
          DEFAULT: "#0F0F11",
          muted: "#6B6B72",
          subtle: "#A8A8B0",
        },
        accent: {
          DEFAULT: "#5B4FE8",
          light: "#7B6FF0",
          warm: "#E85B8A",
          gold: "#E8B85B",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle, #00000008 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
