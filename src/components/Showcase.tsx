"use client";

import { useReveal } from "./useReveal";
import { useI18n } from "@/i18n/context";

/* ═══════════════════════════════════════════
   Card 1 — P&ID Recognition (file-browser feel)
   ═══════════════════════════════════════════ */
function PlantCard() {
  const { dict } = useI18n();
  const s = dict.showcase;

  const rows = [
    { tag: "V-101", label: "Control Valve", conf: 98, active: true },
    { tag: "E-201", label: "Shell & Tube HX", conf: 97, active: true },
    { tag: "T-301", label: "Storage Tank", conf: 95, active: false },
    { tag: "P-401", label: "Centrifugal Pump", conf: 93, active: false },
    { tag: "FIC-102", label: "Flow Controller", conf: 91, active: false },
  ];

  return (
    <div className="os-window">
      {/* ── Title-bar ── */}
      <div className="os-titlebar">
        <div className="os-dots">
          <span className="os-dot os-dot-r" />
          <span className="os-dot os-dot-y" />
          <span className="os-dot os-dot-g" />
        </div>
        <span className="os-title">{s.pidScanner}</span>
        <span className="os-title-right">{s.accuracyLabel}</span>
      </div>

      {/* ── Toolbar ── */}
      <div className="os-toolbar">
        <div className="flex items-center gap-1.5">
          <svg className="w-3 h-3 text-fg/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" /></svg>
          <span className="text-[10px] text-fg/30">plant-east-2 /</span>
          <span className="text-[10px] text-fg/50 font-medium">area-100.pdf</span>
        </div>
      </div>

      {/* ── Table header ── */}
      <div className="os-table-head">
        <span className="w-[52px]">Tag</span>
        <span className="flex-1">Component</span>
        <span className="w-[38px] text-right">Conf.</span>
      </div>

      {/* ── Rows ── */}
      <div className="flex-1 overflow-hidden">
        {rows.map((r) => (
          <div key={r.tag} className={`os-table-row ${r.active ? "os-table-row-hl" : ""}`}>
            <span className={`w-[52px] font-mono text-[10px] ${r.active ? "text-accent" : "text-fg/30"}`}>{r.tag}</span>
            <span className="flex-1 text-[11px] text-fg/55">{r.label}</span>
            <span className={`w-[38px] text-right text-[10px] font-mono ${r.conf >= 95 ? "text-green-500/70 dark:text-emerald-400/60" : "text-fg/25"}`}>{r.conf}%</span>
          </div>
        ))}
      </div>

      {/* ── Status-bar ── */}
      <div className="os-statusbar">
        <span>{s.components}</span>
        <span className="flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500/60 dark:bg-emerald-400/50" />
          ready
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Card 2 — Equipment Health (activity-monitor feel)
   ═══════════════════════════════════════════ */
function PredictCard() {
  const { dict } = useI18n();
  const s = dict.showcase;

  const assets = [
    { name: s.cartAid, health: 62, status: "warn" as const },
    { name: "P-102 \u00B7 Feed Pump", health: 94, status: "ok" as const },
    { name: "E-301 \u00B7 Reboiler", health: 88, status: "ok" as const },
    { name: "K-401 \u00B7 Blower", health: 97, status: "ok" as const },
  ];

  return (
    <div className="os-window">
      {/* ── Title-bar ── */}
      <div className="os-titlebar">
        <div className="os-dots">
          <span className="os-dot os-dot-r" />
          <span className="os-dot os-dot-y" />
          <span className="os-dot os-dot-g" />
        </div>
        <span className="os-title">{s.processSim}</span>
        <span className="os-title-right flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500/70 dark:bg-emerald-400/60 animate-pulse" />
          {s.feedStream}
        </span>
      </div>

      {/* ── Table header ── */}
      <div className="os-table-head">
        <span className="flex-1">Asset</span>
        <span className="w-[80px]">Health</span>
        <span className="w-[50px] text-right">Status</span>
      </div>

      {/* ── Asset rows ── */}
      <div className="flex-1 overflow-hidden">
        {assets.map((a) => (
          <div key={a.name} className={`os-table-row ${a.status === "warn" ? "os-table-row-warn" : ""}`}>
            <span className={`flex-1 text-[11px] ${a.status === "warn" ? "text-fg/70 font-medium" : "text-fg/50"}`}>{a.name}</span>
            <div className="w-[80px] flex items-center gap-1.5">
              <div className="flex-1 h-[3px] rounded-full bg-fg/[0.06] overflow-hidden">
                <div
                  className={`h-full rounded-full ${a.status === "warn" ? "bg-amber-500/70 dark:bg-amber-400/60" : "bg-green-500/50 dark:bg-emerald-400/40"}`}
                  style={{ width: `${a.health}%` }}
                />
              </div>
              <span className="text-[9px] font-mono text-fg/25 w-[22px] text-right">{a.health}%</span>
            </div>
            <span className="w-[50px] text-right">
              {a.status === "warn" ? (
                <span className="os-status-pill os-status-warn">{s.springConfig}</span>
              ) : (
                <span className="os-status-pill os-status-ok">{s.purchaseSuccessful}</span>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* ── Alert banner ── */}
      <div className="os-alert">
        <svg className="w-3 h-3 text-amber-500/60 dark:text-amber-400/50 shrink-0 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div className="min-w-0">
          <p className="text-[10px] text-fg/50 font-medium leading-tight">{s.returnCost}</p>
          <p className="text-[9px] text-fg/25 leading-snug mt-0.5 truncate">{s.silMessage}</p>
        </div>
      </div>

      {/* ── Status-bar ── */}
      <div className="os-statusbar">
        <span>4 assets monitored</span>
        <span>1 alert</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Card 3 — Deployment Timeline (terminal feel)
   ═══════════════════════════════════════════ */
function DeployCard() {
  const { dict } = useI18n();
  const s = dict.showcase;
  const steps = s.agents;

  return (
    <div className="os-window">
      {/* ── Title-bar ── */}
      <div className="os-titlebar">
        <div className="os-dots">
          <span className="os-dot os-dot-r" />
          <span className="os-dot os-dot-y" />
          <span className="os-dot os-dot-g" />
        </div>
        <span className="os-title">{s.agentLabel2}</span>
        <span className="os-title-right">{s.activeCount}</span>
      </div>

      {/* ── Timeline rows ── */}
      <div className="flex-1 px-3 py-2.5 space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-stretch gap-2.5">
            {/* Track */}
            <div className="flex flex-col items-center w-3">
              <div className="w-[7px] h-[7px] rounded-full border-[1.5px] border-green-500/50 dark:border-emerald-400/40 bg-green-500/20 dark:bg-emerald-400/15 shrink-0 mt-2" />
              <div className="w-px flex-1 bg-fg/[0.06]" />
            </div>
            {/* Content */}
            <div className="flex-1 pb-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-fg/25 uppercase tracking-wider">{step.name}</span>
                <svg className="w-3 h-3 text-green-500/50 dark:text-emerald-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              </div>
              <p className="text-[10px] text-fg/40 mt-0.5">{step.status}</p>
            </div>
          </div>
        ))}

        {/* Active step */}
        <div className="flex items-stretch gap-2.5">
          <div className="flex flex-col items-center w-3">
            <div className="w-[7px] h-[7px] rounded-full border-[1.5px] border-accent bg-accent/30 shrink-0 mt-2 animate-pulse" />
          </div>
          <div className="flex-1 pb-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono text-accent/60 uppercase tracking-wider">Week 4</span>
              <span className="text-[8px] text-accent/40 font-mono uppercase tracking-wider">running</span>
            </div>
            <p className="text-[10px] text-fg/55 font-medium mt-0.5">{s.agentLabel}</p>
          </div>
        </div>
      </div>

      {/* ── Progress footer ── */}
      <div className="os-statusbar">
        <span>week 4 of 6</span>
        <div className="flex gap-[2px]">
          {[1,2,3,4,5,6].map(w => (
            <div key={w} className={`w-[14px] h-[4px] rounded-sm ${w <= 3 ? "bg-green-500/40 dark:bg-emerald-400/30" : w === 4 ? "bg-accent/50" : "bg-fg/[0.06]"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════ */
const CARDS = [PlantCard, PredictCard, DeployCard];

export default function Showcase() {
  const { dict } = useI18n();
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="showcase" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {dict.showcase.items.map((item, i) => {
            const Card = CARDS[i];
            return (
              <div key={i} className={`reveal delay-${i + 1} flex flex-col gap-5`}>
                <Card />
                <div>
                  <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] text-fg/35 leading-[1.6]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
