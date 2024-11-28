import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Code,
  Server,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    category: "frontend",
    icon: Code,
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
    category: "fullstack",
    icon: Globe,
  },
  {
    title: "Backend Engineer",
    company: "Data Systems Corp",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: [
      "Designed and implemented scalable microservices architecture",
      "Optimized database performance and query efficiency",
      "Implemented real-time data processing pipelines",
    ],
    technologies: ["Python", "PostgreSQL", "Redis", "Docker"],
    category: "backend",
    icon: Server,
  },
];

const categoryColors = {
  frontend: "from-secondary/80 to-accent",
  backend: "from-accent to-secondary/80",
  fullstack: "from-secondary to-accent",
  devops: "from-accent/80 to-secondary",
};

export function SecondExperience() {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Background pattern animation
      tl.from(".pattern-bg", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      // Cards stagger animation
      tl.from(".experience-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
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

  // Handle card hover animation
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleCardHover = contextSafe((index: number, isEntering: boolean) => {
    if (isEntering) {
      setActiveCard(index);
      gsap.to(`#card-${index}`, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      setActiveCard(null);
      gsap.to(`#card-${index}`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              id={`card-${index}`}
              key={index}
              className={cn(
                "experience-card group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg",
                "rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20",
                "hover:shadow-xl  ",
                activeCard !== null &&
                  activeCard !== index &&
                  "opacity-75 scale-95"
              )}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              {/* Category badge */}
              <div className="absolute -top-3 left-6">
                <div
                  className={`px-4 py-1 rounded-full bg-gradient-to-r ${
                    categoryColors[experience.category]
                  } text-background text-sm font-medium shadow-lg`}
                >
                  {experience.category.charAt(0).toUpperCase() +
                    experience.category.slice(1)}
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/20">
                  <experience.icon className="floating-icon w-6 h-6 text-secondary dark:text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-slate-50">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary dark:text-accent">
                    <Briefcase className="w-4 h-4" />
                    <span>{experience.company}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-primary/60 dark:text-slate-50/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-secondary dark:text-accent" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-secondary dark:text-accent" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-primary/80 dark:text-slate-50/80">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-secondary dark:bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 dark:bg-accent/20 text-secondary dark:text-accent  "
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
