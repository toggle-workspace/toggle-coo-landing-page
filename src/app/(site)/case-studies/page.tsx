import { PageHeader } from "@/components/pageheader";
import { CTA } from "@/components/cta";
import { CASE_STUDIES } from "@/data/case-studies";
import { ArrowRightIcon } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHeader
        title="Case studies"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
      />

      <div className="space-y-16 pt-16 sm:space-y-32 sm:pt-32">
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {CASE_STUDIES.map((study) => (
                <a
                  key={study.title}
                  href="#"
                  className="group block rounded-xl"
                >
                  <div className="group relative aspect-4/3 w-full overflow-hidden rounded-xl">
                    <img
                      alt={study.title}
                      src={study.image}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-linear-to-t from-black/80 via-black/28 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-3 flex h-9 items-center pt-3 text-sm font-semibold md:mb-4">
                        {study.company}
                      </div>
                      <div className="mb-2 text-xl font-semibold md:mb-3 md:text-2xl">
                        {study.title}
                      </div>
                      <div className="mb-8 line-clamp-2 text-sm text-pretty text-white/90 md:mb-10">
                        {study.description}
                      </div>
                      <div className="mt-auto flex items-center text-sm">
                        Read more
                        <ArrowRightIcon className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </div>
    </div>
  );
}
