import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ContactBanner from "@/components/layout/ContactBanner";
import "./globals.css";

const heading = Urbanist({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "An Ny Lam — Product Designer",
  description:
    "I create thoughtful digital experiences by transforming complexity into intuitive products that help people understand, navigate and make confident decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <ContactBanner />
        <SiteFooter />
      </body>
    </html>
  );
}
