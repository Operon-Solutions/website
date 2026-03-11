"use client";

import Link from "next/link";
import { useContact } from "@/components/ContactProvider";

export default function DocCTA() {
  const { open } = useContact();

  return (
    <section className="border-t border-[color-mix(in_srgb,var(--c-fg)_6%,transparent)] py-20">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-tight mb-4">
          Ready to get started?
        </h2>
        <p className="text-[14px] text-[color-mix(in_srgb,var(--c-fg)_35%,transparent)] mb-8 max-w-md mx-auto leading-relaxed">
          Our on-site engineers can have you up and running within your
          first week.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button onClick={open} className="btn-primary">
            <span>Book a demo</span>
          </button>
          <Link href="/#features" className="btn-secondary">
            Explore capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
