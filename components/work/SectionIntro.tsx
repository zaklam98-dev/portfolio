type SectionIntroProps = {
  eyebrow: string;
  description?: string;
};

export default function SectionIntro({ eyebrow, description }: SectionIntroProps) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
        {eyebrow}
      </p>
      {description && (
        <p className="mt-5 max-w-xl text-lg text-ink md:text-xl">{description}</p>
      )}
    </div>
  );
}
