import Link from "next/link";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "teal";
  className?: string;
};

export default function PillLink({
  href,
  children,
  variant = "dark",
  className = "",
}: PillLinkProps) {
  const variants = {
    dark: "bg-ink text-white hover:bg-black rounded-lg px-6 py-3",
    teal: "bg-teal text-white hover:bg-teal/90 rounded-full px-6 py-3",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
