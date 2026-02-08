"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HOW_WE_THINK } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { Brain, Target } from "lucide-react";

const icons = [Brain, Target];

export function HowWeThink() {
  return (
    <SectionWrapper id="how-we-think">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          {HOW_WE_THINK.title}
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed">
          {HOW_WE_THINK.subtitle}
        </p>
      </div>

      <FadeIn>
        <blockquote className="max-w-3xl mx-auto mb-16 border-l-4 border-primary pl-6 py-2">
          <p className="text-xl md:text-2xl font-poppins font-semibold text-white/90 italic">
            &ldquo;{HOW_WE_THINK.quote}&rdquo;
          </p>
        </blockquote>
      </FadeIn>

      <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {HOW_WE_THINK.sections.map((section, idx) => {
          const Icon = icons[idx];
          return (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className="gradient-card rounded-xl border border-white/[0.06] p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white">
                  {section.title}
                </h3>
              </div>
              <p className="text-white/50 mb-4">{section.description}</p>
              <ul className="space-y-2 mb-4">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-white/40 text-sm"
                  >
                    <span className="text-primary mt-1">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-white/70">
                {section.footer}
              </p>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </SectionWrapper>
  );
}
