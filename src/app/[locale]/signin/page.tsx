"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import db from "@/lib/instantdb";
import { useI18n } from "@/i18n/context";
import { useTheme } from "@/components/ThemeProvider";

export default function SignInPage() {
  const router = useRouter();
  const { dict } = useI18n();
  const { theme } = useTheme();
  const { isLoading, user, error } = db.useAuth();

  useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-[var(--c-accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (user) return null;

  const googleURL = db.auth.createAuthorizationURL({
    clientName: "google-web",
    redirectURL: typeof window !== "undefined" ? window.location.href : "",
  });

  const linkedinURL = db.auth.createAuthorizationURL({
    clientName: "linkedin-web",
    redirectURL: typeof window !== "undefined" ? window.location.href : "",
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-[400px]">
        {/* Brand */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <Image
              src={theme === "light" ? "/logos/operonsolutionspurple2.svg" : "/logos/OperonSolutions3.svg"}
              alt="Operon Solutions"
              width={180}
              height={28}
              priority
              className="h-7 w-auto"
            />
          </Link>
          <h1 className="text-[28px] font-semibold tracking-tight mb-2">
            {dict.signin.title}
          </h1>
          <p className="text-[14px] text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] leading-relaxed">
            {dict.signin.subtitle}
          </p>
        </div>

        {/* Auth card */}
        <div className="rounded-2xl border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[var(--c-bg)] p-7">
          {error && (
            <div className="mb-5 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-[13px] text-red-400">
              {error.message}
            </div>
          )}

          <div className="space-y-3">
            {/* Google */}
            <a href={googleURL} className="btn-secondary flex items-center justify-center gap-3 !py-3">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              {dict.signin.continueGoogle}
            </a>

            {/* LinkedIn */}
            <a href={linkedinURL} className="btn-secondary flex items-center justify-center gap-3 !py-3">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2" />
              </svg>
              {dict.signin.continueLinkedin}
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[color-mix(in_srgb,var(--c-fg)_8%,transparent)]" />
            <span className="text-[12px] text-[color-mix(in_srgb,var(--c-fg)_25%,transparent)]">{dict.signin.or}</span>
            <div className="flex-1 h-px bg-[color-mix(in_srgb,var(--c-fg)_8%,transparent)]" />
          </div>

          {/* Email magic code */}
          <EmailSignIn />
        </div>

        {/* Footer */}
        <p className="text-center text-[12px] text-[color-mix(in_srgb,var(--c-fg)_25%,transparent)] mt-6 leading-relaxed">
          {dict.signin.terms}{" "}
          <Link href="/terms" className="text-[var(--c-accent)] hover:underline">{dict.signin.termsLink}</Link>
          {" "}{dict.signin.and}{" "}
          <Link href="/privacy" className="text-[var(--c-accent)] hover:underline">{dict.signin.privacyLink}</Link>
          。
        </p>
      </div>
    </div>
  );
}

/* ── Email magic code sign-in ── */
function EmailSignIn() {
  const { dict } = useI18n();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await db.auth.sendMagicCode({ email });
      setSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : dict.signin.failedSend);
    } finally {
      setSending(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await db.auth.signInWithMagicCode({ email, code });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : dict.signin.invalidCode);
    }
  };

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--c-fg)_3%,transparent)] text-[14px] text-[var(--c-fg)] placeholder:text-[color-mix(in_srgb,var(--c-fg)_20%,transparent)] outline-none focus:border-[var(--c-accent)] transition-colors";

  if (sent) {
    return (
      <form onSubmit={handleVerify} className="space-y-3">
        <p className="text-[13px] text-[color-mix(in_srgb,var(--c-fg)_50%,transparent)]">
          {dict.signin.codeSentTo} <span className="text-[var(--c-fg)]">{email}</span>
        </p>
        <input
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={dict.signin.enterCode}
          className={inputClass}
        />
        {error && <p className="text-[12px] text-red-400">{error}</p>}
        <button type="submit" className="w-full btn-primary">
          <span>{dict.signin.verify}</span>
        </button>
        <button
          type="button"
          onClick={() => { setSent(false); setCode(""); setError(""); }}
          className="w-full text-[13px] text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] hover:text-[var(--c-fg)] transition-colors"
        >
          {dict.signin.differentEmail}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSendCode} className="space-y-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={dict.signin.emailPlaceholder}
        className={inputClass}
      />
      {error && <p className="text-[12px] text-red-400">{error}</p>}
      <button type="submit" disabled={sending} className="w-full btn-primary disabled:opacity-40">
        <span>{sending ? dict.signin.sending : dict.signin.continueEmail}</span>
      </button>
    </form>
  );
}
