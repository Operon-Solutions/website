"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/i18n/context";

/* ── Showcase Card Mockups ── */

function PidShowcase() {
  const { dict } = useI18n();
  return (
    <div
      className="showcase-surface relative rounded-2xl overflow-hidden h-[340px]"
    >
      <div
        className="showcase-glow absolute inset-0 opacity-30"
      />
      <div className="relative p-5 h-full flex flex-col">
        {/* Mini toolbar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-fg/10" />
            <div className="w-2 h-2 rounded-full bg-fg/10" />
            <div className="w-2 h-2 rounded-full bg-fg/10" />
          </div>
          <div className="text-[10px] text-fg/20 font-mono ml-2">
            {dict.showcase.pidScanner}
          </div>
        </div>

        {/* Diagram elements */}
        <div className="flex-1 relative">
          {/* Equipment boxes */}
          <div className="absolute top-2 left-4 px-3 py-2 border border-accent/30 rounded-lg bg-accent/5 text-[10px] text-accent">
            V-101 &middot; Valve
          </div>
          <div className="absolute top-14 right-4 px-3 py-2 border border-accent/30 rounded-lg bg-accent/5 text-[10px] text-accent">
            E-201 &middot; Heat Exchanger
          </div>
          <div className="absolute top-[45%] left-8 px-3 py-2 border border-fg/10 rounded-lg bg-fg/[0.03] text-[10px] text-fg/40">
            T-301 &middot; Tank
          </div>
          <div className="absolute bottom-16 right-8 px-3 py-2 border border-fg/10 rounded-lg bg-fg/[0.03] text-[10px] text-fg/40">
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
              style={{ stroke: 'color-mix(in srgb, var(--c-accent) 20%, transparent)' }}
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="100"
              y1="90"
              x2="200"
              y2="140"
              style={{ stroke: 'color-mix(in srgb, var(--c-fg) 8%, transparent)' }}
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-3 border-t border-fg/[0.06]">
          <span className="text-[10px] text-fg/25">{dict.showcase.components}</span>
          <span className="text-[10px] text-accent/60">{dict.showcase.accuracyLabel}</span>
        </div>
      </div>
    </div>
  );
}

function SimShowcase() {
  const { dict } = useI18n();
  return (
    <div
      className="showcase-surface relative rounded-2xl overflow-hidden h-[340px]"
    >
      <div
        className="showcase-glow absolute inset-0 opacity-30"
      />
      <div className="relative p-5 h-full flex flex-col">
        <div className="text-[11px] text-fg/30 mb-3">{dict.showcase.processSim}</div>

        {/* Simulation cards */}
        <div className="space-y-2.5 flex-1">
          <div className="glass rounded-lg p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium">{dict.showcase.cartAid}</span>
              <span className="text-[10px] text-fg/25">{dict.showcase.feedStream}</span>
            </div>
            <div className="h-1 bg-fg/[0.06] rounded-full overflow-hidden">
              <div className="h-full w-[78%] bg-accent/40 rounded-full" />
            </div>
          </div>

          <div className="glass rounded-lg p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-medium">{dict.showcase.returnCost}</span>
              <span className="text-[10px] text-fg/25">{dict.showcase.springConfig}</span>
            </div>
            <div className="h-1 bg-fg/[0.06] rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-accent/40 rounded-full" />
            </div>
          </div>

          <div className="glass rounded-lg p-3 mt-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-fg/[0.06] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-fg/40"
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
              <span className="text-[11px] text-fg/50">
                {dict.showcase.silMessage}
              </span>
            </div>
          </div>

          <div className="glass rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-[10px] text-fg/30">
              {dict.showcase.purchaseSuccessful}
            </span>
            <span className="text-[10px] text-accent/50">&#10003;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OpsShowcase() {
  const { dict } = useI18n();
  const agents = dict.showcase.agents;
  const colors = ["bg-indigo-700 dark:bg-emerald-800", "bg-violet-700 dark:bg-teal-800", "bg-indigo-800 dark:bg-green-800"];

  return (
    <div
      className="showcase-surface relative rounded-2xl overflow-hidden h-[340px]"
    >
      <div
        className="showcase-glow absolute inset-0 opacity-30"
      />
      <div className="relative p-5 h-full flex flex-col">
        <div className="text-[11px] text-fg/30 mb-3">{dict.showcase.agentLabel}</div>

        {/* Agent cards */}
        <div className="space-y-2.5 flex-1">
          {agents.map((agent, i) => (
            <div key={agent.name} className="glass rounded-lg p-3">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-7 h-7 rounded-full ${colors[i]} flex items-center justify-center text-[10px] font-bold text-white/70`}
                >
                  {agent.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium">{agent.name}</div>
                  <div className="text-[10px] text-fg/25 truncate">
                    {agent.status}
                  </div>
                </div>
                <div
                  className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-accent animate-pulse" : "bg-fg/20"}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 pt-3 border-t border-fg/[0.06]">
          <span className="text-[10px] text-fg/20">{dict.showcase.agentLabel2}</span>
          <div className="flex-1 h-px bg-fg/[0.04]" />
          <span className="text-[10px] text-fg/20">{dict.showcase.activeCount}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Mockup map ── */
const MOCKUPS = [PidShowcase, SimShowcase, OpsShowcase];

export default function Showcase() {
  const { dict } = useI18n();
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="showcase" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dict.showcase.items.map((item, i) => {
            const Mockup = MOCKUPS[i];
            return (
              <div
                key={i}
                className={`reveal delay-${i + 1} flex flex-col gap-5`}
              >
                <Mockup />
                <div>
                  <h3 className="text-[16px] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-fg/35 leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
