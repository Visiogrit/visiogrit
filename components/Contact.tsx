"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { BUDGET_RANGES, SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

type FormState = {
  name: string;
  company: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  budget: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `Project inquiry from ${form.name}${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company / Project: ${form.company || "—"}`,
        `Budget Range: ${form.budget || "—"}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm(initialState);
  }

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Ready to forge your product's identity?"
          description="Tell us about your product, timeline, and goals. We'll respond with next steps."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <p className="text-muted">
              Prefer email? Reach us directly — we typically reply within one business day.
            </p>
            <CopyEmailButton />
            <div className="rounded-2xl border border-border bg-elevated/50 p-5">
              <p className="text-sm font-medium text-foreground">What happens next</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>— We review your brief and technical context</li>
                <li>— Schedule a short discovery call if there&apos;s a fit</li>
                <li>— Proposal with scope, timeline, and investment</li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-foreground/80">
                  Name <span className="text-accent">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-elevated/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/40"
                  placeholder="Alex Rivera"
                  autoComplete="name"
                />
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-foreground/80">
                  Company / Project
                </span>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-elevated/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/40"
                  placeholder="Acme Infrastructure"
                  autoComplete="organization"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-foreground/80">
                  Budget Range
                </span>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                  className="w-full appearance-none rounded-xl border border-border bg-elevated/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/40"
                >
                  <option value="" className="bg-elevated">
                    Select a range
                  </option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range} className="bg-elevated">
                      {range}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-foreground/80">
                  Message <span className="text-accent">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-y rounded-xl border border-border bg-elevated/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/40"
                  placeholder="Tell us about your product, goals, and timeline..."
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Send Inquiry
                <Send className="h-4 w-4" aria-hidden />
              </button>

              {status === "success" ? (
                <p role="status" className="text-sm text-accent">
                  Opening your email client…
                </p>
              ) : null}
              {status === "error" ? (
                <p role="alert" className="text-sm text-rose-400">
                  Please fill in your name and message.
                </p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
