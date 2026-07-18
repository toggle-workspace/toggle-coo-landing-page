import { ActivityIcon, DollarSignIcon, ListChecksIcon, MousePointerClickIcon } from "lucide-react";
import { ServiceCard } from "@/components/service-card";

const DELIVERABLES = [
  {
    icon: ListChecksIcon,
    title: "Conversions",
    description:
      "We turn initial interest into meaningful action by guiding users from first click to final decision. Every element is designed to reduce friction and increase the likelihood of conversion.",
  },
  {
    icon: MousePointerClickIcon,
    title: "Engagement",
    description:
      "We create content that captures attention and encourages interaction, helping your brand stay memorable while building genuine connections with your audience.",
  },
  {
    icon: DollarSignIcon,
    title: "Return on investment",
    description:
      "We focus on maximizing the value of your marketing spend by optimizing performance across channels, ensuring every dollar contributes to measurable growth.",
  },
  {
    icon: ActivityIcon,
    title: "Real-time optimization",
    description:
      "We provide clear, easy-to-understand reporting and continuously adjust strategies based on performance, so your campaigns improve and evolve as data comes in.",
  },
];

export function ServiceDeliver() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            What we deliver
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            From interest to action, we turn your efforts into measurable
            growth
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DELIVERABLES.map((item) => (
            <li key={item.title} className="h-full">
              <ServiceCard
                icon={<item.icon className="size-6 text-muted-foreground" />}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
