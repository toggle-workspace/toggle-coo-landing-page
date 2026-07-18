import { AboutHero } from "@/components/about-hero";
import { StoryStats } from "@/components/story-stats";
import { ValuesGrid } from "@/components/values-grid";
import { WhyUs } from "@/components/why-us";
import { TeamGrid } from "@/components/team-grid";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <div className="space-y-24 pb-16 sm:space-y-32 sm:pb-24">
        <StoryStats />
        <ValuesGrid />
        <WhyUs />
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
