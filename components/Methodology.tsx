"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Methodology() {
  return (
    <section id="process" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Methodology"
          title="The Visiogrit process"
          description="Four linked phases—from technical audit to launch-ready systems."
        />

        <div className="relative mt-8">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block"
          />
          <ol
            className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
          >
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.number}
                className="min-w-[min(100%,280px)] shrink-0 snap-start rounded-2xl border border-border bg-elevated/80 p-6 md:min-w-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent-muted font-mono text-sm font-semibold text-accent"
                  >
                    {step.number}
                  </span>
                  {index < PROCESS_STEPS.length - 1 ? (
                    <span
                      aria-hidden
                      className="hidden h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent md:block"
                    />
                  ) : null}
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
