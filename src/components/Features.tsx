"use client";

import { useRef, useEffect } from "react";
import { useReveal } from "./useReveal";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/context";

/* ── Glass Card Mockups ── */

function PidMockup() {
  return (
    <div className="relative overflow-hidden aspect-square">
      <Image
        src="/bgs/bg1.png"
        alt=""
        fill
        className="object-cover object-[50%_10%]"
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-auto shadow-2xl"
        >
          <source src="/features/pidrec.webm" type="video/webm" />
          <source src="/features/pidrec.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function KnowledgeMockup() {
  return (
    <div className="relative overflow-hidden aspect-square">
      <Image
        src="/bgs/bg2.png"
        alt=""
        fill
        className="object-cover object-[50%_10%]"
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-auto shadow-2xl"
        >
          <source src="/features/feature2v4.webm" type="video/webm" />
          <source src="/features/feature2v4.mp4" type="video/mp4" />
        </video>
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
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-0 mb-0">
        </div>

        <div className="reveal delay-1 mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            <span className="text-[15px] text-fg/40 font-medium">{dict.features.howItWorks}</span>
          </div>
          <h3 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] max-w-2xl tracking-tight">
            {dict.features.sectionHeading.map((seg: { text: string; accent?: boolean }, i: number) => (
              seg.accent ? <span key={i} className="text-accent">{seg.text}</span> : seg.text
            ))}
          </h3>
        </div>

        <div className="reveal delay-1 flex items-center gap-2.5 mb-12">
          <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
          <span className="text-[15px] text-fg/50 font-medium">{dict.features.sectionSubheading}</span>
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
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[13px] text-accent font-medium">{feature.label}</span>
                    {feature.tag && (
                      <span className="text-[11px] font-medium bg-accent text-bg px-2 py-0.5">{feature.tag}</span>
                    )}
                  </div>
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
