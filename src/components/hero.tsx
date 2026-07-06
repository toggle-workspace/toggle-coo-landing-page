import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="dark relative h-[50svh] max-h-350 min-h-120 w-full bg-linear-to-br from-zinc-900 to-zinc-800 after:absolute after:inset-0 after:block after:size-full after:bg-zinc-950/50 after:content-[''] md:h-[60svh]">
      <div className="relative z-10 mx-auto flex size-full max-w-[125rem] px-4 py-9">
        <div className="flex w-full flex-col justify-between gap-10">
          <div className="mx-auto flex max-w-125 flex-1 flex-col items-center justify-center gap-7 sm:max-w-150 md:max-w-200">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              Transform Your Vision Into Digital Reality
            </h1>
            <p className="text-balance text-center text-lg text-foreground md:text-2xl">
              We craft exceptional digital solutions that help brands stand out
              and make a lasting impact in the digital landscape.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className={cn(
                  buttonVariants(),
                  "h-fit w-fit rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-nowrap",
                )}
              >
                Explore Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
