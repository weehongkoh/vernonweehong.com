import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<
  Readonly<MetadataRoute.Sitemap>
> {
  const domain = process.env.NEXT_PUBLIC_URL;

  const routes = [""].map((route) => ({
    url: domain + route,
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [...routes];
}
