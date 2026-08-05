type EyebrowProps = {
  children: React.ReactNode;
  variant?: "teal" | "muted";
};

export default function Eyebrow({ children, variant = "teal" }: EyebrowProps) {
  const styles =
    variant === "teal" ? "font-bold text-teal" : "font-semibold text-muted";

  return (
    <p className={`text-[13px] uppercase tracking-[0.18em] ${styles}`}>
      {children}
    </p>
  );
}
