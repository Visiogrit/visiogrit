import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/demos/devtools", "/demos/stone-gallery", "/demos/pizzeria", "/demos/automotive"],
    },
    sitemap: "https://visiogrit.com/sitemap.xml",
  };
}
