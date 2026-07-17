"use client";

import * as React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { CASE_STUDIES } from "@/data/case-studies";

export function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Case studies
            </h2>
            <p className="max-w-xl text-base text-muted-foreground md:text-lg">
              A horizontal carousel of customer stories with full-bleed
              imagery, company logos, short summaries, and links to read the
              full write-up.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              variant="ghost"
              size="icon-lg"
              disabled={!api?.canScrollPrev()}
              onClick={() => api?.scrollPrev()}
            >
              <ArrowLeftIcon className="size-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              disabled={!api?.canScrollNext()}
              onClick={() => api?.scrollNext()}
            >
              <ArrowRightIcon className="size-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        <Carousel
          opts={{ align: "start" }}
          setApi={setApi}
          className="relative w-full"
        >
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_28%,transparent)_34%,color-mix(in_oklab,var(--background)_8%,transparent)_68%,transparent_100%)] transition-opacity duration-300 sm:w-28 md:w-36",
              api?.canScrollPrev() ? "opacity-100" : "opacity-0"
            )}
          />
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-[linear-gradient(270deg,var(--background)_0%,color-mix(in_oklab,var(--background)_52%,transparent)_34%,color-mix(in_oklab,var(--background)_14%,transparent)_68%,transparent_100%)] transition-opacity duration-300 sm:w-28 md:w-36",
              api?.canScrollNext() ? "opacity-100" : "opacity-0"
            )}
          />
          <CarouselContent className="-ml-5">
            {CASE_STUDIES.map((study) => (
              <CarouselItem
                key={study.title}
                className="basis-[85%] pl-5 md:basis-[45%]"
              >
                <a href="#" className="group block rounded-xl">
                  <div className="group relative aspect-4/3 w-full max-w-full overflow-hidden rounded-xl">
                    <img
                      alt={study.title}
                      src={study.image}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-linear-to-t from-black/80 via-black/28 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-3 flex h-9 items-center pt-3 text-sm font-semibold md:mb-4">
                        {study.company}
                      </div>
                      <div className="mb-2 line-clamp-1 text-xl font-semibold md:mb-3 md:text-2xl">
                        {study.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-sm text-pretty text-white/90 md:mb-10">
                        {study.description}
                      </div>
                      <div className="mt-auto flex items-center text-sm">
                        Read more
                        <ArrowRightIcon className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {CASE_STUDIES.map((study, index) => (
            <button
              key={study.title}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                index === selectedIndex ? "bg-primary" : "bg-primary/20"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
