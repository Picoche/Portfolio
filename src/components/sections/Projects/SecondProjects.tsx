import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Code, Blocks, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with modern tech stack",
    image: "/ecommerce.jpg",
    category: "Full Stack",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/Picoche",
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
    githubLink: "https://github.com/Picoche",
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
    githubLink: "https://github.com/Picoche",
    icon: Code,
  },
];

export function SecondProjects() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    // Background pattern animation
    tl.from(".pattern-bg", {
      opacity: 0,
      scale: 1.1,
      duration: 1,
      ease: "power2.out",
    });

    // Title animation with gradient
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Project cards stagger with 3D effect
    tl.from(".project-card", {
      opacity: 0,
      y: 50,
      rotationX: 10,
      transformOrigin: "top",
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");

    // Project images reveal
    tl.from(".project-image", {
      opacity: 0,
      scale: 1.2,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.6");

    // Project info slide up
    tl.from(".project-info", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.6");

    // Tags animation with pop effect
    gsap.from(".project-tag", {
      opacity: 0,
      scale: 0,
      rotation: -15,
      duration: 0.4,
      stagger: 0.1,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".project-tag",
        start: "top center+=100",
        toggleActions: "play none none reset",
      },
    });

    // Links animation with slide
    gsap.from(".project-link", {
      opacity: 0,
      x: -20,
      duration: 0.4,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".project-link",
        start: "top center+=100",
        toggleActions: "play none none reset",
      },
    });

    // Floating animation for icons
    gsap.to(".floating-icon", {
      y: -5,
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

  }, { scope: sectionRef });

  // Handle hover animations with 3D effect
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleHover = contextSafe((element: HTMLElement, isEntering: boolean) => {
    gsap.to(element, {
      scale: isEntering ? 1.03 : 1,
      rotationY: isEntering ? 3 : 0,
      y: isEntering ? -5 : 0,
      duration: 0.3,
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
                    className="project-image w-full h-64 md:h-full object-cover duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <project.icon className="floating-icon absolute bottom-4 right-4 w-8 h-8 text-white" />
                </div>

                <div className="md:w-1/2 p-8 space-y-6 project-info">
                  <div className="flex items-center justify-between">
                    <span className="project-tag px-3 py-1 bg-secondary/10 dark:bg-accent/20 text-secondary dark:text-accent rounded-full text-sm">
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
                      className="project-link flex items-center text-secondary dark:text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="project-link flex items-center text-secondary dark:text-accent hover:underline"
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