"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroSceneLazy } from "@/components/three/HeroSceneLazy";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grain pt-16"
    >
      <HeroSceneLazy />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-md border border-border bg-elevated/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent sm:text-xs">
              VG / 01 — Studio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Precision Brand Identities for{" "}
            <span className="text-gradient-accent">High-Tech Products.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg md:text-xl"
          >
            We translate complex software, developer infrastructure, and technical
            platforms into unforgettable visual identities and design systems.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-elevated/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 sm:w-auto"
            >
              View Packages
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--hero-fade)] to-transparent"
      />
    </section>
  );
}
