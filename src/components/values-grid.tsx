const VALUES = [
  { label: "Client is our top priority", icon: "/about/value-priority.svg" },
  { label: "Strategy backed by creativity", icon: "/about/value-strategy.svg" },
  { label: "Clarity over complexity", icon: "/about/value-clarity.svg" },
  { label: "People first", icon: "/about/value-people.svg" },
  { label: "Embrace reality", icon: "/about/value-reality.svg" },
  { label: "Transparency is our default", icon: "/about/value-transparency.svg" },
  { label: "Diversity drives innovation", icon: "/about/value-diversity.svg" },
  { label: "Results over vanity", icon: "/about/value-results.svg" },
];

export function ValuesGrid() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img alt="" className="size-3.5" src="/marketing/icon-bullet.svg" />
            <span className="font-semibold text-[#292b2c]">Values</span>
          </div>
          <h2 className="text-4xl font-semibold text-[#292b2c] md:text-5xl">
            Our standards and principles
          </h2>
          <p className="max-w-lg text-[#565b5d]">
            These standards define how we operate every day and the qualities
            we expect from our people and partners.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {VALUES.map((value) => (
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
