import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { MeetTheTeam } from "@/components/meet-the-team";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <MeetTheTeam />
    </>
  );
}
