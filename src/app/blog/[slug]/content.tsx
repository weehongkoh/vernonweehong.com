import "@/styles/prose.scss";

import Image from "next/image";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkCodeTitle from "remark-code-title";
import remarkGfm from "remark-gfm";

import Code from "@/components/Post/Code";

export default function Content({ content }: { content: string }) {
  const components = {
    code: Code,
    Image,
    // blockquote: Blockquote,
    // alert: Alert,
    // imageslider: ImageSlider,
  };

  return (
    <article className="prose w-full max-w-full lg:max-w-[58ch]">
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkGfm, remarkCodeTitle]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
