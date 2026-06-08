export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {sub && <p className="mt-2 max-w-prose text-sm text-muted">{sub}</p>}
    </div>
  );
}
