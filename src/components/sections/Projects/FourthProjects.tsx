import { useRef, useState } from "react";
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
    description: "Next-gen shopping experience",
    longDescription:
      "A comprehensive e-commerce solution with modern features including real-time inventory, AI-powered recommendations, and seamless payment integration.",
    image: "/ecommerce.jpg",
    category: "Full Stack",
    featured: true,
    year: "2024",
    metrics: {
      users: "10K+",
      transactions: "50K+",
      uptime: "99.9%",
    },
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Globe,
  },
  {
    title: "Task Management App",
    description: "Smart team collaboration",
    longDescription:
      "An intuitive task management platform with real-time updates, AI task prioritization, and team analytics dashboard.",
    image: "/ecommerce.jpg",
    category: "Web App",
    featured: false,
    year: "2023",
    metrics: {
      teams: "500+",
      tasks: "100K+",
      efficiency: "40%↑",
    },
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Blocks,
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent support automation",
    longDescription:
      "Advanced customer support automation using natural language processing and machine learning for personalized responses.",
    image: "/ecommerce.jpg",
    category: "AI/ML",
    featured: true,
    year: "2024",
    metrics: {
      responses: "1M+",
      accuracy: "98%",
      satisfaction: "4.9/5",
    },
    technologies: ["Python", "TensorFlow", "React", "Flask", "Docker"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    icon: Code,
  },
];

export function FourthProjects() {
  const sectionRef = useRef(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Background animations
      tl.from(".pattern-bg", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Title animations
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
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // Metrics counter animation
      gsap.utils.toArray(".metric-value").forEach((value: any) => {
        gsap.from(value, {
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: value,
            start: "top center+=100",
          },
        });
      });

      // Floating icons animation
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

  // Handle hover and click animations
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

  const handleProjectClick = contextSafe((index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
      return;
    }

    setActiveProject(index);
    gsap.to(`.project-card`, {
      scale: 0.95,
      opacity: 0.5,
      duration: 0.4,
    });
    gsap.to(`.project-card-${index}`, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
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
          <p className="text-lg text-primary/80 dark:text-slate-50/80 max-w-2xl mx-auto">
            A showcase of my latest work combining innovative design with
            cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card project-card-${index} cursor-pointer ${
                activeProject !== null && activeProject !== index
                  ? "opacity-50"
                  : ""
              }`}
              onClick={() => handleProjectClick(index)}
            >
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-secondary/20 dark:border-accent/20"
                onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleHover(e.currentTarget, false)}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                        {project.category}
                      </span>
                    </div>
                    <project.icon className="floating-icon absolute top-4 right-4 w-8 h-8 text-white" />
                  </div>

                  <div className="lg:w-1/2 p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-primary dark:text-slate-50">
                        {project.title}
                      </h3>
                      <span className="text-sm text-primary/60 dark:text-slate-50/60">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-primary/80 dark:text-slate-50/80 mb-6">
                      {activeProject === index
                        ? project.longDescription
                        : project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div
                            className="metric-value text-xl font-bold text-secondary dark:text-accent"
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

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary/5 dark:bg-accent/10 text-secondary dark:text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
