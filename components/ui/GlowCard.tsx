"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function GlowCard({ children, className = "", delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/35 hover:shadow-card dark:hover:shadow-glow md:p-8 ${className}`}
    >
      <span
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-0 bg-accent transition-all duration-300 group-hover:w-[3px]"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
