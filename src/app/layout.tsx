import "@/styles/globals.scss";

import { ReactNode, Suspense } from "react";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import FathomAnalytics from "@/components/Analytics/FathomAnalytics";
import { resume } from "@/data/resume";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.data.name,
  description: resume.data.summary,
  image: "https://weehong-me.b-cdn.net/Personal/profile.jpg",
  url: process.env.NEXT_PUBLIC_URL!,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: `${resume.data.name} - ${resume.data.role}`,
  description: resume.data.summary,
  robots:
    process.env.NODE_ENV === "production"
      ? "index, follow"
      : "noindex, nofollow",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  icons: {
    icon: "/icon?<generated>",
    apple: "/apple-icon?<generated>",
  },
  openGraph: {
    title: resume.data.name,
    description: resume.data.summary,
    url: process.env.NEXT_PUBLIC_URL!,
    images: [
      {
        url: "https://weehong-me.b-cdn.net/Personal/profile.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: resume.data.name,
    description: resume.data.summary,
    images: [
      {
        url: "https://weehong-me.b-cdn.net/Personal/profile.jpg",
      },
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL!,
  },
  other: {
    htmlLang: "en-US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Suspense fallback={null}>
          <Script
            id="person-jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            key="person-jsonld"
          />
          <FathomAnalytics />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
