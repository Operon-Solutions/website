"use client";

export default function Marquee() {
  const items = [
    "P&ID Recognition",
    "Knowledge Graphs",
    "Agentic Workflows",
    "UniSim Plugin",
    "Vector Database",
    "Document Intelligence",
    "Process Optimization",
    "Forward-Deployed Engineers",
  ];
  const content = items.map((s) => s.toUpperCase()).join("  ·  ") + "  ·  ";

  return (
    <div className="py-8 border-y border-white/[0.05] overflow-hidden">
      <div className="marquee-track inline-flex whitespace-nowrap">
        <span className="text-[13px] font-semibold tracking-[0.15em] text-white/[0.08] pr-4">
          {content}
        </span>
        <span className="text-[13px] font-semibold tracking-[0.15em] text-white/[0.08] pr-4">
          {content}
        </span>
      </div>
    </div>
  );
}
