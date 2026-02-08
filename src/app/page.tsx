import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Reality } from "@/components/sections/Reality";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <WhyDifferent />
      <ServicesOverview />
      <Reality />
      <CTA />
    </>
  );
}
