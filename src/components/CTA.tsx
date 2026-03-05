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
          <a href="#" className="btn-primary">
            <span>Talk to us</span>
          </a>
          <a href="#features" className="btn-secondary">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
