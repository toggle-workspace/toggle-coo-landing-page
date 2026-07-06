import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { MeetTheTeam } from "@/components/meet-the-team";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <MeetTheTeam />
      <Contact />
    </>
  );
}
