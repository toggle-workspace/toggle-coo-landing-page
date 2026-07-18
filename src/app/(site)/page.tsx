import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { IconFeatureGrid } from "@/components/icon-feature-grid";
import { ClientLogos } from "@/components/client-logos";
import { CaseStudiesGrid } from "@/components/case-studies-grid";
import { NumberedFeatureGrid } from "@/components/numbered-feature-grid";
import { BlogPreview } from "@/components/blog-preview";
import { CTA } from "@/components/cta";
import { getPayload } from "payload";
import config from "../../../payload.config";

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

export default async function Home() {
  const payloadServices = await getServices();
  return (
    <>
      <Hero
        eyebrow="Strategy. Creativity. Results."
        title="Performance Marketing Made Clear & Effective"
        description="From brand positioning to digital campaigns, we deliver practical marketing solutions designed to increase visibility, engagement, and long-term growth."
        actions={[
          { label: "Client Examples", href: "/case-studies", variant: "outline" },
          { label: "Book Into Call", href: "/contact" },
        ]}
      />
      <div className="space-y-24 py-16 sm:space-y-32 sm:py-24">
        <Story
          title="We’re a team of strategists, creatives, and marketers working together to produce standout content and ensure it reaches the right audience."
          link={{ label: "More about us", href: "/about" }}
          videoImage="/marketing/hero-video-bg.jpg"
        />
        <IconFeatureGrid
          items={payloadServices.map((service, i) => ({
            icon: SERVICE_ICONS[i % SERVICE_ICONS.length],
            title: service.title,
            description: service.shortDescription,
            href: `/services/${service.slug}`,
          }))}
        />
        <ClientLogos />
        <CaseStudiesGrid />
        <NumberedFeatureGrid />
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
