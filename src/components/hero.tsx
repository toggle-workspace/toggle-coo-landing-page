import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-6 px-6 pb-16 pt-16 text-center lg:px-8 lg:pb-24 lg:pt-24">
        <p className="text-[#292b2c]">Strategy. Creativity. Results.</p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#292b2c] md:text-6xl lg:text-7xl">
          Performance Marketing Made Clear &amp; Effective
        </h1>
        <p className="max-w-2xl text-lg text-[#565b5d]">
          From brand positioning to digital campaigns, we deliver practical
          marketing solutions designed to increase visibility, engagement, and
          long-term growth.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/case-studies"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-fit rounded-full border-[#292b2c] px-8 py-5 text-base font-semibold text-[#292b2c] hover:bg-[#292b2c] hover:text-white",
            )}
          >
            Client Examples
          </a>
          <a
            href="/contact"
            className={cn(
              buttonVariants(),
              "h-fit rounded-full bg-[#eb332d] px-8 py-5 text-base font-semibold hover:bg-[#eb332d]/90",
            )}
          >
            Book Into Call
          </a>
        </div>
      </div>
    </section>
  );
}
