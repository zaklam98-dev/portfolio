type MetaRow = {
  label: string;
  value: string[];
};

type MetaTableProps = {
  rows: MetaRow[];
};

export default function MetaTable({ rows }: MetaTableProps) {
  return (
    <dl className="border-t border-border">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-3 gap-4 border-b border-border py-4"
        >
          <dt className="text-body">{row.label}</dt>
          <dd className="col-span-2 space-y-1 font-semibold text-ink">
            {row.value.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
