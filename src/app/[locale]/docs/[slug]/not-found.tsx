"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";
import db from "@/lib/instantdb";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/operon/demo";

export default function DocNotFound() {
  const { dict, locale } = useI18n();
  const { user } = db.useAuth();
  const [voted, setVoted] = useState(false);
  const [showCal, setShowCal] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 text-[11px] text-accent/70 font-medium uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          {dict.docs.comingSoon}
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[clamp(1.8rem,4vw,2.4rem)] tracking-tight mb-3">
          {dict.docs.pageBeingWritten}
        </h1>
        <p className="text-[14px] text-fg/30 mb-10 leading-relaxed max-w-md mx-auto">
          {dict.docs.pageBeingWrittenDesc}
        </p>

        {/* Step 1: Vote */}
        {!voted && (
          <div className="mb-10">
            <p className="text-[13px] text-fg/40 font-medium mb-5">
              {dict.docs.interestQuestion}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={() => setVoted(true)} className="btn-primary">
                <span>{dict.docs.voteYes}</span>
              </button>
              <button onClick={() => setVoted(true)} className="btn-secondary">
                {dict.docs.voteMaybe}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: After vote — schedule or email */}
        {voted && !showCal && !submitted && (
          <div className="mb-10 space-y-6">
            {/* Thank you */}
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-[14px] font-medium text-accent">{dict.docs.thankYou}</span>
            </div>

            <p className="text-[14px] text-fg/35">{dict.docs.thankYouDesc}</p>

            {/* Schedule button */}
            <button
              onClick={() => setShowCal(true)}
              className="btn-primary"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {dict.docs.scheduleCall}
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 max-w-xs mx-auto">
              <span className="h-px flex-1 bg-fg/[0.06]" />
              <span className="text-[11px] text-fg/20 uppercase">{dict.signin.or}</span>
              <span className="h-px flex-1 bg-fg/[0.06]" />
            </div>

            {/* Email — only show if not signed in */}
            {!user ? (
              <div>
                <p className="text-[12px] text-fg/25 mb-3">{dict.docs.orReachOut}</p>
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="flex items-center gap-2 max-w-xs mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.contact.emailPlaceholder}
                    className="flex-1 h-9 px-3 rounded-lg bg-fg/[0.03] border border-fg/[0.08] text-[13px] text-fg placeholder:text-fg/15 focus:outline-none focus:border-accent/30 transition-colors"
                  />
                  <button type="submit" className="h-9 px-4 rounded-lg bg-fg/[0.06] text-[12px] text-fg/50 hover:text-fg/70 hover:bg-fg/[0.1] transition-colors font-medium">
                    {dict.docs.emailSubmit}
                  </button>
                </form>
              </div>
            ) : (
              <p className="text-[12px] text-fg/25">
                {dict.docs.orReachOut}
                <button onClick={() => setSubmitted(true)} className="text-accent/60 hover:text-accent ml-1 transition-colors">
                  {user.email}
                </button>
              </p>
            )}
          </div>
        )}

        {/* Step 3: Cal.com embed */}
        {showCal && (
          <div className="mb-10">
            <div className="border border-fg/[0.08] rounded-xl overflow-hidden bg-fg/[0.02]">
              <iframe
                src={`${CAL_LINK}?embed=true&theme=dark`}
                className="w-full border-0"
                style={{ height: 500 }}
              />
            </div>
          </div>
        )}

        {/* Step: Email submitted confirmation */}
        {submitted && !showCal && (
          <div className="mb-10">
            <div className="border border-accent/15 rounded-xl p-6 bg-accent/[0.02]">
              <svg className="w-6 h-6 text-accent mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p className="text-[14px] font-medium mb-1">{dict.docs.thankYou}</p>
              <p className="text-[13px] text-fg/30">{dict.docs.thankYouDesc}</p>
            </div>
          </div>
        )}

        {/* Back link */}
        <Link
          href={`/${locale}#platform`}
          className="inline-flex items-center gap-2 text-[13px] text-fg/20 hover:text-fg/40 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          {dict.docs.backToPlatform}
        </Link>
      </div>
    </div>
  );
}
