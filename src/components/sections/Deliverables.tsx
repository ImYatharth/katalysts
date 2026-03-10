"use client";

import { motion } from "framer-motion";
import { DELIVERABLES } from "@/lib/constants";
import {
  FileText,
  Eye,
  GitBranch,
  BarChart3,
  Headphones,
  BookOpen,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Eye,
  GitBranch,
  BarChart3,
  Headphones,
  BookOpen,
};

export function Deliverables() {
  return (
    <section className="py-3 px-4 sm:py-6 sm:px-6">
      <div className="container mx-auto">
        <div className="section-container p-6 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              deliverables
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              what you get
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {DELIVERABLES.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card p-8 hover:bg-muted/50 transition-colors"
                >
                  {Icon && <Icon className="h-5 w-5 text-muted-foreground mb-4" />}
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
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
