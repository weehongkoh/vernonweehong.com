import dayjs from "dayjs";

import Badge from "@/components/Common/Badge";
import { PostProp } from "@/types/Post";

export default function Hit({
  hit,
}: {
  hit: Pick<PostProp, "title" | "excerpt" | "categories" | "date_created">;
}) {
  return (
    <div className="relative z-10 flex flex-col gap-2 md:gap-y-3">
      <div>
        <span className="datetime block">
          {dayjs(hit.date_created).format("dddd")}
        </span>
        <span className="datetime">
          {dayjs(hit.date_created).format("MMM DD, YYYY")}
        </span>
      </div>
      <h2>{hit.title}</h2>
      <p className="text-sm">{hit.excerpt}</p>
      {hit.categories && <Badge classes="mt-2" items={hit.categories} />}
    </div>
  );
}
