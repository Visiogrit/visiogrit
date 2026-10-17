import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DemosBand() {
  return (
    <section className="border-y border-border bg-elevated/40 py-12 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Concept demos</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Vertical previews for teams worldwide
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            Tech platforms, stone galleries, restaurants, and automotive—explore styled concept sites and
            personalize the hero with your business name.
          </p>
        </div>
        <Link
          href="/demos"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40"
        >
          Browse demos
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
