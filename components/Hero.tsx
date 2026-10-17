"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { getFeaturedCaseStudy } from "@/lib/case-studies";
import { HeroSystemCanvas } from "@/components/HeroSystemCanvas";
import { useHasMounted } from "@/lib/use-has-mounted";

const featured = getFeaturedCaseStudy();

export function Hero() {
  const mounted = useHasMounted();

  const copy = (
    <>
      <span className="inline-flex items-center gap-2 rounded-md border border-border bg-elevated/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-accent sm:text-xs">
        {SITE.tagline} — systems, not slogans
      </span>

      <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
        Brand systems for teams that ship{" "}
        <span className="text-gradient-accent">technical products.</span>
      </h1>

      <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
        Vision without craft is vaporware. Grit without taste is noise. We design identities and
        interfaces for founders worldwide—from SaaS platforms to stone galleries and local trade brands.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted/90">
        Design in code on Next.js—reference-led builds, staging in days, packages from $6k USD.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow-sm transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          Start a project
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        <a
          href="#work"
          className="inline-flex items-center justify-center rounded-lg border border-border bg-elevated/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          See shipped work
        </a>
        <Link
          href="/services"
          className="inline-flex items-center justify-center text-sm font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
        >
          View packages
        </Link>
      </div>
    </>
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grain pt-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {mounted ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-xl"
            >
              {copy}
            </motion.div>
          ) : (
            <div className="max-w-xl">{copy}</div>
          )}

          <div className="flex flex-col gap-4">
            <HeroSystemCanvas />
            {featured ? (
              <Link
                href={`/work/${featured.slug}`}
                className="group flex max-h-[220px] flex-col overflow-hidden rounded-xl border border-border bg-elevated/80 shadow-sm backdrop-blur-sm transition-all hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:max-h-none"
              >
                <div className="relative aspect-[16/9] max-h-[120px] w-full overflow-hidden bg-elevated lg:aspect-[16/10] lg:max-h-none">
                  <Image
                    src={featured.coverImage}
                    alt={featured.coverImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/10"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-border bg-card p-3 md:p-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Featured build
                    </p>
                    <p className="mt-0.5 truncate text-sm font-semibold text-foreground md:text-base">
                      {featured.name}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-foreground/70">{featured.category}</p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-elevated text-foreground">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--hero-fade)] to-transparent"
      />
    </section>
  );
}
