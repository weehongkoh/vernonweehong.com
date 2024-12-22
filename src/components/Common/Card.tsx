import { ReactNode } from "react";

import { clsx, isEmptyOrWhitespace } from "@/helpers";

export default function Card({
  classes,
  children,
}: Readonly<{
  classes: string;
  children: ReactNode;
}>) {
  return (
    <div
      className={clsx(
        !isEmptyOrWhitespace(classes) ? classes ?? "" : "",
        "group lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
      )}
    >
      <div className="card-hover lg:group-hover:bg-slate-800/50"></div>
      {children}
    </div>
  );
}
