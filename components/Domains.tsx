"use client";

import { INDUSTRY_DOMAINS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

export function Domains() {
  return (
    <section id="domains" className="relative scroll-mt-20 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.06),_transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Domains"
          title="Industries we design for"
          description="Flexible across verticals—same rigor for SaaS dashboards, nonprofit trust surfaces, and data-heavy product UIs."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {INDUSTRY_DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <GlowCard key={domain.id} delay={index * 0.06}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {domain.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {domain.description}
                </p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
