import Link from "next/link";

import dayjs from "dayjs";
import { UseInfiniteHitsProps, useInfiniteHits } from "react-instantsearch";

import Hit from "@/components/Blog/Hit";
import Card from "@/components/Common/Card";
import { HitProp } from "@/types/InstantSearch";

export default function CustomInfiniteHits(props: UseInfiniteHitsProps) {
  const { items, showMore, isLastPage } = useInfiniteHits(props);

  const transformedItems: HitProp[] =
    items.length > 0
      ? items
          .map((item) => ({
            id: item.id,
            title: item.title,
            excerpt: item.excerpt,
            categories: item.categories,
            date_created: item.date_created,
          }))
          .sort(
            (a, b) =>
              dayjs(b.date_created).valueOf() - dayjs(a.date_created).valueOf(),
          )
      : [];

  return (
    <div className="mt-8 flex flex-col">
      <div className="group/list mt-8 flex flex-col gap-y-12">
        {transformedItems.map((item: HitProp) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <Card classes="card">
              <Hit hit={item} />
            </Card>
          </Link>
        ))}
      </div>
      {transformedItems.length > 10 && (
        <button
          onClick={showMore}
          disabled={isLastPage}
          className="mx-auto mt-12 block text-green-500"
        >
          Show more
        </button>
      )}
    </div>
  );
}
