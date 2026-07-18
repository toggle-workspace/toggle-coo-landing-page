import { ServiceCard } from "@/components/service-card";
import { ICONS } from "@/components/services";
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
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {payloadServices.map((item, i) => (
                <li key={item.title} className="h-full">
                  <ServiceCard
                    icon={
                      <img
                        src={ICONS[i]}
                        alt={item.title}
                        className="w-14"
                      />
                    }
                    title={item.title}
                    description={item.shortDescription}
                    href={`/services/${item.slug}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CTA />
      </div>
    </div>
  );
}
