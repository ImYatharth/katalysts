"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CASE_STUDIES } from "@/lib/constants";
import { StaggerChildren, staggerItemVariants } from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Zap } from "lucide-react";

const categoryIcons = [TrendingUp, DollarSign, Zap];
const categoryColors = [
  "bg-brand-blue/20 text-brand-blue",
  "bg-success/20 text-success",
  "bg-primary/20 text-primary-dark",
];

export function WhatWeSolve() {
  return (
    <SectionWrapper id="what-we-solve">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          what we solve
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed">
          types of problems we solve
        </p>
      </div>

      <StaggerChildren className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {CASE_STUDIES.map((study, idx) => {
          const Icon = categoryIcons[idx];
          return (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className="gradient-card rounded-xl border border-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:glow-blue flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${categoryColors[idx]}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  {study.category}
                </span>
              </div>

              <h3 className="font-poppins font-semibold text-lg text-white mb-4">
                {study.title}
              </h3>

              <div className="space-y-3 mb-6 flex-grow">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-1">
                    problem
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-1">
                    solution
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3">
                  impact
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {study.impacts.map((impact, i) => (
                    <div key={i}>
                      <p className="font-poppins font-bold text-lg text-success">
                        {impact.metric}
                      </p>
                      <p className="text-xs text-white/30 leading-tight">
                        {impact.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </SectionWrapper>
  );
}
