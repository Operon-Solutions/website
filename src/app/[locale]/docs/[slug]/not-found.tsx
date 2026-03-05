"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function DocNotFound() {
  const { dict, locale } = useI18n();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="h-px w-8 bg-fg/10" />
          <span className="text-[11px] text-fg/25 uppercase tracking-widest">
            {dict.docs.comingSoon}
          </span>
          <span className="h-px w-8 bg-fg/10" />
        </div>
        <h1 className="font-serif text-[clamp(1.8rem,4vw,2.4rem)] tracking-tight mb-3">
          {dict.docs.pageBeingWritten}
        </h1>
        <p className="text-[14px] text-fg/30 mb-10 leading-relaxed">
          {dict.docs.pageBeingWrittenDesc}
        </p>
        <Link
          href={`/${locale}#platform`}
          className="inline-flex items-center gap-2 text-[13px] text-accent/70 hover:text-accent transition-colors"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          {dict.docs.backToPlatform}
        </Link>
      </div>
    </div>
  );
}
