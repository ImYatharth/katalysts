"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { APPROACH_PILLARS } from "@/lib/constants";
import { StaggerChildren, staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { DollarSign, Eye, BarChart3, Rocket } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Eye,
  BarChart3,
  Rocket,
};

export function OurApproach() {
  return (
    <SectionWrapper id="our-approach">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          our approach
        </h2>
      </div>

      <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {APPROACH_PILLARS.map((pillar, idx) => {
          const Icon = iconMap[pillar.icon];
          return (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className="group gradient-card rounded-xl border border-white/[0.06] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:glow-blue"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-blue/25">
                {Icon && <Icon className="w-6 h-6 text-brand-blue" />}
              </div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </SectionWrapper>
  );
}
