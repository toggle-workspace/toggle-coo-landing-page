import { CASE_STUDIES } from "@/data/case-studies";

export function CaseStudiesGrid() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img alt="" className="size-3.5" src="/marketing/icon-bullet.svg" />
              <span className="font-semibold text-[#292b2c]">
                Wins worth sharing
              </span>
            </div>
            <h2 className="text-4xl font-semibold text-[#292b2c] md:text-5xl">
              Our work speaks for itself
            </h2>
          </div>
          <a
            href="/case-studies"
            className="w-fit border-b-2 border-[#eb332d] pb-1.5 text-base font-semibold text-[#292b2c]"
          >
            Discover all case studies
          </a>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.slice(0, 6).map((study) => (
            <a
              href="#"
              key={study.title}
              className="group relative flex min-h-75 flex-col justify-between overflow-hidden bg-[#f2f3f3] p-8"
            >
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#eb332d] transition-transform group-hover:translate-y-0" />
              <img
                alt=""
                className="pointer-events-none absolute bottom-15 right-8 size-15 opacity-80"
                src="/marketing/chart-red.svg"
              />
              <p className="text-sm text-[#889091]">{study.company}</p>
              <h3 className="text-2xl font-semibold text-[#292b2c]">
                {study.title}
              </h3>
              <p className="text-sm text-[#889091]">{study.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
