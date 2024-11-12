import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-background dark:bg-primary theme-transition">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 heading-gradient text-center theme-transition"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 section-enter section-enter-active"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80 interactive-hover">
              <Image
                src="/johndoe.png"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-gradient"></div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-background font-heading">
              Hi there! I&apos;m John Doe
            </h3>
            <p className="text-lg mb-6 text-primary dark:text-background font-body">
              I&apos;m a passionate Full Stack Developer with over 5 years of
              experience in crafting robust and scalable web applications. My
              expertise spans across the entire development stack, from
              designing intuitive user interfaces to architecting efficient
              backend systems.
            </p>
            <p className="text-lg mb-6 text-primary dark:text-background font-body">
              I thrive on solving complex problems and turning innovative ideas
              into reality. My approach combines clean code practices,
              user-centric design, and cutting-edge technologies to deliver
              exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Python",
                "AWS",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary dark:bg-accent text-background rounded-full text-sm font-body"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-secondary hover:bg-accent text-background transition-colors duration-300">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button
                variant="outline"
                className="border-primary dark:border-background text-primary dark:text-background hover:bg-primary hover:text-background dark:hover:bg-background dark:hover:text-primary transition-colors duration-300"
              >
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
