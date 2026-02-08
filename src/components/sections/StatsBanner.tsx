"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * value);

      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="gradient-subtle py-16 md:py-20 border-y border-white/[0.04]">
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
          >
            <div className="text-4xl md:text-5xl font-poppins font-bold text-primary">
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
            </div>
            <p className="text-sm text-white/40 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
