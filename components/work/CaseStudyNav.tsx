import Link from "next/link";
import Logo from "@/components/ui/Logo";

type NavItem = {
  label: string;
  href: string;
};

type CaseStudyNavProps = {
  items: NavItem[];
};

export default function CaseStudyNav({ items }: CaseStudyNavProps) {
  return (
    <div className="fixed inset-x-4 bottom-6 z-50 flex justify-center md:bottom-8">
      <nav className="no-scrollbar flex max-w-full snap-x snap-mandatory items-center gap-2 overflow-x-auto rounded-full border border-ink bg-ink p-2 shadow-lg">
        <span
          className="flex h-9 w-9 shrink-0 snap-start items-center justify-center rounded-full bg-white text-ink"
          aria-hidden="true"
        >
          <Logo className="h-5 w-5" />
        </span>
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="shrink-0 snap-start rounded-full border border-white/25 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-white/10"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
