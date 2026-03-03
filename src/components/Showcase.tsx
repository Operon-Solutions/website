"use client";

import { useReveal } from "./useReveal";

/* ── Showcase Card Mockups ── */

function PidShowcase() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[340px]"
      style={{
        background:
          "linear-gradient(160deg, #0c2416 0%, #1a4025 50%, #0e2818 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #2a6a30, transparent 60%)",
        }}
      />
      <div className="relative p-5 h-full flex flex-col">
        {/* Mini toolbar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <div className="text-[10px] text-white/20 font-mono ml-2">
            pid-scanner
          </div>
        </div>

        {/* Diagram elements */}
        <div className="flex-1 relative">
          {/* Equipment boxes */}
          <div className="absolute top-2 left-4 px-3 py-2 border border-[#d8fe91]/30 rounded-lg bg-[#d8fe91]/5 text-[10px] text-[#d8fe91]">
            V-101 &middot; Valve
          </div>
          <div className="absolute top-14 right-4 px-3 py-2 border border-[#d8fe91]/30 rounded-lg bg-[#d8fe91]/5 text-[10px] text-[#d8fe91]">
            E-201 &middot; Heat Exchanger
          </div>
          <div className="absolute top-[45%] left-8 px-3 py-2 border border-white/10 rounded-lg bg-white/[0.03] text-[10px] text-white/40">
            T-301 &middot; Tank
          </div>
          <div className="absolute bottom-16 right-8 px-3 py-2 border border-white/10 rounded-lg bg-white/[0.03] text-[10px] text-white/40">
            P-401 &middot; Pump
          </div>

          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 300 200"
            preserveAspectRatio="none"
          >
            <line
              x1="80"
              y1="25"
              x2="180"
              y2="50"
              stroke="rgba(216,254,145,0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="100"
              y1="90"
              x2="200"
              y2="140"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <span className="text-[10px] text-white/25">12,847 components</span>
          <span className="text-[10px] text-[#d8fe91]/60">97.3% accuracy</span>
        </div>
      </div>
    </div>
  );
}

function SimShowcase() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[340px]"
      style={{
        background:
          "linear-gradient(160deg, #0c2416 0%, #1a4025 50%, #0e2818 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #2a6a30, transparent 60%)",
        }}
      />
      <div className="relative p-5 h-full flex flex-col">
        <div className="text-[11px] text-white/30 mb-3">Process Simulation</div>

        {/* Simulation cards */}
        <div className="space-y-2.5 flex-1">
          <div className="glass rounded-lg p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium">Cart AID</span>
              <span className="text-[10px] text-white/25">Feed Stream</span>
            </div>
            <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
              <div className="h-full w-[78%] bg-[#d8fe91]/40 rounded-full" />
            </div>
          </div>

          <div className="glass rounded-lg p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium">Return cost</span>
              <span className="text-[10px] text-white/25">Spring Config</span>
            </div>
            <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-[#d8fe91]/40 rounded-full" />
            </div>
          </div>

          <div className="glass rounded-lg p-3 mt-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <span className="text-[11px] text-white/50">
                &ldquo;Hi David, I noticed you had questions about the SIL
                report...&rdquo;
              </span>
            </div>
          </div>

          <div className="glass rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-[10px] text-white/30">
              Purchase successful
            </span>
            <span className="text-[10px] text-[#d8fe91]/50">&#10003;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OpsShowcase() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[340px]"
      style={{
        background:
          "linear-gradient(160deg, #0c2416 0%, #1a4025 50%, #0e2818 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, #2a6a30, transparent 60%)",
        }}
      />
      <div className="relative p-5 h-full flex flex-col">
        <div className="text-[11px] text-white/30 mb-3">agent.01</div>

        {/* Agent cards */}
        <div className="space-y-2.5 flex-1">
          {[
            {
              name: "Emily",
              status: "analyzing cart hesitation",
              color: "bg-emerald-800",
            },
            {
              name: "Marcus",
              status: "detecting matching patterns",
              color: "bg-teal-800",
            },
            {
              name: "Amy",
              status: "optimizing response timing",
              color: "bg-green-800",
            },
          ].map((agent, i) => (
            <div key={agent.name} className="glass rounded-lg p-3">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-full ${agent.color} flex items-center justify-center text-[10px] font-bold text-white/70`}
                >
                  {agent.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium">{agent.name}</div>
                  <div className="text-[10px] text-white/25 truncate">
                    {agent.status}
                  </div>
                </div>
                <div
                  className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#d8fe91] animate-pulse" : "bg-white/20"}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
          <span className="text-[10px] text-white/20">agent.02</span>
          <div className="flex-1 h-px bg-white/[0.04]" />
          <span className="text-[10px] text-white/20">3 active</span>
        </div>
      </div>
    </div>
  );
}

/* ── Showcase Data ── */

const showcases = [
  {
    title: "P&ID Analysis",
    description:
      "Track component behavior to predict maintenance with 97% accuracy. Automatically trigger interventions in under 50ms.",
    Mockup: PidShowcase,
  },
  {
    title: "Process Simulation",
    description:
      "Detect when processes are about to fail. Send targeted reports via email, SMS, or dashboards to recover efficiency.",
    Mockup: SimShowcase,
  },
  {
    title: "Intelligent Operations",
    description:
      "Each process gets personalized monitoring based on browsing behavior. 384 data points create individual operational profiles.",
    Mockup: OpsShowcase,
  },
];

export default function Showcase() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="showcase" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {showcases.map((item, i) => (
            <div
              key={item.title}
              className={`reveal delay-${i + 1} flex flex-col gap-5`}
            >
              <item.Mockup />
              <div>
                <h3 className="text-[16px] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-white/35 leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
