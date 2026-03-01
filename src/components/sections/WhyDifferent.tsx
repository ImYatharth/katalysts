"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_DIFFERENT } from "@/lib/constants";
import { FadeIn } from "@/components/animations/FadeIn";
import { BorderBeam } from "@/components/animations/BorderBeam";
import { Check, X } from "lucide-react";

export function WhyDifferent() {
  return (
    <SectionWrapper id="why-different">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          {WHY_DIFFERENT.title}
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed">
          {WHY_DIFFERENT.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Traditional — static card */}
        <FadeIn direction="left">
          <div className="gradient-card rounded-xl border border-white/[0.06] p-6 md:p-8 h-full">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                {WHY_DIFFERENT.traditional.title}
              </span>
            </div>
            <p className="text-sm text-white/30 mb-4 font-medium">
              example: {WHY_DIFFERENT.traditional.example}
            </p>
            <ul className="space-y-3">
              {WHY_DIFFERENT.traditional.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/40">
                  <X className="h-5 w-5 text-red-500/60 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* AI-native — card with BorderBeam */}
        <FadeIn direction="right">
          <div className="relative gradient-card rounded-xl border border-primary/20 p-6 md:p-8 glow-primary h-full overflow-hidden">
            <BorderBeam colorFrom="#2563EB" colorTo="#FFE501" duration={8} />
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                {WHY_DIFFERENT.aiNative.title}
              </span>
            </div>
            <p className="text-sm text-white/30 mb-4 font-medium">
              example: {WHY_DIFFERENT.aiNative.example}
            </p>
            <ul className="space-y-3">
              {WHY_DIFFERENT.aiNative.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-12 text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-poppins font-bold text-lg text-primary">
              {WHY_DIFFERENT.result}
            </span>
          </motion.div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
