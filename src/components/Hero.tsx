"use client";

import { useState, useEffect } from "react";

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
      {/* ── Background image ── */}
      <div
        className="absolute bottom-30 left-0 right-0 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-bg-chemicalplant.png')",
          backgroundSize: "contain",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          height: "60%",
        }}
      />
      {/* ── Overlays ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pb-32 -mt-24 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1
            className={`font-serif font-light text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.12] tracking-tight mb-7 ${anim("0.1s")}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Domain specific AI systems{" "}
            <br className="hidden md:inline" />
            <span className="font-serif font-light">for Manufacturing Industries.</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-[clamp(0.9rem,1.4vw,1.05rem)] leading-[1.75] text-white/50 max-w-xl mx-auto mb-10 ${anim("0.25s")}`}
            style={{ transitionDelay: "0.25s" }}
          >
            
          </p>

          {/* CTAs */}
          <div
            className={`flex items-center justify-center gap-3 ${anim("0.4s")}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <a href="#contact" className="btn-primary">
              <span>Talk to us</span>
            </a>
            <a href="#features" className="btn-secondary">
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
