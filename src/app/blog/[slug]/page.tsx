import { Metadata } from "next";
import Script from "next/script";

import fetchPostData from "@/app/blog/[slug]/blog-api";
import {
  generateJsonLd,
  generatePostMetadata,
} from "@/app/blog/[slug]/blog-metadata";
import BlogPostHeader from "@/app/blog/[slug]/blog-post-header";
import Content from "@/app/blog/[slug]/content";
import Reference from "@/components/Common/Reference";
import SocialMedia from "@/components/Common/SocialMedia";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  themeColor: "#020617",
};

export async function generateMetadata({
  params,
}: Readonly<{ params: { slug: string } }>): Promise<Metadata | undefined> {
  const { data } = await fetchPostData(params.slug);
  return generatePostMetadata(data);
}

export default async function Blog({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const { data } = await fetchPostData(params.slug);
  const jsonLd = generateJsonLd(data);

  return (
    <>
      <div className="container">
        <div className="panel">
          <header className="left-panel">
            <BlogPostHeader data={data} />
            <footer className="hidden lg:flex">
              <SocialMedia />
              <Reference />
            </footer>
          </header>
          <main className="right-panel">
            <Content content={data.content} />
          </main>
        </div>
      </div>
      <Script
        id="posts-jsonld"
        key="posts-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
