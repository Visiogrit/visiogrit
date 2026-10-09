"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function Ethos() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-[#0a0d14] to-indigo-950/40 px-6 py-12 md:px-12 md:py-16 lg:px-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"
          />

          <div className="relative max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
              Ethos
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {SITE.tagline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
              We combine deep technical understanding with relentless visual execution.
              Vision without craft is vaporware. Grit without taste is noise. Visiogrit
              sits at the intersection — building brand systems that feel as engineered as
              the products they represent.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
              Built for technical founders, B2B SaaS, developer tools, and high-growth
              startups who need identity work that speaks fluently to engineers and
              decision-makers alike.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
