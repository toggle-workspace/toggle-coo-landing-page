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

const FALLBACK_ICON = "/marketing/icon-strategy.svg";

// ponytail: no static caching, so admin edits show up immediately; add ISR/revalidateTag if traffic ever demands it
export const revalidate = 0;

async function getServices() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    sort: "order",
    limit: 10,
    depth: 1,
  });
  return docs.map((doc) => ({
    title: doc.service_name,
    slug: doc.slug,
    shortDescription: doc.description ?? "",
    icon:
      (typeof doc.icon === "object" ? doc.icon?.url : undefined) ??
      FALLBACK_ICON,
  }));
}

async function getClientLogos() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "client",
    sort: "order",
    limit: 20,
    depth: 1,
  });
  const logos = docs
    .filter((doc) => typeof doc.logo === "object" && doc.logo?.url)
    .map((doc) => ({
      src: (doc.logo as { url: string }).url,
      alt: doc.company_name,
    }));
  return logos.length > 0 ? logos : undefined;
}

export default async function Home() {
  const payloadServices = await getServices();
  const clientLogos = await getClientLogos();
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
          items={payloadServices.map((service) => ({
            icon: service.icon,
            title: service.title,
            description: service.shortDescription,
            href: `/services/${service.slug}`,
          }))}
        />
        <ClientLogos logos={clientLogos} />
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
