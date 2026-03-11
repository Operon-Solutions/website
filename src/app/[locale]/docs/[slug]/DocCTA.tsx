"use client";

import Link from "next/link";
import { useContact } from "@/components/ContactProvider";

export default function DocCTA({
  locale,
  readyToStart,
  readyDesc,
  bookDemo,
  exploreCaps,
}: {
  locale: string;
  readyToStart: string;
  readyDesc: string;
  bookDemo: string;
  exploreCaps: string;
}) {
  const { open } = useContact();

  return (
    <section className="border-t border-fg/[0.06] py-20">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-tight mb-4">
          {readyToStart}
        </h2>
        <p className="text-[14px] text-fg/35 mb-8 max-w-md mx-auto leading-relaxed">
          {readyDesc}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button onClick={open} className="btn-primary">
            <span>{bookDemo}</span>
          </button>
          <Link href={`/${locale}#features`} className="btn-secondary">
            {exploreCaps}
          </Link>
        </div>
      </div>
    </section>
  );
}
