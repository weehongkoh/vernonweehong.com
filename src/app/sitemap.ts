import type { MetadataRoute } from "next";

import { PostProp } from "@/types/Post";

const fetchData = async () => {
  const res = await fetch(
    `${process.env.DIRECTUS_URL}/items/posts?filter[status][_eq]=published`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.DIRECTUS_API_TOKEN}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export default async function sitemap(): Promise<
  Readonly<MetadataRoute.Sitemap>
> {
  const blog = await fetchData();

  const domain = process.env.NEXT_PUBLIC_URL;

  const blogUrl = blog.data.map((post: Readonly<PostProp>) => ({
    url: domain + `/blog/${post.id}`,
    lastModified: new Date().toISOString(),
    priority: 0.8,
  }));

  const routes = ["", "/blog", "/contact"].map((route) => ({
    url: domain + route,
    lastModified: new Date().toISOString(),
    priority: 1,
  }));

  return [...routes, ...blogUrl];
}
