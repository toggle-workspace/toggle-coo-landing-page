import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { PageHeader } from "@/components/pageheader";
import { ServiceWhy } from "@/components/service-why";
import { ServiceDeliver } from "@/components/service-deliver";
import { Projects } from "@/components/projects";
import { ServiceApproach } from "@/components/service-approach";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import config from "../../../../../payload.config";

async function getService(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    where: { slug: { equals: slug } },
    limit: 1,
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
        title={service.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />
      <div className="space-y-16 py-16 sm:space-y-32 sm:py-32">
        <ServiceWhy
          title="Why effective marketing strategy is important for your brand"
          description="To stand out in today’s digital landscape, brands need creative that is both strategic and performance-driven. Our marketing agency creates compelling assets that capture attention, align with your goals, and drive results at every stage of the marketing funnel."
        />
        <ServiceDeliver />
        <Projects />
        <ServiceApproach />
        <FAQ />
        <CTA />
      </div>
    </div>
  );
}
