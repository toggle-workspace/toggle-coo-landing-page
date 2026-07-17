import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayload } from "payload";
import { Contact } from "@/components/contact";
import { PageHeader } from "@/components/pageheader";
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
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex max-w-3xl flex-col gap-6">
              {service.short_description ? (
                <p className="text-lg text-muted-foreground">
                  {service.short_description}
                </p>
              ) : null}
              {service.long_description ? (
                <RichText
                  data={service.long_description}
                  className="text-base text-muted-foreground"
                />
              ) : null}
            </div>
          </div>
        </section>
        <Contact />
      </div>
    </div>
  );
}
