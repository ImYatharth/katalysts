"use client";

import { DELIVERABLES } from "@/lib/constants";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
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
    <section className="gradient-subtle py-20 md:py-28 lg:py-32 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              what you get
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              every engagement includes
            </p>
          </div>

          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {DELIVERABLES.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={idx}
                  variants={staggerItemVariants}
                  className="text-center p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {Icon && (
                      <Icon className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <h3 className="font-poppins font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
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
