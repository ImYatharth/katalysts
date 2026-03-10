"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="py-3 px-4 sm:py-6 sm:px-6 pt-8">
      <div className="container mx-auto section-container p-6 sm:p-10 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 text-xs font-mono text-muted-foreground w-fit mb-6"
        >
          <span className="w-2 h-2 bg-foreground rounded-sm" />
          katalysts
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-foreground mb-4 sm:mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
