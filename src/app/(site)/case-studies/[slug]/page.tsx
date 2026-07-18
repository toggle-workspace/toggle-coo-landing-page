import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { MarkerList } from "@/components/marker-list";
import { StatGrid } from "@/components/stat-grid";
import { ClientInfoCard } from "@/components/client-info-card";
import { CaseStudiesGrid } from "@/components/case-studies-grid";
import { CTA } from "@/components/cta";
import { CASE_STUDIES } from "@/data/case-studies";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  const otherStudies = CASE_STUDIES.filter((s) => s.slug !== slug);

  return (
    <div>
      <Hero
        eyebrow={`${study.category}  |  ${study.services}`}
        title={study.title}
      />
      <div className="space-y-16 pb-16 sm:space-y-32 sm:pb-32">
        <section className="w-full">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MarkerList
                title="Challenges"
                items={study.challenges.map((challenge) => ({
                  marker: <span className="size-2 shrink-0 bg-[#eb332d]" />,
                  title: challenge.title,
                  description: challenge.description,
                }))}
              />
            </div>
            <div>
              <ClientInfoCard
                name={study.company}
                logo={study.logo}
                description={study.client.description}
                industry={study.client.industry}
                location={study.client.location}
                website={study.client.website}
              />
            </div>
          </div>
        </section>

        <MarkerList
          title="Our Approach"
          description="We implemented a focused, data-driven strategy to improve performance across targeting, campaign structure, and the overall conversion experience."
          items={study.approach.map((step, i) => ({
            marker: (
              <span className="w-6 shrink-0 text-2xl font-bold text-[#eb332d]">
                {i + 1}.
              </span>
            ),
            title: step.title,
            description: step.description,
          }))}
        />

        <StatGrid
          title="The Results"
          description={study.description}
          items={study.results}
        />

        <CTA
          title="Ready to grow your brand?"
          description="Take the first step toward marketing success."
          buttonLabel="Schedule a call with our experts"
          buttonHref="/contact"
          footnote={
            <>
              We&rsquo;ll respond within{" "}
              <b className="text-[#292b2c]">24 hours</b>. No pressure, just
              expert advice.
            </>
          }
        />

        <CaseStudiesGrid
          eyebrow=""
          title="Latest case studies"
          studies={otherStudies}
          limit={4}
        />
      </div>
    </div>
  );
}
