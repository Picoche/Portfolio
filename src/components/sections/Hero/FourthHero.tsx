import { motion } from "framer-motion";
import {
  Code,
  Github,
  Linkedin,
  Monitor,
  Server,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const skillCards = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
    gradient: "from-secondary to-accent",
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL"],
    gradient: "from-accent to-secondary",
  },
  {
    icon: Wrench,
    title: "DevOps",
    skills: ["Docker", "AWS", "CI/CD"],
    gradient: "from-primary to-secondary dark:from-background dark:to-accent",
  },
  {
    icon: Code,
    title: "Best Practices",
    skills: ["Clean Code", "Testing", "Documentation"],
    gradient: "from-secondary to-primary dark:from-accent dark:to-background",
  },
];

export function FourthHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background dark:bg-primary relative overflow-hidden theme-transition">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 animate-gradient-xy pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold font-heading"
            >
              <span className="text-primary dark:text-background">
                Hello, I&apos;m{" "}
              </span>
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                John Doe
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-secondary dark:text-accent font-accent"
            >
              Full Stack Developer & DevOps Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary/80 dark:text-background/80 font-body text-lg"
            >
              Specializing in building exceptional digital experiences that
              combine elegant frontend designs with robust backend
              architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="group bg-secondary hover:bg-accent text-background transition-all duration-300"
              >
                <Link href="#projects" className="flex items-center">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-background dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-background transition-all duration-300"
              >
                <Link href="#contact">Let&apos;s Connect</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Skill Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              {skillCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${card.gradient} p-6 rounded-xl text-background shadow-lg`}
                >
                  <card.icon size={32} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2 font-heading">
                    {card.title}
                  </h3>
                  <div className="space-y-1">
                    {card.skills.map((skill) => (
                      <p key={skill} className="font-body text-sm">
                        {skill}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
