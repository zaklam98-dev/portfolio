import Image from "next/image";

type IconCardProps = {
  title: string;
  children: React.ReactNode;
  icon?: string;
  /** Pixel size for `icon`. Defaults to 24 (Woolworths' philosophy cards);
   * pass a larger value for icons that need to read clearly at a glance. */
  iconSize?: number;
  /** Appended to the root card's className — e.g. for a background colour
   * override. Omit to keep the default transparent card. */
  className?: string;
};

export default function IconCard({
  title,
  children,
  icon,
  iconSize = 24,
  className,
}: IconCardProps) {
  return (
    <div className={`rounded-xl2 border border-border p-8 ${className ?? ""}`}>
      <div className="flex items-center gap-3">
        {icon && (
          <Image src={icon} alt="" width={iconSize} height={iconSize} aria-hidden="true" />
        )}
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>
      <div className="mt-3 space-y-3 text-body">{children}</div>
    </div>
  );
}
