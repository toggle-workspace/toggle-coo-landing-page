import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { PageHeader } from "@/components/page-header";
import { RichText } from "@/components/rich-text";
import { StatGrid } from "@/components/stat-grid";
import { ClientInfoCard } from "@/components/client-info-card";
import { CTA } from "@/components/cta";
import config from "../../../../../payload.config";

// ponytail: no static caching, so admin edits show up immediately; add ISR/revalidateTag if traffic ever demands it
export const revalidate = 0;

async function getCaseStudy(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "case-studies",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  const client = typeof study.client === "object" ? study.client : null;
  const industry =
    client && typeof client.industry === "object" ? client.industry : null;
  const services = (study.services ?? []).filter(
    (service) => typeof service === "object",
  );

  return (
    <div>
      <PageHeader
        eyebrow={[
          study.category,
          services.map((service) => service.service_name).join(", "),
        ]
          .filter(Boolean)
          .join("  |  ")}
        title={study.name}
      />
      <div className="space-y-16 pt-16 pb-16 sm:space-y-32 sm:pt-24 sm:pb-32">
        <section className="w-full">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-[#292b2c] md:text-4xl">
                Challenges
              </h2>
              <RichText data={study.challenges} />
            </div>
            {client && (
              <div>
                <ClientInfoCard
                  name={client.company_name}
                  logo={
                    typeof client.logo === "object"
                      ? (client.logo?.url ?? "")
                      : ""
                  }
                  description={client.description ?? ""}
                  industry={industry?.name ?? ""}
                  location={client.location ?? ""}
                  website={client.website ?? ""}
                />
              </div>
            )}
          </div>
        </section>

        <section className="w-full bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#292b2c] md:text-4xl">
              Our Approach
            </h2>
            <RichText data={study.approach} />
          </div>
        </section>

        <StatGrid
          title="The Results"
          description={study.short_description ?? ""}
          items={(study.results ?? []).map((result) => ({
            value: result.value,
            label: result.label,
          }))}
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
      </div>
    </div>
  );
}
