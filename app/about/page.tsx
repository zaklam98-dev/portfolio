import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ApproachSection from "@/components/about/ApproachSection";
import CraftSection from "@/components/about/CraftSection";
import AboutMeSection from "@/components/about/AboutMeSection";

export const metadata: Metadata = {
  title: "About — An Ny Lam",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ApproachSection />
      <CraftSection />
      <AboutMeSection />
    </>
  );
}
