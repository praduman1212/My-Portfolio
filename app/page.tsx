import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Education } from "@/components/main/education";
import { Experience } from "@/components/main/experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
