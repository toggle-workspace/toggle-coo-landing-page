type MarkerListItem = {
  marker: React.ReactNode;
  title: string;
  description: string;
};

export function MarkerList({
  title,
  description,
  items,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  items: MarkerListItem[];
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
        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {item.marker}
                <h3 className="font-semibold text-[#292b2c]">{item.title}</h3>
              </div>
              <p className="pl-[calc(1.5rem+0.75rem)] text-[#565b5d]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
