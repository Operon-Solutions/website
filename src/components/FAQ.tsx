"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

const faqs = [
  {
    q: "What's the actual ROI I can expect?",
    a: "Most clients see 60-80% reduction in document processing time within the first month. Our P&ID recognition alone saves hundreds of engineering hours per project. We provide detailed ROI projections during our initial consultation.",
  },
  {
    q: "How is this different from generic AI tools?",
    a: "Unlike general-purpose AI, Operon is purpose-built for chemical engineering. Our models are trained on millions of P&IDs, process flow diagrams, and engineering documents. We deploy engineers who understand your industry on-site.",
  },
  {
    q: "Do I need technical expertise to use Operon?",
    a: "No. Our forward-deployed engineers handle the technical implementation. Install our connector with a single configuration change. The AI learns your operations automatically. Most teams manage everything themselves without any technical overhead.",
  },
  {
    q: "Will this work for my specific type of facility?",
    a: "We've deployed across refineries, chemical plants, pharmaceutical manufacturing, and specialty chemical facilities. Our AI adapts to your specific equipment, processes, and documentation standards.",
  },
  {
    q: "How much time will I need to manage this?",
    a: "Minimal. After initial deployment (typically under 6 weeks), the system runs autonomously. Our agents handle document processing, compliance checks, and reporting. You focus on high-level decisions.",
  },
  {
    q: "What if I'm already using another platform?",
    a: "Operon integrates with your existing tools—UniSim, Aspen, SAP, and more. We augment your current workflow rather than replacing it. Our knowledge graphs connect to your existing document management systems.",
  },
];

function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[14px] md:text-[15px] font-medium pr-4 group-hover:text-white/90 transition-colors">
          {faq.q}
        </span>
        <span
          className={`text-[18px] text-white/30 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[13px] text-white/35 leading-[1.7] pb-5 pr-8">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-white/40" />
            <span className="text-[13px] text-white/40 font-medium">FAQ</span>
          </div>
          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.15] tracking-tight">
            Commonly Asked Questions
          </h2>
        </div>

        {/* FAQ grid */}
        <div className="reveal delay-1 grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            {faqs.slice(0, 3).map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
          <div>
            {faqs.slice(3).map((faq) => (
              <FaqItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
