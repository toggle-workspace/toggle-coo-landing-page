import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const ICONS = [
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
              <Card className="h-full ring-0">
                <CardContent className="flex-1">
                  <img src={ICONS[i]} alt={item.title} className="w-14" />
                  <h3 className="mt-4 mb-1 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.shortDescription}
                  </p>
                </CardContent>
                <CardFooter className="bg-transparent! border-none rounded-none">
                  <Link
                    href={`/services/${item.slug}`}
                    className="underline underline-offset-3"
                  >
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
