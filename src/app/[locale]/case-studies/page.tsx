import Link from "next/link";
import { isValidLocale, getDictionary, locales } from "@/i18n";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return { title: "Not Found" };
  const dict = getDictionary(locale);
  return {
    title: `${dict.caseStudies.title} | Operon`,
    description: dict.caseStudies.subtitle,
  };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const d = dict.caseStudies;

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/60 backdrop-blur-2xl">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          <Link href={`/${locale}`} className="text-[14px] font-semibold tracking-tight text-fg/70 hover:text-accent transition-colors">
            operon
          </Link>
          <Link href={`/${locale}`} className="text-[12px] text-fg/30 hover:text-fg/60 transition-colors flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {dict.docs.home}
          </Link>
        </div>
      </nav>

      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--c-accent) 4%, transparent) 0%, transparent 70%)" }} />
        <div className="relative max-w-[720px] mx-auto px-6">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-sm bg-accent" />
            <span className="text-[13px] text-fg/40 font-medium">{d.label}</span>
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.08] tracking-tight mb-5">
            {d.title}
          </h1>
          <p className="text-[17px] text-fg/35 leading-[1.7] max-w-lg">{d.subtitle}</p>
          <div className="mt-12 h-px bg-gradient-to-r from-fg/[0.08] via-fg/[0.04] to-transparent" />
        </div>
      </header>

      <section className="pb-24">
        <div className="max-w-[720px] mx-auto px-6 space-y-8">
          {d.studies.map((study: { company: string; industry: string; result: string; quote: string; person: string; role: string }) => (
            <div key={study.company} className="border border-fg/[0.06] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] text-accent/60 bg-accent/5 px-2 py-0.5 rounded">{study.industry}</span>
              </div>
              <h3 className="text-[16px] font-medium mb-3">{study.company}</h3>
              <p className="text-[14px] text-fg/35 leading-[1.7] mb-4">{study.result}</p>
              <blockquote className="border-l-2 border-accent/20 pl-4">
                <p className="text-[13px] text-fg/30 italic leading-[1.7] mb-2">&ldquo;{study.quote}&rdquo;</p>
                <cite className="text-[12px] text-fg/20 not-italic">{study.person}, {study.role}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-fg/[0.06] py-20">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-tight mb-4">{d.cta}</h2>
          <div className="flex items-center justify-center gap-3">
            <Link href={`/${locale}#contact`} className="btn-primary"><span>{dict.hero.talkToUs}</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
