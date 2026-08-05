import Eyebrow from "@/components/ui/Eyebrow";

type PhaseSectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PhaseSectionHeader({
  eyebrow,
  title,
  subtitle,
}: PhaseSectionHeaderProps) {
  return (
    <div>
      <Eyebrow variant="teal">{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-heading text-4xl font-extrabold text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg font-semibold text-ink md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
