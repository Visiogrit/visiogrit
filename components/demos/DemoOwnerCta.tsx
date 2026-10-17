import Link from "next/link";

type DemoOwnerCtaProps = {
  headline: string;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant: "dark" | "light" | "accent";
};

export function DemoOwnerCta({
  headline,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant,
}: DemoOwnerCtaProps) {
  const bg =
    variant === "accent"
      ? "bg-amber-500 text-stone-950"
      : variant === "dark"
        ? "bg-slate-950 text-white"
        : "bg-cyan-500/10 border border-cyan-500/20 text-slate-100";

  const primaryBtn =
    variant === "accent"
      ? "bg-stone-950 text-amber-100"
      : variant === "dark"
        ? "bg-amber-400 text-slate-950"
        : "bg-cyan-400 text-slate-950";

  return (
    <section className={variant === "light" ? "py-16" : "py-14"}>
      <div className={`mx-auto max-w-6xl rounded-2xl px-6 py-10 text-center sm:px-10 ${bg}`}>
        <h2 className="text-2xl font-semibold">{headline}</h2>
        <p className={`mx-auto mt-2 max-w-xl text-sm ${variant === "accent" ? "text-stone-800" : "opacity-80"}`}>
          {sub}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href={primaryHref} className={`rounded-lg px-6 py-3 text-sm font-semibold ${primaryBtn}`}>
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="rounded-lg border border-current/25 px-6 py-3 text-sm font-medium"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
