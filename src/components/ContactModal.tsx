"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useI18n } from "@/i18n/context";

/* ── Types ── */
type ModalProps = {
  open: boolean;
  onClose: () => void;
};

type RecordingState = "idle" | "recording" | "recorded";

/* ── Voice Recorder ── */
function VoiceRecorder({
  onRecorded,
}: {
  onRecorded: (blob: Blob, duration: number) => void;
}) {
  const { dict } = useI18n();
  const [state, setState] = useState<RecordingState>("idle");
  const [elapsed, setElapsed] = useState(0);
  const [waveform, setWaveform] = useState<number[]>(Array(24).fill(4));
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animRef = useRef<number>(0);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRef.current = recorder;
      chunksRef.current = [];

      // Audio visualization
      const ctx = new AudioContext();
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyserRef.current = analyser;

      const updateWaveform = () => {
        if (analyserRef.current) {
          const data = new Uint8Array(analyserRef.current.frequencyBinCount);
          analyserRef.current.getByteFrequencyData(data);
          const bars = Array.from({ length: 24 }, (_, i) => {
            const idx = Math.floor((i / 24) * data.length);
            return Math.max(4, (data[idx] / 255) * 32);
          });
          setWaveform(bars);
        }
        if (mediaRef.current?.state === "recording") {
          animRef.current = requestAnimationFrame(updateWaveform);
        }
      };

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        ctx.close();
        cancelAnimationFrame(animRef.current);
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        onRecorded(blob, elapsed);
        setWaveform(Array(24).fill(4));
      };

      recorder.start(100);
      setState("recording");
      setElapsed(0);

      timerRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);

      updateWaveform();
    } catch {
      // Microphone permission denied or unavailable
    }
  };

  const stopRecording = () => {
    if (mediaRef.current && mediaRef.current.state === "recording") {
      mediaRef.current.stop();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setState("recorded");
  };

  const resetRecording = () => {
    setState("idle");
    setElapsed(0);
    setWaveform(Array(24).fill(4));
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="rounded-xl border border-[color-mix(in_srgb,var(--c-fg)_8%,transparent)] bg-[color-mix(in_srgb,var(--c-fg)_3%,transparent)] p-4">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-2 h-2 rounded-full transition-colors ${
            state === "recording" ? "bg-red-500 animate-pulse" : "bg-[color-mix(in_srgb,var(--c-fg)_15%,transparent)]"
          }`}
        />
        <span className="text-[12px] text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] font-medium">
          {state === "idle" && dict.contact.voiceMessage}
          {state === "recording" && `${dict.contact.recording} ${formatTime(elapsed)}`}
          {state === "recorded" && `${dict.contact.recorded} ${formatTime(elapsed)}`}
        </span>
      </div>

      {/* Waveform visualization */}
      <div className="flex items-center justify-center gap-[2px] h-8 mb-3">
        {waveform.map((h, i) => (
          <div
            key={i}
            className={`w-[3px] rounded-full transition-all duration-100 ${
              state === "recording"
                ? "bg-[var(--c-accent)]"
                : "bg-[color-mix(in_srgb,var(--c-fg)_10%,transparent)]"
            }`}
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        {state === "idle" && (
          <button
            type="button"
            onClick={startRecording}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--c-accent)] text-black text-[13px] font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
            {dict.contact.record}
          </button>
        )}
        {state === "recording" && (
          <button
            type="button"
            onClick={stopRecording}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/90 text-white text-[13px] font-medium hover:bg-red-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="6" width="12" height="12" rx="2" />
            </svg>
            {dict.contact.stop}
          </button>
        )}
        {state === "recorded" && (
          <button
            type="button"
            onClick={resetRecording}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] text-[13px] text-[color-mix(in_srgb,var(--c-fg)_50%,transparent)] hover:text-[color-mix(in_srgb,var(--c-fg)_70%,transparent)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
            </svg>
            {dict.contact.reRecord}
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Modal ── */
export default function ContactModal({ open, onClose }: ModalProps) {
  const { dict } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [voiceBlob, setVoiceBlob] = useState<Blob | null>(null);
  const [voiceDuration, setVoiceDuration] = useState(0);
  const [mode, setMode] = useState<"text" | "voice">("text");
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hook up to your backend / email service
    setSubmitted(true);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    setVoiceBlob(null);
    setVoiceDuration(0);
    setMode("text");
    setSubmitted(false);
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
      <div className="relative w-full max-w-lg rounded-2xl border border-[color-mix(in_srgb,var(--c-fg)_8%,transparent)] bg-[var(--c-bg)] shadow-2xl animate-[slideUp_0.3s_cubic-bezier(0.22,1,0.36,1)]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-[color-mix(in_srgb,var(--c-fg)_30%,transparent)] hover:text-[color-mix(in_srgb,var(--c-fg)_60%,transparent)] hover:bg-[color-mix(in_srgb,var(--c-fg)_5%,transparent)] transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-7 md:p-8">
          {submitted ? (
            /* ── Success state ── */
            <div className="text-center py-8">
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
              <button
                onClick={handleClose}
                className="text-[13px] text-[var(--c-accent)] hover:underline"
              >
                {dict.contact.close}
              </button>
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

                {/* Mode switcher */}
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    <label className="text-[11px] font-medium text-[color-mix(in_srgb,var(--c-fg)_40%,transparent)] uppercase tracking-wider">
                      {dict.contact.yourMessage}
                    </label>
                    <span className="text-[11px] text-[color-mix(in_srgb,var(--c-fg)_15%,transparent)] mx-1.5">
                      /
                    </span>
                    <button
                      type="button"
                      onClick={() => setMode(mode === "text" ? "voice" : "text")}
                      className="text-[11px] font-medium text-[var(--c-accent)] hover:underline uppercase tracking-wider"
                    >
                      {mode === "text" ? dict.contact.orRecordVoice : dict.contact.orTypeInstead}
                    </button>
                  </div>

                  {mode === "text" ? (
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={dict.contact.messagePlaceholder}
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[color-mix(in_srgb,var(--c-fg)_10%,transparent)] bg-[color-mix(in_srgb,var(--c-fg)_3%,transparent)] text-[14px] text-[var(--c-fg)] placeholder:text-[color-mix(in_srgb,var(--c-fg)_20%,transparent)] outline-none focus:border-[var(--c-accent)] transition-colors resize-none"
                    />
                  ) : (
                    <VoiceRecorder
                      onRecorded={(blob, dur) => {
                        setVoiceBlob(blob);
                        setVoiceDuration(dur);
                      }}
                    />
                  )}

                  {voiceBlob && mode === "voice" && (
                    <p className="mt-2 text-[12px] text-[var(--c-accent)]">
                      {dict.contact.voiceAttached} ({Math.floor(voiceDuration / 60)}:{String(voiceDuration % 60).padStart(2, "0")})
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!name || !email || (mode === "text" && !message && !voiceBlob) || (mode === "voice" && !voiceBlob)}
                  className="w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>{dict.contact.sendMessage}</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
