import { IconFeatureGrid } from "@/components/icon-feature-grid";
import { PageHeader } from "@/components/page-header";
import { getPayload } from "payload";
import config from "../../../../payload.config";
import { CTA } from "@/components/cta";

const SERVICE_ICONS = [
  "/marketing/icon-strategy.svg",
  "/marketing/icon-ads.svg",
  "/marketing/icon-content.svg",
  "/marketing/icon-seo.svg",
];

async function getServices() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    sort: "order",
    limit: 10,
  });
  return docs.map((doc) => ({
    title: doc.name,
    slug: doc.slug,
    shortDescription: doc.short_description ?? "",
    description: doc.long_description,
  }));
}

export default async function ServicesPage() {
  const payloadServices = await getServices();
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Marketing services built to grow your brand"
        description="Explore the strategy, creative, and campaign services we use to help brands increase visibility, engagement, and long-term growth."
      />
      <div className="space-y-16 pb-16 sm:space-y-32 sm:pb-32">
        <IconFeatureGrid
          items={payloadServices.map((service, i) => ({
            icon: SERVICE_ICONS[i % SERVICE_ICONS.length],
            title: service.title,
            description: service.shortDescription,
            href: `/services/${service.slug}`,
          }))}
        />
        <CTA
          title="Ready to grow your brand?"
          description="Take the first step toward marketing success."
          buttonLabel="Schedule a call with our experts"
          buttonHref="/contact"
          footnote={
            <>
              We&rsquo;ll respond within <b className="text-[#292b2c]">24 hours</b>. No
              pressure, just expert advice.
            </>
          }
        />
      </div>
    </div>
  );
}
