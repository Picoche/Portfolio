import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  ArrowRight,
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
  stats: {
    projects: number;
    teamSize: number;
    impact: string;
  };
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
    stats: {
      projects: 15,
      teamSize: 8,
      impact: "200K+ Users",
    },
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    location: "London, UK",
    period: "2020 - 2022",
    description: [
      "Developed and maintained scalable backend systems using Node.js and MongoDB",
      "Implemented CI/CD pipelines for automated testing and deployment",
    ],
    technologies: ["Node.js", "MongoDB", "CI/CD"],
    category: "fullstack",
    icon: Code,
    stats: {
      projects: 10,
      teamSize: 5,
      impact: "100K+ Users",
    },
  },
];

export function FourthExperience() {
  const sectionRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const originalScrollTo = window.scrollTo;
      window.scrollTo = function(...args: any[]) {
        if (args.length === 1 && typeof args[0] === 'object') {
          return originalScrollTo.call(this, args[0].left || 0, args[0].top || 0);
        }
        return originalScrollTo.apply(this, args[0].left || 0);
      };
    }
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Parallax background effect
      gsap.to(".parallax-bg", {
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title reveal animation
      tl.from(".section-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Stats counter animation
      gsap.utils.toArray(".stat-number").forEach((stat: any) => {
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          stagger: {
            each: 0.2,
            onUpdate: function () {
              (this as any).targets()[0].innerHTML = Math.ceil(
                (this as any).targets()[0].textContent
              );
            },
          },
          scrollTrigger: {
            trigger: stat,
            start: "top center+=100",
          },
        });
      });

      // 3D card rotation effect
      const cards = gsap.utils.toArray(".experience-card");
      cards.forEach((card: any) => {
        const rotateCard = (e: MouseEvent) => {
          if (!isHovering) return;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000,
          });
        };

        card.addEventListener("mousemove", rotateCard);
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });

      // Floating elements animation
      gsap.to(".floating-element", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: 0,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden min-h-screen"
    >
      {/* Animated background patterns */}
      <div className="parallax-bg absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 dark:from-accent/20 dark:to-secondary/20" />
        <div className="grid grid-cols-10 gap-4 rotate-12 scale-150">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="floating-element w-4 h-4 rounded-full bg-secondary/20 dark:bg-accent/20"
              style={{
                animationDelay: `${i * 0.1}s`,
                transform: `translateY(${Math.floor(i % 3) * 10}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-5xl md:text-7xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={cn(
                "experience-card group",
                "bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg",
                "rounded-2xl p-8 md:p-12 shadow-lg",
                "border border-secondary/20 dark:border-accent/20",
                "transform transition-all duration-300",
                "hover:shadow-2xl hover:scale-[1.02]"
              )}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left column: Main content */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 dark:from-accent/20 dark:to-secondary/20">
                      <experience.icon className="w-8 h-8 text-secondary dark:text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary dark:text-slate-50">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-secondary dark:text-accent">
                        <Briefcase className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-primary/60 dark:text-slate-50/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-secondary dark:text-accent" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-secondary dark:text-accent" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {experience.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-primary/80 dark:text-slate-50/80"
                      >
                        <ArrowRight className="w-4 h-4 mt-1 text-secondary dark:text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column: Stats and technologies */}
                <div className="space-y-8">
                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="stat-card p-4 rounded-xl bg-secondary/5 dark:bg-accent/10">
                      <div
                        className="stat-number text-3xl font-bold text-secondary dark:text-accent"
                        data-value={experience.stats.projects}
                      >
                        {experience.stats.projects}
                      </div>
                      <div className="text-sm text-primary/60 dark:text-slate-50/60">
                        Projects
                      </div>
                    </div>
                    <div className="stat-card p-4 rounded-xl bg-secondary/5 dark:bg-accent/10">
                      <div
                        className="stat-number text-3xl font-bold text-secondary dark:text-accent"
                        data-value={experience.stats.teamSize}
                      >
                        {experience.stats.teamSize}
                      </div>
                      <div className="text-sm text-primary/60 dark:text-slate-50/60">
                        Team Size
                      </div>
                    </div>
                    <div className="stat-card p-4 rounded-xl bg-secondary/5 dark:bg-accent/10">
                      <div className="text-3xl font-bold text-secondary dark:text-accent">
                        {experience.stats.impact}
                      </div>
                      <div className="text-sm text-primary/60 dark:text-slate-50/60">
                        Impact
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary dark:text-slate-50">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 dark:bg-accent/20 text-secondary dark:text-accent transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
