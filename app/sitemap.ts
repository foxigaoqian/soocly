import type { MetadataRoute } from "next";
import { practicePages } from "@/data/pages";
import { resourcePages } from "@/data/resources";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...new Set([...practicePages.map((page) => page.path), ...Object.values(resourcePages).map((page) => page.path), "/epa-608-study-guide", "/about", "/editorial-policy"])];
  return paths.map((path) => ({
    url: `https://soocly.com${path === "/" ? "" : path}`,
    lastModified: "2026-08-25",
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("practice-test") ? 0.9 : path.includes("epa-608") ? 0.75 : 0.5,
  }));
}
