"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal(0.06);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-36"
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(216,254,145,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-6">
                <span className="w-1 h-1 rounded-full bg-[#d8fe91]" />
                Get Started
              </span>
            </div>
            <h2 className="reveal delay-1 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.025em] mb-5">
              Let&apos;s build the future of{" "}
              <span className="text-gradient-lime">your operations</span>
            </h2>
            <p className="reveal delay-2 text-[15px] leading-[1.75] text-white/35 font-normal mb-10">
              Whether you&apos;re processing thousands of P&amp;ID diagrams or
              looking to modernize your entire document workflow, we&apos;d love
              to talk.
            </p>

            {/* Contact info */}
            <div className="reveal delay-3 space-y-5">
              {[
                {
                  label: "Email",
                  value: "contact@operonsolutions.com",
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  label: "Location",
                  value: "Houston, TX",
                  icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[12px] font-medium text-white/25 uppercase tracking-wider">{item.label}</div>
                    <div className="text-[14px] text-white/50">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal delay-2">
            {submitted ? (
              <div className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center min-h-[460px] text-center">
                <div className="w-14 h-14 rounded-full bg-[#d8fe91]/10 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#d8fe91]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold mb-2">Thank you</h3>
                <p className="text-[14px] text-white/35">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="glass-card rounded-2xl p-7 lg:p-9 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold text-white/25 uppercase tracking-wider mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-[#d8fe91]/30 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-white/25 uppercase tracking-wider mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-[#d8fe91]/30 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/25 uppercase tracking-wider mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-[#d8fe91]/30 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/25 uppercase tracking-wider mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-[#d8fe91]/30 transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-white/25 uppercase tracking-wider mb-2">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-[#d8fe91]/30 transition-colors resize-none"
                    placeholder="Tell us about your operations..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#d8fe91] text-black text-[14px] font-semibold hover:bg-[#caf080] hover:shadow-[0_0_30px_rgba(216,254,145,0.15)] transition-all duration-300"
                >
                  Book a Demo
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
