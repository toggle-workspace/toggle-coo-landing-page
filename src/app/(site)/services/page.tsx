import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { PageHeader } from "@/components/pageheader";
import { getPayload } from "payload";
import config from "../../../../payload.config";

async function getServices() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    sort: "order",
    limit: 10,
  });
  return docs.map((doc) => ({
    title: doc.name,
    shortDescription: doc.short_description ?? "",
    description: doc.long_description,
  }));
}

export default async function ServicesPage() {
  const payloadServices = await getServices();
  return (
    <div className="space-y-16 sm:space-y-32">
      <PageHeader
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <div className="pb-16 sm:pb-32">
        <Services payload={payloadServices} />
      </div>
      <Contact />
    </div>
  );
}
