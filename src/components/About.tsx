"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal(0.08);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-6">
                <span className="w-1 h-1 rounded-full bg-[#df7afe]" />
                About Operon
              </span>
            </div>

            <h2 className="reveal delay-1 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.025em] mb-6">
              The reliable bridge between{" "}
              <span className="text-gradient-lime">industry</span> and{" "}
              <span className="text-gradient-lime">intelligence</span>
            </h2>

            <p className="reveal delay-2 text-[15px] leading-[1.75] text-white/35 font-normal mb-5">
              Manufacturing hasn&apos;t changed in decades. The tools are outdated,
              the processes are manual, and the gap between operations and modern
              technology keeps widening.
            </p>
            <p className="reveal delay-3 text-[15px] leading-[1.75] text-white/35 font-normal">
              Operon Solutions exists to close that gap. Our forward-deployed
              engineers embed directly into your operations, building customized
              AI systems that maximize profitability without disrupting what
              already works.
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="reveal delay-3 grid grid-cols-2 gap-4">
            {[
              { value: "10K+", label: "P&ID Diagrams Processed", color: "lime" },
              { value: "85%", label: "Time Saved on Doc Updates", color: "magenta" },
              { value: "24/7", label: "Autonomous Monitoring", color: "magenta" },
              { value: "<6 wks", label: "Deployment Timeline", color: "lime" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div
                  className={`text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold tracking-tight ${
                    stat.color === "lime" ? "text-gradient-lime" : "text-white/80"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-[12px] text-white/25 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
