import { Card, CardContent } from "@/components/ui/card";

const STEPS = [
  {
    number: "01",
    title: "See the strategy before you commit",
    description:
      "We provide clear projections, customer value models, and custom go-to-market plans in your proposal, so you can make a confident decision based on data, not assumptions.",
  },
  {
    number: "02",
    title: "Build stronger connections with your customers",
    description:
      "By understanding what your ideal customers want, need, and respond to, we create paid media, content, and branding strategies that engage them and drive conversions.",
  },
  {
    number: "03",
    title: "Focus on the metrics that drive growth",
    description:
      "We track and optimize the metrics that drive real growth: revenue, pipeline, and retention, while improving the end-to-end customer experience.",
  },
];

export function ServiceApproach() {
  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Why choose us
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Partner with us for a unique and differentiated approach
          </h2>
        </div>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <Card key={step.number} className="h-full ring-0">
              <CardContent className="flex h-full flex-col">
                <h1 className="mb-16 bg-linear-to-r from-foreground/40 to-transparent bg-clip-text text-9xl text-transparent">
                  {step.number}
                </h1>
                <p className="mb-2 text-base font-semibold">{step.title}</p>
                <p className="text-base text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
