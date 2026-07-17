import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="w-full pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-20 overflow-hidden rounded-2xl border bg-[radial-gradient(ellipse_30%_60%_at_100%_80%,var(--color-gray-200),transparent)] pt-20 sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_80%_at_40%_120%,var(--color-gray-200),transparent)] lg:pl-20">
          <div className="mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
            <p className="mb-6 font-medium">Ready to get started?</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Call to Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Get access to our collection of pre-built blocks and components
              today.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Get Access
              </a>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Schedule a Demo
              </a>
            </div>
          </div>
          <div className="relative w-full pl-4 sm:pl-0">
            <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-stone-900/20 blur-2xl" />
            <img
              alt="Call to Action"
              className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl object-cover"
              src="/image-set/placeholder/images/1-16x9.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
