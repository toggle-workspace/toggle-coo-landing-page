import { PageHeader } from "@/components/page-header";
import { CaseStudiesGrid } from "@/components/case-studies-grid";
import { CTA } from "@/components/cta";

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Success stories"
        title="Wins worth sharing"
        description="Explore real examples of how our strategy, creativity, and marketing expertise drive growth and deliver meaningful outcomes for our clients."
      />
      <div className="space-y-16 pt-16 pb-16 sm:space-y-32 sm:pt-24 sm:pb-32">
        <CaseStudiesGrid showHeader={false} limit={Infinity} />
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
    </div>
  );
}
