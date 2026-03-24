import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { services } from "@/data/services";

const BASE_URL = "https://www.austinpremierconcrete.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // City hub pages
  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/service-areas/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // City + service combo pages (108 pages)
  const comboPages: MetadataRoute.Sitemap = cities.flatMap((c) =>
    services.map((s) => ({
      url: `${BASE_URL}/service-areas/${c.slug}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }))
  );

  return [...staticPages, ...servicePages, ...cityPages, ...comboPages];
}
