"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import {
  Brain,
  Sparkles,
  Database,
  Cloud,
  GitBranch,
  BarChart3,
  Code,
  Shield,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Sparkles,
  Database,
  Cloud,
  GitBranch,
  BarChart3,
  Code,
  Shield,
};

export function TechStack() {
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
              toolkit
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              our toolkit
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {TECH_STACK.map((tech, i) => {
              const Icon = iconMap[tech.icon];
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card p-6 text-center hover:bg-muted/50 transition-colors"
                >
                  <div className="flex justify-center mb-3">
                    {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  <p className="text-sm text-foreground font-medium">
                    {tech.name}
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
