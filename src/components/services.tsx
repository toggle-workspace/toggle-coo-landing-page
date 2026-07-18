import { ServiceCard } from "@/components/service-card";

export const ICONS = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-6.svg",
];

type PayloadService = {
  title: string;
  slug: string;
  shortDescription: string;
};

export function Services({
  payload = [],
  hideTitle = false,
}: {
  payload?: PayloadService[];
  hideTitle?: boolean;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {!hideTitle && (
          <div className="mb-16 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-x-12">
            <h2 className="w-full text-center text-4xl font-semibold tracking-tight text-foreground lg:w-1/2 lg:text-left md:text-5xl">
              <span className="text-muted-foreground">Built</span> with the
              latest technology stack
            </h2>
            <p className="w-full text-center text-base text-muted-foreground lg:w-1/2 lg:text-left md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae fuga error voluptates ut sint.
            </p>
          </div>
        )}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {payload.map((item, i) => (
            <li key={item.title} className="h-full">
              <ServiceCard
                icon={<img src={ICONS[i]} alt={item.title} className="w-14" />}
                title={item.title}
                description={item.shortDescription}
                href={`/services/${item.slug}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
