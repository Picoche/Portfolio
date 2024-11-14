import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a main timeline
      const tl = gsap.timeline();

      // Floating background animation
      gsap.to(".floating-bg", {
        backgroundPosition: "200% 50%",
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Text reveal animation with split text effect
      const chars = gsap.utils.selector(textRef.current)(".animate-text");
      tl.from(chars, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Status badge animation
      tl.from(".status-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      }, "-=0.5");

      // Skill cards stagger animation
      const cards = gsap.utils.selector(cardsRef.current)(".skill-card");
      tl.from(cards, {
        opacity: 0,
        scale: 0.8,
        y: 100,
        rotationY: 45,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3");

      // Continuous floating animation for cards
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(2, 3)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      // Social icons animation
      tl.from(".social-icon", {
        scale: 0,
        opacity: 0,
        rotation: 360,
        stagger: 0.2,
        duration: 0.5,
        ease: "back.out(1.7)",
      }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center bg-background dark:bg-primary relative overflow-hidden theme-transition"
    >
      {/* Animated gradient background */}
      <div 
        ref={backgroundRef}
        className="floating-bg absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(
              45deg, 
              rgba(var(--secondary-rgb), 0.1) 0%,
              rgba(var(--accent-rgb), 0.1) 25%,
              rgba(var(--primary-rgb), 0.1) 50%,
              rgba(var(--accent-rgb), 0.1) 75%,
              rgba(var(--secondary-rgb), 0.1) 100%
            )
          `,
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Introduction */}
          <div ref={textRef} className="lg:w-1/2 space-y-6">
            <span className="status-badge inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Open to opportunities
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold font-heading">
              <span className="text-primary dark:text-background animate-text">
                Hello, I&apos;m{" "}
              </span>
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent animate-text">
                John Doe
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl text-secondary dark:text-accent font-accent">
              Full Stack Developer & DevOps Engineer
            </h2>

            <p className="text-primary/80 dark:text-background/80 font-body text-lg">
              Specializing in building exceptional digital experiences that
              combine elegant frontend designs with robust backend
              architectures.
            </p>

            <div className="flex gap-4 pt-4">
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
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Right Column - Skill Cards */}
          <div ref={cardsRef} className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {skillCards.map(card => (
                <div
                  key={card.title}
                  className={`skill-card bg-gradient-to-br ${card.gradient} p-6 rounded-xl text-background shadow-lg transform transition-transform duration-300 hover:scale-105`}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
