import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function ServiceWhy({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
            <img
              alt=""
              className="absolute h-full w-full object-cover"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-hCb3lIB8L8E-unsplash.jpg"
            />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6">
              <p className="text-lg font-semibold text-primary-foreground md:text-xl">
                Ready to scale your growth? Let&apos;s discuss your case!
              </p>
              <a
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "w-fit"
                )}
              >
                Schedule a call with our experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
