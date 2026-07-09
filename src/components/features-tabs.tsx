import { Tabs } from "@base-ui/react/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tabs = [
  {
    value: "efficiency",
    label: "Efficiency",
    eyebrow: "Efficiency",
    heading: "Streamline. Automate. Focus.",
    body: "Our AI-powered workspace eliminates repetitive tasks and centralizes your workflow. Spend time on what matters.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-hCb3lIB8L8E-unsplash.jpg",
    stats: [
      { value: "40%", label: "less time on admin tasks" },
      { value: "$720", label: "saved per employee monthly" },
    ],
  },
  {
    value: "collaboration",
    label: "Collaboration",
    eyebrow: "Collaboration",
    heading: "Work better, together.",
    body: "Real-time tools that keep your team aligned no matter where they are. Less friction, more output.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-hCb3lIB8L8E-unsplash.jpg",
    stats: [
      { value: "3×", label: "faster decision-making" },
      { value: "95%", label: "team satisfaction rate" },
    ],
  },
  {
    value: "insights",
    label: "Insights",
    eyebrow: "Insights",
    heading: "Data that drives decisions.",
    body: "Turn raw metrics into actionable intelligence. Know what's working before your competitors do.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-hCb3lIB8L8E-unsplash.jpg",
    stats: [
      { value: "2×", label: "revenue growth on average" },
      { value: "60%", label: "reduction in reporting time" },
    ],
  },
];

export function FeaturesTabs() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Tabs.Root defaultValue="efficiency">
          <div className="grid grid-cols-1 gap-8 rounded-4xl border border-border p-4 lg:grid-cols-2 lg:p-8 xl:gap-20">
            {/* Left: text content + tab list */}
            <div className="flex flex-col-reverse justify-between gap-8 lg:flex-col">
              {/* Tab panels — text */}
              <div>
                {tabs.map((tab) => (
                  <Tabs.Panel
                    key={tab.value}
                    value={tab.value}
                    className="flex animate-in flex-col gap-6 duration-300 fade-in outline-none"
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {tab.eyebrow}
                    </span>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{tab.heading}</h2>
                      <p className="text-muted-foreground">{tab.body}</p>
                    </div>
                  </Tabs.Panel>
                ))}
              </div>

              {/* Tab list */}
              <div className="overflow-hidden rounded-full">
                <Tabs.List className="relative bg-muted mx-auto h-12 overflow-y-hidden rounded-full inline-flex w-fit items-center justify-center p-0.75 lg:mx-0">
                  <Tabs.Indicator
                    className="absolute rounded-full bg-background shadow-sm transition-all duration-200 ease-in-out"
                    style={{
                      width: "var(--active-tab-width)",
                      height: "var(--active-tab-height)",
                      left: "var(--active-tab-left)",
                      top: "var(--active-tab-top)",
                    }}
                  />
                  {tabs.map((tab) => (
                    <Tabs.Tab
                      key={tab.value}
                      value={tab.value}
                      className={cn(
                        "relative z-10 inline-flex h-full flex-1 items-center justify-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200",
                        "text-foreground/60 hover:text-foreground",
                        "outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                        "data-selected:text-foreground",
                      )}
                    >
                      {tab.label}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </div>
            </div>

            {/* Right: image panels */}
            <div>
              {tabs.map((tab) => (
                <Tabs.Panel
                  key={tab.value}
                  value={tab.value}
                  className="animate-in duration-300 fade-in outline-none"
                >
                  <div className="relative">
                    <Image
                      src={tab.image}
                      alt={tab.label}
                      width={800}
                      height={540}
                      className="h-110 w-full rounded-3xl object-cover lg:h-135"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 flex flex-col justify-center gap-8 p-6 text-background">
                      {tab.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col gap-1.5">
                          <p className="text-4xl font-medium lg:text-5xl">
                            {stat.value}
                          </p>
                          <p className="font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tabs.Panel>
              ))}
            </div>
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
}
