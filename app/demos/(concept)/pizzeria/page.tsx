import Link from "next/link";
import { Star } from "lucide-react";
import { getConceptDemo } from "@/lib/demos-data";
import { resolveDemoBrand } from "@/lib/demo-brand";
import { DEMO_STOCK } from "@/lib/demo-stock-images";
import { DemoConceptChrome } from "@/components/demos/DemoConceptChrome";
import { DemoBusinessFooter } from "@/components/demos/DemoBusinessFooter";
import { DemoOwnerCta } from "@/components/demos/DemoOwnerCta";
import { getOwnerBrief } from "@/lib/demo-owner-requirements";
import { DemoPhoto } from "@/components/demos/DemoPhoto";
import { DemoAnchor } from "@/components/demos/DemoAnchor";

const demo = getConceptDemo("pizzeria")!;

type PageProps = { searchParams: Promise<{ brand?: string }> };

const menu = [
  { name: "Margherita", price: "$14", note: "San Marzano, fior di latte, basil" },
  { name: "Diavola", price: "$16", note: "Spicy salami, smoked provola" },
  { name: "Funghi", price: "$15", note: "Roasted mushrooms, thyme" },
  { name: "Quattro Formaggi", price: "$17", note: "Gorgonzola, pecorino, mozzarella" },
];

const dishImages = DEMO_STOCK.pizzeria.dishes;

export default async function PizzeriaDemoPage({ searchParams }: PageProps) {
  const { brand } = await searchParams;
  const name = resolveDemoBrand(brand, demo.defaultBrand);
  const brief = getOwnerBrief("pizzeria")!;

  return (
    <div className="min-h-screen bg-[#fff8f0] text-stone-900">
      <DemoConceptChrome demoTitle={demo.title} />
      <header className="border-b border-red-900/20 bg-red-950 text-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="font-serif text-xl font-semibold tracking-tight">{name}</span>
          <nav className="hidden gap-6 text-sm text-red-100/80 md:flex">
            <DemoAnchor href="#menu">Menu</DemoAnchor>
            <DemoAnchor href="#visit">Visit</DemoAnchor>
          </nav>
          <Link
            href="/#contact"
            className="rounded-full bg-amber-400 px-5 py-2 text-sm font-bold text-red-950"
          >
            {brief.primaryCta}
          </Link>
        </div>
      </header>

      <div className="bg-amber-400 py-2.5 text-center text-sm font-semibold text-red-950">
        This week: Buy any large pie + salad — free tiramisu · Code OVEN
      </div>

      <section className="relative overflow-hidden bg-red-950 text-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-14 sm:px-6 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">Wood-fired · since 1987</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Neapolitan pizza at {name}
            </h1>
            <p className="mt-4 text-lg text-red-100/85">
              48-hour dough, DOP mozzarella, and a 900°F stone oven—delivery in 35 minutes or dine in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#contact" className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-red-950">
                Order now
              </Link>
              <DemoAnchor href="#menu" className="rounded-lg border border-white/25 px-6 py-3 font-medium">
                View menu
              </DemoAnchor>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-amber-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
              ))}
              <span className="text-red-100/80">4.9 · 2,400+ reviews</span>
            </div>
          </div>
          <div className="relative min-h-[320px] md:min-h-[480px]">
            <DemoPhoto
              src={DEMO_STOCK.pizzeria.hero}
              alt="Wood-fired pizza"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 to-transparent md:from-red-950/60" />
          </div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-28 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-semibold text-red-950">From the oven</h2>
          <p className="mt-2 text-stone-600">Classic pies and weekly specials—sizes 10&quot; / 13&quot;</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {menu.map((item, index) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10]">
                  <DemoPhoto
                    src={dishImages[index % dishImages.length]}
                    alt={item.name}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-stone-600">{item.note}</p>
                  </div>
                  <span className="shrink-0 text-lg font-bold text-red-800">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-28 border-t border-amber-200 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-red-950">Visit {name}</h2>
            <p className="mt-4 text-stone-600">124 Mercer Street · Delivery radius 5 mi</p>
            <p className="mt-2 text-sm text-stone-500">Catering trays for 12+ · Private dining for events</p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between border-b border-stone-100 py-2">
                <dt className="text-stone-500">Mon – Thu</dt>
                <dd className="font-medium">11:00 – 22:00</dd>
              </div>
              <div className="flex justify-between border-b border-stone-100 py-2">
                <dt className="text-stone-500">Fri – Sat</dt>
                <dd className="font-medium">11:00 – 23:30</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-stone-500">Sun</dt>
                <dd className="font-medium">12:00 – 21:00</dd>
              </div>
            </dl>
          </div>
          <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-amber-300 bg-amber-50/50 text-sm text-stone-500">
            Map & pickup window · Concept demo
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <DemoOwnerCta
          variant="dark"
          headline="Hungry tonight?"
          sub="Order for delivery in ~35 minutes or hold a table for your group."
          primaryLabel={brief.primaryCta}
          primaryHref="/#contact"
          secondaryLabel={brief.secondaryCta}
          secondaryHref="/#contact"
        />
      </div>
      <DemoBusinessFooter brandName={name} variant="pizzeria" />
    </div>
  );
}
