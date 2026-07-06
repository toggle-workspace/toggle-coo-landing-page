import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { MeetTheTeam } from "@/components/meet-the-team";
import { Contact } from "@/components/contact";
import { ClientLogos } from "@/components/client-logos";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ClientLogos />
      <Projects />
      <MeetTheTeam />
      <Contact />
    </>
  );
}
