const STEPS = [
  {
    number: "01.",
    title: "See the strategy before you commit",
    description:
      "We provide clear projections, customer value models, and custom go-to-market plans in your proposal, so you can make a confident decision based on data, not assumptions.",
  },
  {
    number: "02.",
    title: "Build stronger connections with your customers",
    description:
      "By understanding what your ideal customers want, need, and respond to, we create paid media, content, and branding strategies that engage them and drive conversions.",
  },
  {
    number: "03.",
    title: "Focus on the metrics that drive growth",
    description:
      "We track and optimize the metrics that drive real growth: revenue, pipeline, and retention, while improving the end-to-end customer experience.",
  },
];

export function ServiceApproach() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Why choose us
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Partner with us for a unique and differentiated approach
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col gap-3">
              <span className="text-4xl font-semibold tracking-tight text-muted-foreground/30">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
