"use client";

import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/context";
import type { Locale } from "@/i18n";

export default function LangSwitcher() {
  const { dict, locale } = useI18n();
  const pathname = usePathname();

  const switchTo = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    const newPath = segments.join("/");
    document.cookie = `locale=${target};path=/;max-age=${60 * 60 * 24 * 365}`;
    window.location.href = newPath;
  };

  const other: Locale = locale === "en" ? "zh-TW" : "en";

  return (
    <button
      onClick={() => switchTo(other)}
      className="flex items-center gap-1.5 text-[12px] text-fg/40 hover:text-fg/70 transition-colors px-2 py-1 rounded cursor-pointer"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.777.515-3.435 1.404-4.832" />
      </svg>
      {dict.langSwitcher[other]}
    </button>
  );
}
