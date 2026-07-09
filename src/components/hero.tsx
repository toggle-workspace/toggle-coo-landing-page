import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { Spotify } from "@/components/ui/svgs/spotify";
import { VercelFull } from "@/components/ui/svgs/vercel";
import { SupabaseFull } from "@/components/ui/svgs/supabase";
import { Hulu } from "@/components/ui/svgs/hulu";
import { Bolt } from "@/components/ui/svgs/bolt";
import { FirebaseFull } from "@/components/ui/svgs/firebase";
import { Beacon } from "@/components/ui/svgs/beacon";
import { Claude } from "@/components/ui/svgs/claude";
import { Cisco } from "@/components/ui/svgs/cisco";
import { Figma } from "@/components/ui/svgs/figma";

export function Hero() {
  return (
    <section className="dark relative h-[70svh] max-h-450 min-h-140 w-full bg-linear-to-br from-zinc-900 to-zinc-800 after:absolute after:inset-0 after:block after:size-full after:bg-zinc-950/50 after:content-[''] md:h-[80svh]">
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
                  "h-fit w-fit rounded-lg px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-nowrap",
                )}
              >
                Explore Projects
              </a>
            </div>
          </div>

          <div className="**:fill-foreground relative overflow-hidden py-4">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <Bolt height={22} width={56} />
              <VercelFull height={22} width={84} />
              <SupabaseFull className="h-6" />
              <Hulu height={18} width={56} />
              <Spotify height={24} width={80} />
              <FirebaseFull height={24} width={80} />
              <Beacon height={24} width={80} />
              <Claude height={26} width={90} />
              <Figma height={24} width={24} />
              <Cisco height={30} width={60} />
            </InfiniteSlider>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
