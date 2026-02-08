import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { HowWeThink } from "@/components/sections/HowWeThink";
import { TechStack } from "@/components/sections/TechStack";
import { WhatWeSolve } from "@/components/sections/WhatWeSolve";
import { CTA } from "@/components/sections/CTA";
import { PAGE_HEROES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "services | katalysts",
  description:
    "AI-native solutions for revenue acceleration, cost elimination, and critical initiative delivery.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title={PAGE_HEROES.services.title}
        subtitle={PAGE_HEROES.services.subtitle}
      />
      <HowWeThink />
      <TechStack />
      <WhatWeSolve />
      <CTA />
    </>
  );
}
