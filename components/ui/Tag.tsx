type TagProps = {
  children: React.ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
      {children}
    </span>
  );
}
