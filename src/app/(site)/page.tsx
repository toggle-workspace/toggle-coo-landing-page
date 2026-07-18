import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { WhatWeDo } from "@/components/what-we-do";
import { ClientLogos } from "@/components/client-logos";
import { CaseStudiesGrid } from "@/components/case-studies-grid";
import { WhyUs } from "@/components/why-us";
import { BlogPreview } from "@/components/blog-preview";
import { CTA } from "@/components/cta";
import { getPayload } from "payload";
import config from "../../../payload.config";

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
      <div className="space-y-24 py-16 sm:space-y-32 sm:py-24">
        <Story />
        <WhatWeDo payload={payloadServices} />
        <ClientLogos />
        <CaseStudiesGrid />
        <WhyUs />
        <BlogPreview />
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
    </>
  );
}
