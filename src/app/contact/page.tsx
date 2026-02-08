import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { CTA } from "@/components/sections/CTA";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { PAGE_HEROES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "contact | katalysts",
  description:
    "book a 30-minute discovery call. let's solve your biggest business problem.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={PAGE_HEROES.contact.title}
        subtitle={PAGE_HEROES.contact.subtitle}
      />
      <ContactInfo />
      <CTA />
      <ContactFAQ />
    </>
  );
}
