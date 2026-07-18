import { Card } from "@/components/ui/card";

type StatGridItem = { value: string; label: string };

export function StatGrid({
  title,
  description,
  items,
  columns = 2,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  items: StatGridItem[];
  columns?: 2 | 4;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-[#292b2c] md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-[#565b5d]">{description}</p>
          )}
        </div>
        <div
          className={
            columns === 4
              ? "grid grid-cols-2 gap-4 lg:grid-cols-4"
              : "grid grid-cols-1 gap-4 sm:grid-cols-2"
          }
        >
          {items.map((item) => (
            <Card key={item.label} variant="muted" className="gap-2 p-6">
              <span className="text-3xl font-semibold text-[#eb332d] md:text-4xl">
                {item.value}
              </span>
              <p className="text-sm text-[#565b5d]">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
