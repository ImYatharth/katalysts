"use client";

import { TECH_STACK } from "@/lib/constants";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
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
    <section className="gradient-subtle py-20 md:py-28 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              our toolkit
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              we use the best AI tools and frameworks to deliver results
            </p>
          </div>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {TECH_STACK.map((tech, idx) => {
              const Icon = iconMap[tech.icon];
              return (
                <motion.div
                  key={idx}
                  variants={staggerItemVariants}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-5 text-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
                >
                  <div className="flex justify-center mb-3">
                    {Icon && (
                      <Icon className="w-7 h-7 text-brand-blue" />
                    )}
                  </div>
                  <p className="text-white/60 text-sm font-medium">
                    {tech.name}
                  </p>
                </motion.div>
              );
            })}
          </StaggerChildren>
        </motion.div>
      </div>
    </section>
  );
}
