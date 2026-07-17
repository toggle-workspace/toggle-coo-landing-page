import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayload } from "payload";
import { Contact } from "@/components/contact";
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
    <div className="py-16 space-y-16 sm:py-32 sm:space-y-32">
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {service.name}
          </h1>
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
      </section>
      <Contact />
    </div>
  );
}
