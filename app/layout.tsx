import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";
import { serializeJsonLd } from "./_lib/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soocly.com"),
  title: { default: "Soocly Prep | Trade Certification Practice Tests", template: "%s | Soocly Prep" },
  description: "Original practice tests and clear explanations for skilled-trade certification exams, starting with EPA Section 608.",
  alternates: { canonical: "/" },
  applicationName: "Soocly Prep",
  category: "education",
  creator: "Soocly Prep",
  publisher: "Soocly Prep",
  openGraph: {
    type: "website",
    siteName: "Soocly Prep",
    title: "Soocly Prep | Trade Certification Practice Tests",
    description: "Focused practice for skilled-trade certification exams, starting with EPA Section 608.",
    url: "https://soocly.com",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Soocly Prep EPA 608 practice tests" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soocly Prep | EPA 608 Practice Tests",
    description: "Free source-checked EPA 608 practice tests with explanations.",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#16324f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://soocly.com/#organization",
      name: "Soocly Prep",
      url: "https://soocly.com",
      logo: "https://soocly.com/icon.svg",
      description: "Independent skilled-trade certification practice and study resources.",
      publishingPrinciples: "https://soocly.com/editorial-policy",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://soocly.com/#website",
      name: "Soocly Prep",
      url: "https://soocly.com",
      publisher: { "@id": "https://soocly.com/#organization" },
      inLanguage: "en-US",
    },
  ];
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F4W4WME578"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F4W4WME578');`}
        </Script>
        <SiteHeader />{children}<SiteFooter />
      </body>
    </html>
  );
}
