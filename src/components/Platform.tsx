"use client";

import { useReveal } from "./useReveal";

/* Three alternating product showcases, like markopolo.ai */
const showcases = [
  {
    badge: "P&ID Recognition",
    badgeColor: "lime" as const,
    title: "Process 10,000+ diagrams in hours, not months",
    desc: "Our object recognition models are trained specifically on piping & instrumentation diagrams. Automatically identify instruments, valves, equipment, and connections with over 97% accuracy — saving your engineers months of manual work.",
    bullets: [
      "Trained specifically on P&ID symbols",
      "Batch-process entire document libraries",
      "Extracts tags, line numbers & specs",
      "Export to structured data formats",
    ],
    mockup: "pid" as const,
    reverse: false,
  },
  {
    badge: "Knowledge Graph",
    badgeColor: "magenta" as const,
    title: "Update one document, every linked file follows",
    desc: "Your embedded vector database connects every document in your facility into a living knowledge graph. When you update information in one PDF, all related specifications, procedures, and compliance docs update automatically.",
    bullets: [
      "Embedded vector database",
      "Automatic cross-document propagation",
      "Instant search across all docs",
      "Full version history & audit trail",
    ],
    mockup: "knowledge" as const,
    reverse: true,
  },
  {
    badge: "Agentic Workflows",
    badgeColor: "lime" as const,
    title: "Let AI handle the paperwork so engineers can engineer",
    desc: "Intelligent agents autonomously manage document updates, compliance verification, change management, and cross-referencing. Not chatbots — real autonomous workflows that understand your processes and execute with precision.",
    bullets: [
      "Autonomous document management",
      "Compliance checks on autopilot",
      "Change propagation across systems",
      "Human-in-the-loop when needed",
    ],
    mockup: "agentic" as const,
    reverse: false,
  },
];

/* Mini mockup components */
function PidMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl bg-[#0a0a0a] border border-white/[0.06] overflow-hidden p-5">
      {/* P&ID diagram visualization */}
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#d8fe91]/10 text-[10px] font-semibold text-[#d8fe91]">
        97.3% accuracy
      </div>
      <svg viewBox="0 0 400 260" fill="none" className="w-full h-full">
        {/* Lines */}
        <line x1="40" y1="100" x2="160" y2="100" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
        <line x1="200" y1="100" x2="320" y2="100" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
        <line x1="180" y1="60" x2="180" y2="140" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
        <line x1="320" y1="100" x2="380" y2="100" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
        <line x1="180" y1="140" x2="180" y2="200" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
        {/* Valve */}
        <polygon points="155,85 175,100 155,115" fill="none" stroke="#d8fe91" strokeOpacity="0.5" strokeWidth="1.5" />
        <polygon points="205,85 185,100 205,115" fill="none" stroke="#d8fe91" strokeOpacity="0.5" strokeWidth="1.5" />
        {/* Tank */}
        <rect x="300" y="70" width="50" height="60" rx="4" fill="none" stroke="#d8fe91" strokeOpacity="0.4" strokeWidth="1.5" />
        {/* Pump circle */}
        <circle cx="80" cy="100" r="20" fill="none" stroke="#df7afe" strokeOpacity="0.4" strokeWidth="1.5" />
        <line x1="65" y1="87" x2="95" y2="113" stroke="#df7afe" strokeOpacity="0.3" strokeWidth="1" />
        {/* Instrument */}
        <circle cx="180" cy="200" r="16" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
        <text x="180" y="204" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="10" fontFamily="monospace">TI</text>
        {/* Bounding boxes - AI detection */}
        <rect x="55" y="75" width="52" height="52" rx="3" stroke="#d8fe91" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 3" />
        <rect x="145" y="78" width="70" height="44" rx="3" stroke="#d8fe91" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 3" />
        <rect x="293" y="63" width="64" height="74" rx="3" stroke="#d8fe91" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 3" />
        <rect x="159" y="179" width="42" height="42" rx="3" stroke="#d8fe91" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 3" />
        {/* Labels */}
        <text x="58" y="72" fill="#d8fe91" fillOpacity="0.6" fontSize="8" fontFamily="monospace">PUMP-101</text>
        <text x="148" y="75" fill="#d8fe91" fillOpacity="0.6" fontSize="8" fontFamily="monospace">VALVE-203</text>
        <text x="296" y="60" fill="#d8fe91" fillOpacity="0.6" fontSize="8" fontFamily="monospace">TANK-A01</text>
      </svg>
    </div>
  );
}

function KnowledgeMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl bg-[#0a0a0a] border border-white/[0.06] overflow-hidden p-5">
      <div className="flex flex-col gap-3 h-full">
        <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">Connected Documents</div>
        {[
          { name: "Process-Flow-Rev4.pdf", status: "Updated", linked: 12 },
          { name: "Safety-Procedure-SP-201.pdf", status: "Auto-synced", linked: 8 },
          { name: "Equipment-Spec-ES-104.pdf", status: "Auto-synced", linked: 5 },
          { name: "P&ID-DWG-2847.pdf", status: "Source", linked: 23 },
        ].map((doc, i) => (
          <div
            key={doc.name}
            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
              i === 0
                ? "bg-[#d8fe91]/[0.05] border-[#d8fe91]/20"
                : "bg-white/[0.02] border-white/[0.04]"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 ${
                i === 0 ? "bg-[#d8fe91]/15" : "bg-white/[0.05]"
              }`}>
                <svg className={`w-3.5 h-3.5 ${i === 0 ? "text-[#d8fe91]" : "text-white/30"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="text-[12px] font-medium text-white/60 truncate">{doc.name}</span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                doc.status === "Source"
                  ? "bg-[#df7afe]/10 text-[#df7afe]"
                  : doc.status === "Updated"
                  ? "bg-[#d8fe91]/10 text-[#d8fe91]"
                  : "bg-white/[0.05] text-white/30"
              }`}>
                {doc.status}
              </span>
              <span className="text-[10px] text-white/20">{doc.linked} links</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgenticMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-xl bg-[#0a0a0a] border border-white/[0.06] overflow-hidden p-5">
      <div className="flex flex-col gap-2.5 h-full">
        <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">Workflow Agent</div>
        {[
          { step: "Detected change in P&ID-2847 Rev.5", status: "done", time: "2s ago" },
          { step: "Identified 23 linked documents", status: "done", time: "1s ago" },
          { step: "Updating Safety-Procedure-SP-201...", status: "running", time: "now" },
          { step: "Queue: Equipment specs, compliance docs", status: "pending", time: "next" },
        ].map((item) => (
          <div key={item.step} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
            <div className="mt-0.5 flex-shrink-0">
              {item.status === "done" ? (
                <div className="w-5 h-5 rounded-full bg-[#d8fe91]/15 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#d8fe91]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              ) : item.status === "running" ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#d8fe91]/40 border-t-[#d8fe91] animate-spin" />
              ) : (
                <div className="w-5 h-5 rounded-full border border-white/10" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] text-white/50 font-medium truncate">{item.step}</div>
              <div className="text-[10px] text-white/20 mt-0.5">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockups: Record<string, React.FC> = {
  pid: PidMockup,
  knowledge: KnowledgeMockup,
  agentic: AgenticMockup,
};

export default function Platform() {
  const ref = useReveal(0.06);

  return (
    <section
      id="platform"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-36"
    >
      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(216,254,145,0.06) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="reveal text-center max-w-[620px] mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-5">
            <span className="w-1 h-1 rounded-full bg-[#df7afe]" />
            Platform
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.12] tracking-[-0.025em]">
            Purpose-built for{" "}
            <span className="text-gradient-lime">industrial intelligence</span>
          </h2>
        </div>

        {/* Alternating showcases */}
        <div className="flex flex-col gap-28 lg:gap-36">
          {showcases.map((s, i) => {
            const Mockup = mockups[s.mockup];
            return (
              <div
                key={s.badge}
                className={`reveal delay-${Math.min(i + 1, 3)} grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  s.reverse ? "lg:direction-rtl" : ""
                }`}
                style={{ direction: s.reverse ? "rtl" : "ltr" }}
              >
                {/* Text */}
                <div style={{ direction: "ltr" }}>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide mb-5 ${
                      s.badgeColor === "lime"
                        ? "bg-[#d8fe91]/[0.08] text-[#d8fe91]/80"
                        : "bg-[#df7afe]/[0.08] text-[#df7afe]/80"
                    }`}
                  >
                    {s.badge}
                  </span>
                  <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-5">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-white/35 font-normal mb-7">
                    {s.desc}
                  </p>
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5">
                        <div className={`w-1 h-1 rounded-full flex-shrink-0 ${
                          s.badgeColor === "lime" ? "bg-[#d8fe91]/50" : "bg-[#df7afe]/50"
                        }`} />
                        <span className="text-[14px] text-white/45">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup */}
                <div style={{ direction: "ltr" }}>
                  <div className="glass-card rounded-2xl p-1.5">
                    <Mockup />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
