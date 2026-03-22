"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] dark:opacity-[0.05] blur-[80px] animate-blob"
        style={{ background: "radial-gradient(circle, #5B4FE8, #7B6FF0)" }}
        initial={{ x: "-10%", y: "-10%" }}
        animate={{ x: ["-10%", "5%", "-5%", "-10%"], y: ["-10%", "5%", "-15%", "-10%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06] dark:opacity-[0.04] blur-[100px] animate-blob-delayed"
        style={{ background: "radial-gradient(circle, #E85B8A, #FF8FA3)", right: "-5%", top: "30%" }}
        initial={{ x: "10%", y: "30%" }}
        animate={{ x: ["10%", "-5%", "15%", "10%"], y: ["30%", "45%", "25%", "30%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blob 3 */}
      <motion.div
        className="absolute w-[700px] h-[400px] rounded-full opacity-[0.05] dark:opacity-[0.03] blur-[120px] animate-blob-slow"
        style={{ background: "radial-gradient(circle, #E8B85B, #F5D08A)", bottom: "10%", left: "20%" }}
        initial={{ x: "20%", y: "80%" }}
        animate={{ x: ["20%", "30%", "10%", "20%"], y: ["80%", "70%", "85%", "80%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
