import type { ClassAttributes, HTMLAttributes } from "react";

import type { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nightOwl from "react-syntax-highlighter/dist/cjs/styles/prism/night-owl";

import CopyToClipboardButton from "@/components/Post/CopyToClipboardButton";

export default function Code(
  props: Readonly<
    ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
  >,
) {
  const { children, className } = props;

  const regex = /language-(\w+)/;
  const lang = regex.exec(className || "")?.[1];

  return lang ? (
    <>
      <div className="absolute right-3 top-3 z-10">
        <CopyToClipboardButton content={String(children).replace(/\n$/, "")} />
      </div>
      <SyntaxHighlighter
        PreTag="div"
        language={lang}
        className="code-block relative"
        showLineNumbers={true}
        wrapLines={true}
        useInlineStyles={true}
        style={nightOwl}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : (
    <code className={className} {...props} />
  );
}
