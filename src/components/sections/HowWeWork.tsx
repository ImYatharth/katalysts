"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROCESS_STEPS } from "@/lib/constants";
import { Search, Target, Wrench, BarChart3 } from "lucide-react";

const stepIcons = [Search, Target, Wrench, BarChart3];

export function HowWeWork() {
  return (
    <SectionWrapper id="how-we-work" className="gradient-subtle border-y border-white/[0.04]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          how we work
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
          <div className="grid grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="relative text-center"
                >
                  <div className="w-32 h-32 mx-auto rounded-full border border-brand-blue/30 bg-[#0F0F18] flex flex-col items-center justify-center mb-6 relative z-10 glow-blue">
                    <span className="font-poppins font-bold text-primary text-sm mb-1">
                      0{step.number}
                    </span>
                    <Icon className="w-6 h-6 text-white/70" />
                  </div>

                  <h3 className="font-poppins font-semibold text-lg text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-1.5 text-left">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-xs text-white/30 flex items-start gap-2">
                        <span className="text-primary mt-0.5">&#8226;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {step.deliverable && (
                    <p className="mt-3 text-xs text-primary/60 italic">
                      {step.deliverable}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-8">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = stepIcons[idx];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full border border-brand-blue/30 bg-[#0F0F18] flex flex-col items-center justify-center">
                  <span className="font-poppins font-bold text-primary text-xs">
                    0{step.number}
                  </span>
                  <Icon className="w-4 h-4 text-white/70" />
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="w-px h-full bg-brand-blue/20 mx-auto mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-3">
                  {step.description}
                </p>
                <ul className="space-y-1.5">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-xs text-white/30 flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8226;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
