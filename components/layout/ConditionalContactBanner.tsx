"use client";

import { usePathname } from "next/navigation";
import ContactBanner from "@/components/layout/ContactBanner";

export default function ConditionalContactBanner() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return <ContactBanner />;
}
