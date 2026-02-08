"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
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
          transition={{ delay: 1, duration: 0.6 }}
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
          <Link href={HERO.cta1.href}>
            <Button variant="outline" size="lg">
              {HERO.cta1.label}
            </Button>
          </Link>
          <Link href={HERO.cta2.href}>
            <Button variant="primary" size="lg">
              {HERO.cta2.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
