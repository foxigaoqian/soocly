import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
  openGraphTitle?: string;
};

export function createPageMetadata({ title, description, path, absoluteTitle, openGraphTitle }: PageMetadataInput): Metadata {
  const url = `https://soocly.com${path === "/" ? "" : path}`;
  const socialTitle = openGraphTitle ?? title;
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Soocly Prep",
      title: socialTitle,
      description,
      url,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Soocly Prep EPA 608 practice tests" }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}
