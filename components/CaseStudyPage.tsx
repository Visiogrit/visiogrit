import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyPageProps = {
  study: CaseStudy;
};

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-16">
        <header className="border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to work
            </Link>
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              Live site
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {study.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {study.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{study.overview}</p>
          <p className="mt-4 text-sm text-muted/80">
            Locale-specific programme copy, compliance labels, and market data appear on the
            live build—not summarized here.
          </p>

          <div
            className={`mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${study.gradient}`}
          >
            <div className="flex h-full items-center justify-center bg-grid opacity-50">
              <span className="text-3xl font-semibold text-foreground/80">{study.name}</span>
            </div>
          </div>

          <section className="mt-12 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Challenge</h2>
            <p className="leading-relaxed text-muted">{study.challenge}</p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Approach</h2>
            <p className="leading-relaxed text-muted">{study.solution}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {study.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-muted before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-elevated/60 px-3 py-1.5 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <div className="mt-14 rounded-2xl border border-border bg-elevated/40 p-6 md:p-8">
            <p className="font-medium text-foreground">Building something similar?</p>
            <p className="mt-2 text-sm text-muted">
              We design and ship marketing sites, nonprofit platforms, and data-forward
              product UIs for technical teams.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
            >
              Start a project
            </Link>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
