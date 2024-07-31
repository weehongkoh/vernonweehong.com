import { ReactNode } from "react";

import Nav from "@/components/Common/Nav";
import Reference from "@/components/Common/Reference";
import SocialMedia from "@/components/Common/SocialMedia";

type LeftPanelProps = {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  summary?: string | ReactNode;
  status?: string | ReactNode;
  showNav?: boolean;
  showBackButton?: boolean;
};

export default function LeftPanel({
  title,
  subtitle,
  summary,
  status,
}: LeftPanelProps) {
  return (
    <header className="left-panel">
      <div className="flex flex-col gap-y-3">
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        {summary && <p className="lg:max-w-xs">{summary}</p>}
        {status && <span className="text-active">{status}</span>}
        <Nav />
      </div>
      <footer className="hidden lg:flex">
        <SocialMedia />
        <Reference />
      </footer>
    </header>
  );
}
