"use client";

import { About } from "@/components/sections/About/AboutBase";
import { Hero } from "@/components/sections/Hero/HeroBase";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section id="home" className="w-full">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-background py-20">
        <About />
      </section>

      {/* Education Section */}
      <section id="education" className="w-full bg-background py-20">
        <Education />
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-background py-20">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full bg-background py-20">
        <Experience />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full bg-background py-20">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-background py-20">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
