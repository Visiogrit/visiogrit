"use client";

import {
  Layers,
  LayoutTemplate,
  MessageSquareQuote,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type ServiceIconKey } from "@/lib/services-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  palette: Palette,
  layers: Layers,
  layout: LayoutTemplate,
  message: MessageSquareQuote,
};

export function Services() {
  return (
    <section id="capabilities" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="What we engineer for tech teams"
          description="End-to-end brand and product design systems for founders who ship infrastructure, platforms, and developer tools."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <GlowCard key={service.id} delay={index * 0.08}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition-shadow group-hover:shadow-glow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-mono text-sm text-slate-600">{service.number}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                  {service.description}
                </p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
