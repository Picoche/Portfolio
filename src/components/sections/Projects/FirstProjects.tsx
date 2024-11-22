import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://placeholder.com",
    githubLink: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application built with Vue.js and Firebase. Includes real-time updates, task prioritization, and team collaboration features.",
    image: "/ecommerce.jpg",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveLink: "https://placeholder.com",
    githubLink: "https://github.com",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot using natural language processing to provide customer support. Built with Python, TensorFlow, and integrated with a React frontend.",
    image: "/ecommerce.jpg",
    technologies: ["Python", "TensorFlow", "React", "Flask", "Docker"],
    liveLink: "https://placeholder.com",
    githubLink: "https://github.com",
  },
];

export function FirstProjects() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Heading animation
    tl.from(".section-title", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Project cards stagger animation
    tl.from(".project-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.2");

    // Technologies tags animation
    tl.from(".tech-tag", {
      opacity: 0,
      scale: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Links animation
    tl.from(".project-link", {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

    // View all button animation
    tl.from(".view-all-button", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

  }, { scope: sectionRef });

  // Handle hover animations
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleHover = contextSafe((element: HTMLElement, isEntering: boolean) => {
    gsap.to(element, {
      scale: isEntering ? 1.02 : 1,
      y: isEntering ? -5 : 0,
      duration: 0.3,
      ease: isEntering ? "power2.out" : "power2.in",
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card bg-white dark:bg-primary-dark rounded-xl shadow-lg overflow-hidden border border-secondary/20 dark:border-accent/20"
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-background">
                  {project.title}
                </h3>
                <p className="text-primary/80 dark:text-background/80 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag px-2 py-1 bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={project.liveLink}
                    className="project-link text-secondary dark:text-accent hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    className="project-link text-secondary dark:text-accent hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="view-all-button bg-secondary hover:bg-accent text-background transition-colors duration-300"
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