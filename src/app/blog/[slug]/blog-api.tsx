import { PostProp } from "@/types/Post";

export default async function fetchPostData(
  slug: string,
): Promise<{ data: PostProp }> {
  const res = await fetch(`${process.env.DIRECTUS_URL}/items/posts/${slug}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.DIRECTUS_API_TOKEN}`,
    },
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
