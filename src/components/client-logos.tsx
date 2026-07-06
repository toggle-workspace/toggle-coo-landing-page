const LOGOS = Array.from({ length: 12 }, (_, i) => ({
  src: `/image-set/placeholder/logos/fictional-company-logo-${i + 1}.svg`,
  alt: `Company logo ${i + 1}`,
}));

export function ClientLogos() {
  return (
    <section className="py-32 w-full">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              our clients
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Trusted by these companies
            </h2>
            <p className="max-w-xl text-base text-muted-foreground">
              Used by the world&apos;s leading teams &amp; startups
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
            {LOGOS.map(({ src, alt }) => (
              <div key={alt} className="flex aspect-3/1 items-center justify-center">
                <img
                  alt={alt}
                  className="h-auto max-h-7 w-auto object-contain dark:invert"
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
