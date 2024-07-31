import React from "react";

import Link from "next/link";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link href={href} passHref target="_blank" className="external-link">
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-2 w-2" />
      <span className="ml-2.5 text-sm">{children}</span>
    </Link>
  );
}
