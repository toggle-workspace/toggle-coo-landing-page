import { PageHeader } from "@/components/pageheader";
import { buttonVariants } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { cn } from "@/lib/utils";
import { CTA } from "@/components/cta";

const LOGOS = [
  {
    name: "Arc",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
  },
  {
    name: "Descript",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
  },
  {
    name: "Mercury",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
  },
  {
    name: "Ramp",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
  },
  {
    name: "Retool",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
  },
  {
    name: "Watershed",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
  },
];

const STATS = [
  { value: "300+", label: "Companies" },
  { value: "800+", label: "Projects Finalized" },
  { value: "99%", label: "Happy Customers" },
  { value: "10+", label: "Recognized Awards" },
];

export default async function Home() {
  return (
    <div>
      <PageHeader
        title="About"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="space-y-16 pt-16 sm:space-y-32 sm:pt-32">
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-7 lg:grid-cols-3">
              <img
                alt="about"
                className="size-full max-h-155 rounded-xl object-cover lg:col-span-2"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
              />
              <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted/5 p-7 md:w-1/2 lg:w-auto">
                  <img
                    alt="logo"
                    className="mr-auto h-12 dark:invert"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                  />
                  <div>
                    <p className="mb-2 text-lg font-semibold">
                      Trusted by 50+ growing brands
                    </p>
                    <p className="text-muted-foreground">
                      Providing businesses with effective tools to improve
                      workflows, boost efficiency, and encourage growth.
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "mr-auto",
                    )}
                  >
                    Discover more
                  </a>
                </div>
                <img
                  alt="about"
                  className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <InfiniteSlider speed={30} gap={64} className="**:fill-foreground">
              {LOGOS.map((logo) => (
                <img
                  key={logo.name}
                  alt={logo.name}
                  className="h-7 w-auto md:h-8 dark:invert"
                  src={logo.src}
                />
              ))}
            </InfiniteSlider>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />
          </div>
        </section>

        <section className="w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-xl bg-muted p-7 md:p-16">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-3xl font-medium md:text-4xl">
                  Our Achievements in Numbers
                </h2>
                <p className="max-w-xl text-muted-foreground">
                  Providing businesses with effective tools to improve
                  workflows, boost efficiency, and encourage growth.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:flex-wrap md:justify-between">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 text-center md:text-left"
                  >
                    <span className="font-mono text-4xl font-semibold md:text-5xl">
                      {stat.value}
                    </span>
                    <p className="text-sm md:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-28 lg:px-8">
            <div>
              <h2 className="mb-5 text-4xl font-medium">Our Vision</h2>
              <p className="whitespace-pre-line text-lg leading-7 text-muted-foreground">
                For years, the process of building custom software has remained
                challenging. Today, visual builders exist, but tailored
                solutions still require technical expertise and a lot of time.
                This is a problem for businesses and individuals alike.
                {"\n\n"}
                What if you could create custom software without writing a
                single line of code? What if you could build your own tools.
                {"\n\n"}
                With our platform, you can! Our tools let you design layouts and
                create functionality—all without needing to code.
                {"\n\n"}
                We believe that everyone should be able to build their own
                solutions, regardless of their technical background.
              </p>
            </div>
            <div>
              <h2 className="mb-5 text-4xl font-medium">Our Creators</h2>
              <p className="whitespace-pre-line text-lg leading-7 text-muted-foreground">
                Our company has been building web tools for over a decade,
                focusing on efficiency and user control in every project. We
                know that the best solutions are the ones that you can create
                yourself.
                {"\n\n"}
                We initially developed these solutions for our own team, and now
                everyone can benefit from them too. We are proud to offer a
                platform that is accessible to all, regardless of technical
                expertise.
                {"\n\n"}
                Our team is made up of talented individuals who are passionate
                about creating tools that empower users to build their own
                solutions with ease. We are dedicated to helping you achieve
                your goals.
              </p>
            </div>
          </div>
        </section>
        <CTA />
      </div>
    </div>
  );
}
