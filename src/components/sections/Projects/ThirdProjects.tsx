import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Code,
  Blocks,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A comprehensive e-commerce solution with modern features",
    image: "/ecommerce.jpg",
    category: "Full Stack",
    featured: true,
    year: "2024",
    stats: {
      users: "10K+",
      sales: "$500K+",
      rating: "4.9",
    },
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Globe,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management platform",
    image: "/ecommerce.jpg",
    category: "Web App",
    featured: false,
    year: "2023",
    stats: {
      teams: "500+",
      tasks: "50K+",
      rating: "4.8",
    },
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Blocks,
  },
  {
    title: "AI-Powered Chatbot",
    description: "Next-gen customer support automation",
    image: "/ecommerce.jpg",
    category: "AI/ML",
    featured: true,
    year: "2024",
    stats: {
      responses: "1M+",
      accuracy: "98%",
      rating: "4.9",
    },
    technologies: ["Python", "TensorFlow", "React", "Flask", "Docker"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Code,
  },
];

export function ThirdProjects() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Background animations
      tl.from(".pattern-bg", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Section title animation
      tl.from(
        ".section-title",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Filter buttons animation
      tl.from(
        ".filter-button",
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      // Project cards stagger animation
      tl.from(
        ".project-card",
        {
          opacity: 0,
          y: 100,
          stagger: {
            each: 0.2,
            from: "random",
          },
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.3"
      );

      // Stats counter animation
      gsap.utils.toArray(".stat-value").forEach((stat: any) => {
        gsap.from(stat, {
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top center+=100",
          },
        });
      });

      // Continuous animations
      gsap.to(".floating-icon", {
        y: -10,
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

  // Handle hover animations
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleHover = contextSafe(
    (element: HTMLElement, isEntering: boolean) => {
      gsap.to(element, {
        scale: isEntering ? 1.02 : 1,
        y: isEntering ? -5 : 0,
        duration: 0.4,
        ease: isEntering ? "power2.out" : "power2.in",
      });
    }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background dark:bg-primary theme-transition relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Full Stack", "Web App", "AI/ML"].map((filter) => (
              <button
                key={filter}
                className="filter-button px-4 py-2 rounded-full bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent hover:bg-secondary/20 dark:hover:bg-accent/20 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`project-card relative ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className="bg-white dark:bg-primary-dark rounded-2xl shadow-lg overflow-hidden border border-secondary/20 dark:border-accent/20"
                onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleHover(e.currentTarget, false)}
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        {project.category}
                      </span>
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <project.icon className="floating-icon absolute top-4 right-4 w-8 h-8 text-white" />
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-primary/80 dark:text-background/80">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div
                          className="stat-value text-xl font-bold text-secondary dark:text-accent"
                          data-value={value}
                        >
                          {value}
                        </div>
                        <div className="text-sm text-primary/60 dark:text-background/60 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/5 dark:bg-accent/5 text-secondary dark:text-accent rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-secondary/10 dark:border-accent/10">
                    <Link
                      href={project.liveLink}
                      className="flex items-center text-secondary dark:text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="flex items-center text-secondary dark:text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            className="bg-secondary hover:bg-accent text-background transition-colors duration-300"
            onMouseEnter={(e) => handleHover(e.currentTarget, true)}
            onMouseLeave={(e) => handleHover(e.currentTarget, false)}
          >
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
