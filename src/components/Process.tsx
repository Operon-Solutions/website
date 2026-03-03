"use client";

import { useReveal } from "./useReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We audit your existing workflows, data infrastructure, and pain points. We learn your processes better than any outside consultant ever has.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Deploy",
    desc: "Our forward-deployed engineers embed directly in your operations. They work alongside your team, on-site — not from a remote office.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    desc: "We design and build customized AI systems tailored to your facility — not off-the-shelf software forced to fit your unique processes.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.84-3.37a.75.75 0 010-1.3l5.84-3.37a.75.75 0 01.76 0l5.84 3.37a.75.75 0 010 1.3l-5.84 3.37a.75.75 0 01-.76 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.58 11.8v4.07a.75.75 0 00.38.65l5.84 3.37a.75.75 0 00.76 0l5.84-3.37a.75.75 0 00.38-.65V11.8" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Scale",
    desc: "Once proven, we scale across your operations. Continuous optimization, ongoing support, measurable ROI from day one.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function Process() {
  const ref = useReveal(0.06);

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="reveal text-center max-w-[620px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-5">
            <span className="w-1 h-1 rounded-full bg-[#d8fe91]" />
            How It Works
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.025em]">
            From discovery to{" "}
            <span className="text-gradient-lime">deployment</span> in weeks
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-white/35 font-normal">
            We don&apos;t sell software licenses. We embed into your operations and
            build exactly what you need.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal delay-${i + 1} glass-card rounded-2xl p-6 lg:p-7 relative group`}
            >
              {/* Number watermark */}
              <span className="absolute top-5 right-5 text-[48px] font-extrabold leading-none text-white/[0.03] select-none">
                {step.num}
              </span>

              <div className="w-10 h-10 rounded-xl bg-[#d8fe91]/[0.08] text-[#d8fe91] flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-white/90 mb-2.5">{step.title}</h3>
              <p className="text-[13.5px] leading-[1.65] text-white/30 font-normal">{step.desc}</p>

              {/* Connector line (not on last) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/[0.06]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
