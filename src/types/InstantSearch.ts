import { PostProp } from "@/types/Post";

export type HitProp = Pick<
  PostProp,
  "id" | "title" | "excerpt" | "categories" | "date_created"
>;
