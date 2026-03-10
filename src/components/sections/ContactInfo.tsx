"use client";

import { motion } from "framer-motion";
import { CONTACT_METHODS } from "@/lib/constants";
import { Calendar, Mail, Linkedin } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Mail,
  Linkedin,
};

export function ContactInfo() {
  return (
    <section className="py-3 px-4 sm:py-6 sm:px-6">
      <div className="container mx-auto">
        <div className="section-container p-6 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              get in touch
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              how to reach us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_METHODS.map((method, idx) => {
              const Icon = iconMap[method.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border border-border rounded-xl p-6"
                >
                  {Icon && <Icon className="h-5 w-5 text-muted-foreground mb-4" />}
                  <h3 className="font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                  >
                    {method.linkLabel}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
