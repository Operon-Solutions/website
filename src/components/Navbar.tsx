"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import { useI18n } from "@/i18n/context";
import type { Locale } from "@/i18n";
import db from "@/lib/instantdb";
import LangSwitcher from "./LangSwitcher";

/* ── Solutions Mega Dropdown (two-level hover) ── */

function SolutionsDropdown({ visible }: { visible: boolean }) {
  const { dict, locale } = useI18n();
  const industries = dict.navbar.industriesList;
  const [activeIndustry, setActiveIndustry] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleIndustryEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndustry(idx);
  };

  const handleIndustryLeave = () => {
    // Keep current selection visible on leave
  };

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => setActiveIndustry(0), 300);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <div
      className={`absolute top-full left-0 pt-3 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-bg/95 backdrop-blur-2xl border border-fg/[0.08] rounded-xl shadow-2xl shadow-bg/60 overflow-hidden min-w-[560px]">
        <div className="flex">
          {/* Left: Industry list */}
          <div className="w-[220px] border-r border-fg/[0.06] py-3">
            <div className="px-4 pb-2">
              <span className="text-[10px] font-medium tracking-widest text-fg/25 uppercase">
                {dict.navbar.industries}
              </span>
            </div>
            {industries.map((industry, idx) => (
              <Link
                key={industry.name}
                href={`/${locale}${industry.href}`}
                onMouseEnter={() => handleIndustryEnter(idx)}
                onMouseLeave={handleIndustryLeave}
                className={`w-full text-left px-4 py-2.5 flex items-center justify-between group transition-colors duration-150 ${
                  activeIndustry === idx
                    ? "bg-fg/[0.05] text-fg"
                    : "text-fg/50 hover:text-fg/70 hover:bg-fg/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
                      activeIndustry === idx ? "bg-accent" : "bg-fg/15"
                    }`}
                  />
                  <span className="text-[13px]">{industry.name}</span>
                </div>
                <svg
                  className={`w-3 h-3 transition-opacity duration-150 ${
                    activeIndustry === idx ? "opacity-50" : "opacity-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            ))}
          </div>

          {/* Right: Solutions for active industry */}
          <div className="flex-1 p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-[2px] bg-accent" />
              <span className="text-[11px] font-medium tracking-wide text-fg/40 uppercase">
                {industries[activeIndustry].name} {dict.navbar.solutionsFor}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {industries[activeIndustry].solutions.map((sol) => (
                <Link
                  key={sol.label}
                  href={`/${locale}${sol.href}`}
                  className="text-[13px] text-fg/60 hover:text-fg py-2 transition-all duration-200 hover:translate-x-0.5 transform"
                >
                  {sol.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Company Dropdown ── */

function CompanyDropdown({ visible }: { visible: boolean }) {
  const { dict } = useI18n();
  const companyLinks = dict.navbar.companyLinks;

  return (
    <div
      className={`absolute top-full left-0 pt-3 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-bg/95 backdrop-blur-2xl border border-fg/[0.08] rounded-xl shadow-2xl shadow-bg/60 p-5 min-w-[340px]">
        <div className="flex gap-10">
          {companyLinks.map((section) => (
            <div key={section.title} className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-[2px] bg-accent" />
                <span className="text-[11px] font-medium tracking-wide text-fg/40 uppercase">
                  {section.title}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[13px] text-fg/60 hover:text-fg py-1.5 transition-all duration-200 hover:translate-x-0.5 transform"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Chevron icon ── */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ── Navbar ── */

export default function Navbar() {
  const { theme } = useTheme();
  const { dict, locale } = useI18n();
  const { user } = db.useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const industries = dict.navbar.industriesList;
  const companyLinks = dict.navbar.companyLinks;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    if (userMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuOpen]);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  // Mobile accordion
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileIndustry, setMobileIndustry] = useState<number | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex items-center justify-between max-w-[1400px] mx-auto px-6 lg:px-10 py-4 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-fg/[0.06]"
            : ""
        }`}
      >
        {/* Left nav */}
        <div className="hidden md:flex items-center gap-6 flex-1">
          {/* Solutions */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-[13px] text-fg/50 hover:text-fg transition-colors flex items-center gap-1">
              {dict.navbar.solutions}
              <Chevron open={activeDropdown === "solutions"} />
            </button>
            <SolutionsDropdown visible={activeDropdown === "solutions"} />
          </div>

          {/* Company */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-[13px] text-fg/50 hover:text-fg transition-colors flex items-center gap-1">
              {dict.navbar.company}
              <Chevron open={activeDropdown === "company"} />
            </button>
            <CompanyDropdown visible={activeDropdown === "company"} />
          </div>

          <a
            href="#showcase"
            className="text-[13px] text-fg/50 hover:text-fg transition-colors"
          >
            {dict.navbar.partnerships}
          </a>
        </div>

        {/* Center logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image
            src={theme === "light" ? "/logos/operonsolutionspurple2.svg" : "/logos/OperonSolutions3.svg"}
            alt="Operon Solutions"
            width={200}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <LangSwitcher />
          <ThemeToggle />
          {user ? (
            <div ref={userMenuRef} className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 text-[13px] text-fg/50 hover:text-fg transition-colors cursor-pointer"
              >
                {user.imageURL ? (
                  <Image src={user.imageURL} alt="" width={24} height={24} className="w-6 h-6 rounded-full" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[var(--c-accent)] flex items-center justify-center text-[11px] font-semibold text-[var(--c-bg)]">
                    {(user.email?.[0] ?? "U").toUpperCase()}
                  </div>
                )}
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[var(--c-bg)] shadow-lg py-1 z-50">
                  <div className="px-3 py-2 border-b border-[color-mix(in_srgb,var(--c-fg)_8%,transparent)]">
                    <p className="text-[12px] text-fg/40 truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={() => { db.auth.signOut(); setUserMenuOpen(false); }}
                    className="w-full text-left px-3 py-2 text-[13px] text-fg/60 hover:text-fg hover:bg-[color-mix(in_srgb,var(--c-fg)_5%,transparent)] transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={`/${locale}/signin`}
              className="text-[13px] text-fg/50 hover:text-fg transition-colors"
            >
              {dict.navbar.signIn}
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto p-2"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block w-5 h-[1.5px] bg-fg transition-all duration-300 ${
                open ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-fg transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-fg transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "max-h-[800px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-bg/95 backdrop-blur-xl border-t border-fg/[0.06] px-6 py-4 flex flex-col gap-1">
          {/* Solutions accordion */}
          <button
            onClick={() => {
              setMobileExpanded(mobileExpanded === "solutions" ? null : "solutions");
              setMobileIndustry(null);
            }}
            className="text-[15px] text-fg/60 hover:text-fg py-3 transition-colors flex items-center justify-between w-full"
          >
            {dict.navbar.solutions}
            <Chevron open={mobileExpanded === "solutions"} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileExpanded === "solutions"
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-3 pb-2">
              {industries.map((industry, idx) => (
                <div key={industry.name}>
                  <button
                    onClick={() =>
                      setMobileIndustry(mobileIndustry === idx ? null : idx)
                    }
                    className={`w-full text-left py-2.5 flex items-center justify-between transition-colors ${
                      mobileIndustry === idx
                        ? "text-fg"
                        : "text-fg/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          mobileIndustry === idx ? "bg-accent" : "bg-fg/20"
                        }`}
                      />
                      <span className="text-[14px]">{industry.name}</span>
                    </div>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        mobileIndustry === idx ? "rotate-90" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileIndustry === idx
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-6 pb-2 flex flex-col">
                      {industry.solutions.map((sol) => (
                        <Link
                          key={sol.label}
                          href={`/${locale}${sol.href}`}
                          onClick={() => setOpen(false)}
                          className="text-[13px] text-fg/45 hover:text-fg py-1.5 transition-colors"
                        >
                          {sol.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company accordion */}
          <button
            onClick={() =>
              setMobileExpanded(mobileExpanded === "company" ? null : "company")
            }
            className="text-[15px] text-fg/60 hover:text-fg py-3 transition-colors flex items-center justify-between w-full"
          >
            {dict.navbar.company}
            <Chevron open={mobileExpanded === "company"} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileExpanded === "company"
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-3 pb-2 flex flex-col gap-3">
              {companyLinks.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-[2px] bg-accent" />
                    <span className="text-[11px] font-medium tracking-wide text-fg/40 uppercase">
                      {section.title}
                    </span>
                  </div>
                  {section.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-[13px] text-fg/45 hover:text-fg py-1.5 pl-4 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <a
            href="#showcase"
            onClick={() => setOpen(false)}
            className="text-[15px] text-fg/60 hover:text-fg py-3 transition-colors"
          >
            {dict.navbar.partnerships}
          </a>
          {user ? (
            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {user.imageURL ? (
                  <Image src={user.imageURL} alt="" width={24} height={24} className="w-6 h-6 rounded-full" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-[var(--c-accent)] flex items-center justify-center text-[11px] font-semibold text-[var(--c-bg)]">
                    {(user.email?.[0] ?? "U").toUpperCase()}
                  </div>
                )}
                <span className="text-[15px] text-fg/60 truncate max-w-[180px]">{user.email}</span>
              </div>
              <button
                onClick={() => { db.auth.signOut(); setOpen(false); }}
                className="text-[13px] text-fg/40 hover:text-fg transition-colors"
              >
                Sign out
              </button>
            </div>
          ) : (
            <Link
              href={`/${locale}/signin`}
              onClick={() => setOpen(false)}
              className="text-[15px] text-fg/60 hover:text-fg py-3 transition-colors"
            >
              {dict.navbar.signIn}
            </Link>
          )}
          <div className="flex items-center gap-3 py-3">
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
