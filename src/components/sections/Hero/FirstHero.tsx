import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Code, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FirstHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1 });
      gsap.from(".hero-subtitle", { opacity: 0, y: -30, duration: 1, delay: 0.2 });
      gsap.from(".hero-description", { opacity: 0, y: -20, duration: 1, delay: 0.4 });
      gsap.from(".hero-buttons", { opacity: 0, duration: 1, delay: 0.6 });
      gsap.from(".hero-icons", { opacity: 0, duration: 1, delay: 0.8 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center bg-background dark:bg-primary relative overflow-hidden theme-transition">
      <div className="absolute inset-0 overflow-hidden hide-scrollbar pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-accent dark:bg-secondary opacity-10 rounded-full animate-float"
              style={{
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Ready for new opportunities
          </span>
          <Code className="w-16 h-16 mx-auto text-secondary dark:text-accent theme-transition mt-4" />
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-heading">
          <span className="text-primary dark:text-background">
            Welcome, I&apos;m{" "}
          </span>
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>

        <h2 className="hero-subtitle text-xl md:text-2xl lg:text-3xl mb-6 text-secondary dark:text-accent font-accent italic">
          Full Stack Developer
        </h2>

        <p className="hero-description text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-primary/80 dark:text-background/80 font-body">
          Transforming ideas into elegant, efficient, and scalable web solutions
          with modern technologies and best practices
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>

        <div className="hero-icons mt-8 flex justify-center space-x-4">
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
        </div>
      </div>
    </section>
  );
}
