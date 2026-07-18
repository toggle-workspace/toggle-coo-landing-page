import { Card } from "@/components/ui/card";
import { TextLink } from "@/components/ui/text-link";
import { Eyebrow } from "@/components/eyebrow";
import { CASE_STUDIES } from "@/data/case-studies";

type CaseStudy = {
  title: string;
  company: string;
  description: string;
  slug?: string;
};

export function CaseStudiesGrid({
  eyebrow = "Wins worth sharing",
  title = "Our work speaks for itself",
  linkLabel = "Discover all case studies",
  linkHref = "/case-studies",
  showHeader = true,
  studies = CASE_STUDIES,
  limit = 6,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  linkLabel?: string;
  linkHref?: string;
  showHeader?: boolean;
  studies?: CaseStudy[];
  limit?: number;
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-325 px-6 lg:px-8">
        {showHeader && (
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-6">
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              <h2 className="text-4xl font-semibold text-[#292b2c] md:text-5xl">
                {title}
              </h2>
            </div>
            <TextLink href={linkHref} className="text-base">
              {linkLabel}
            </TextLink>
          </div>
        )}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {studies.slice(0, limit).map((study) => (
            <a
              href={study.slug ? `/case-studies/${study.slug}` : "#"}
              key={study.title}
              className="group"
            >
              <Card
                variant="muted"
                className="relative min-h-75 justify-between p-8"
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
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
