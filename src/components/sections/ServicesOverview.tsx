"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICES_OVERVIEW } from "@/lib/constants";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import {
  Bot,
  BarChart3,
  MessageSquare,
  Workflow,
  Code,
  Zap,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  BarChart3,
  MessageSquare,
  Workflow,
  Code,
  Zap,
};

export function ServicesOverview() {
  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          what we build
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed">
          end-to-end AI solutions tailored to your business
        </p>
      </div>

      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SERVICES_OVERVIEW.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className="group gradient-card rounded-xl border border-white/[0.06] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:glow-blue"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/15 flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-blue/25">
                {Icon && <Icon className="w-6 h-6 text-brand-blue" />}
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </StaggerChildren>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-light transition-colors font-medium"
        >
          explore our services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
