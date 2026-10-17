import Link from "next/link";
import { getConceptDemo } from "@/lib/demos-data";
import { resolveDemoBrand } from "@/lib/demo-brand";
import { DEMO_STOCK } from "@/lib/demo-stock-images";
import { DemoConceptChrome } from "@/components/demos/DemoConceptChrome";
import { DemoBusinessFooter } from "@/components/demos/DemoBusinessFooter";
import { DemoOwnerCta } from "@/components/demos/DemoOwnerCta";
import { getOwnerBrief } from "@/lib/demo-owner-requirements";
import { DemoPhoto } from "@/components/demos/DemoPhoto";

const demo = getConceptDemo("stone-gallery")!;

type PageProps = { searchParams: Promise<{ brand?: string }> };

const filters = ["All stone", "Granite", "Marble", "Quartzite", "Porcelain"];
const slabs = [
  { name: "Calacatta Oro", finish: "Polished", thick: "20mm" },
  { name: "Nero Marquina", finish: "Honed", thick: "12mm" },
  { name: "Ivory Coast", finish: "Leathered", thick: "20mm" },
  { name: "Graphite Steel", finish: "Polished", thick: "12mm" },
  { name: "Arabescato", finish: "Polished", thick: "20mm" },
  { name: "Terra Rust", finish: "Brushed", thick: "20mm" },
];
const slabImages = DEMO_STOCK["stone-gallery"].slabs;

const applications = [
  { title: "Kitchen countertops", copy: "Heat-resistant surfaces with vein-matched islands." },
  { title: "Flooring & cladding", copy: "Large-format tiles for lobbies and facades." },
  { title: "Custom fabrication", copy: "Waterjet, mitered edges, and on-site templating." },
];

export default async function StoneGalleryDemoPage({ searchParams }: PageProps) {
  const { brand } = await searchParams;
  const name = resolveDemoBrand(brand, demo.defaultBrand);
  const brief = getOwnerBrief("stone-gallery")!;

  return (
    <div className="min-h-screen bg-[#141210] text-stone-100">
      <DemoConceptChrome demoTitle={demo.title} />
      <header className="border-b border-white/10 bg-[#141210]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="text-lg font-semibold tracking-[0.12em] text-amber-200">{name}</span>
          <p className="hidden text-sm text-stone-400 md:block">Showrooms · London · Dubai · Singapore</p>
          <Link
            href="/#contact"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950"
          >
            {brief.primaryCta}
          </Link>
        </div>
      </header>

      <section className="relative min-h-[min(520px,70vh)] overflow-hidden">
        <DemoPhoto
          src={DEMO_STOCK["stone-gallery"].hero}
          alt=""
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#141210] via-[#141210]/85 to-[#141210]/30"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-400/90">
            Natural stone · global export
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {name} — slab library for architects, fabricators, and importers
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-stone-400">
            Texture-first galleries, lot photography, and specs upfront—so buyers can shortlist before
            they book a showroom visit.
          </p>
          <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              readOnly
              value="Search by stone name, finish, or application…"
              className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-stone-400"
            />
            <Link
              href="/#contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-stone-950"
            >
              Book visit
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-4 py-1.5 text-xs font-medium ${
                  i === 0
                    ? "bg-amber-500 text-stone-950"
                    : "border border-white/15 text-stone-300"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="scroll-mt-28 border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Slab gallery</h2>
            <p className="text-sm text-stone-500">Tap a lot for specs · In-stock & pre-order</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {slabs.map((slab, index) => (
              <article
                key={slab.name}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#1c1917] transition hover:border-amber-500/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <DemoPhoto
                    src={slabImages[index] ?? slabImages[0]}
                    alt={slab.name}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-amber-50">{slab.name}</h3>
                  <p className="mt-1 text-xs text-stone-400">
                    {slab.finish} · {slab.thick} · Lot #A-{slab.name.slice(0, 3).toUpperCase()}
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-3 inline-flex text-xs font-semibold text-amber-400 hover:text-amber-300"
                  >
                    Request this lot →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1c1917] py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
          {applications.map((app) => (
            <div key={app.title} className="border-l-2 border-amber-500 pl-5">
              <h3 className="font-semibold text-amber-100">{app.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{app.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="specs" className="scroll-mt-28 border-y border-white/10 py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-8 px-4 text-center sm:px-6">
          {[
            { n: "400+", l: "Projects shipped" },
            { n: "70yr", l: "Quarry partnerships" },
            { n: "14", l: "Export regions" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-semibold text-amber-400">{s.n}</p>
              <p className="mt-1 text-sm text-stone-500">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-28 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold">Installed projects</h2>
          <p className="mt-2 text-stone-400">Hospitality towers, private residences, and embassy lobbies</p>
          <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-2xl border border-white/10">
            <DemoPhoto
              src={DEMO_STOCK["stone-gallery"].cover}
              alt="Stone installation in luxury interior"
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <blockquote className="mt-8 border-l-2 border-amber-500 pl-5 text-stone-300">
            <p className="text-lg">
              &ldquo;{name} documented every slab lot before freight—our install team had zero surprises on site.&rdquo;
            </p>
            <p className="mt-2 text-sm text-stone-500">— Principal, international architecture studio</p>
          </blockquote>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DemoOwnerCta
          variant="accent"
          headline="Need slabs for a hospitality or tower project?"
          sub="Share drawings—we respond with availability and freight options within one business day."
          primaryLabel={brief.primaryCta}
          primaryHref="/#contact"
          secondaryLabel={brief.secondaryCta}
          secondaryHref="/#contact"
        />
      </div>
      <DemoBusinessFooter brandName={name} variant="stone-gallery" />
    </div>
  );
}
