import "@/styles/globals.scss";

import { ReactNode, Suspense } from "react";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import FathomAnalytics from "@/components/Analytics/FathomAnalytics";
import { resume } from "@/data/resume";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: `${resume.data.name} - ${resume.data.role}`,
  description:
    "Vernon Wee Hong KOH is a Software Engineer and a lifelong learner with expertise in crafting engaging user interfaces (UIs) and robust application programming interfaces (APIs). He shares knowledge and contributes to the growth of the community.",
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
          <FathomAnalytics />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
