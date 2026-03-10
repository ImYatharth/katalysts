"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { CONTACT_FAQ } from "@/lib/constants";

export function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-6 px-6">
      <div className="container mx-auto">
        <div className="section-container p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              before you reach out
            </h2>
          </motion.div>

          <div className="divide-y divide-border">
            {CONTACT_FAQ.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between py-5 text-left group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-muted-foreground mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  {open === i ? (
                    <Minus className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                  ) : (
                    <Plus className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                  )}
                </button>
                {open === i && (
                  <div className="pb-5 pl-10 pr-8 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
