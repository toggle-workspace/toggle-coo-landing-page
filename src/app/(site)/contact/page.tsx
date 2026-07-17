import { PageHeader } from "@/components/pageheader";
import { Contact } from "@/components/contact";

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <div className="py-16 sm:py-32">
        <Contact />
      </div>
    </div>
  );
}
