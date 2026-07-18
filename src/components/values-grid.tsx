import { Eyebrow } from "@/components/eyebrow";

type Value = { label: string; icon: string };

const DEFAULT_VALUES: Value[] = [
  { label: "Client is our top priority", icon: "/about/value-priority.svg" },
  { label: "Strategy backed by creativity", icon: "/about/value-strategy.svg" },
  { label: "Clarity over complexity", icon: "/about/value-clarity.svg" },
  { label: "People first", icon: "/about/value-people.svg" },
  { label: "Embrace reality", icon: "/about/value-reality.svg" },
  { label: "Transparency is our default", icon: "/about/value-transparency.svg" },
  { label: "Diversity drives innovation", icon: "/about/value-diversity.svg" },
  { label: "Results over vanity", icon: "/about/value-results.svg" },
];

export function ValuesGrid({
  eyebrow = "Values",
  title = "Our standards and principles",
  description = "These standards define how we operate every day and the qualities we expect from our people and partners.",
  values = DEFAULT_VALUES,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  values?: Value[];
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-4xl font-semibold text-[#292b2c] md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-lg text-[#565b5d]">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.label}
              className="flex flex-col justify-between gap-6 bg-[#f2f3f3] p-6"
            >
              <img alt="" className="size-11" src={value.icon} />
              <p className="font-semibold text-[#292b2c]">{value.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
