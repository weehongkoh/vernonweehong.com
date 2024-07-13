"use client";

import { useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { load, trackPageview } from "fathom-client";

export default function FathomAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    load(`${process.env.NEXT_PUBLIC_FATHOM_SITE_ID}`, {
      includedDomains: [process.env.NEXT_PUBLIC_URL!],
      spa: "auto",
    });

    trackPageview();
  }, [pathname, searchParams]);

  return null;
}
