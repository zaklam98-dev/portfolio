import Image from "next/image";

type IconCardProps = {
  title: string;
  children: React.ReactNode;
  icon?: string;
};

export default function IconCard({ title, children, icon }: IconCardProps) {
  return (
    <div className="rounded-xl2 border border-border p-8">
      <div className="flex items-center gap-3">
        {icon && (
          <Image src={icon} alt="" width={24} height={24} aria-hidden="true" />
        )}
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>
      <div className="mt-3 space-y-3 text-body">{children}</div>
    </div>
  );
}
