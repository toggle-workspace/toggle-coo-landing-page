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
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img alt="" className="size-3.5" src="/marketing/icon-bullet.svg" />
              <span className="font-semibold text-[#292b2c]">Testimonials</span>
            </div>
            <h2 className="text-4xl font-semibold text-[#292b2c] md:text-5xl">
              Real feedback from businesses we&rsquo;ve helped grow
            </h2>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              variant="ghost"
              size="icon-lg"
              disabled={!api?.canScrollPrev()}
              onClick={() => api?.scrollPrev()}
            >
              <ArrowLeftIcon className="size-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              disabled={!api?.canScrollNext()}
              onClick={() => api?.scrollNext()}
            >
              <ArrowRightIcon className="size-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
        <Carousel opts={{ align: "start" }} setApi={setApi} className="w-full">
          <CarouselContent className="-ml-5">
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-[85%] pl-5 sm:basis-[55%] lg:basis-[35%]"
              >
                <div className="flex h-80 flex-col justify-between gap-4 bg-[#f2f3f3] p-8">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold text-[#292b2c]">
                      {testimonial.title}
                    </h3>
                    <p className="text-[#565b5d]">{testimonial.quote}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#292b2c]">{testimonial.name}</p>
                    <p className="text-sm text-[#889091]">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
