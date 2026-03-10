"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export function HowWeWork() {
  return (
    <section id="process" className="py-6 px-6">
      <div className="container mx-auto">
        <div className="section-container p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              how it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              how we work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  step 0{step.number}
                </div>
                <h4 className="font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                <ul className="space-y-1.5">
                  {step.details.map((detail, j) => (
                    <li
                      key={j}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-foreground/40 mt-0.5 font-mono">&bull;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                {step.deliverable && (
                  <p className="mt-3 text-xs text-muted-foreground/70 italic">
                    {step.deliverable}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
