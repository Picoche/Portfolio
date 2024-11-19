import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
  category: "frontend" | "backend" | "fullstack" | "devops";
  icon: any;
  year: number;
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
    category: "frontend",
    icon: Code,
    year: 2022,
  },
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
    category: "frontend",
    icon: Code,
    year: 2022,
  },
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
    category: "frontend",
    icon: Code,
    year: 2022,
  },
];

const categoryColors = {
  frontend: "from-secondary/80 to-accent",
  backend: "from-accent to-secondary/80",
  fullstack: "from-secondary to-accent",
  devops: "from-accent/80 to-secondary",
};

export function ThirdExperience() {
  const sectionRef = useRef(null);
  const [activeExperience, setActiveExperience] = useState<number>(0);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Timeline line drawing animation
      tl.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.inOut",
      });

      // Year markers animation
      tl.from(".year-marker", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      // Experience cards stagger animation
      experiences.forEach((_, index) => {
        gsap.from(`#experience-${index}`, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `#experience-${index}`,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });
    },
    { scope: sectionRef }
  );

  // Handle experience selection
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleExperienceClick = contextSafe((index: number) => {
    setActiveExperience(index);
    gsap.to(window, {
      duration: 1,
      scrollTo: `#experience-${index}`,
      ease: "power2.inOut",
    });
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background dark:bg-primary theme-transition relative overflow-hidden min-h-screen"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Career Timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-1/2 top-0 w-px h-full bg-secondary/20 dark:bg-accent/20 transform -translate-x-1/2" />

          {/* Experience cards */}
          <div className="relative space-y-24">
            {experiences.map((experience, index) => (
              <div
                id={`experience-${index}`}
                key={index}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                )}
              >
                {/* Year marker */}
                <div className="year-marker absolute left-1/2 transform -translate-x-1/2 -translate-y-12">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 dark:bg-accent/10 flex items-center justify-center">
                    <span className="text-secondary dark:text-accent font-bold">
                      {experience.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "experience-card bg-white/80 dark:bg-primary-dark/80 backdrop-blur-lg",
                    "rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20",
                    "transition-all duration-300 hover:shadow-xl cursor-pointer",
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  )}
                  onClick={() => handleExperienceClick(index)}
                >
                  {/* Category badge */}
                  <div className="absolute -top-3 left-6">
                    <div
                      className={`px-4 py-1 rounded-full bg-gradient-to-r ${
                        categoryColors[experience.category]
                      } text-background text-sm font-medium`}
                    >
                      {experience.category.charAt(0).toUpperCase() +
                        experience.category.slice(1)}
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/10">
                      <experience.icon className="floating-icon w-6 h-6 text-secondary dark:text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary dark:text-background">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-secondary dark:text-accent">
                        <Briefcase className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                  </div>

                  {activeExperience === index && (
                    <div className="space-y-4 animate-fadeIn">
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

                      <ul className="space-y-2 text-primary/80 dark:text-background/80">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-1 text-secondary dark:text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {experience.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/button mt-4"
                          asChild
                        >
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Visit Company
                            <ExternalLink className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
