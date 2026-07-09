"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PROJECTS = [
  {
    title: "Crystal Clear Tropical Waters",
    location: "Maldives",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
  },
  {
    title: "Aerial View of Rice Terraces",
    location: "Southeast Asia",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
  },
  {
    title: "Desert Canyon Formations",
    location: "Southwestern United States",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-3QqzCTIfUJI-unsplash.jpg",
  },
  {
    title: "Golden Terraced Fields",
    location: "Yunnan, China",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
  },
  {
    title: "Tidal Sand Patterns",
    location: "Iceland",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ines-alvarez-fdez-VjRc6HDXJ5s-unsplash.jpg",
  },
  {
    title: "Red Rock Canyon Labyrinth",
    location: "Utah, United States",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/john-murphey-ZWUWSEY6OGk-unsplash.jpg",
  },
];

export function Projects() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Our work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Results across six engagements
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Toggle has run campaigns across education, banking, insurance, real
            estate, fashion, and fintech. These are six of the results.
          </p>
        </div>
      </div>

      <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
        <CarouselContent className="pl-8 lg:pl-40">
          {PROJECTS.map((project) => (
            <CarouselItem key={project.title} className="basis-auto pl-0 pr-8">
              <div className="w-[80vw] sm:w-125 space-y-6">
                <div className="aspect-4/3 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl tracking-tight">{project.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                  <Button variant="secondary">View Project</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nav buttons positioned inside the image area */}
        <CarouselPrevious className="left-4 size-10 bottom-10 rounded-full border-gray-200 bg-white/90 hover:bg-white" />
        <CarouselNext className="right-4 size-10 bottom-10 rounded-full border-gray-200 bg-white/90 hover:bg-white" />
      </Carousel>
    </section>
  );
}
