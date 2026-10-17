import Link from "next/link";
import { BadgeCheck, Shield } from "lucide-react";
import { getConceptDemo } from "@/lib/demos-data";
import { resolveDemoBrand } from "@/lib/demo-brand";
import { DEMO_STOCK } from "@/lib/demo-stock-images";
import { DemoConceptChrome } from "@/components/demos/DemoConceptChrome";
import { DemoBusinessFooter } from "@/components/demos/DemoBusinessFooter";
import { DemoOwnerCta } from "@/components/demos/DemoOwnerCta";
import { getOwnerBrief } from "@/lib/demo-owner-requirements";
import { DemoPhoto } from "@/components/demos/DemoPhoto";
import { DemoAnchor } from "@/components/demos/DemoAnchor";

const demo = getConceptDemo("automotive")!;

type PageProps = { searchParams: Promise<{ brand?: string }> };

const inventory = [
  { model: "Crossover XLE", price: "$32,400", tag: "Certified" },
  { model: "EV Hatch Pro", price: "$28,900", tag: "New" },
  { model: "Sport S", price: "$41,200", tag: "Pre-owned" },
];

const services = [
  { name: "Oil & filter service", from: "$89" },
  { name: "Brake inspection", from: "$129" },
  { name: "EV battery health", from: "$149" },
  { name: "Full diagnostics", from: "$99" },
];

const vehicleImages = DEMO_STOCK.automotive.vehicles;

export default async function AutomotiveDemoPage({ searchParams }: PageProps) {
  const { brand } = await searchParams;
  const name = resolveDemoBrand(brand, demo.defaultBrand);
  const brief = getOwnerBrief("automotive")!;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <DemoConceptChrome demoTitle={demo.title} />
      <header className="bg-slate-950 text-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="text-lg font-bold tracking-tight">{name}</span>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <DemoAnchor href="#inventory">Inventory</DemoAnchor>
            <DemoAnchor href="#service">Service</DemoAnchor>
            <DemoAnchor href="#finance">Finance</DemoAnchor>
          </nav>
          <Link href="/#contact" className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950">
            Book service
          </Link>
        </div>
      </header>

      <section className="relative min-h-[min(440px,65vh)] overflow-hidden bg-slate-950 text-white">
        <DemoPhoto
          src={DEMO_STOCK.automotive.hero}
          alt="Showroom vehicle"
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-300">New & pre-owned</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Drive with confidence from {name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Transparent pricing, multi-point inspections, and financing for buyers worldwide.
          </p>
          <div className="mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              readOnly
              value="Search make, model, or stock #…"
              className="flex-1 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-slate-300"
            />
            <Link
              href="/#contact"
              className="rounded-lg bg-amber-400 px-6 py-3 text-center text-sm font-bold text-slate-950"
            >
              Search inventory
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          {[
            { t: "172-point inspection", d: "Every pre-owned vehicle" },
            { t: "Price transparency", d: "No doc fees hidden online" },
            { t: "Same-day service", d: "Book by 2pm Mon–Fri" },
          ].map((item) => (
            <div key={item.t} className="text-center sm:text-left">
              <p className="font-semibold text-slate-900">{item.t}</p>
              <p className="mt-1 text-sm text-slate-600">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="inventory" className="scroll-mt-28 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold">Featured inventory</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {inventory.map((car, index) => (
              <article
                key={car.model}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/10]">
                  <DemoPhoto
                    src={vehicleImages[index]}
                    alt={car.model}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-slate-900/85 px-2 py-1 text-xs font-semibold text-amber-300">
                    {car.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{car.model}</h3>
                  <p className="mt-1 text-xl font-bold text-blue-800">{car.price}</p>
                  <p className="mt-2 text-xs text-slate-500">Est. $420/mo · 0% APR promo</p>
                  <Link href="/#contact" className="mt-3 inline-block text-sm font-semibold text-blue-700">
                    Schedule test drive →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className="scroll-mt-28 border-y border-slate-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 sm:px-6">
          <div>
            <h2 className="text-xl font-bold">Certified service center</h2>
            <p className="mt-2 text-slate-600">Factory-trained technicians · OEM parts · Same-day appointments</p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s.name} className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                  <span>{s.name}</span>
                  <span className="font-semibold text-slate-800">from {s.from}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Schedule appointment
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-2xl bg-slate-100 p-6">
            <div className="flex gap-3">
              <Shield className="h-8 w-8 text-blue-700" aria-hidden />
              <div>
                <p className="font-semibold">Manufacturer warranty honored</p>
                <p className="text-sm text-slate-600">Multi-point inspection on every pre-owned vehicle</p>
              </div>
            </div>
            <div className="flex gap-3">
              <BadgeCheck className="h-8 w-8 text-amber-600" aria-hidden />
              <div>
                <p className="font-semibold">Trade-in concierge</p>
                <p className="text-sm text-slate-600">Instant appraisal and equity toward your next vehicle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="finance" className="scroll-mt-28 bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold">Financing & lease options</h2>
          <p className="mt-2 text-slate-400">Apply online—decisions in minutes with participating lenders</p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950"
          >
            Get pre-qualified
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DemoOwnerCta
          variant="dark"
          headline={`Why buyers choose ${name}`}
          sub="Transparent pricing, certified technicians, and trade-in support from one team."
          primaryLabel={brief.primaryCta}
          primaryHref="/#contact"
          secondaryLabel="Book test drive"
          secondaryHref="/#contact"
        />
      </div>
      <DemoBusinessFooter brandName={name} variant="automotive" />
    </div>
  );
}
