"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "no AI expertise required",
    desc: "we handle the complexity. you stay focused on your business.",
  },
  {
    title: "production-ready from day one",
    desc: "no prototypes that never ship. every solution is built to deploy.",
  },
  {
    title: "works with your stack",
    desc: "we integrate into your existing infrastructure — nothing gets ripped out.",
  },
  {
    title: "transparent & measurable",
    desc: "clear KPIs, real-time dashboards, and full visibility into progress.",
  },
  {
    title: "scale without hiring",
    desc: "handle 10x the workload without adding headcount.",
  },
  {
    title: "fixed-price outcomes",
    desc: "we price by outcome, not hours. no surprises. no overruns.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-6 px-6">
      <div className="container mx-auto">
        <div className="section-container p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              why teams choose katalysts
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-border rounded-xl p-6"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {b.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
