"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CONTACT_METHODS } from "@/lib/constants";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { Calendar, Mail, Linkedin } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Mail,
  Linkedin,
};

export function ContactInfo() {
  return (
    <SectionWrapper>
      <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {CONTACT_METHODS.map((method, idx) => {
          const Icon = iconMap[method.icon];
          return (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className="gradient-card rounded-xl border border-white/[0.06] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:glow-blue flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-full bg-brand-blue/15 flex items-center justify-center mx-auto mb-5">
                {Icon && <Icon className="w-7 h-7 text-brand-blue" />}
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                {method.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {method.description}
              </p>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm text-brand-blue hover:text-brand-blue-light transition-colors font-medium mt-5"
              >
                {method.linkLabel}
              </a>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </SectionWrapper>
  );
}
