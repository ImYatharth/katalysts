import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Values } from "@/components/sections/Values";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { PAGE_HEROES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "about | katalysts",
  description:
    "meet the founders building AI-native from the ground up. common questions answered.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={PAGE_HEROES.about.title}
        subtitle={PAGE_HEROES.about.subtitle}
      />
      <Values />
      <Team />
      <FAQ />
      <CTA />
    </>
  );
}
