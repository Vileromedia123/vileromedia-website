import type { Metadata, Viewport } from "next";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VileroMedia | Google Ads for Residential Roofers",
  description:
    "Google Ads, Local Services Ads and Local SEO for small residential roofing companies in the US. Prices on the page. Month-to-month. Reports in calls and booked inspections.",
  openGraph: {
    title: "VileroMedia | More roofing calls from Google",
    description:
      "Google Ads and LSA for residential roofing companies in the US. Clear pricing, month-to-month, reports in calls, not clicks.",
    siteName: "VileroMedia",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1B2D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
