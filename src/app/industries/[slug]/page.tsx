import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

/* ── Industry Data ── */

type Solution = {
  title: string;
  slug: string;
  description: string;
  stat?: string;
  statLabel?: string;
};

type IndustryEntry = {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  stats: { value: string; label: string }[];
  introParagraphs: string[];
  solutions: Solution[];
  challenges: { title: string; description: string }[];
};

const industries: Record<string, IndustryEntry> = {
  "chemical-engineering": {
    slug: "chemical-engineering",
    name: "Chemical Engineering",
    headline: "AI built for the complexity of chemical plants",
    subheadline:
      "From P&ID recognition to autonomous compliance workflows, we deploy domain-specific AI that understands your processes, your equipment, and your engineering standards.",
    stats: [
      { value: "97.3%", label: "P&ID accuracy" },
      { value: "85%", label: "Time reduction" },
      { value: "<6 wk", label: "Deployment" },
      { value: "10,000+", label: "P&IDs processed" },
    ],
    introParagraphs: [
      "Chemical plants run on decades of institutional knowledge trapped in P&IDs, safety reports, and process simulations. When a senior engineer retires, that knowledge walks out the door. When a plant expansion requires reviewing thousands of legacy drawings, teams spend months on manual work that should take days.",
      "Operon changes this. We deploy on-site engineers who learn your specific processes, equipment naming conventions, and safety standards. They configure AI systems that understand your plant — not a generic chemical engineering textbook, but your actual operations.",
    ],
    solutions: [
      {
        title: "P&ID Recognition",
        slug: "pid-recognition",
        description:
          "Automatically identify, classify, and digitize every component on your P&ID sheets. Our models are trained on hundreds of thousands of real engineering drawings across ISA, ISO, and proprietary symbol sets.",
        stat: "97.3%",
        statLabel: "component detection accuracy",
      },
      {
        title: "Knowledge Graphs",
        slug: "knowledge-graphs",
        description:
          "Transform document silos into connected engineering intelligence. Every P&ID, safety report, maintenance log, and simulation result becomes a queryable node in your knowledge network.",
        stat: "384+",
        statLabel: "document signals analyzed",
      },
      {
        title: "UniSim Integration",
        slug: "unisim-integration",
        description:
          "Native fluency across UniSim, Aspen HYSYS, and 50+ engineering tools. Map detected P&ID equipment directly to simulation models for automated validation.",
        stat: "50+",
        statLabel: "tools supported",
      },
      {
        title: "Agentic Workflows",
        slug: "agentic-workflows",
        description:
          "Autonomous AI agents that handle document processing, HAZOP compliance checks, safety report generation, and cross-reference validation without human intervention.",
        stat: "24/7",
        statLabel: "autonomous operation",
      },
      {
        title: "Process Optimization",
        slug: "process-optimization",
        description:
          "React to billions of sensor events with ML-driven process improvements. Predict equipment stress, optimize throughput, and reduce energy consumption.",
        stat: "85%",
        statLabel: "time saved on reviews",
      },
      {
        title: "On-Site Engineers",
        slug: "on-site-engineers",
        description:
          "On-site experts who learn your workflows and deploy customized AI in under 6 weeks. They speak your language — process engineering, not just machine learning.",
        stat: "<6",
        statLabel: "weeks to production",
      },
    ],
    challenges: [
      {
        title: "Legacy documentation",
        description:
          "Thousands of P&IDs across decades of plant modifications, many still on paper or in obsolete CAD formats.",
      },
      {
        title: "Knowledge silos",
        description:
          "Critical process knowledge trapped in individual engineers' heads, unstructured documents, and disconnected databases.",
      },
      {
        title: "Compliance burden",
        description:
          "OSHA PSM, EPA RMP, and industry standards require constant documentation updates that consume engineering hours.",
      },
      {
        title: "Simulation drift",
        description:
          "Process simulation models fall out of sync with actual plant modifications, leading to unreliable predictions.",
      },
    ],
  },
};

function getIndustry(slug: string): IndustryEntry | undefined {
  return industries[slug];
}

function getAllIndustrySlugs(): string[] {
  return Object.keys(industries);
}

/* ── Page ── */

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Not Found" };
  return {
    title: `${ind.name} Solutions | Operon`,
    description: ind.subheadline,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  return (
    <div className="min-h-screen">
      {/* ── Nav ── */}
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
              All Solutions
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
              href="/"
              className="text-[11px] text-fg/30 hover:text-fg/50 transition-colors"
            >
              Home
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
                <Link href="/#contact" className="btn-primary">
                  <span>Talk to us</span>
                </Link>
                <a href="#solutions" className="btn-secondary">
                  See solutions
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
                  The Challenge
                </span>
              </div>
              <h2 className="font-serif text-[clamp(1.4rem,3vw,2rem)] leading-[1.15] tracking-tight">
                What {ind.name.toLowerCase()} teams face today
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
              Our Solutions
            </span>
          </div>
          <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.4rem)] leading-[1.15] tracking-tight mb-12 max-w-xl">
            Purpose-built AI for {ind.name.toLowerCase()}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ind.solutions.map((sol, i) => (
              <div
                key={sol.slug}
                className={`${i === 0 ? "md:col-span-2" : ""}`}
              >
                <Link
                  href={`/docs/${sol.slug}`}
                  className={`
                    group relative block rounded-2xl border border-fg/[0.06] overflow-hidden
                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:border-fg/[0.12] hover:-translate-y-1
                  `}
                  style={{
                    background:
                      "linear-gradient(170deg, color-mix(in srgb, var(--c-fg) 4%, transparent) 0%, color-mix(in srgb, var(--c-fg) 1%, transparent) 100%)",
                  }}
                >
                  {/* Top accent */}
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
                      Learn more
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
                {sol.slug === "pid-recognition" && (
                  <div className="mt-3 pl-7">
                    <a
                      href="https://operon-solutions-pid.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-4 !py-1.5 !text-[12px] !rounded-full inline-flex items-center gap-1.5"
                    >
                      <span>Try Beta</span>
                      <svg className="w-3 h-3 relative z-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
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
                Get Started
              </span>
            </div>
            <h2 className="font-serif text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.12] tracking-tight mb-5">
              Transform your {ind.name.toLowerCase()} operations
            </h2>
            <p className="text-[15px] text-fg/35 leading-[1.7] mb-8">
              Our on-site engineers can have you up and running within
              your first week. See results, not slide decks.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/#contact" className="btn-primary">
                <span>Book a demo</span>
              </Link>
              <Link href="/" className="btn-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
