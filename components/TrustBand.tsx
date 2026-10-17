import Link from "next/link";
import { ArrowRight } from "lucide-react";

const OUTCOMES = [
  "Unified listing dashboard for dense, multi-source inventory feeds",
  "Nonprofit site with program pillars, campaigns, and donate paths",
  "B2B stone catalog with category IA and trade buyer contact flows",
  "Production deploys on Vercel with responsive, token-ready UI",
];

export function TrustBand() {
  return (
    <section className="border-y border-border bg-elevated/35 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Proof</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Shipped outcomes, not slide decks
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted md:text-base">
              {OUTCOMES.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-accent" aria-hidden>—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#work"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              See shipped work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <blockquote className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              &ldquo;We skipped the wireframe marathon—references, a staging URL, and revision rounds
              on real pages. That&apos;s how we wanted to buy design.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-muted">— Product lead, B2B SaaS</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
