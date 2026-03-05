"use client";

import { useReveal } from "./useReveal";
import { useState, useEffect, useCallback, useRef } from "react";

/* ── Icon helper (shared across industries) ── */
function Icon({ d }: { d: string }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const ICONS = {
  monitor:
    "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
  globe:
    "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  person:
    "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  language:
    "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
  arrows:
    "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  bolt: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  cog: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7 7 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z",
  chart:
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  shield:
    "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  beaker:
    "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8a2.25 2.25 0 01-.397 2.578l-2.1 2.1A2.25 2.25 0 0115.712 21H8.288a2.25 2.25 0 01-1.591-.659l-2.1-2.1a2.25 2.25 0 01-.397-2.578",
  cpu: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z",
  truck:
    "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.198",
  clipboard:
    "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z",
};

/* ── Per-industry capability sets ── */
type Capability = { icon: string; title: string; description: string };

const industryData: { label: string; capabilities: Capability[] }[] = [
  {
    label: "chemical engineering",
    capabilities: [
      {
        icon: "monitor",
        title: "P&ID Recognition",
        description:
          "Processes thousands of engineering diagrams with 97%+ accuracy in minutes",
      },
      {
        icon: "globe",
        title: "Knowledge Graphs",
        description:
          "Transforms document silos into connected intelligence with 67% prediction accuracy",
      },
      {
        icon: "person",
        title: "Forward-Deployed Engineers",
        description:
          "On-site experts who learn your workflows and deploy customized AI in under 6 weeks",
      },
      {
        icon: "language",
        title: "UniSim Integration",
        description:
          "Native simulation fluency across UniSim, Aspen, and 50+ engineering tools",
      },
      {
        icon: "arrows",
        title: "Agentic Workflows",
        description:
          "Autonomous agents that handle document processing, compliance checks, and reporting",
      },
      {
        icon: "bolt",
        title: "Process Optimization",
        description:
          "React to billions of sensor events with ML-driven process improvements",
      },
    ],
  },
  {
    label: "oil & gas industries",
    capabilities: [
      {
        icon: "monitor",
        title: "P&ID Recognition",
        description:
          "Digitize legacy piping and instrumentation diagrams across upstream and downstream assets",
      },
      {
        icon: "shield",
        title: "Safety & Compliance",
        description:
          "Automated HAZOP analysis and regulatory compliance checks against API and ASME standards",
      },
      {
        icon: "person",
        title: "Forward-Deployed Engineers",
        description:
          "On-site experts embedded with your operations team for rapid AI deployment",
      },
      {
        icon: "chart",
        title: "Production Forecasting",
        description:
          "ML-driven well performance prediction and reservoir optimization models",
      },
      {
        icon: "arrows",
        title: "Agentic Workflows",
        description:
          "Autonomous agents for permit processing, inspection scheduling, and field reporting",
      },
      {
        icon: "cog",
        title: "Asset Integrity",
        description:
          "Predictive maintenance and corrosion monitoring across pipelines and facilities",
      },
    ],
  },
  {
    label: "electronics manufacturing",
    capabilities: [
      {
        icon: "cpu",
        title: "Schematic Recognition",
        description:
          "Digitize circuit schematics and PCB layouts with component-level accuracy",
      },
      {
        icon: "globe",
        title: "Knowledge Graphs",
        description:
          "Link BOMs, datasheets, and test reports into a connected intelligence layer",
      },
      {
        icon: "person",
        title: "Forward-Deployed Engineers",
        description:
          "On-site experts who integrate with your fab and assembly workflows",
      },
      {
        icon: "chart",
        title: "Yield Optimization",
        description:
          "Identify defect root causes and optimize process parameters to maximize yield",
      },
      {
        icon: "arrows",
        title: "Agentic Workflows",
        description:
          "Automated quality inspection, lot tracking, and compliance documentation",
      },
      {
        icon: "clipboard",
        title: "Supply Chain Intelligence",
        description:
          "Real-time component availability tracking and alternative part recommendations",
      },
    ],
  },
  {
    label: "food & beverage manufacturing",
    capabilities: [
      {
        icon: "beaker",
        title: "Recipe Management",
        description:
          "Digitize and version-control formulations with full ingredient traceability",
      },
      {
        icon: "shield",
        title: "Food Safety Compliance",
        description:
          "Automated HACCP monitoring, allergen tracking, and FDA/FSMA audit preparation",
      },
      {
        icon: "person",
        title: "Forward-Deployed Engineers",
        description:
          "On-site experts who understand your production lines and sanitation protocols",
      },
      {
        icon: "chart",
        title: "Production Analytics",
        description:
          "Real-time OEE dashboards and batch variance analysis across production lines",
      },
      {
        icon: "arrows",
        title: "Agentic Workflows",
        description:
          "Autonomous agents for label compliance, shelf-life testing, and recall management",
      },
      {
        icon: "truck",
        title: "Cold Chain Optimization",
        description:
          "End-to-end temperature monitoring and logistics optimization for perishable goods",
      },
    ],
  },
];

/* ── Scramble animation ── */
const CHARS = "bcfoperonilsolutionsmnuz0123456789!@#$%&";

function useScramble(target: string, duration = 2000) {
  const [text, setText] = useState(target);
  const frameRef = useRef(0);

  useEffect(() => {
    const len = Math.max(text.length, target.length);
    const steps = Math.ceil(duration / 30); // ~30ms per frame
    let step = 0;
    cancelAnimationFrame(frameRef.current);

    function tick() {
      step++;
      const progress = step / steps;
      let result = "";
      for (let i = 0; i < len; i++) {
        if (i < target.length && progress > (i / len) * 0.8 + 0.2) {
          result += target[i];
        } else if (target[i] === " ") {
          result += " ";
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setText(result);
      if (step < steps) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setText(target);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return text;
}

/* ── Main component ── */
export default function PlatformGrid() {
  const ref = useReveal() as React.RefObject<HTMLElement>;
  const [index, setIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [morphPhase, setMorphPhase] = useState<"in" | "out">("in");
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrambled = useScramble(industryData[index].label);
  const caps = industryData[displayIndex].capabilities;

  // When index changes, trigger morph-out → swap → morph-in
  useEffect(() => {
    if (index === displayIndex) return;
    setMorphPhase("out");
    const t = setTimeout(() => {
      setDisplayIndex(index);
      setMorphPhase("in");
    }, 350);
    return () => clearTimeout(t);
  }, [index, displayIndex]);

  // Auto-cycle (pause on hover)
  useEffect(() => {
    if (hovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % industryData.length);
    }, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovered]);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % industryData.length);
  }, []);

  return (
    <section id="platform" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-white/40" />
            <span className="text-[13px] text-white/40 font-medium">
              Popular Services
            </span>
          </div>
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] max-w-2xl tracking-tight">
            We provide domain specific AI solutions for 
            <br />
            <span
              className="text-[#d8fe91] cursor-pointer select-none"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={advance}
            >
              {scrambled}
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caps.map((cap, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 md:p-7 ${morphPhase === "out" ? "morph-out" : "morph-in"}`}
            >
              <div className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-white/60 mb-5 transition-all duration-500">
                <Icon d={ICONS[cap.icon as keyof typeof ICONS]} />
              </div>
              <h3 className="text-[15px] font-semibold mb-2.5 morph-text">{cap.title}</h3>
              <p className="text-[13px] text-white/35 leading-[1.6] morph-text">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
