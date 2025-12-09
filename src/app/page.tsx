"use client";

import { About } from "@/components/sections/About/AboutBase";
import { Hero } from "@/components/sections/Hero/HeroBase";
import { Skills } from "@/components/sections/Skills/SkillsBase";
import { Experience } from "@/components/sections/Experience/ExperienceBase";
import { Projects } from "@/components/sections/Projects/ProjectsBase";
import { Contact } from "@/components/sections/Contact/ContactBase";
import { Education } from "@/components/sections/Education/EducationBase";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section id="home" className="w-full">
        <Hero />
      </section>

      <Separator orientation="horizontal" className=" bg-background-dark dark:bg-background w-[90%]" />
      
      {/* About Section */}
      <section id="about" className="w-full bg-background dark:bg-background-dark py-20">
        <About />
      </section>

      <Separator orientation="horizontal" className=" bg-background-dark dark:bg-background w-[90%]" />

      {/* Education Section */}
      <section id="education" className="w-full bg-background dark:bg-background-dark py-20">
        <Education />
      </section>

      <Separator orientation="horizontal" className=" bg-background-dark dark:bg-background w-[90%]" />

      {/* Skills Section */}
      <section id="skills" className="w-full bg-background dark:bg-background-dark py-20">
        <Skills />
      </section>

      <Separator orientation="horizontal" className=" bg-background-dark dark:bg-background w-[90%]" />

      {/* Experience Section */}
      <section id="experience" className="w-full bg-background dark:bg-background-dark py-20">
        <Experience />
      </section>

      <Separator orientation="horizontal" className=" bg-background-dark dark:bg-background w-[90%]" />

      {/* Projects Section */}
      <section id="projects" className="w-full bg-background dark:bg-background-dark py-20">
        <Projects />
      </section>

      <Separator orientation="horizontal" className=" bg-background-dark dark:bg-background w-[90%]" />

      {/* Contact Section */}
      <section id="contact" className="w-full bg-background dark:bg-background-dark py-20">
        <Contact />
      </section>

      <Separator orientation="horizontal" className=" bg-background-dark dark:bg-background w-[90%]" />
      
      {/* Footer */}
      <footer className="w-full py-6 text-center border-t">
        <p className="text-sm bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          © {new Date().getFullYear()} Fabien Hombert. Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}
