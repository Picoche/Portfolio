import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://placeholder.com",
    githubLink: "https://github.com/Picoche",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application built with Vue.js and Firebase. Includes real-time updates, task prioritization, and team collaboration features.",
    image: "/ecommerce.jpg",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveLink: "https://placeholder.com",
    githubLink: "https://github.com/Picoche",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot using natural language processing to provide customer support. Built with Python, TensorFlow, and integrated with a React frontend.",
    image: "/ecommerce.jpg",
    technologies: ["Python", "TensorFlow", "React", "Flask", "Docker"],
    liveLink: "https://placeholder.com",
    githubLink: "https://github.com/Picoche",
  },
];

export function FirstProjects() {
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

    // Title animation
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Project cards stagger animation
    tl.from(".project-card", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");

    // Project images animation
    tl.from(".project-image", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.6");

    // Tags animation
    gsap.from(".project-tag", {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: ".project-tag",
        start: "top center+=100",
        toggleActions: "play none none reset",
      },
    });

    // Links animation
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
      scale: isEntering ? 1.03 : 1,
      y: isEntering ? -5 : 0,
      duration: 0.3,
      ease: isEntering ? "power2.out" : "power2.in",
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background-dark  "
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 text-primary dark:text-primary-dark  ">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card bg-background dark:bg-background-dark rounded-xl shadow-lg overflow-hidden border border-secondary/20 dark:border-secondary-dark/20  "
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="project-image w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent dark:from-black/70" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary-dark  ">
                  {project.title}
                </h3>
                <p className="text-primary/80 dark:text-primary-dark/80 mb-4 line-clamp-3  ">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="project-tag px-2 py-1 bg-secondary/10 dark:bg-secondary-dark/10 text-secondary dark:text-secondary-dark rounded-full text-sm  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={project.liveLink}
                    className="project-link text-secondary dark:text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:underline flex items-center  "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    className="project-link text-secondary dark:text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:underline flex items-center  "
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
      </div>
    </section>
  );
}