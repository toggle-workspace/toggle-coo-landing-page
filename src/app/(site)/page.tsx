import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { ClientLogos } from "@/components/client-logos";
import { FeaturesTabs } from "@/components/features-tabs";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-16 space-y-16 sm:py-32 sm:space-y-32">
        <Services />
        <FeaturesTabs />
        <ClientLogos />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
