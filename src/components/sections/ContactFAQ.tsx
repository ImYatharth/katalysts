"use client";

import { CONTACT_FAQ } from "@/lib/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

export function ContactFAQ() {
  return (
    <section className="gradient-subtle py-20 md:py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            before you reach out
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {CONTACT_FAQ.map((item, idx) => (
              <AccordionItem key={idx} value={`contact-faq-${idx}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
