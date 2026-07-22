import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/contact";
import { getPayload } from "payload";
import config from "../../../../payload.config";

async function getInterests() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "services",
    sort: "order",
    depth: 0,
  });
  return docs.map((doc) => doc.service_name);
}

async function getCompanyInfo() {
  const payload = await getPayload({ config });
  const info = await payload.findGlobal({
    slug: "company-info",
    depth: 1,
  });
  return {
    phone: info.phone ?? undefined,
    email: info.email ?? undefined,
    location: info.location ?? undefined,
    socialLinks: (info.social_links ?? []).map((s) => ({
      icon: typeof s.icon === "object" ? s.icon?.url ?? undefined : undefined,
      label: s.label,
      link: s.link,
    })),
  };
}

export default async function ContactPage() {
  const [companyInfo, interests] = await Promise.all([
    getCompanyInfo(),
    getInterests(),
  ]);
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next campaign"
        description="Tell us about your brand and goals, and our team will follow up to map out how we can help you grow."
      />
      <div className="pt-16 pb-16 sm:pt-24 sm:pb-32">
        <Contact {...companyInfo} interests={interests} />
      </div>
    </div>
  );
}
