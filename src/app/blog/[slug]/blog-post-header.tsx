import Link from "next/link";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Badge from "@/components/Common/Badge";
import Nav from "@/components/Common/Nav";
import { formatDate } from "@/helpers";
import { PostProp } from "@/types/Post";

export default function BlogPostHeader({ data }: { data: PostProp }) {
  return (
    <div className="flex flex-col gap-y-3">
      <Link className="mt-3 flex items-center gap-x-1 text-sm" href="/blog">
        <FontAwesomeIcon icon={faArrowLeft} className="h-3 w-3" />
        Back
      </Link>
      <div>
        <span className="datetime block">
          {formatDate(data.date_created, "dddd")}
        </span>
        <span className="datetime">
          {formatDate(data.date_created, "MMM DD, YYYY")}
        </span>
      </div>
      <h1>{data.title}</h1>
      {data.excerpt && <p className="lg:max-w-xs">{data.excerpt}</p>}
      <Nav showOnDesktop={false} />
      <Badge items={data.categories} />
    </div>
  );
}
