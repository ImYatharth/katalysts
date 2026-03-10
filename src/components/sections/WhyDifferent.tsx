"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows: { label: string; traditional: string | boolean; aiNative: string | boolean }[] = [
  { label: "team size", traditional: "3+ people", aiNative: "1 person" },
  { label: "timeline", traditional: "months", aiNative: "weeks" },
  { label: "cost", traditional: "high (hourly)", aiNative: "fixed price" },
  { label: "AI-native", traditional: false, aiNative: true },
  { label: "testing", traditional: "manual", aiNative: "automated" },
  { label: "outcome tracking", traditional: false, aiNative: true },
  { label: "transparency", traditional: "periodic updates", aiNative: "real-time dashboard" },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-4 w-4 text-foreground" />
    ) : (
      <X className="h-4 w-4 text-muted-foreground" />
    );
  }
  return <>{value}</>;
}

export function WhyDifferent() {
  return (
    <section className="py-2 sm:py-6 sm:px-6">
      <div className="container mx-auto">
        <div className="section-container p-5 sm:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              comparison
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
              why we&apos;re different
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 sm:py-4 pr-3 sm:pr-8 font-mono text-xs text-muted-foreground font-normal uppercase tracking-wider" />
                  <th className="text-left py-3 sm:py-4 pr-3 sm:pr-8 font-mono text-xs text-muted-foreground font-normal uppercase tracking-wider">
                    traditional
                  </th>
                  <th className="text-left py-3 sm:py-4 font-mono text-xs text-foreground font-semibold uppercase tracking-wider">
                    katalysts
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-3 sm:py-4 pr-3 sm:pr-8 font-medium text-foreground whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="py-3 sm:py-4 pr-3 sm:pr-8 text-muted-foreground">
                      <CellValue value={row.traditional} />
                    </td>
                    <td className="py-3 sm:py-4 text-foreground font-medium">
                      <CellValue value={row.aiNative} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
