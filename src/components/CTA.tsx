"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/i18n/context";
import { useContact } from "./ContactProvider";

export default function CTA() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  const { dict } = useI18n();
  const { open } = useContact();

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="reveal">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            <span className="text-[13px] text-fg/40 font-medium">
              {dict.cta.lotsToShow}
            </span>
          </div>
        </div>

        <h2 className="reveal delay-1 font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] tracking-tight max-w-2xl mb-6">
          {dict.cta.heading}
        </h2>

        <p className="reveal delay-2 text-[14px] md:text-[15px] text-fg/40 leading-relaxed max-w-lg mb-10">
          {dict.cta.description}
        </p>

        <div className="reveal delay-3 flex items-center gap-3">
          <button onClick={open} className="btn-primary">
            <span>{dict.cta.talkToUs}</span>
          </button>
          <a href="#features" className="btn-secondary">
            {dict.cta.seeHow}
          </a>
        </div>
      </div>
    </section>
  );
}
