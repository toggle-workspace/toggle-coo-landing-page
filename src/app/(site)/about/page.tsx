import { PageHeader } from "@/components/page-header";
import { Story } from "@/components/story";
import { IconLabelGrid } from "@/components/icon-label-grid";
import { NumberedFeatureGrid } from "@/components/numbered-feature-grid";
import { TeamGrid } from "@/components/team-grid";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title="Building digital experiences that inspire and perform"
        description="Explore our values, philosophy, and approach that guide every project and help our clients build stronger, lasting brands."
      />
      <div className="space-y-24 pb-16 sm:space-y-32 sm:pb-24">
        <Story
          title="We believe marketing should deliver more than promises"
          description="Over the years, our team of strategists, creatives, and marketers has worked with brands of all sizes to build meaningful connections with their audiences, grow their businesses, and deliver measurable results. Every project reflects our commitment to strategy, creativity, and long-term success."
          stats={[
            { value: "15+", label: "Years of marketing experience" },
            { value: "100+", label: "Successful cases" },
          ]}
          videoImage="/about/video-bg.jpg"
        />
        <IconLabelGrid />
        <NumberedFeatureGrid />
        <TeamGrid />
        <Testimonials />
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
