import { Services } from "@/components/services";
import { PageHeader } from "@/components/pageheader";
import { getPayload } from "payload";
import config from "../../../../payload.config";
import { CTA } from "@/components/cta";

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
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <div className="space-y-16 pt-16 sm:space-y-32 sm:pt-32">
        <Services payload={payloadServices} />
        <CTA />
      </div>
    </div>
  );
}
