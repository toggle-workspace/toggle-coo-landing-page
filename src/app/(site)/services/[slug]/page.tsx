import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { PageHeader } from "@/components/page-header";
import { ServiceWhy } from "@/components/service-why";
import { IconFeatureGrid } from "@/components/icon-feature-grid";
import { CaseStudiesGrid } from "@/components/case-studies-grid";
import { NumberedFeatureGrid } from "@/components/numbered-feature-grid";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import config from "../../../../../payload.config";

const FALLBACK_ICON = "/marketing/icon-strategy.svg";

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

  return (
    <div>
      <PageHeader
        eyebrow={service.name}
        title="Ideas that capture attention and drive action"
        description={service.short_description}
      />
      <div className="space-y-16 pb-16 sm:space-y-32 sm:pb-32">
        <ServiceWhy
          title="Why effective marketing strategy is important for your brand"
          description="To stand out in today’s digital landscape, brands need creative that is both strategic and performance-driven. Our marketing agency creates compelling assets that capture attention, align with your goals, and drive results at every stage of the marketing funnel."
        />
        <IconFeatureGrid
          eyebrow="What we deliver"
          title="From interest to action, we turn your efforts into measurable growth"
          items={(service.deliverables ?? []).map((deliverable: {
            icon?: { url?: string } | string | null;
            title: string;
            description?: string | null;
          }) => ({
            icon:
              (typeof deliverable.icon === "object"
                ? deliverable.icon?.url
                : undefined) ?? FALLBACK_ICON,
            title: deliverable.title,
            description: deliverable.description ?? "",
          }))}
        />
        <CaseStudiesGrid
          eyebrow="Featured case studies"
          title="Our marketing strategy in practice"
          limit={3}
        />
        <NumberedFeatureGrid
          eyebrow="Why choose us"
          title="Partner with us for a unique and differentiated approach"
          items={[
            {
              number: "01.",
              title: "See the strategy before you commit",
              description:
                "We provide clear projections, customer value models, and custom go-to-market plans in your proposal, so you can make a confident decision based on data, not assumptions.",
            },
            {
              number: "02.",
              title: "Build stronger connections with your customers",
              description:
                "By understanding what your ideal customers want, need, and respond to, we create paid media, content, and branding strategies that engage them and drive conversions.",
            },
            {
              number: "03.",
              title: "Focus on the metrics that drive growth",
              description:
                "We track and optimize the metrics that drive real growth: revenue, pipeline, and retention, while improving the end-to-end customer experience.",
            },
          ]}
        />
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
