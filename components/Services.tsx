"use client";

import Link from "next/link";
import {
  Building2,
  Cpu,
  HeartHandshake,
  Home,
  Layers,
  LayoutTemplate,
  LineChart,
  MessageSquareQuote,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { INDUSTRY_DOMAINS, type DomainIconKey } from "@/lib/domains-data";
import { SERVICES, type ServiceIconKey } from "@/lib/services-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  palette: Palette,
  layers: Layers,
  layout: LayoutTemplate,
  message: MessageSquareQuote,
};

const DOMAIN_ICONS: Record<DomainIconKey, LucideIcon> = {
  cpu: Cpu,
  chart: LineChart,
  heart: HeartHandshake,
  sparkles: Sparkles,
  home: Home,
  building: Building2,
};

export function Services() {
  return (
    <section id="capabilities" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="What we engineer for tech teams"
          description="End-to-end brand and product design systems—plus the verticals where that rigor shows up in shipped work."
        />
        <p className="mt-4 text-sm text-muted">
          <Link href="/services" className="font-medium text-accent hover:underline">
            See USD packages &amp; timelines
          </Link>
          {" "}
          — reference-led delivery, design in code.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <GlowCard key={service.id}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent-muted text-accent transition-shadow group-hover:shadow-glow-sm dark:group-hover:shadow-glow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-mono text-sm text-muted/60">{service.number}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {service.description}
                </p>
              </GlowCard>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Industries we design for
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Same systems thinking for SaaS dashboards, nonprofit trust surfaces, and dense product UIs.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_DOMAINS.map((domain) => {
              const Icon = DOMAIN_ICONS[domain.icon];
              return (
                <li
                  key={domain.id}
                  className="flex gap-3 rounded-xl border border-border bg-elevated/40 px-4 py-3"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent-muted text-accent">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{domain.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">
                      {domain.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
