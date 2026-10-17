import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OFFERING_PACKAGES } from "@/lib/offerings";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PackagesTeaser() {
  return (
    <section className="relative scroll-mt-20 border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Engagement"
          title="Clear packages, USD pricing"
          description="Reference-led builds with staging URLs—scope and timeline upfront so you can decide fast."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {OFFERING_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`rounded-2xl border p-5 md:p-6 ${
                pkg.id === "marketing-site"
                  ? "border-accent/35 bg-accent-muted"
                  : "border-border bg-card"
              }`}
            >
              <p className="font-mono text-sm text-accent">{pkg.priceLabel}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{pkg.name}</h3>
              <p className="mt-1 text-sm text-muted">{pkg.timeline}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-elevated/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40"
          >
            Full packages &amp; what&apos;s included
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
