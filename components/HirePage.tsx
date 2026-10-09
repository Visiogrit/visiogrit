"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import {
  HIRE_PROFILE,
  HOW_WE_COLLABORATE,
  OFFERING_NOT_INCLUDED,
  OFFERING_PACKAGES,
} from "@/lib/offerings";
import { SITE } from "@/lib/constants";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function HirePage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial-glow" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400"
          >
            Services &amp; packages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl"
          >
            {HIRE_PROFILE.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-slate-400"
          >
            {HIRE_PROFILE.shortAbout}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={`mailto:${SITE.email}?subject=Project%20inquiry`}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Email to start
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href="/#contact"
              className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400/40"
            >
              Contact form
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-white">About (for Contra / proposals)</h2>
          <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-slate-400">
            {HIRE_PROFILE.longAbout}
          </p>
          <CopyEmailButton className="mt-6" />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
            How we collaborate
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {HOW_WE_COLLABORATE.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
            Packages
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
            USD pricing for US and international clients. 50% deposit to start; balance on
            launch unless otherwise agreed.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {OFFERING_PACKAGES.map((pkg, index) => (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col rounded-2xl border p-6 md:p-8 ${
                  pkg.id === "marketing-site"
                    ? "border-cyan-400/40 bg-cyan-400/5 shadow-glow-sm"
                    : "border-white/10 bg-slate-950/60"
                }`}
              >
                <p className="font-mono text-sm text-cyan-400">{pkg.priceLabel}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{pkg.timeline}</p>
                <p className="mt-4 text-sm text-slate-400">{pkg.bestFor}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.includes.map((line) => (
                    <li key={line} className="flex gap-2 text-sm text-slate-300">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                        aria-hidden
                      />
                      {line}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(pkg.name)}`}
                  className="mt-8 inline-flex justify-center rounded-full border border-white/15 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-400/40 hover:bg-white/5"
                >
                  Inquire
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-white">Typically not included</h2>
          <ul className="mt-4 space-y-3">
            {OFFERING_NOT_INCLUDED.map((line) => (
              <li key={line} className="flex gap-2 text-sm text-slate-400">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate-500">
            See shipped examples on the{" "}
            <Link href="/#work" className="text-cyan-400 hover:underline">
              home page
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${SITE.email}`} className="text-cyan-400 hover:underline">
              {SITE.email}
            </a>{" "}
            with references and timeline.
          </p>
        </div>
      </section>
    </div>
  );
}
