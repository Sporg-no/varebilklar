import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://varebilklar.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-07");
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/hviletidskalkulator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/kjore-og-hviletid-varebil`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/fartsskriver-varebil`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/loyveeksamen-varebil`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/personvern`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
