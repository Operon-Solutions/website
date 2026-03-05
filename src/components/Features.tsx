"use client";

import { useRef, useEffect, useCallback } from "react";
import { useReveal } from "./useReveal";

/* ── Glass Card Mockups ── */

function PidMockup() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a2014 0%, #163a22 40%, #0e2816 100%)",
      }}
    >
      {/* Landscape glow inside card */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 60% 90%, #2a5a30, transparent 70%), radial-gradient(ellipse at 20% 80%, #1a4020, transparent 60%)",
        }}
      />
      <div className="relative p-5 md:p-6">
        {/* Avatars row */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex -space-x-2">
            {[
              { bg: "bg-emerald-800", letter: "A" },
              { bg: "bg-teal-800", letter: "B" },
              { bg: "bg-green-800", letter: "C" },
            ].map((a) => (
              <div
                key={a.letter}
                className={`w-8 h-8 rounded-full ${a.bg} border-2 border-[#0a2014] flex items-center justify-center text-[10px] font-bold text-white/70`}
              >
                {a.letter}
              </div>
            ))}
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#d8fe91]/10 text-[#d8fe91] text-[11px] font-medium">
            Eligible
          </span>
        </div>

        {/* Equipment profile card */}
        <div className="glass rounded-xl p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#d8fe91]/15 flex items-center justify-center text-[#d8fe91] text-[13px] font-bold">
              V
            </div>
            <div>
              <div className="text-[14px] font-medium">valve-101</div>
              <div className="text-[11px] text-white/30">
                Detected Oct 8, 2024
              </div>
            </div>
          </div>
          <div className="text-[11px] text-white/35 mb-2">
            Components Detected
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Heat Exchanger", "Control Valve", "Pressure Relief"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] text-[10px] text-white/50"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Info card */}
        <div className="glass rounded-xl p-4">
          <div className="text-[11px] text-white/35 mb-1.5">Accuracy</div>
          <div className="text-[13px] text-white/70 mb-3">
            97.3% confidence score
          </div>
          <div className="text-[11px] text-white/35 mb-1.5">Source</div>
          <div className="text-[13px] text-white/70">PID-2847-RevC.pdf</div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeMockup() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a2014 0%, #163a22 40%, #0e2816 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 40% 85%, #2a5a30, transparent 70%)",
        }}
      />
      <div className="relative p-5 md:p-6">
        {/* Detection pills */}
        <div className="space-y-2.5 mb-5">
          <div className="glass rounded-xl px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-[12px] text-white/60">
              2x viewed safety protocols
            </span>
            <span className="text-[10px] text-white/25 flex-shrink-0">
              Scrolled specs twice
            </span>
          </div>
          <div className="glass rounded-xl px-4 py-3">
            <span className="text-[12px] text-white/60">
              Modified P&ID markup 4 times
            </span>
          </div>
        </div>

        {/* Pattern detected */}
        <div className="glass rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-[#d8fe91]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium">
                Knowledge Pattern Detected
              </div>
              <div className="text-[10px] text-white/25">2:04 PM</div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-7 h-7 rounded-full bg-[#d8fe91]/15 flex items-center justify-center text-[10px] font-bold text-[#d8fe91]">
                M
              </div>
              <span className="text-[11px] text-white/40 hidden sm:inline">
                Michelle
              </span>
            </div>
          </div>
        </div>

        {/* Action items */}
        <div className="space-y-2">
          <div className="glass rounded-lg px-4 py-2.5 text-[12px] text-white/45">
            Started document cross-reference
          </div>
          <div className="glass rounded-lg px-4 py-2.5 text-[12px] text-white/35">
            Auto-linked 23 related P&IDs
          </div>
        </div>
      </div>
    </div>
  );
}

function AgenticMockup() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0a2014 0%, #163a22 40%, #0e2816 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 60% 80%, #2a5a30, transparent 70%)",
        }}
      />
      <div className="relative p-5 md:p-6 space-y-3">
        {/* Report channel */}
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium">Report Generated</span>
            <span className="text-[10px] text-white/20 ml-auto">2:15 PM</span>
          </div>
          <p className="text-[11px] text-white/35 pl-[34px]">
            Safety compliance report auto-generated for Q4 review.
          </p>
        </div>

        {/* Alert channel */}
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium">Alert</span>
            <span className="text-[10px] text-white/20 ml-auto">2:18 PM</span>
          </div>
          <p className="text-[11px] text-white/35 pl-[34px]">
            Detected 2 anomalies in process flow that match historical patterns.
          </p>
        </div>

        {/* Processing indicator */}
        <div className="flex items-center justify-center gap-2 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#d8fe91]/50 animate-pulse" />
          <span className="text-[11px] text-white/25">
            optimizing workflow sequence
          </span>
        </div>

        {/* AI workflow */}
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#d8fe91]/10 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-[#d8fe91]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <span className="text-[12px] font-medium">AI Workflow</span>
            <span className="text-[10px] text-white/20 ml-auto">2:20 PM</span>
          </div>
          <p className="text-[11px] text-white/35 pl-[34px]">
            Scheduling preventive maintenance based on predicted equipment
            stress.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Feature Data ── */

const features = [
  {
    label: "P&ID Recognition",
    title: "Identify up to 97% of equipment automatically",
    description:
      "We identify and track engineering components from their first scan, giving you behavioral insights before they ever cause issues.",
    Mockup: PidMockup,
  },
  {
    label: "Knowledge Graphs",
    title: "Connect every document, automatically",
    description:
      "We analyze 384+ document signals—from revision patterns to cross-references—creating unique knowledge profiles for each asset. No more generic searches or one-size-fits-all lookups.",
    Mockup: KnowledgeMockup,
  },
  {
    label: "Agentic Workflows",
    title: "Reach your team when and how they prefer",
    description:
      "AI-powered agents send personalized reports via email, alerts, or dashboards. Each touchpoint builds on previous analysis to maximize operational efficiency.",
    Mockup: AgenticMockup,
  },
];

