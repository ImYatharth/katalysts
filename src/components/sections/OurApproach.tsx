"use client";

import { motion } from "framer-motion";
import { APPROACH_PILLARS } from "@/lib/constants";
import { DollarSign, Eye, BarChart3, Rocket } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Eye,
  BarChart3,
  Rocket,
};

export function OurApproach() {
  return (
    <section id="our-approach" className="py-2 sm:py-6 sm:px-6">
      <div className="container mx-auto">
        <div className="section-container p-5 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              approach
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              our approach
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
            {APPROACH_PILLARS.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border border-border rounded-xl p-4 sm:p-6"
                >
                  {Icon && <Icon className="h-5 w-5 text-muted-foreground mb-4" />}
                  <h3 className="font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
