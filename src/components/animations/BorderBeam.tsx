"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  size?: number;
}

export function BorderBeam({
  className,
  duration = 10,
  colorFrom = "#2563EB",
  colorTo = "#FFE501",
}: BorderBeamProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-[0px] rounded-[inherit]",
        className
      )}
      style={{
        padding: "1px",
        background: `conic-gradient(from var(--beam-angle, 0deg), transparent 20%, ${colorFrom} 40%, ${colorTo} 55%, transparent 75%)`,
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: `border-beam-rotate ${duration}s linear infinite`,
      }}
    />
  );
}
