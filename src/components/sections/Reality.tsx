"use client";

import { motion } from "framer-motion";
import { REALITY } from "@/lib/constants";

export function Reality() {
  return (
    <section className="gradient-subtle py-20 md:py-28 lg:py-32 scroll-mt-20 border-y border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-12"
        >
          {REALITY.title}
        </motion.h2>

        <div className="space-y-6">
          {REALITY.lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * idx, duration: 0.5 }}
              className={
                idx === 0
                  ? "text-xl md:text-2xl font-poppins font-semibold text-primary"
                  : idx >= REALITY.lines.length - 2
                    ? "text-lg md:text-xl text-white/80 font-medium"
                    : "text-lg md:text-xl text-white/40"
              }
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
