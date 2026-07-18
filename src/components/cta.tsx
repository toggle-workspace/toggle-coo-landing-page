import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="w-full">
      <div className="relative flex items-center justify-center overflow-hidden py-20 md:py-28">
        <img
          alt="Abstract product imagery placeholder"
          className="absolute inset-0 h-full w-full object-cover"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-foreground/55 to-foreground/20"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-8 p-4 text-center">
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-balance text-primary-foreground md:text-5xl">
            Call to Action
          </h2>
          <p className="mx-auto max-w-5xl text-base font-medium text-primary-foreground md:text-lg">
            Try our service free for 7 days. No credit card required.
          </p>
          <div className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-3">
            <a
              href="/contact"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
