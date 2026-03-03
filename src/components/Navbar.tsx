"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex items-center justify-between max-w-[1400px] mx-auto px-6 lg:px-10 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
            : ""
        }`}
      >
        {/* Left nav */}
        <div className="hidden md:flex items-center gap-6 flex-1">
          <a
            href="#features"
            className="text-[13px] text-white/50 hover:text-white transition-colors"
          >
            Solutions{" "}
            <span className="text-[10px] ml-0.5 opacity-50">&#9662;</span>
          </a>
          <a
            href="#platform"
            className="text-[13px] text-white/50 hover:text-white transition-colors"
          >
            Company{" "}
            <span className="text-[10px] ml-0.5 opacity-50">&#9662;</span>
          </a>
          <a
            href="#showcase"
            className="text-[13px] text-white/50 hover:text-white transition-colors"
          >
            Partnerships
          </a>
        </div>

        {/* Center logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/operonlogo.svg"
            alt="Operon"
            className="h-7 w-auto"
          />
          <span className="text-[17px] font-semibold tracking-tight">
            operon
          </span>
        </Link>

        {/* Right */}
        <div className="hidden md:flex items-center flex-1 justify-end">
          <a
            href="#contact"
            className="text-[13px] text-white/50 hover:text-white transition-colors"
          >
            Sign In
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto p-2"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4 flex flex-col gap-1">
          {[
            { label: "Solutions", href: "#features" },
            { label: "Company", href: "#platform" },
            { label: "Partnerships", href: "#showcase" },
            { label: "Sign In", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[15px] text-white/60 hover:text-white py-3 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
