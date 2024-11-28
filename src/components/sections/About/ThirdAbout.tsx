import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Code, Database, Cloud, Globe, Star, Zap } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  { icon: Star, label: "5+ Years", desc: "Experience" },
  { icon: Globe, label: "50+", desc: "Projects" },
  { icon: Zap, label: "30+", desc: "Happy Clients" },
  { icon: Cloud, label: "99%", desc: "Uptime" },
];

export function ThirdAbout() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
      },
    });

    // Grid background animation
    tl.from(".grid-bg", {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate achievements with stagger
    tl.from(".achievement-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4");

    // Animate icons with continuous rotation
    gsap.to(".achievement-icon", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      scrollTrigger: {
        trigger: ".achievement-icon",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
    });

    // Animate skill sections
    tl.from(".skill-section", {
      opacity: 0,
      x: -30,
      stagger: 0.3,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6");

    // Animate progress bars
    gsap.from(".progress-bar", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".progress-bar",
        start: "top center+=100",
        toggleActions: "play none none reset",
      },
    });

    // Image reveal with mask effect
    tl.from(".image-reveal", {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.5");

    // Achievements counter animation
    gsap.utils.toArray(".achievement-number").forEach((number: any) => {
      gsap.from(number, {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
        scrollTrigger: {
          trigger: number,
          start: "top center+=100",
        },
      });
    });

    // Content reveal animations
    tl.from(".content-title", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.4");

    tl.from(".content-text", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

    // Skills animation with stagger
    tl.from(".skill-item", {
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.2");

    // Achievement cards animation
    tl.from(".achievement-card", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.3");

    // Continuous floating animation for achievement cards
    gsap.utils.toArray(".achievement-card").forEach((card: any) => {
      gsap.to(card, {
        y: "random(-5, 5)",
        duration: "random(2, 3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background-dark relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column - Image and achievements */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative">
              <div className="image-reveal relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/johndoe.png"
                  alt="John Doe"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 dark:from-secondary-dark/20 dark:to-accent-dark/20 mix-blend-overlay" />
              </div>
              
              {/* Achievement cards grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map(item => (
                  <div
                    key={item.label}
                    className="achievement-card bg-background dark:bg-primary shadow-lg rounded-xl p-4 border border-secondary/20 dark:border-accent/20"
                  >
                    <item.icon className="w-8 h-8 text-secondary dark:text-accent mb-2 achievement-icon" />
                    <div className="achievement-number font-bold text-2xl text-secondary dark:text-accent" data-value={parseInt(item.label)}>
                      {item.label}
                    </div>
                    <div className="text-sm text-primary/60 dark:text-background/60">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="content-title text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                About Me
              </h2>
              <h3 className="content-title text-2xl font-bold mb-6 text-primary dark:text-background">
                Turning Vision Into Reality With Code And Design
              </h3>
            </div>

            <div className="space-y-4">
              <p className="content-text text-lg text-primary/80 dark:text-background/80">
                As a Full Stack Developer with 5+ years of experience, I blend technical expertise 
                with creative problem-solving to build scalable, user-centric applications.
              </p>
              <p className="content-text text-lg text-primary/80 dark:text-background/80">
                My approach combines clean code principles with modern design patterns, 
                ensuring both functionality and maintainability in every project.
              </p>
            </div>

            {/* Skills section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4 skill-section">
                <h4 className="font-semibold text-primary dark:text-background">Frontend</h4>
                {["React", "Next.js", "TypeScript"].map((skill) => (
                  <div key={skill} className="skill-item flex items-center gap-2">
                    <Code className="w-4 h-4 text-secondary dark:text-accent" />
                    <span className="text-primary/80 dark:text-background/80">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 skill-section">
                <h4 className="font-semibold text-primary dark:text-background">Backend</h4>
                {["Node.js", "Python", "PostgreSQL"].map((skill) => (
                  <div key={skill} className="skill-item flex items-center gap-2">
                    <Database className="w-4 h-4 text-secondary dark:text-accent" />
                    <span className="text-primary/80 dark:text-background/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
