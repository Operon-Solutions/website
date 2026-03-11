"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export function DocRenderer({ content }: { content: string }) {
  const cleaned = content
    .replace(/:::callout\n/g, "> ")
    .replace(/:::highlight\n/g, "> ")
    .replace(/:::/g, "");

  return (
    <div className="prose-docs">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{cleaned}</ReactMarkdown>
    </div>
  );
}
