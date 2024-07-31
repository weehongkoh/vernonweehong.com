import { Suspense } from "react";

import { Metadata, Viewport } from "next";
import Script from "next/script";

import Content from "@/app/blog/content";
import LeftPanel from "@/components/Common/LeftPanel";
import { blog } from "@/data/blog";
import { PostProp } from "@/types/Post";

import Loading from "./loading";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: `${blog.data.title} - Vernon Wee Hong KOH`,
  description: blog.data.summary,
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
    title: blog.data.subtitle,
    description: blog.data.summary,
    url: process.env.NEXT_PUBLIC_URL!,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: blog.data.subtitle,
    description: blog.data.summary,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL!}/blog`,
  },
  other: {
    htmlLang: "en-US",
  },
};

const fetchData = async () => {
  const res = await fetch(
    `${process.env.DIRECTUS_URL}/items/posts?filter[status][_eq]=published`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DIRECTUS_API_TOKEN}`,
      },
      next: { revalidate: 0 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export default async function Blog() {
  const {
    data: { title, subtitle, summary },
  } = blog;
  const { data } = await fetchData();

  const updatedItemListElement = data.map((post: PostProp) => ({
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_URL}/blog/${post.id}`,
    },
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date_created,
    author: {
      "@type": "Person",
      name: "Vernon Wee Hong KOH",
    },
  }));

  return (
    <>
      <div className="container">
        <div className="panel">
          <LeftPanel title={title} subtitle={subtitle} summary={summary} />
          <>
            <Suspense fallback={<Loading />}>
              <main className="right-panel">
                <Content />
              </main>
            </Suspense>
          </>
        </div>
      </div>
      <Script
        id="blog-posts-jsonld"
        key="blog-posts-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: updatedItemListElement,
          }),
        }}
      />
    </>
  );
}
