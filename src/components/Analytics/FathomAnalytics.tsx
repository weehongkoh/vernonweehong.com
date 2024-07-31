"use client";

import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { load, trackPageview } from "fathom-client";

export default function FathomAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const siteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID!;

  useEffect(() => {
    load(siteId, {
      auto: false,
    });
  }, [siteId]);

  useEffect(() => {
    if (!pathname) return;

    trackPageview({
      url: pathname + searchParams.toString(),
      referrer: document.referrer,
    });
  }, [pathname, searchParams]);

  return null;
}
