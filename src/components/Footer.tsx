"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { dict } = useI18n();
  const cols = dict.footer.cols;

  return (
    <footer className="relative overflow-hidden">
      {/* Background landscape — dark mode */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1920 600"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ft-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="40%" stopColor="#040a06" />
              <stop offset="100%" stopColor="#0c2416" />
            </linearGradient>
            <radialGradient id="ft-glow" cx="50%" cy="90%" r="40%">
              <stop offset="0%" stopColor="#1a4020" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1a4020" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1920" height="600" fill="url(#ft-sky)" />
          <rect width="1920" height="600" fill="url(#ft-glow)" />
          <path
            d="M-100,400 C200,350 500,380 800,360 C1100,340 1400,320 1920,360 L1920,600 L-100,600 Z"
            fill="#0a1a0e"
            opacity="0.5"
          />
          <path
            d="M-100,460 C300,420 600,440 900,430 C1200,420 1500,400 1920,430 L1920,600 L-100,600 Z"
            fill="#081408"
            opacity="0.7"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/80 to-transparent" />
      </div>

      {/* Background — light mode: smooth CSS gradient */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(238,242,255,0.3) 40%, rgba(224,231,255,0.4) 70%, rgba(199,210,254,0.25) 100%)',
        }}
      />

      {/* Large watermark text */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none">
        <span
          className="text-[clamp(6rem,20vw,16rem)] font-bold tracking-tighter text-fg/[0.02] leading-none translate-y-[15%] select-none"
          aria-hidden="true"
        >
          operon
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 mb-16">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-medium text-accent/60 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-fg/30 hover:text-fg/60 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-fg/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-fg/15">
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </span>
          <div className="flex items-center gap-4">
            {[
              {
                label: "Twitter",
                path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
              },
              {
                label: "LinkedIn",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-fg/20 hover:text-fg/40 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
