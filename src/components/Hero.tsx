"use client";

import { useState, useEffect } from "react";
import MolecularMosaic from "./MolecularMosaic";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay: string) =>
    `transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }` as const;

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* ── Halftone molecular mosaic background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <MolecularMosaic className="opacity-50" />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(0,0,0,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pt-32 md:pt-40 pb-32 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1
            className={`font-serif italic font-medium text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.12] tracking-tight mb-7 ${anim("0.1s")}`}
            style={{ transitionDelay: "0.1s" }}
          >
            When plant data sits in silos,{" "}
            <br className="hidden sm:inline" />
            <span className="font-bold italic">we connect every signal</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-[clamp(0.9rem,1.4vw,1.05rem)] leading-[1.75] text-white/50 max-w-xl mx-auto mb-10 ${anim("0.25s")}`}
            style={{ transitionDelay: "0.25s" }}
          >
            Our AI understands your chemical engineering processes&mdash;from
            P&IDs to simulations&mdash;then deploys intelligent systems that
            transform how you operate.
          </p>

          {/* CTAs */}
          <div
            className={`flex items-center justify-center gap-3 ${anim("0.4s")}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <a
              href="#contact"
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
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
