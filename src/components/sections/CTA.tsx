"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CTA_DATA } from "@/lib/constants";

export function CTA() {
  return (
    <section id="contact" className="py-6 px-6">
      <div className="container mx-auto">
        <div className="section-container texture-bg p-10 lg:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              {CTA_DATA.headline}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              {CTA_DATA.subtext}
            </p>
            <a
              href={CTA_DATA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              {CTA_DATA.buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
