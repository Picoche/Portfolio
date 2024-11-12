import { motion } from "framer-motion";
import { ArrowRight, Code, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FirstHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background dark:bg-primary relative overflow-hidden theme-transition">
      <div className="absolute inset-0 overflow-hidden hide-scrollbar pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-accent dark:bg-secondary opacity-10 rounded-full animate-float"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Ready for new opportunities
          </span>
          <Code className="w-16 h-16 mx-auto text-secondary dark:text-accent theme-transition mt-4" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-primary dark:text-background">
            Welcome, I&apos;m{" "}
          </span>
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            John Doe
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl mb-6 text-secondary dark:text-accent font-accent italic"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-primary/80 dark:text-background/80 font-body"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Transforming ideas into elegant, efficient, and scalable web solutions
          with modern technologies and best practices
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
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

        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
