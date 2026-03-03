"use client";

import { useReveal } from "./useReveal";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "P&ID Object Recognition",
    desc: "Our trained models process tens of thousands of piping & instrumentation diagrams, identifying instruments, valves, and connections with 97%+ accuracy.",
    color: "lime" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Knowledge Graphs",
    desc: "All documents connected via an embedded vector database. Update one PDF and every related document propagates the change automatically.",
    color: "magenta" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Agentic Workflows",
    desc: "Autonomous AI agents handle document updates, compliance checks, change management, and cross-referencing across your entire operation.",
    color: "lime" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
    title: "UniSim Plugin",
    desc: "Native plugin bringing AI directly into the UniSim simulation environment. Optimization suggestions, model validation, and predictive insights in-app.",
    color: "magenta" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Process Optimization",
    desc: "AI-driven analysis of your manufacturing processes. Identify bottlenecks, predict failures, and optimize throughput with real-time data intelligence.",
    color: "lime" as const,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Compliance & Safety",
    desc: "Automated compliance verification against industry standards. Real-time safety monitoring and intelligent alert systems for your entire facility.",
    color: "magenta" as const,
  },
];

export default function Solutions() {
  const ref = useReveal(0.05);

  return (
    <section
      id="solutions"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Heading */}
        <div className="reveal text-center max-w-[620px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-5">
            <span className="w-1 h-1 rounded-full bg-[#d8fe91]" />
            Solutions
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.025em]">
            Everything you need to{" "}
            <span className="text-gradient-lime">modernize</span> your operations
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-white/35 font-normal">
            Purpose-built AI tools for manufacturing and chemical engineering,
            delivered by engineers who understand your industry.
          </p>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal delay-${Math.min(i + 1, 6)} glass-card rounded-2xl p-6 lg:p-7 group cursor-default`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                  f.color === "lime"
                    ? "bg-[#d8fe91]/[0.08] text-[#d8fe91]"
                    : "bg-[#df7afe]/[0.08] text-[#df7afe]"
                }`}
              >
                {f.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-white/90 mb-2.5 tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-white/30 font-normal">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
