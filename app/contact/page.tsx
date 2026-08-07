import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact — An Ny Lam",
};

export default function ContactPage() {
  return <ContactHero />;
}
