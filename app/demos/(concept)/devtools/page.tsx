import Link from "next/link";
import { Check } from "lucide-react";
import { getConceptDemo } from "@/lib/demos-data";
import { resolveDemoBrand } from "@/lib/demo-brand";
import { DemoConceptChrome } from "@/components/demos/DemoConceptChrome";
import { DemoBusinessFooter } from "@/components/demos/DemoBusinessFooter";
import { DemoOwnerCta } from "@/components/demos/DemoOwnerCta";
import { getOwnerBrief } from "@/lib/demo-owner-requirements";
import { DevtoolsCodePreview } from "@/components/demos/DevtoolsCodePreview";
import { DEMO_STOCK } from "@/lib/demo-stock-images";
import { DemoPhoto } from "@/components/demos/DemoPhoto";
import { DemoAnchor } from "@/components/demos/DemoAnchor";

const demo = getConceptDemo("devtools")!;

type PageProps = { searchParams: Promise<{ brand?: string }> };

const logos = ["Orbital", "Frame", "Northwind", "Parcel", "Helix"];
const integrations = ["Node", "Python", "Go", "Terraform", "Webhooks"];

export default async function DevtoolsDemoPage({ searchParams }: PageProps) {
  const { brand } = await searchParams;
  const name = resolveDemoBrand(brand, demo.defaultBrand);
  const brief = getOwnerBrief("devtools")!;

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100">
      <DemoConceptChrome demoTitle={demo.title} />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070a10]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <span className="font-mono text-sm font-semibold tracking-tight text-cyan-400">{name}</span>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <DemoAnchor href="#product" className="hover:text-white">Product</DemoAnchor>
            <DemoAnchor href="#developers" className="hover:text-white">Developers</DemoAnchor>
            <DemoAnchor href="#pricing" className="hover:text-white">Pricing</DemoAnchor>
          </nav>
          <div className="flex items-center gap-2">
            <DemoAnchor href="#developers" className="hidden text-sm text-slate-400 sm:inline hover:text-white">
              Docs
            </DemoAnchor>
            <Link
              href="/#contact"
              className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-300 hover:text-white"
            >
              Sales
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950"
            >
              {brief.primaryCta}
            </Link>
          </div>
        </div>
      </header>

      <section id="product" className="relative scroll-mt-28 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.18),transparent)]"
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              99.99% uptime · SOC 2 Type II
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              Infrastructure APIs for teams that ship {name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              One surface for events, billing meters, and identity—typed SDKs, request logs, and a
              sandbox that behaves like production.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Start building
              </Link>
              <DemoAnchor
                href="#developers"
                className="rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white"
              >
                View API reference
              </DemoAnchor>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:aspect-auto md:min-h-[420px]">
            <DemoPhoto
              src={DEMO_STOCK.devtools.hero}
              alt="Request logs and usage dashboard"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-[#070a10]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[min(100%,420px)]">
              <DevtoolsCodePreview />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0e16] py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 text-sm font-medium tracking-wide text-slate-500 sm:px-6">
          {logos.map((logo) => (
            <span key={logo} className="uppercase">{logo}</span>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold md:text-3xl">Built for platform engineers</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Patterns you expect from modern developer platforms—predictable resources, test mode, and
            dashboards your team already knows how to read.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Unified events API",
                d: "Signed webhooks with replay, delivery logs, and dead-letter queues.",
              },
              {
                t: "Sandbox instances",
                d: "Seed test data without touching production ledgers or customer PII.",
              },
              {
                t: "Usage metering",
                d: "Bill on API calls, seats, or custom dimensions with one schema.",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-500/30"
              >
                <h3 className="text-lg font-semibold text-cyan-200">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="developers" className="scroll-mt-28 border-t border-white/10 bg-[#0a0e16] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center sm:px-6">
          <div>
            <h2 className="text-2xl font-semibold">Integrate in an afternoon</h2>
            <p className="mt-3 text-slate-400">
              SDKs, OpenAPI specs, and copy-paste snippets—plus request logs that show exactly what
              failed when a integration breaks at 2 a.m.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {integrations.map((i) => (
                <li
                  key={i}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0d1117] p-6 font-mono text-xs leading-relaxed text-slate-300">
            <p className="text-slate-500">{"// node — create customer"}</p>
            <p className="mt-2">
              <span className="text-violet-300">const</span> customer ={" "}
              <span className="text-cyan-300">await</span> client.customers.create({"{"}
            </p>
            <p className="pl-4">email: &quot;ops@company.com&quot;,</p>
            <p className="pl-4">metadata: {"{"} plan: &quot;growth&quot; {"}"},</p>
            <p>{"});"}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <blockquote className="text-lg leading-relaxed text-slate-300 md:text-xl">
            &ldquo;We replaced three internal services with {name} in a quarter. Request logs alone
            paid for the migration.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-slate-500">— Platform lead, Series B fintech</p>
        </div>
      </section>

      <section id="trust" className="scroll-mt-28 border-y border-white/10 bg-[#0a0e16] py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-4 text-xs text-slate-400 sm:px-6">
          {["SOC 2 Type II", "GDPR", "HIPAA-ready", "Status page", "Pen test annually"].map((badge) => (
            <span key={badge} className="rounded-full border border-white/10 px-4 py-2">{badge}</span>
          ))}
        </div>
      </section>

      <section id="pricing" className="scroll-mt-28 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">Usage-based pricing</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { tier: "Build", price: "$49", items: ["1M events/mo", "Sandbox", "Email support"] },
              { tier: "Scale", price: "$199", items: ["10M events/mo", "SSO", "Priority support"], highlight: true },
              { tier: "Enterprise", price: "Custom", items: ["Dedicated cells", "SLA", "Solutions engineer"] },
            ].map((p) => (
              <div
                key={p.tier}
                className={`rounded-2xl border p-6 ${
                  p.highlight
                    ? "border-cyan-500/50 bg-cyan-500/5 shadow-lg shadow-cyan-500/10"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <p className="text-sm text-slate-400">{p.tier}</p>
                <p className="mt-2 text-4xl font-semibold">{p.price}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DemoOwnerCta
          variant="light"
          headline="Ready to ship your next integration?"
          sub="Start in sandbox with test API keys—no credit card. Upgrade when you hit production traffic."
          primaryLabel={brief.primaryCta}
          primaryHref="/#contact"
          secondaryLabel={brief.secondaryCta}
          secondaryHref="/#contact"
        />
      </div>
      <DemoBusinessFooter brandName={name} variant="devtools" />
    </div>
  );
}