/* ── Main Component ── */

export default function Features() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentH = useRef(0);   // smoothed height (lerped)
  const targetH = useRef(0);    // raw target height from scroll
  const rafId = useRef(0);

  useEffect(() => {
    const LERP_SPEED = 0.06; // lower = smoother & more delayed
    let isVisible = true;
    let running = false;

    function startLoop() {
      if (!running && isVisible) {
        running = true;
        rafId.current = requestAnimationFrame(tick);
      }
    }

    function stopLoop() {
      running = false;
      cancelAnimationFrame(rafId.current);
    }

    function measure() {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      const fill = fillRef.current;
      const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!wrap || !track || !fill || dots.length < 2) return;

      const wrapRect = wrap.getBoundingClientRect();

      const dotYs = dots.map((d) => {
        const r = d.getBoundingClientRect();
        return r.top + r.height / 2 - wrapRect.top;
      });
      const lineX =
        dots[0].getBoundingClientRect().left +
        dots[0].offsetWidth / 2 -
        wrapRect.left;

      const startY = dotYs[0];
      const endY = dotYs[dotYs.length - 1];
      const totalH = endY - startY;

      // Position background track
      track.style.left = `${lineX - 0.5}px`;
      track.style.top = `${startY}px`;
      track.style.height = `${totalH}px`;

      // Raw scroll progress
      const trigger = window.innerHeight * 0.55;
      const firstDotScreenY =
        dots[0].getBoundingClientRect().top + dots[0].offsetHeight / 2;
      const progress = (trigger - firstDotScreenY) / totalH;
      const clamped = Math.max(0, Math.min(1, progress));

      targetH.current = clamped * totalH;

      // Position fill (X & top stay in sync, height is lerped in tick)
      fill.style.left = `${lineX - 0.5}px`;
      fill.style.top = `${startY}px`;

      // Activate / deactivate dots based on smoothed height
      dots.forEach((dot, i) => {
        const dotLocalY = dotYs[i] - startY;
        if (currentH.current >= dotLocalY - 2) {
          if (!dot.classList.contains("dot-active")) {
            dot.classList.add("dot-active");
          }
        } else {
          dot.classList.remove("dot-active");
        }
      });
    }

    function tick() {
      // Lerp toward target
      const diff = targetH.current - currentH.current;
      if (Math.abs(diff) > 0.5) {
        currentH.current += diff * LERP_SPEED;
      } else {
        currentH.current = targetH.current;
      }

      if (fillRef.current) {
        fillRef.current.style.height = `${currentH.current}px`;
      }

      measure();
      if (running) rafId.current = requestAnimationFrame(tick);
    }

    startLoop();

    // Pause when section is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        isVisible ? startLoop() : stopLoop();
      },
      { threshold: 0, rootMargin: "100px" }
    );
    if (wrapRef.current) observer.observe(wrapRef.current);

    return () => {
      stopLoop();
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* ── Stats bar ── */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.9rem)] font-medium text-white/80 max-w-sm leading-snug">
            Transform operations,
            <br />
            automatically.
          </h2>
          <div className="flex gap-3">
            <div className="px-6 py-5 border border-white/[0.08] rounded-xl min-w-[140px]">
              <div className="text-[10px] text-white/30 uppercase tracking-wider font-medium mb-1.5">
                Total P&IDs processed
              </div>
              <div className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight">
                10,000+
              </div>
            </div>
            <div className="px-6 py-5 border border-white/[0.08] rounded-xl min-w-[140px]">
              <div className="text-[10px] text-white/30 uppercase tracking-wider font-medium mb-1.5">
                Avg time reduction
              </div>
              <div className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight">
                85%
              </div>
            </div>
          </div>
        </div>

        {/* ── Section header ── */}
        <div className="reveal delay-1 mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#d8fe91]" />
            <span className="text-[13px] text-white/40 font-medium">
              How it works
            </span>
          </div>
          <h3 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] max-w-2xl tracking-tight">
            Intelligent systems that understand every layer of your operations
          </h3>
        </div>

        {/* ── Timeline features ── */}
        <div ref={wrapRef} className="relative space-y-20 md:space-y-28">
          {/* Background track (gray, first dot → last dot) */}
          <div
            ref={trackRef}
            className="absolute w-px bg-white/[0.06] pointer-events-none"
          />
          {/* Scroll-driven fill (lime, grows with scroll) */}
          <div
            ref={fillRef}
            className="absolute w-px pointer-events-none"
            style={{
              height: 0,
              background: "#d8fe91",
              boxShadow:
                "0 0 6px rgba(216,254,145,0.4), 0 0 2px rgba(216,254,145,0.7)",
            }}
          />

          {features.map((feature, i) => (
            <div
              key={feature.label}
              className="reveal delay-2 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
            >
              {/* Text with timeline */}
              <div className="relative pl-8 md:pl-10">
                {/* Timeline dot */}
                <div
                  ref={(el) => {
                    dotRefs.current[i] = el;
                  }}
                  className="absolute left-0 top-1 w-3 h-3 rounded-sm bg-white/20 z-10 transition-colors duration-300"
                />

                <div className="text-[13px] text-[#d8fe91] font-medium mb-3">
                  {feature.label}
                </div>
                <h4 className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-medium leading-snug mb-4">
                  {feature.title}
                </h4>
                <p className="text-[14px] text-white/35 leading-[1.7] max-w-md">
                  {feature.description}
                </p>
              </div>

              {/* Glass card mockup */}
              <div>
                <feature.Mockup />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
