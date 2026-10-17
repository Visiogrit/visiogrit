"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HashLink } from "@/components/HashLink";
import { ArrowUpRight } from "lucide-react";
import {
  CONCEPT_DEMOS,
  DEMO_CATEGORIES,
  type DemoCategoryId,
} from "@/lib/demos-data";
import { demoOpenHref, DEMO_BRAND_PLACEHOLDER } from "@/lib/demo-brand";

export function DemosHub() {
  const [category, setCategory] = useState<DemoCategoryId | "all">("all");
  const [brandInput, setBrandInput] = useState("");

  const filtered = useMemo(() => {
    if (category === "all") return CONCEPT_DEMOS;
    return CONCEPT_DEMOS.filter((d) => d.category === category);
  }, [category]);

  const previewBrand = brandInput.trim() || DEMO_BRAND_PLACEHOLDER;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Concept demos</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          See your vertical, before we ship it
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Interactive concept sites for tech teams and local businesses worldwide—not client work.
          Type a business name below; open a demo to see it in the hero.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-elevated/50 p-6 md:p-8">
        <label htmlFor="demo-brand" className="text-sm font-medium text-foreground">
          How would it look with your name?
        </label>
        <p className="mt-1 text-sm text-muted">
          Enter a business name—demo links will pass it through to the live preview.
        </p>
        <input
          id="demo-brand"
          type="text"
          value={brandInput}
          onChange={(e) => setBrandInput(e.target.value)}
          placeholder="e.g. Atlas Stone Co."
          className="mt-4 w-full max-w-xl rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {DEMO_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              category === cat.id
                ? "border-accent bg-accent-muted text-accent"
                : "border-border bg-card text-muted hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((demo) => (
          <li key={demo.slug}>
            <Link
              href={demoOpenHref(demo.slug, brandInput)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/40 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] bg-elevated">
                <Image
                  src={demo.coverImage}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                  {demo.styleLabel}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {demo.title}
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {brandInput.trim() || demo.defaultBrand}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{demo.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {demo.features.map((f) => (
                    <li key={f} className="flex gap-2 before:text-accent before:content-['—']">
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Open demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-sm text-muted">
        Preview label on cards: <span className="font-medium text-foreground">{previewBrand}</span>
        . Shipped client work lives in{" "}
        <HashLink href="/#work" className="text-accent hover:underline">portfolio</HashLink>.
      </p>
    </div>
  );
}
