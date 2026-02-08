import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { OurApproach } from "@/components/sections/OurApproach";
import { Deliverables } from "@/components/sections/Deliverables";
import { CTA } from "@/components/sections/CTA";
import { PAGE_HEROES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "process | katalysts",
  description:
    "how we work: understand, align, build, deploy & track. fixed-price outcomes with complete transparency.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title={PAGE_HEROES.process.title}
        subtitle={PAGE_HEROES.process.subtitle}
      />
      <HowWeWork />
      <OurApproach />
      <Deliverables />
      <CTA />
    </>
  );
}
