import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale, getDictionary, locales } from "@/i18n";
import { DocRenderer } from "../../docs/[slug]/DocRenderer";
import DocCTA from "../../docs/[slug]/DocCTA";
import Footer from "@/components/Footer";
import LangSwitcher from "@/components/LangSwitcher";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return { title: "Not Found" };
  const dict = getDictionary(locale);
  const entry = dict.blog.entries?.[slug as keyof typeof dict.blog.entries];
  if (!entry) return { title: "Not Found" };
  return {
    title: `${entry.title} | Operon Blog`,
    description: entry.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const entry = dict.blog.entries?.[slug as keyof typeof dict.blog.entries];

  if (!entry) {
    notFound();
  }

  return (
    <div className="min-h-screen">
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
              href={`/${locale}/blog`}
              className="text-[12px] text-fg/30 hover:text-fg/60 transition-colors hidden sm:block"
            >
              {dict.blog.label}
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
              {dict.docs.home}
            </Link>
          </div>
        </div>
      </nav>

      <header className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in srgb, var(--c-accent) 4%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[720px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px flex-1 max-w-[40px] bg-accent/30" />
            <span className="text-[11px] text-accent/70 font-medium uppercase tracking-widest">
              {entry.tag}
            </span>
            <span className="text-[11px] text-fg/20">{entry.date}</span>
            <span className="text-[11px] text-fg/20">{entry.readTime}</span>
          </div>

          <h1 className="font-serif text-[clamp(2.4rem,6vw,3.8rem)] leading-[1.05] tracking-tight mb-6">
            {entry.title}
          </h1>

          <p className="text-[18px] text-fg/35 leading-[1.7] max-w-lg">
            {entry.summary}
          </p>

          <div className="mt-14 h-px bg-gradient-to-r from-fg/[0.08] via-fg/[0.04] to-transparent" />
        </div>
      </header>

      <article className="pb-24">
        <div className="max-w-[720px] mx-auto px-6">
          <DocRenderer content={entry.content} />
        </div>
      </article>

      <DocCTA
        locale={locale}
        readyToStart={dict.docs.readyToStart}
        readyDesc={dict.docs.readyDesc}
        bookDemo={dict.docs.bookDemo}
        exploreCaps={dict.docs.exploreCaps}
      />

      <Footer />
    </div>
  );
}
