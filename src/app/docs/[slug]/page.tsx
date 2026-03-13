import { notFound } from "next/navigation";
import Link from "next/link";
import { getDoc, getAllSlugs } from "@/content/docs";
import { DocRenderer } from "./DocRenderer";
import DocCTA from "./DocCTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return { title: "Not Found" };
  return {
    title: `${doc.title} | Operon Docs`,
    description: doc.subtitle,
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getDoc(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* ── Minimal top bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/60 backdrop-blur-2xl">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-[14px] font-semibold tracking-tight text-fg/70 hover:text-accent transition-colors"
          >
            operon
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/#platform"
              className="text-[12px] text-fg/30 hover:text-fg/60 transition-colors hidden sm:block"
            >
              Platform
            </Link>
            <Link
              href="/#features"
              className="text-[12px] text-fg/30 hover:text-fg/60 transition-colors hidden sm:block"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-[12px] text-fg/30 hover:text-fg/60 transition-colors flex items-center gap-1"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--c-accent) 4%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[720px] mx-auto px-6">
          {/* Industry pill */}
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 max-w-[40px] bg-accent/30" />
            <span className="text-[11px] text-accent/70 font-medium uppercase tracking-widest">
              {doc.industry}
            </span>
            <span className="text-[11px] text-fg/20">{doc.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(2.4rem,6vw,3.8rem)] leading-[1.05] tracking-tight mb-6">
            {doc.title}
          </h1>

          {/* Subtitle */}
          <p className="text-[18px] text-fg/35 leading-[1.7] max-w-lg">
            {doc.subtitle}
          </p>

          {/* Try Beta button for P&ID Recognition */}
          {slug === "pid-recognition" && (
            <div className="mt-10">
              <a
                href="https://operon-solutions-pid.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-5 !py-2 !text-[13px] !rounded-full inline-flex items-center gap-2"
              >
                <span>Try Beta</span>
                <svg className="w-3.5 h-3.5 relative z-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          )}

          {/* Thin divider */}
          <div className="mt-14 h-px bg-gradient-to-r from-fg/[0.08] via-fg/[0.04] to-transparent" />
        </div>
      </header>

      {/* ── Content ── */}
      <article className="pb-24">
        <div className="max-w-[720px] mx-auto px-6">
          <DocRenderer content={doc.content} />
        </div>
      </article>

      {/* ── CTA ── */}
      <DocCTA />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
