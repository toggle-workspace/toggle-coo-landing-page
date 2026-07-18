import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";

export default function ContactPage() {
  return (
    <div>
      <Hero
        eyebrow="Contact"
        title="Let's talk about your next campaign"
        description="Tell us about your brand and goals, and our team will follow up to map out how we can help you grow."
      />
      <div className="pb-16 sm:pb-32">
        <Contact />
      </div>
    </div>
  );
}
