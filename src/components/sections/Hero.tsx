"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { NeuralCanvas } from "@/components/animations/NeuralCanvas";
import { FloatingCode } from "@/components/animations/FloatingCode";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Neural network canvas */}
      <NeuralCanvas />

      {/* Floating AI code fragments */}
      <FloatingCode />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated aurora orbs */}
      <div
        className="absolute top-1/4 -left-40 w-[650px] h-[650px] bg-brand-blue/10 rounded-full blur-[160px] animate-aurora"
        style={{ animationDuration: "22s" }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[650px] h-[650px] bg-brand-indigo/10 rounded-full blur-[160px] animate-aurora"
        style={{ animationDuration: "28s", animationDelay: "-10s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.025] rounded-full blur-[200px] animate-aurora"
        style={{ animationDuration: "35s", animationDelay: "-18s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* AI status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
          </span>
          <span className="text-xs font-mono text-brand-blue/80 tracking-wider">
            AI-NATIVE · ACTIVE
          </span>
        </motion.div>

        {/* Animated headline */}
        <AnimatedText
          text={HERO.headline[0]}
          as="h1"
          className="font-poppins font-extrabold text-white justify-center text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <AnimatedText
          text={HERO.headline[1]}
          as="h1"
          delay={0.5}
          className="font-poppins font-extrabold text-primary justify-center mt-2 text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-8 text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 text-base md:text-lg text-white/30 max-w-2xl mx-auto"
        >
          {HERO.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link href={HERO.cta1.href}>
              <Button variant="outline" size="lg">
                {HERO.cta1.label}
              </Button>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link href={HERO.cta2.href}>
              <Button variant="primary" size="lg" className="animate-pulse-glow">
                {HERO.cta2.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-white/20 tracking-widest uppercase">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
