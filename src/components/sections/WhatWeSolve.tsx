"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";

export function WhatWeSolve() {
  return (
    <section id="what-we-solve" className="py-3 px-4 sm:py-6 sm:px-6">
      <div className="container mx-auto">
        <div className="section-container p-6 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              case studies
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              what we solve
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-border rounded-xl p-6 flex flex-col"
              >
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                  {study.category}
                </p>
                <h3 className="font-semibold text-foreground mb-4">
                  {study.title}
                </h3>

                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                      problem
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                      solution
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                    impact
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {study.impacts.map((impact, i) => (
                      <div key={i}>
                        <p className="font-semibold text-lg text-foreground">
                          {impact.metric}
                        </p>
                        <p className="text-xs text-muted-foreground leading-tight">
                          {impact.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
