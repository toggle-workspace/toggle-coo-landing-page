import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { PageHeader } from "@/components/page-header";
import { IconFeatureGrid } from "@/components/icon-feature-grid";
import { IconLabelGrid } from "@/components/icon-label-grid";
import { CaseStudiesGrid } from "@/components/case-studies-grid";
import { NumberedFeatureGrid } from "@/components/numbered-feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { getAllCaseStudies, getRelatedCaseStudies } from "@/lib/case-studies";
import config from "../../../../../payload.config";

const FALLBACK_ICON = "/marketing/icon-strategy.svg";

// ponytail: no static caching, so admin edits show up immediately; add ISR/revalidateTag if traffic ever demands it
export const revalidate = 0;

async function getService(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const taggedCaseStudies = await getRelatedCaseStudies(String(service.id));
  const relatedCaseStudies =
    taggedCaseStudies.length > 0 ? taggedCaseStudies : await getAllCaseStudies(3);

  const deliverables = service.deliverables?.items ?? [];
  const deliverablesHaveDescriptions = deliverables.some(
    (deliverable) => deliverable.description,
  );

  return (
    <div>
      <PageHeader
        eyebrow={service.service_name}
        title={service.title ?? service.description ?? ""}
        description={service.description}
      />
      <div className="space-y-16 pt-16 pb-16 sm:space-y-32 sm:pt-24 sm:pb-32">
        {deliverablesHaveDescriptions ? (
          <IconFeatureGrid
            eyebrow="What we deliver"
            title={service.deliverables?.section_title ?? undefined}
            items={deliverables.map((deliverable) => ({
              icon:
                (typeof deliverable.icon === "object"
                  ? deliverable.icon?.url
                  : undefined) ?? FALLBACK_ICON,
              title: deliverable.title,
              description: deliverable.description ?? "",
            }))}
          />
        ) : (
          <IconLabelGrid
            eyebrow="What we deliver"
            title={service.deliverables?.section_title ?? undefined}
            description=""
            items={deliverables.map((deliverable) => ({
              label: deliverable.title,
              icon:
                (typeof deliverable.icon === "object"
                  ? deliverable.icon?.url
                  : undefined) ?? FALLBACK_ICON,
            }))}
          />
        )}
        <CaseStudiesGrid
          eyebrow="Featured case studies"
          title="Our marketing strategy in practice"
          studies={relatedCaseStudies}
          limit={3}
        />
        {(service.process?.items?.length ?? 0) > 0 && (
          <NumberedFeatureGrid
            eyebrow="Why choose us"
            title={service.process?.section_title ?? undefined}
            items={[...(service.process?.items ?? [])]
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((item) => ({
                number: String(item.order ?? 0).padStart(2, "0") + ".",
                title: item.title,
                description: item.description ?? "",
              }))}
          />
        )}
        <FAQ />
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
