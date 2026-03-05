"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function DocRenderer({ content }: { content: string }) {
  const cleaned = content
    .replace(/:::callout\n/g, "> ")
    .replace(/:::highlight\n/g, "> ")
    .replace(/:::/g, "");

  return (
    <div className="prose-docs">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{cleaned}</ReactMarkdown>
    </div>
  );
}
