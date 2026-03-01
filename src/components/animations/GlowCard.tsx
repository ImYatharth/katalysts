"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  variants?: Variants;
}

export function GlowCard({
  children,
  className,
  glowColor = "37, 99, 235",
  variants,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ x, y });
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setRotateX(((y - cy) / cy) * -6);
    setRotateY(((x - cx) / cx) * 6);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setRotateX(0);
        setRotateY(0);
      }}
      animate={{ rotateX, rotateY, scale: hovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={cn(
        "relative overflow-hidden gradient-card rounded-xl border p-6 md:p-8",
        "transition-colors duration-300",
        hovered ? "border-white/15" : "border-white/[0.06]",
        className
      )}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${cursor.x}px ${cursor.y}px, rgba(${glowColor}, 0.11), transparent 55%)`,
        }}
      />
      {/* Border highlight ring */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${cursor.x}px ${cursor.y}px, rgba(${glowColor}, 0.2), transparent 65%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}
