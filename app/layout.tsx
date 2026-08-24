import type { Metadata, Viewport } from "next";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://soocly.com"),
  title: { default: "Soocly Prep | Trade Certification Practice Tests", template: "%s | Soocly Prep" },
  description: "Original practice tests and clear explanations for skilled-trade certification exams, starting with EPA Section 608.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Soocly Prep",
    title: "Soocly Prep | Trade Certification Practice Tests",
    description: "Focused practice for skilled-trade certification exams, starting with EPA Section 608.",
    url: "https://soocly.com",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#16324f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
