"use client";

import { useReveal } from "./useReveal";

export default function CTA() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="reveal">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#d8fe91]" />
            <span className="text-[13px] text-white/40 font-medium">
              Lots to show you
            </span>
          </div>
        </div>

        <h2 className="reveal delay-1 font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] tracking-tight max-w-2xl mb-6">
          Transform your plant operations, automatically
        </h2>

        <p className="reveal delay-2 text-[14px] md:text-[15px] text-white/40 leading-relaxed max-w-lg mb-10">
          Let us show you how true AI-powered engineering intelligence looks in
          action. You&apos;ll know in minutes if it&apos;s a fit.
        </p>

        <div className="reveal delay-3 flex items-center gap-3">
          <a
            href="#"
            className="px-7 py-3 bg-[#d8fe91] text-black text-[14px] font-semibold rounded-lg hover:bg-[#cdf085] transition-all duration-300 hover:shadow-[0_0_30px_rgba(216,254,145,0.15)]"
          >
            Talk to us
          </a>
          <a
            href="#features"
            className="px-7 py-3 border border-white/15 text-white/70 text-[14px] font-medium rounded-lg hover:bg-white/[0.04] hover:border-white/25 transition-all duration-300"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
