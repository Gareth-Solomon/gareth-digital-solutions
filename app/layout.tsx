import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.offerName} | ${siteConfig.name}`,
  description:
    "Estimate missed-call revenue and request a personalised Missed Call Opportunity Report from Gareth Digital Solutions.",
  metadataBase: new URL("https://gareth-digital-solutions.vercel.app"),
  openGraph: {
    title: `${siteConfig.offerName} | ${siteConfig.name}`,
    description:
      "A simple missed-call recovery system for local service businesses that cannot afford to lose enquiries.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
