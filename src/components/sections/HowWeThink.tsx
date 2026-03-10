"use client";

import { motion } from "framer-motion";
import { HOW_WE_THINK } from "@/lib/constants";

export function HowWeThink() {
  return (
    <section id="how-we-think" className="py-2 sm:py-6 sm:px-6">
      <div className="container mx-auto">
        <div className="section-container p-5 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              philosophy
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6">
              {HOW_WE_THINK.title}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              {HOW_WE_THINK.subtitle}
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-border pl-6 py-2 mb-12"
          >
            <p className="text-lg font-medium text-foreground/80 italic">
              &ldquo;{HOW_WE_THINK.quote}&rdquo;
            </p>
          </motion.blockquote>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
            {HOW_WE_THINK.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-border rounded-xl p-4 sm:p-6"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {section.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-foreground/40 mt-0.5 font-mono text-xs">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-foreground/70">
                  {section.footer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
