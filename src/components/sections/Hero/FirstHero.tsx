import { useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Code, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";

export function FirstHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingParticlesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Fade in background and particles
    tl.from(floatingParticlesRef.current, {
      opacity: 0,
      scale: 1.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate status badge with bounce
    tl.from(".status-badge", {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.6");

    // Animate code icon with rotation
    tl.from(".code-icon", {
      scale: 0,
      rotation: 360,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.2");

    // Animate title text
    const headingWords = gsap.utils.toArray(".hero-title > div > span");
    tl.from(headingWords, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.08,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.2");

    // Animate subtitle with wave effect
    tl.from(".hero-subtitle > span", {
      opacity: 0,
      y: 20,
      stagger: 0.03,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

    // Animate description with words effect
    tl.from(".hero-description > span", {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

    // Buttons and social icons animation
    tl.from([".hero-button", ".social-icon"], {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.2");

    // Create floating particles animation
    const particles = gsap.utils.toArray(".floating-particle");
    particles.forEach((particle: any) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Button hover animations
    const buttons = gsap.utils.toArray(".hero-button");
    buttons.forEach((button: any) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        });
      });
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center bg-background dark:bg-background-dark justify-center relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div ref={floatingParticlesRef} className="absolute inset-0 overflow-hidden hide-scrollbar pointer-events-none hero-bg">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="floating-particle absolute bg-accent/10 dark:bg-background opacity-10 rounded-full"
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
          <span className="status-badge inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-secondary dark:bg-primary-dark/10 dark:text-primary-dark mb-8">
            <span className="w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full mr-2 animate-pulse" />
            Ready for new opportunities
          </span>
          <Code className="code-icon w-16 h-16 mx-auto text-secondary dark:text-secondary-dark mt-4" />
        </div>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-heading text-primary dark:text-primary-dark">
          <div className="text-primary dark:text-primary-dark">
            {/* Split each word into a span */}
            {"Welcome, I'm".split(" ").map((word, i) => (
              <span key={i} className="inline-block">
                {word}&nbsp;
              </span>
            ))}
          </div>
          <div className="text-transparent bg-gradient-to-r from-secondary to-accent dark:from-primary-dark dark:to-accent-dark bg-clip-text">
            {/* Split name into spans */}
            {"John Doe".split(" ").map((word, i) => (
              <span key={i} className="inline-block">
                {word}&nbsp;
              </span>
            ))}
          </div>
        </h1>

        <h2 className="hero-subtitle text-xl md:text-2xl lg:text-3xl mb-6 text-secondary dark:text-secondary-dark/90 font-accent italic">
          {/* Split subtitle into spans */}
          {"Full Stack Developer".split(" ").map((word, i) => (
            <span key={i} className="inline-block">
              {word}&nbsp;
            </span>
          ))}
        </h2>

        <p className="hero-description text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-primary/80 dark:text-primary-dark/90 font-body">
          {/* Split description into spans */}
          {"Transforming ideas into elegant, efficient, and scalable web solutions with modern technologies and best practices"
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block">
                {word}&nbsp;
              </span>
            ))}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="hero-button group bg-secondary hover:bg-accent text-background dark:bg-primary-dark dark:hover:bg-accent-dark dark:text-background-dark"
          >
            <Link href="#projects" className="flex items-center">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hero-button group bg-secondary hover:bg-accent text-background dark:bg-primary-dark dark:hover:bg-accent-dark dark:text-background-dark"
          >
            <Link href="#contact" className="flex items-center">
              Contact Me
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-primary dark:text-primary-dark hover:text-secondary dark:hover:text-accent-dark"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-primary dark:text-primary-dark hover:text-secondary dark:hover:text-accent-dark"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
