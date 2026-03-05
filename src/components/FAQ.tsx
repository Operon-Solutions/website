"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { useI18n } from "@/i18n/context";

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-fg/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[14px] md:text-[15px] font-medium pr-4 group-hover:text-fg/90 transition-colors">
          {faq.q}
        </span>
        <span
          className={`text-[18px] text-fg/30 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[13px] text-fg/35 leading-[1.7] pb-5 pr-8">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  const { dict } = useI18n();
  const faqs = dict.faq.items;

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-fg/40" />
            <span className="text-[13px] text-fg/40 font-medium">{dict.faq.label}</span>
          </div>
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] tracking-tight">
            {dict.faq.heading}
          </h2>
        </div>

        <div className="reveal delay-1 grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            {faqs.slice(0, 3).map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
          <div>
            {faqs.slice(3).map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
