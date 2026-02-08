"use client";

import { INDUSTRIES } from "@/lib/constants";

export function LogoMarquee() {
  // Double the items for seamless infinite scroll
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="bg-[#050505] border-y border-white/[0.04] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white/30 text-xs uppercase tracking-widest text-center mb-4">
          industries we serve
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((industry, idx) => (
            <span
              key={idx}
              className="inline-flex items-center border border-white/10 rounded-full px-5 py-1.5 text-white/30 text-sm mx-2 shrink-0"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
