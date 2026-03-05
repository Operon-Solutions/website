"use client";

import { useRef, useEffect } from "react";
import { useReveal } from "./useReveal";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

/* ── Glass Card Mockups ── */

function PidMockup() {
  const { dict } = useI18n();
  return (
    <div className="relative rounded-2xl overflow-hidden mockup-surface">
      <div className="absolute inset-0 opacity-40 mockup-glow" />
      <div className="relative p-5 md:p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex -space-x-2">
            {[
              { bg: "bg-indigo-700 dark:bg-emerald-800", letter: "A" },
              { bg: "bg-violet-700 dark:bg-teal-800", letter: "B" },
              { bg: "bg-indigo-800 dark:bg-green-800", letter: "C" },
            ].map((a) => (
              <div
                key={a.letter}
                className={`w-8 h-8 rounded-full ${a.bg} border-2 border-bg flex items-center justify-center text-[10px] font-bold text-fg/70`}
              >
                {a.letter}
              </div>
            ))}
          </div>
          <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-medium">
            {dict.features.eligible}
          </span>
        </div>

        <div className="glass rounded-xl p-4 mb-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent text-[13px] font-bold">
              V
            </div>
            <div>
              <div className="text-[14px] font-medium">valve-101</div>
              <div className="text-[11px] text-fg/30">{dict.features.detected}</div>
            </div>
          </div>
          <div className="text-[11px] text-fg/35 mb-2">{dict.features.componentsDetected}</div>
          <div className="flex flex-wrap gap-1.5">
            {[dict.features.heatExchanger, dict.features.controlValve, dict.features.pressureRelief].map(
              (tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-fg/[0.05] text-[10px] text-fg/50">
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="glass rounded-xl p-4">
          <div className="text-[11px] text-fg/35 mb-1.5">{dict.features.accuracy}</div>
          <div className="text-[13px] text-fg/70 mb-3">{dict.features.confidenceScore}</div>
          <div className="text-[11px] text-fg/35 mb-1.5">{dict.features.source}</div>
          <div className="text-[13px] text-fg/70">PID-2847-RevC.pdf</div>
        </div>
      </div>
    </div>
  );
}

function KnowledgeMockup() {
  const { dict } = useI18n();
  return (
    <div className="relative rounded-2xl overflow-hidden mockup-surface">
      <div className="absolute inset-0 opacity-30 mockup-glow-center" />
      <div className="relative p-5 md:p-6">
        <div className="space-y-2.5 mb-5">
          <div className="glass rounded-xl px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-[12px] text-fg/60">{dict.features.viewedSafety}</span>
            <span className="text-[10px] text-fg/25 flex-shrink-0">{dict.features.scrolledSpecs}</span>
          </div>
          <div className="glass rounded-xl px-4 py-3">
            <span className="text-[12px] text-fg/60">{dict.features.modifiedPid}</span>
          </div>
        </div>

        <div className="glass rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-fg/[0.06] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] font-medium">{dict.features.knowledgePattern}</div>
              <div className="text-[10px] text-fg/25">2:04 PM</div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center text-[10px] font-bold text-accent">
                M
              </div>
              <span className="text-[11px] text-fg/40 hidden sm:inline">Michelle</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="glass rounded-lg px-4 py-2.5 text-[12px] text-fg/45">{dict.features.startedCrossRef}</div>
          <div className="glass rounded-lg px-4 py-2.5 text-[12px] text-fg/35">{dict.features.autoLinked}</div>
        </div>
      </div>
    </div>
  );
}

function AgenticMockup() {
  const { dict } = useI18n();
  return (
    <div className="relative rounded-2xl overflow-hidden mockup-surface">
      <div className="absolute inset-0 opacity-30 mockup-glow-right" />
      <div className="relative p-5 md:p-6 space-y-3">
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-6 h-6 rounded-full bg-fg/[0.06] flex items-center justify-center">
              <svg className="w-3 h-3 text-fg/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="text-[12px] font-medium">{dict.features.reportGenerated}</span>
            <span className="text-[10px] text-fg/20 ml-auto">2:15 PM</span>
          </div>
          <p className="text-[11px] text-fg/35 pl-[34px]">{dict.features.safetyReport}</p>
        </div>

        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-6 h-6 rounded-full bg-fg/[0.06] flex items-center justify-center">
              <svg className="w-3 h-3 text-fg/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </div>
            <span className="text-[12px] font-medium">{dict.features.alert}</span>
            <span className="text-[10px] text-fg/20 ml-auto">2:18 PM</span>
          </div>
          <p className="text-[11px] text-fg/35 pl-[34px]">{dict.features.alertDesc}</p>
        </div>

        <div className="flex items-center justify-center gap-2 py-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" />
          <span className="text-[11px] text-fg/25">{dict.features.optimizingWorkflow}</span>
        </div>

        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <span className="text-[12px] font-medium">{dict.features.aiWorkflow}</span>
            <span className="text-[10px] text-fg/20 ml-auto">2:20 PM</span>
          </div>
          <p className="text-[11px] text-fg/35 pl-[34px]">{dict.features.aiWorkflowDesc}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Mockup map ── */
const MOCKUPS = [PidMockup, KnowledgeMockup, AgenticMockup];

/* ── Main Component ── */

export default function Features() {
  const { dict, locale } = useI18n();
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentH = useRef(0);
  const targetH = useRef(0);
  const rafId = useRef(0);

  const features = dict.features.items;

  useEffect(() => {
    const LERP_SPEED = 0.06;
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
      const lineX = dots[0].getBoundingClientRect().left + dots[0].offsetWidth / 2 - wrapRect.left;
      const startY = dotYs[0];
      const endY = dotYs[dotYs.length - 1];
      const totalH = endY - startY;

      track.style.left = `${lineX - 0.5}px`;
      track.style.top = `${startY}px`;
      track.style.height = `${totalH}px`;

      const trigger = window.innerHeight * 0.55;
      const firstDotScreenY = dots[0].getBoundingClientRect().top + dots[0].offsetHeight / 2;
      const progress = (trigger - firstDotScreenY) / totalH;
      const clamped = Math.max(0, Math.min(1, progress));
      targetH.current = clamped * totalH;

      fill.style.left = `${lineX - 0.5}px`;
      fill.style.top = `${startY}px`;

      dots.forEach((dot, i) => {
        const dotLocalY = dotYs[i] - startY;
        if (currentH.current >= dotLocalY - 2) {
          if (!dot.classList.contains("dot-active")) dot.classList.add("dot-active");
        } else {
          dot.classList.remove("dot-active");
        }
      });
    }

    function tick() {
      const diff = targetH.current - currentH.current;
      if (Math.abs(diff) > 0.5) {
        currentH.current += diff * LERP_SPEED;
      } else {
        currentH.current = targetH.current;
      }
      if (fillRef.current) fillRef.current.style.height = `${currentH.current}px`;
      measure();
      if (running) rafId.current = requestAnimationFrame(tick);
    }

    startLoop();

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
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.9rem)] font-medium text-fg/80 max-w-sm leading-snug">
            {dict.features.transformHeading}
            <br />
            {dict.features.transformHeading2}
          </h2>
          <div className="flex gap-3">
            <div className="px-6 py-5 border border-fg/[0.08] rounded-xl min-w-[140px]">
              <div className="text-[10px] text-fg/30 uppercase tracking-wider font-medium mb-1.5">
                {dict.features.totalPids}
              </div>
              <div className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight">10,000+</div>
            </div>
            <div className="px-6 py-5 border border-fg/[0.08] rounded-xl min-w-[140px]">
              <div className="text-[10px] text-fg/30 uppercase tracking-wider font-medium mb-1.5">
                {dict.features.avgTime}
              </div>
              <div className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight">85%</div>
            </div>
          </div>
        </div>

        <div className="reveal delay-1 mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            <span className="text-[13px] text-fg/40 font-medium">{dict.features.howItWorks}</span>
          </div>
          <h3 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] max-w-2xl tracking-tight">
            {dict.features.sectionHeading}
          </h3>
        </div>

        <div ref={wrapRef} className="relative space-y-20 md:space-y-28">
          <div ref={trackRef} className="absolute w-px bg-fg/[0.06] pointer-events-none" />
          <div
            ref={fillRef}
            className="absolute w-px pointer-events-none"
            style={{
              height: 0,
              background: "var(--c-accent)",
              boxShadow:
                "0 0 6px color-mix(in srgb, var(--c-accent) 40%, transparent), 0 0 2px color-mix(in srgb, var(--c-accent) 70%, transparent)",
            }}
          />

          {features.map((feature, i) => {
            const Mockup = MOCKUPS[i];
            return (
              <div
                key={feature.label}
                className="reveal delay-2 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
              >
                <div className="relative pl-8 md:pl-10">
                  <div
                    ref={(el) => { dotRefs.current[i] = el; }}
                    className="absolute left-0 top-1 w-3 h-3 rounded-sm bg-fg/20 z-10 transition-colors duration-300"
                  />
                  <div className="text-[13px] text-accent font-medium mb-3">{feature.label}</div>
                  <h4 className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-medium leading-snug mb-4">{feature.title}</h4>
                  <p className="text-[14px] text-fg/35 leading-[1.7] max-w-md">{feature.description}</p>
                  <Link
                    href={`/${locale}/docs/${feature.slug}`}
                    className="inline-flex items-center gap-1.5 mt-5 text-[13px] text-accent/60 hover:text-accent transition-colors"
                  >
                    {dict.features.learnMore}
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div><Mockup /></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
