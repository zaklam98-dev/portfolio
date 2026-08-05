type EyebrowProps = {
  children: React.ReactNode;
};

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-teal">
      {children}
    </p>
  );
}
