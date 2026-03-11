import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale, getDictionary, locales } from "@/i18n";
import Footer from "@/components/Footer";
import LangSwitcher from "@/components/LangSwitcher";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

function getAllIndustrySlugs(): string[] {
  const dict = getDictionary("en");
  return Object.keys(dict.industry.entries);
}

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return { title: "Not Found" };
  const dict = getDictionary(locale);
  const ind = dict.industry.entries[slug as keyof typeof dict.industry.entries];
  if (!ind) return { title: "Not Found" };
  return {
    title: `${ind.name} | Operon`,
    description: ind.subheadline,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const ind = dict.industry.entries[slug as keyof typeof dict.industry.entries];
  if (!ind) notFound();

  const t = dict.industry;

  return (
    <div className="min-h-screen">
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/60 backdrop-blur-2xl">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-[14px] font-semibold tracking-tight text-fg/70 hover:text-accent transition-colors"
          >
            operon
          </Link>
          <div className="flex items-center gap-6">
            <LangSwitcher />
            <Link
              href={`/${locale}#platform`}
              className="text-[12px] text-fg/30 hover:text-fg/60 transition-colors hidden sm:block"
            >
              {t.allSolutions}
            </Link>
            <Link
              href={`/${locale}`}
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
              {t.home}
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="relative pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in srgb, var(--c-accent) 5%, transparent) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href={`/${locale}`}
              className="text-[11px] text-fg/30 hover:text-fg/50 transition-colors"
            >
              {t.home}
            </Link>
            <span className="text-[11px] text-fg/15">/</span>
            <span className="text-[11px] text-accent/60 font-medium uppercase tracking-widest">
              {ind.name}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: headline */}
            <div>
              <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.08] tracking-tight mb-6">
                {ind.headline}
              </h1>
              <p className="text-[16px] text-fg/40 leading-[1.75] max-w-lg mb-8">
                {ind.subheadline}
              </p>
              <div className="flex items-center gap-3">
                <Link href={`/${locale}#contact`} className="btn-primary">
                  <span>{t.talkToUs}</span>
                </Link>
                <a href="#solutions" className="btn-secondary">
                  {t.seeSolutions}
                </a>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {ind.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-fg/[0.06] bg-fg/[0.02] p-5"
                >
                  <div className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-tight font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-fg/30 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 h-px bg-gradient-to-r from-fg/[0.08] via-fg/[0.04] to-transparent" />
        </div>
      </header>

      {/* ── The Challenge ── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-sm bg-fg/30" />
                <span className="text-[13px] text-fg/40 font-medium">
                  {t.theChallenge}
                </span>
              </div>
              <h2 className="font-serif text-[clamp(1.4rem,3vw,2rem)] leading-[1.15] tracking-tight">
                {t.challengeHeading.replace("{name}", ind.name.toLowerCase())}
              </h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ind.challenges.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-fg/[0.06] bg-fg/[0.02] p-6"
                >
                  <span className="text-[11px] font-mono text-fg/15 mb-3 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[15px] font-semibold mb-2">{c.title}</h3>
                  <p className="text-[13px] text-fg/35 leading-[1.65]">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16">
        <div className="max-w-[720px] mx-auto px-6">
          {ind.introParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-[16px] text-fg/45 leading-[1.8] mb-6"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="solutions" className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            <span className="text-[13px] text-fg/40 font-medium">
              {t.ourSolutions}
            </span>
          </div>
          <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.4rem)] leading-[1.15] tracking-tight mb-12 max-w-xl">
            {t.solutionsHeading.replace("{name}", ind.name.toLowerCase())}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ind.solutions.map((sol, i) => (
              <Link
                key={sol.slug}
                href={`/${locale}/docs/${sol.slug}`}
                className={`
                  group relative rounded-2xl border border-fg/[0.06] overflow-hidden
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:border-fg/[0.12] hover:-translate-y-1
                  ${i === 0 ? "md:col-span-2" : ""}
                `}
                style={{
                  background:
                    "linear-gradient(170deg, color-mix(in srgb, var(--c-fg) 4%, transparent) 0%, color-mix(in srgb, var(--c-fg) 1%, transparent) 100%)",
                }}
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-fg/[0.06] to-transparent" />

                <div
                  className={`p-7 ${i === 0 ? "md:p-9" : ""}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-[11px] font-mono text-fg/[0.12]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {sol.stat && (
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`font-bold tracking-tighter font-mono leading-none text-fg/80 ${i === 0 ? "text-[22px]" : "text-[18px]"}`}
                        >
                          {sol.stat}
                        </span>
                        <span className="text-[8px] text-fg/20 uppercase tracking-wider">
                          {sol.statLabel}
                        </span>
                      </div>
                    )}
                  </div>

                  <h3
                    className={`font-medium mb-3 group-hover:text-accent transition-colors duration-300 ${i === 0 ? "text-[20px]" : "text-[16px]"}`}
                  >
                    {sol.title}
                  </h3>
                  <p
                    className={`text-fg/35 leading-[1.7] ${i === 0 ? "text-[15px] max-w-xl" : "text-[13px]"}`}
                  >
                    {sol.description}
                  </p>

                  <span className="inline-flex items-center gap-1 mt-5 text-[12px] text-fg/15 group-hover:text-accent/50 transition-colors duration-300">
                    {t.learnMore}
                    <svg
                      className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-fg/[0.06] py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
              <span className="text-[13px] text-fg/40 font-medium">
                {t.getStarted}
              </span>
            </div>
            <h2 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.12] tracking-tight mb-5">
              {t.transformHeading.replace("{name}", ind.name.toLowerCase())}
            </h2>
            <p className="text-[15px] text-fg/35 leading-[1.7] mb-8">
              {t.transformDesc}
            </p>
            <div className="flex items-center gap-3">
              <Link href={`/${locale}#contact`} className="btn-primary">
                <span>{t.bookDemo}</span>
              </Link>
              <Link href={`/${locale}`} className="btn-secondary">
                {t.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
