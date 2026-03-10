"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HERO, CALENDLY_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative py-2 sm:py-6 sm:px-6">
      <div className="container mx-auto section-container overflow-hidden">
        <div className="p-5 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 text-xs font-mono text-muted-foreground w-fit mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-foreground rounded-sm" />
            AI-native services company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-foreground mb-1 sm:mb-2"
          >
            {HERO.headline[0]}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl sm:text-4xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-foreground mb-4 sm:mb-6"
          >
            {HERO.headline[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mb-3 sm:mb-4"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-muted-foreground/60 text-xs sm:text-sm leading-relaxed max-w-lg mb-6 sm:mb-8"
          >
            {HERO.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground font-mono text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              let&apos;s talk
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/process"
              className="flex items-center gap-2 border border-border text-foreground font-mono text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-muted transition-colors"
            >
              see how we work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
