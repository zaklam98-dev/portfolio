type TagProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
};

export default function Tag({ children, variant = "solid" }: TagProps) {
  const background = variant === "solid" ? "bg-surface" : "bg-transparent";

  return (
    <span
      className={`inline-flex items-center rounded-md border border-border ${background} px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink`}
    >
      {children}
    </span>
  );
}
