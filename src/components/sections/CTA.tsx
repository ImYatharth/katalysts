"use client";

import { motion } from "framer-motion";
import { CTA_DATA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { BorderBeam } from "@/components/animations/BorderBeam";

export function CTA() {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Animated aurora blobs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/[0.07] rounded-full blur-[150px] animate-aurora"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] animate-aurora"
        style={{ animationDuration: "15s", animationDelay: "-7s" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
        >
          {CTA_DATA.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/40 mb-10"
        >
          {CTA_DATA.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center"
        >
          <MagneticButton strength={0.5}>
            <div className="relative">
              <Button
                href={CTA_DATA.href}
                external
                variant="primary"
                size="lg"
                className="animate-pulse-glow relative overflow-hidden"
              >
                {CTA_DATA.buttonLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </MagneticButton>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 relative rounded-xl border border-white/[0.06] gradient-card p-6 overflow-hidden"
        >
          <BorderBeam colorFrom="#2563EB" colorTo="#FFE501" duration={12} />
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "5×", label: "faster delivery" },
              { value: "50%", label: "lower cost" },
              { value: "100%", label: "AI-native" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-poppins font-bold text-2xl md:text-3xl text-primary">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-1 font-mono tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
