"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Methodology() {
  return (
    <section id="process" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Methodology"
          title="The Visiogrit process"
          description="A structured path from technical understanding to launch-ready brand systems."
        />

        <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PROCESS_STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="relative rounded-2xl border border-white/10 bg-elevated/80 p-6"
            >
              <span className="font-mono text-3xl font-semibold text-cyan-400/30">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
              {index < PROCESS_STEPS.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-px w-5 bg-gradient-to-r from-cyan-400/40 to-transparent lg:block"
                />
              ) : null}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
