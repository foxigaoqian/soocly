import type { MetadataRoute } from "next";
import { practicePages } from "@/data/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...practicePages.map((page) => page.path), "/epa-608-study-guide", "/about", "/editorial-policy"];
  return paths.map((path) => ({ url: `https://soocly.com${path === "/" ? "" : path}`, changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : path.includes("practice-test") ? 0.9 : 0.6 }));
}
