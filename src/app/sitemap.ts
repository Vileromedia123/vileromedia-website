import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/blog/our-conversion-funnel`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/guides/google-ads-budget-for-roofers`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
