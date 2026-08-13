import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CraftSection from "@/components/about/CraftSection";
import AboutMeSection from "@/components/about/AboutMeSection";

export const metadata: Metadata = {
  title: "About — An Ny Lam",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CraftSection />
      <AboutMeSection />
    </>
  );
}
