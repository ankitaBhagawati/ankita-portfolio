"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let W = 0,
      H = 0,
      raf: number;

    interface Particle {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      op: number;
      c: string;
    }
    let pts: Particle[] = [];

    const isMobile = () => window.innerWidth < 768;
    const MAX = () => (isMobile() ? 38 : 85);

    function build() {
      pts = [];
      const n = MAX();
      const colors = ["91,143,255", "167,139,250", "52,211,153"];
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.3,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          op: Math.random() * 0.45 + 0.1,
          c: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      build();
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      const dark = !document.body.classList.contains("light");

      // base gradient
      const bg = ctx.createRadialGradient(W * 0.3, H * 0.2, 0, W * 0.3, H * 0.2, W * 0.75);
      if (dark) {
        bg.addColorStop(0, "rgba(12,18,42,.97)");
        bg.addColorStop(1, "rgba(6,11,24,1)");
      } else {
        bg.addColorStop(0, "rgba(215,225,255,.97)");
        bg.addColorStop(1, "rgba(240,244,255,1)");
      }
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // blobs
      const blobs: [number, number, number, string, number][] = [
        [W * 0.15, H * 0.25, W * 0.4, "91,143,255", dark ? 0.045 : 0.07],
        [W * 0.82, H * 0.65, W * 0.38, "167,139,250", dark ? 0.035 : 0.055],
        [W * 0.5, H * 0.88, W * 0.28, "52,211,153", dark ? 0.025 : 0.04],
      ];
      blobs.forEach(([bx, by, br, bc, ba]) => {
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        g.addColorStop(0, `rgba(${bc},${ba})`);
        g.addColorStop(1, `rgba(${bc},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      // connections
      const dist = isMobile() ? 75 : 115;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            ctx.strokeStyle = `rgba(91,143,255,${(1 - d / dist) * 0.055})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // particles
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.op})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    }

    const onResize = () => {
      cancelAnimationFrame(raf);
      resize();
      frame();
    };

    window.addEventListener("resize", onResize);
    resize();
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}