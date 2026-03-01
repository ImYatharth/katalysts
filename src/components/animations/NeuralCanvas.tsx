"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(
        Math.floor((canvas.width * canvas.height) / 14000),
        90
      );
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const MAX_DIST = 150;
    const MOUSE_RADIUS = 220;
    let t = 0;

    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update positions
      particles.forEach((p) => {
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < MOUSE_RADIUS) {
          const force = ((MOUSE_RADIUS - md) / MOUSE_RADIUS) * 0.0008;
          p.vx += mdx * force;
          p.vy += mdy * force;
        }
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.7) {
          p.vx = (p.vx / speed) * 0.7;
          p.vy = (p.vy / speed) * 0.7;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; }
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.2;
            const pi_md = Math.sqrt(
              (particles[i].x - mouse.x) ** 2 + (particles[i].y - mouse.y) ** 2
            );
            const pj_md = Math.sqrt(
              (particles[j].x - mouse.x) ** 2 + (particles[j].y - mouse.y) ** 2
            );
            const nearMouse = pi_md < MOUSE_RADIUS || pj_md < MOUSE_RADIUS;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = nearMouse
              ? `rgba(255, 229, 1, ${alpha * 1.8})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = nearMouse ? 0.8 : 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        const pulse = Math.sin(t * 2 + p.pulsePhase) * 0.5 + 0.5;
        const r = p.radius + pulse * 1.5;
        const nearMouse =
          Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2) <
          MOUSE_RADIUS;

        // Glow halo
        const glowR = r * 6;
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0, p.x, p.y, glowR
        );
        gradient.addColorStop(
          0,
          nearMouse
            ? `rgba(255, 229, 1, ${0.35 + pulse * 0.2})`
            : `rgba(37, 99, 235, ${0.28 + pulse * 0.15})`
        );
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = nearMouse
          ? `rgba(255, 229, 1, ${0.7 + pulse * 0.3})`
          : `rgba(100, 150, 255, ${0.55 + pulse * 0.3})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}
