"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Portfolio() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,140,248,0.08),_transparent_50%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Shipped products & platforms"
          description="Real projects—nonprofit platforms, data tools, and studio brand work—designed and built end-to-end on Next.js and Vercel."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/work/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${study.gradient}`}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-grid opacity-40 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                    <span className="text-2xl font-semibold tracking-tight text-white/90 transition-transform duration-500 group-hover:scale-105">
                      {study.name}
                    </span>
                  </div>
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/90">
                    {study.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{study.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {study.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
