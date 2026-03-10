"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useI18n } from "@/i18n/context";
import { id } from "@instantdb/react";
import db from "@/lib/instantdb";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/operon-ai/30min";

/* ── Types ── */
type ModalProps = {
  open: boolean;
  onClose: () => void;
};

/* ── Modal ── */
export default function ContactModal({ open, onClose }: ModalProps) {
  const { dict } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showCal, setShowCal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === backdropRef.current) onClose();
    },
    [onClose]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      db.transact(
        db.tx.contactSubmissions[id()].update({
          name,
          email,
          company,
          message,
          createdAt: Date.now(),
        })
      );
      setSubmitted(true);
    } catch {
      // Silently handle
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setSubmitted(false);
    setShowCal(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease] bg-black/60 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-[color-mix(in_srgb,var(--c-fg)_8%,transparent)] bg-[var(--c-bg)] shadow-2xl animate-[slideUp_0.3s_cubic-bezier(0.22,1,0.36,1)] max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-[color-mix(in_srgb,var(--c-fg)_30%,transparent)] hover:text-[color-mix(in_srgb,var(--c-fg)_60%,transparent)] hover:bg-[color-mix(in_srgb,var(--c-fg)_5%,transparent)] transition-all z-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-7 md:p-8">
          {submitted && !showCal ? (
            /* ── Success state ── */
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[color-mix(in_srgb,var(--c-accent)_12%,transparent)] flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[var(--c-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold mb-2">
                {dict.contact.successTitle}
              </h3>
              <p className="text-[14px] text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] mb-6 max-w-xs mx-auto leading-relaxed">
                {dict.contact.successDesc}
              </p>

              {/* Schedule a call option */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowCal(true)}
                  className="btn-primary"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {dict.contact.scheduleCall}
                  </span>
                </button>
                <button
                  onClick={handleClose}
                  className="block mx-auto text-[13px] text-[color-mix(in_srgb,var(--c-fg)_30%,transparent)] hover:text-[color-mix(in_srgb,var(--c-fg)_50%,transparent)] transition-colors"
                >
                  {dict.contact.close}
                </button>
              </div>
            </div>
          ) : showCal ? (
            /* ── Cal.com embed ── */
            <div>
              <div className="flex items-center gap-1 mb-5 border-b border-[color-mix(in_srgb,var(--c-fg)_6%,transparent)]">
                <button
                  type="button"
                  onClick={() => setShowCal(false)}
                  className="px-3 pb-2.5 text-[12px] font-medium border-b-2 border-transparent text-[color-mix(in_srgb,var(--c-fg)_30%,transparent)] hover:text-[color-mix(in_srgb,var(--c-fg)_50%,transparent)] transition-colors"
                >
                  {dict.contact.sendMessage}
                </button>
                <button
                  type="button"
                  className="px-3 pb-2.5 text-[12px] font-medium border-b-2 border-[var(--c-accent)] text-[var(--c-fg)] transition-colors"
                >
                  {dict.contact.scheduleCall}
                </button>
              </div>
              <div className="rounded-xl overflow-hidden border border-[color-mix(in_srgb,var(--c-fg)_8%,transparent)]">
                <iframe
                  src={`${CAL_LINK}?embed=true&theme=dark`}
                  className="w-full border-0"
                  style={{ height: 480 }}
                />
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <div className="mb-7">
                <h3 className="text-[22px] font-semibold tracking-tight mb-1.5">
                  {dict.contact.title}
                </h3>
                <p className="text-[14px] text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] leading-relaxed">
                  {dict.contact.subtitle}
                </p>
              </div>

              {/* Tab: Message / Schedule */}
              <div className="flex items-center gap-1 mb-5 border-b border-[color-mix(in_srgb,var(--c-fg)_6%,transparent)]">
                <button
                  type="button"
                  className="px-3 pb-2.5 text-[12px] font-medium border-b-2 border-[var(--c-accent)] text-[var(--c-fg)] transition-colors"
                >
                  {dict.contact.sendMessage}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCal(true)}
                  className="px-3 pb-2.5 text-[12px] font-medium border-b-2 border-transparent text-[color-mix(in_srgb,var(--c-fg)_30%,transparent)] hover:text-[color-mix(in_srgb,var(--c-fg)_50%,transparent)] transition-colors"
                >
                  {dict.contact.scheduleCall}
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] uppercase tracking-wider mb-1.5">
                      {dict.contact.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={dict.contact.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--c-fg)_3%,transparent)] text-[14px] text-[var(--c-fg)] placeholder:text-[color-mix(in_srgb,var(--c-fg)_20%,transparent)] outline-none focus:border-[var(--c-accent)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] uppercase tracking-wider mb-1.5">
                      {dict.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={dict.contact.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--c-fg)_3%,transparent)] text-[14px] text-[var(--c-fg)] placeholder:text-[color-mix(in_srgb,var(--c-fg)_20%,transparent)] outline-none focus:border-[var(--c-accent)] transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[11px] font-medium text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] uppercase tracking-wider mb-1.5">
                    {dict.contact.company}
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={dict.contact.companyPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--c-fg)_3%,transparent)] text-[14px] text-[var(--c-fg)] placeholder:text-[color-mix(in_srgb,var(--c-fg)_20%,transparent)] outline-none focus:border-[var(--c-accent)] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-medium text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] uppercase tracking-wider mb-1.5">
                    {dict.contact.yourMessage}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={dict.contact.messagePlaceholder}
                    rows={4}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--c-fg)_3%,transparent)] text-[14px] text-[var(--c-fg)] placeholder:text-[color-mix(in_srgb,var(--c-fg)_20%,transparent)] outline-none focus:border-[var(--c-accent)] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting || !name || !email || !message}
                  className="w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? "Sending…" : dict.contact.sendMessage}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
