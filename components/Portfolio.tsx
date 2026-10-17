"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCover } from "@/components/WorkCover";

export function Portfolio() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,140,248,0.08),_transparent_50%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Evidence"
          title="Shipped work"
          description="Live client and product builds with real URLs—not concept demos. For vertical previews and sample brands, see our concept demo gallery."
        />
        <p className="mt-4 text-sm text-muted">
          <Link href="/demos" className="font-medium text-accent hover:underline">
            Browse concept demos
          </Link>
          {" "}
          (devtools, stone, hospitality, automotive) separate from shipped work below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.id}
              href={`/work/${study.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 dark:hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                <WorkCover study={study} sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {study.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{study.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {study.cardDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-elevated/80 px-2 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
