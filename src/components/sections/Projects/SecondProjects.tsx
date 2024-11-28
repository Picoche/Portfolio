import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Code, Blocks, Globe } from "lucide-react";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with modern tech stack",
    image: "/ecommerce.jpg",
    category: "Full Stack",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Globe,
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management platform",
    image: "/ecommerce.jpg",
    category: "Web App",
    year: "2023",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Blocks,
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent customer support automation",
    image: "/ecommerce.jpg",
    category: "AI/ML",
    year: "2024",
    technologies: ["Python", "TensorFlow", "React", "Flask", "Docker"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Code,
  },
];

export function SecondProjects() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Background pattern animation
    tl.from(".pattern-bg", {
      opacity: 0,
      scale: 1.1,
      duration: 1,
      ease: "power2.out",
    });

    // Heading animations
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Project cards stagger animation with 3D effect
    tl.from(".project-card", {
      opacity: 0,
      rotationY: 45,
      z: -100,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.2");

    // Category tags animation
    tl.from(".category-tag", {
      opacity: 0,
      scale: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Tech stack animation
    tl.from(".tech-pill", {
      opacity: 0,
      x: -20,
      stagger: 0.05,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

    // Project icons floating animation
    gsap.to(".project-icon", {
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

  }, { scope: sectionRef });

  // Handle hover animations
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleHover = contextSafe((element: HTMLElement, isEntering: boolean) => {
    gsap.to(element, {
      scale: isEntering ? 1.02 : 1,
      rotationY: isEntering ? 5 : 0,
      duration: 0.4,
      ease: isEntering ? "power2.out" : "power2.in",
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-secondary/20 dark:border-accent/20 transform perspective-1000 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-full object-cover duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <project.icon className="project-icon absolute bottom-4 right-4 w-8 h-8 text-white" />
                </div>

                <div className="md:w-1/2 p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="category-tag px-3 py-1 bg-secondary/10 dark:bg-accent/20 text-secondary dark:text-accent rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="text-primary/60 dark:text-slate-50/60 text-sm">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-primary dark:text-slate-50">
                      {project.title}
                    </h3>
                    <p className="text-primary/80 dark:text-slate-50/80 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill px-3 py-1 bg-secondary/5 dark:bg-accent/10 text-secondary dark:text-accent rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
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
      </div>
    </section>
  );
}