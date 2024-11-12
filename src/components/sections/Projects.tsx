import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application built with Vue.js and Firebase. Includes real-time updates, task prioritization, and team collaboration features.",
    image: "/task-management.png",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot using natural language processing to provide customer support. Built with Python, TensorFlow, and integrated with a React frontend.",
    image: "/ai-chatbot.png",
    technologies: ["Python", "TensorFlow", "React", "Flask", "Docker"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

export function Projects() {
  return (
    <section className="py-20 bg-background dark:bg-primary theme-transition">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 heading-gradient text-center theme-transition"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-primary-dark rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 interactive-hover theme-transition"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary dark:text-background font-heading">
                  {project.title}
                </h3>
                <p className="text-primary dark:text-background mb-4 font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent rounded-full text-sm font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.liveLink}
                    className="interactive-hover interactive-press theme-transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    className="text-secondary dark:text-accent hover:underline font-body flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            asChild
            className="bg-secondary hover:bg-accent text-background transition-colors duration-300"
          >
            <Link href="/projects">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
