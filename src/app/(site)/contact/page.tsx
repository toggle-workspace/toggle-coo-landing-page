import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/contact";

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next campaign"
        description="Tell us about your brand and goals, and our team will follow up to map out how we can help you grow."
      />
      <div className="pt-16 pb-16 sm:pt-24 sm:pb-32">
        <Contact />
      </div>
    </div>
  );
}
