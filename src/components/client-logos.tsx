import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

const LOGOS = Array.from({ length: 8 }, (_, i) => ({
  src: `/image-set/placeholder/logos/fictional-company-logo-${i + 1}.svg`,
  alt: `Company logo ${i + 1}`,
}));

export function ClientLogos() {
  return (
    <section className="w-full bg-[#f7f8f8] py-20">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-12 px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-[#292b2c]">
          Brands we&rsquo;re proud to work with
        </h2>
        <InfiniteSlider speed={30} gap={80} className="w-full">
          {LOGOS.map(({ src, alt }) => (
            <img
              key={alt}
              alt={alt}
              className="h-8 w-auto object-contain opacity-70"
              src={src}
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
