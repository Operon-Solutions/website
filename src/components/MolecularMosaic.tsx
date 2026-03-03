"use client";

import { useEffect, useRef } from "react";

/* ─── Geometry ────────────────────────────────────────────────── */

interface Seg {
  ax: number; ay: number; bx: number; by: number;
  falloff: number;
  strength: number;
}

/** Point-to-segment distance */
function ptSeg(
  px: number, py: number,
  ax: number, ay: number,
  bx: number, by: number,
) {
  const dx = bx - ax, dy = by - ay;
  const len2 = dx * dx + dy * dy;
  if (len2 < 1e-6) return Math.hypot(px - ax, py - ay);
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
  return Math.hypot(px - ax - t * dx, py - ay - t * dy);
}

/* ─── Structure Generators ────────────────────────────────────── */

/** Benzene / hexagonal ring */
function hexRing(cx: number, cy: number, r: number, str = 0.9): Seg[] {
  const out: Seg[] = [];
  const v: [number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    v.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  // Outer hexagon bonds
  for (let i = 0; i < 6; i++) {
    const [ax, ay] = v[i], [bx, by] = v[(i + 1) % 6];
    out.push({ ax, ay, bx, by, falloff: r * 0.55, strength: str });
  }
  // Inner aromatic ring
  const ir = r * 0.5;
  for (let i = 0; i < 12; i++) {
    const a1 = (Math.PI * 2 * i) / 12;
    const a2 = (Math.PI * 2 * (i + 1)) / 12;
    out.push({
      ax: cx + Math.cos(a1) * ir, ay: cy + Math.sin(a1) * ir,
      bx: cx + Math.cos(a2) * ir, by: cy + Math.sin(a2) * ir,
      falloff: r * 0.35, strength: str * 0.5,
    });
  }
  return out;
}

/** Zigzag carbon chain */
function chain(
  sx: number, sy: number,
  n: number, angle: number, bond: number, str = 0.6,
): Seg[] {
  const out: Seg[] = [];
  let x = sx, y = sy;
  for (let i = 0; i < n; i++) {
    const a = i & 1 ? angle - 0.38 : angle + 0.38;
    const nx = x + Math.cos(a) * bond;
    const ny = y + Math.sin(a) * bond;
    out.push({ ax: x, ay: y, bx: nx, by: ny, falloff: bond * 0.65, strength: str });
    x = nx;
    y = ny;
  }
  return out;
}

/** Distillation column / vessel */
function vessel(cx: number, cy: number, w: number, h: number): Seg[] {
  const out: Seg[] = [];
  const l = cx - w / 2, r = cx + w / 2, t = cy - h / 2, b = cy + h / 2;
  const fo = w * 0.7, s = 0.45;
  out.push(
    { ax: l, ay: t, bx: l, by: b, falloff: fo, strength: s },
    { ax: r, ay: t, bx: r, by: b, falloff: fo, strength: s },
    { ax: l, ay: t, bx: r, by: t, falloff: fo, strength: s },
    { ax: l, ay: b, bx: r, by: b, falloff: fo, strength: s },
  );
  // Internal trays
  const trays = Math.floor(h / (w * 0.6));
  for (let i = 1; i < trays; i++) {
    const ty = t + (h * i) / trays;
    out.push({
      ax: l + w * 0.1, ay: ty, bx: r - w * 0.1, by: ty,
      falloff: w * 0.4, strength: 0.25,
    });
  }
  // Top dome
  for (let i = 0; i < 8; i++) {
    const a1 = Math.PI + (Math.PI * i) / 8;
    const a2 = Math.PI + (Math.PI * (i + 1)) / 8;
    const rd = w / 2;
    out.push({
      ax: cx + Math.cos(a1) * rd, ay: t + Math.sin(a1) * rd * 0.4,
      bx: cx + Math.cos(a2) * rd, by: t + Math.sin(a2) * rd * 0.4,
      falloff: w * 0.5, strength: 0.35,
    });
  }
  return out;
}

/** Circular reactor outline */
function reactor(cx: number, cy: number, rad: number, str = 0.4): Seg[] {
  const out: Seg[] = [];
  for (let i = 0; i < 16; i++) {
    const a1 = (Math.PI * 2 * i) / 16;
    const a2 = (Math.PI * 2 * (i + 1)) / 16;
    out.push({
      ax: cx + Math.cos(a1) * rad, ay: cy + Math.sin(a1) * rad,
      bx: cx + Math.cos(a2) * rad, by: cy + Math.sin(a2) * rad,
      falloff: rad * 0.45, strength: str,
    });
  }
  return out;
}

/** Polyline flow / pipe */
function flow(pts: [number, number][], fo: number, str: number): Seg[] {
  return pts.slice(0, -1).map(([ax, ay], i) => ({
    ax, ay, bx: pts[i + 1][0], by: pts[i + 1][1], falloff: fo, strength: str,
  }));
}

/* ─── Constants ───────────────────────────────────────────────── */

const SPACING = 8;
const MAX_R = 3.5;
const MIN_R = 0.15;
const BASE_DENSITY = 0.035;
const TWO_PI = Math.PI * 2;

// Pre-compute color LUT (avoids string alloc per dot per frame)
const ALPHA_LEVELS = 80;
const COLOR_LUT: string[] = Array.from({ length: ALPHA_LEVELS + 1 }, (_, i) => {
  const a = (i / ALPHA_LEVELS) * 0.8;
  return `rgba(216,254,145,${a.toFixed(3)})`;
});

/* ─── Component ───────────────────────────────────────────────── */

export default function MolecularMosaic({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const fieldRef = useRef(new Float32Array(0));
  const gridRef = useRef({ cols: 0, rows: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    /* ── Layout & scene build ─────────────────────────── */
    function layout() {
      const { width: w, height: h } = cvs!.getBoundingClientRect();
      cvs!.width = w * dpr;
      cvs!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sc = Math.min(w, h) / 900;
      const segs: Seg[] = [];

      // ── Benzene ring clusters ──
      // Right cluster (fused naphthalene-like)
      const rx = w * 0.74, ry = h * 0.36, rs = 42 * sc;
      segs.push(...hexRing(rx, ry, rs));
      segs.push(...hexRing(rx + rs * 1.73, ry, rs));
      segs.push(...hexRing(rx + rs * 0.86, ry - rs * 1.5, rs * 0.85));

      // Top-left pair
      segs.push(...hexRing(w * 0.18, h * 0.2, 28 * sc, 0.7));
      segs.push(...hexRing(w * 0.18 + 49 * sc, h * 0.2, 28 * sc, 0.7));

      // Bottom-center lone ring
      segs.push(...hexRing(w * 0.46, h * 0.8, 24 * sc, 0.55));

      // ── Carbon chains ──
      segs.push(...chain(w * 0.18 + 65 * sc, h * 0.2, 10, -0.15, 20 * sc, 0.45));
      segs.push(...chain(rx - rs, ry + rs * 0.5, 13, Math.PI + 0.1, 18 * sc, 0.4));
      segs.push(...chain(w * 0.46 + 24 * sc, h * 0.8, 7, -0.4, 16 * sc, 0.35));

      // ── Process equipment ──
      segs.push(...vessel(w * 0.07, h * 0.56, 34 * sc, 130 * sc));
      segs.push(...reactor(w * 0.91, h * 0.72, 28 * sc, 0.35));

      // ── Flow / pipe lines ──
      segs.push(...flow(
        [[w * 0.07, h * 0.48], [w * 0.11, h * 0.36], [w * 0.18, h * 0.26]],
        22 * sc, 0.3,
      ));
      segs.push(...flow(
        [[w * 0.46, h * 0.8], [w * 0.58, h * 0.72], [w * 0.68, h * 0.56], [rx, ry + rs]],
        20 * sc, 0.25,
      ));
      segs.push(...flow(
        [[rx + rs * 2.2, ry], [w * 0.87, h * 0.52], [w * 0.91, h * 0.64]],
        18 * sc, 0.25,
      ));
      segs.push(...flow(
        [[w * 0.07, h * 0.64], [w * 0.14, h * 0.74], [w * 0.28, h * 0.78], [w * 0.46, h * 0.8]],
        20 * sc, 0.2,
      ));

      // ── Compute density field ──
      const cols = Math.ceil(w / SPACING);
      const rows = Math.ceil(h / SPACING);
      const f = new Float32Array(cols * rows);
      const half = SPACING / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const px = c * SPACING + half;
          const py = r * SPACING + half;
          let d = BASE_DENSITY;
          for (let si = 0; si < segs.length; si++) {
            const seg = segs[si];
            const dist = ptSeg(px, py, seg.ax, seg.ay, seg.bx, seg.by);
            if (dist < seg.falloff) {
              const ratio = 1 - dist / seg.falloff;
              const val = ratio * ratio * seg.strength;
              if (val > d) d = val;
            }
          }
          f[r * cols + c] = d;
        }
      }

      fieldRef.current = f;
      gridRef.current = { cols, rows };
    }

    layout();
    window.addEventListener("resize", layout);

    /* ── Render loop ──────────────────────────────────── */
    function draw() {
      timeRef.current += 0.0005;
      const time = timeRef.current;
      const { width: w, height: h } = cvs!.getBoundingClientRect();
      ctx!.clearRect(0, 0, w, h);

      const { cols, rows } = gridRef.current;
      const f = fieldRef.current;
      const half = SPACING / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const base = f[r * cols + c];
          if (base < 0.012) continue;

          const px = c * SPACING + half;
          const py = r * SPACING + half;

          // Subtle breathing wave
          const wave = Math.sin(time * 2 + px * 0.007 + py * 0.005) * 0.1 + 1;
          const d = Math.min(base * wave, 1);

          const radius = MIN_R + (MAX_R - MIN_R) * d;
          const alphaIdx = Math.min(Math.round(d * ALPHA_LEVELS), ALPHA_LEVELS);

          ctx!.beginPath();
          ctx!.arc(px, py, radius, 0, TWO_PI);
          ctx!.fillStyle = COLOR_LUT[alphaIdx];
          ctx!.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", layout);
    };
  }, []);

  return <canvas ref={canvasRef} className={`block w-full h-full ${className}`} />;
}
