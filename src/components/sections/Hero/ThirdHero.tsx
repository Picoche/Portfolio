import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Server,
  Wrench,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: Monitor,
    description: "Crafting beautiful and responsive user interfaces",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    color: "bg-accent dark:bg-secondary",
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Building robust and scalable server-side applications",
    technologies: ["Node.js", "Python", "PostgreSQL"],
    color: "bg-secondary dark:bg-accent",
  },
  {
    title: "DevOps & Cloud",
    icon: Wrench,
    description: "Streamlining development and deployment workflows",
    technologies: ["Docker", "AWS", "CI/CD"],
    color: "bg-primary dark:bg-accent/30",
  },
];

export function ThirdHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background dark:bg-primary relative overflow-hidden theme-transition">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header section */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-accent text-sm font-medium mb-6">
              Full Stack Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading bg-gradient-to-r from-primary via-secondary to-accent dark:from-background dark:via-accent dark:to-secondary bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-lg md:text-xl text-primary/80 dark:text-background/80 font-body">
              Transforming complex problems into elegant solutions through code
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`${skill.color} rounded-2xl p-6 text-background dark:text-background transform transition-transform duration-300 hover:shadow-xl`}
              >
                <skill.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3 font-heading">
                  {skill.title}
                </h3>
                <p className="font-body mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background/10 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          >
            <Button
              asChild
              className="group bg-secondary hover:bg-accent text-background transition-all duration-300"
            >
              <Link href="#projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group border-secondary text-secondary hover:bg-secondary hover:text-background dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-background transition-all duration-300"
            >
              <Link href="#contact" className="flex items-center">
                Contact Me
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
