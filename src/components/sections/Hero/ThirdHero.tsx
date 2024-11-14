import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate grid pattern
      tl.from(".bg-grid-pattern", {
        opacity: 0,
        scale: 1.2,
        duration: 1,
        ease: "power2.out",
      });

      // Gradient background animation
      tl.from(".gradient-overlay", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.5");

      // Status badge animation
      tl.from(".status-badge", {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

      // Split and animate heading text
      const headingWords = gsap.utils.toArray(".heading-word");
      tl.from(headingWords, {
        opacity: 0,
        y: 30,
        rotateX: -45,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.2");

      // Animate description
      tl.from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.3");

      // Skill cards stagger animation with 3D effect
      gsap.from(".skill-card", {
        opacity: 0,
        y: 50,
        rotationX: 45,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top center+=100",
        },
      });

      // Continuous floating animation for skill cards
      gsap.utils.toArray(".skill-card").forEach((card: any, i) => {
        gsap.to(card, {
          y: "random(-8, 8)",
          rotation: "random(-2, 2)",
          duration: "random(2, 3)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });

        // Add hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.in",
            overwrite: "auto",
          });
        });
      });

      // Button animations
      tl.from(".hero-button", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.7)",
      }, "-=0.2");

      // Technology tags animation
      gsap.from(".tech-tag", {
        scale: 0,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top center+=100",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-background dark:bg-primary relative overflow-hidden theme-transition"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Gradient overlay */}
      <div className="gradient-overlay absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="space-y-12">
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="status-badge inline-block px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-accent text-sm font-medium mb-6">
              Full Stack Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
              {"John Doe".split(" ").map((word, i) => (
                <span key={i} className="heading-word inline-block mr-4 bg-gradient-to-r from-primary via-secondary to-accent dark:from-background dark:via-accent dark:to-secondary bg-clip-text text-transparent">
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero-description text-lg md:text-xl text-primary/80 dark:text-background/80 font-body">
              Transforming complex problems into elegant solutions through code
            </p>
          </div>

          {/* Skills grid */}
          <div ref={gridRef} className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className={`skill-card ${skill.color} rounded-2xl p-6 text-background`}
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
                      className="tech-tag px-3 py-1 bg-background/10 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button
              asChild
              className="hero-button group bg-secondary hover:bg-accent text-background"
            >
              <Link href="#projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hero-button group border-secondary text-secondary hover:bg-secondary hover:text-background dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-background"
            >
              <Link href="#contact" className="flex items-center">
                Contact Me
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
