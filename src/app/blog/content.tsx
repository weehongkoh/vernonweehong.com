"use client";

import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { InstantSearch } from "react-instantsearch";

import CustomInfiniteHits from "@/components/Blog/CustomInfiniteHits";
import CustomSearchBox from "@/components/Blog/CustomSearchBox";

const { searchClient } = instantMeiliSearch(
  process.env.NEXT_PUBLIC_INSTANTSEARCH_URL!,
  process.env.NEXT_PUBLIC_INSTANTSEARCH_SEARCH_API_KEY!,
);

export default function Content() {
  return (
    <>
      <div className="fade-content fade-top-content"></div>
      <InstantSearch indexName={"posts"} searchClient={searchClient}>
        <CustomSearchBox />
        <CustomInfiniteHits />
      </InstantSearch>
      <div className="fade-content fade-bottom-content"></div>
    </>
  );
}
