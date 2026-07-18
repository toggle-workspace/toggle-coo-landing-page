import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { ClientLogos } from "@/components/client-logos";
import { FeaturesTabs } from "@/components/features-tabs";
import { getPayload } from "payload";
import config from "../../../payload.config";
import { Services } from "@/components/services";
import { Story } from "@/components/story";

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

export default async function Home() {
  const payloadServices = await getServices();
  return (
    <>
      <Hero />
      <div className="py-16 space-y-16 sm:py-32 sm:space-y-32">
        <Story />
        <Services payload={payloadServices} />
        <ClientLogos />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
