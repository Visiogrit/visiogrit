import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Case study" };

  return {
    title: `${study.name} — Visiogrit`,
    description: study.cardDescription,
    openGraph: {
      title: `${study.name} — Visiogrit`,
      description: study.cardDescription,
    },
  };
}

export default function WorkCaseStudyPage({ params }: PageProps) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return <CaseStudyPage study={study} />;
}
