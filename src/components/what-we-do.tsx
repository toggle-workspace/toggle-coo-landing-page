const ICONS = [
  "/marketing/icon-strategy.svg",
  "/marketing/icon-ads.svg",
  "/marketing/icon-content.svg",
  "/marketing/icon-seo.svg",
];

type PayloadService = {
  title: string;
  slug: string;
  shortDescription: string;
};

export function WhatWeDo({ payload = [] }: { payload?: PayloadService[] }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        <div className="mb-14 flex items-center gap-2">
          <img alt="" className="size-3.5" src="/marketing/icon-bullet.svg" />
          <span className="font-semibold text-[#292b2c]">What we do</span>
        </div>
        <h2 className="mb-14 max-w-2xl text-4xl font-semibold text-[#292b2c] md:text-5xl">
          We do marketing that attracts, engages, converts
        </h2>
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
          {payload.map((service, i) => (
            <div key={service.title} className="flex gap-7">
              <img alt="" className="size-14 shrink-0" src={ICONS[i % ICONS.length]} />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-[#292b2c]">
                  {service.title}
                </h3>
                <p className="text-[#565b5d]">{service.shortDescription}</p>
                <a
                  href={`/services/${service.slug}`}
                  className="w-fit border-b-2 border-[#eb332d] pb-1 text-sm font-semibold text-[#292b2c]"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
