import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Led development of next-generation web applications using Next.js and TypeScript",
      "Implemented advanced animations and micro-interactions using GSAP",
      "Mentored junior developers and established best practices",
    ],
    technologies: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
    link: "https://techinnovators.com",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    location: "New York, NY",
    period: "2020 - 2022",
    description: [
      "Developed and maintained full-stack applications using React and Node.js",
      "Optimized application performance and implemented CI/CD pipelines",
      "Collaborated with UX designers to implement responsive designs",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "https://digitalsolutions.com",
  },
];

export function FirstExperience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Experience cards stagger animation
      tl.from(".experience-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // Technology tags animation
      tl.from(".tech-tag", {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 text-primary dark:text-background">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="experience-card bg-white dark:bg-primary-dark rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary dark:text-background">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary dark:text-accent">
                    <Briefcase className="w-4 h-4" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-primary/60 dark:text-background/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                {experience.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 md:mt-0"
                    asChild
                  >
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Visit Company
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>

              <ul className="space-y-2 mb-6 text-primary/80 dark:text-background/80">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-secondary dark:bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-tag px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
