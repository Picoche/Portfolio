import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Code,
  Blocks,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    githubLink: "https://github.com/Picoche",
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
    githubLink: "https://github.com/Picoche",
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
    githubLink: "https://github.com/Picoche",
    icon: Code,
  },
];

export function ThirdProjects() {
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
      scale: 1.2,
      duration: 1,
      ease: "power2.out",
    });

    // Title animation with split text
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Filter buttons animation
    tl.from(".filter-button", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4");

    // Project cards stagger with 3D rotation
    tl.from(".project-card", {
      opacity: 0,
      rotationY: 45,
      transformOrigin: "left center",
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");

    // Project images reveal with zoom
    gsap.from(".project-image", {
      opacity: 0,
      scale: 1.2,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".project-image",
        start: "top center+=100",
        toggleActions: "play none none reset",
      },
    });

    // Project info slide up
    gsap.from(".project-info", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".project-info",
        start: "top center+=100",
        toggleActions: "play none none reset",
      },
    });

    // Tags pop animation
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

    // Links slide in
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

    // Icon rotation animation
    gsap.to(".rotating-icon", {
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
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Full Stack", "Web App", "AI/ML"].map((filter) => (
              <button
                key={filter}
                className="filter-button px-4 py-2 rounded-full bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent hover:bg-secondary/20 dark:hover:bg-accent/20"
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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-secondary/20 dark:border-accent/20"
                onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleHover(e.currentTarget, false)}
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover project-image"
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
                  <project.icon className="floating-icon absolute top-4 right-4 w-8 h-8 text-white rotating-icon" />
                </div>

                <div className="p-6 space-y-4 project-info">
                  <p className="text-primary/80 dark:text-slate-50/80">
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
                        <div className="text-sm text-primary/60 dark:text-slate-50/60 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/5 dark:bg-accent/10 text-secondary dark:text-accent rounded-full text-sm project-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-secondary/10 dark:border-accent/10">
                    <Link
                      href={project.liveLink}
                      className="flex items-center text-secondary dark:text-accent hover:underline project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="flex items-center text-secondary dark:text-accent hover:underline project-link"
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
