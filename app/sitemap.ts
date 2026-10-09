import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";

const baseUrl = "https://visiogrit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...workEntries,
  ];
}
