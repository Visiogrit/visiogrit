"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  const label = index ? `${index} / ${eyebrow ?? title}` : eyebrow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`mb-12 flex max-w-2xl flex-col gap-3 md:mb-16 ${alignment}`}
    >
      {label ? (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted md:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
