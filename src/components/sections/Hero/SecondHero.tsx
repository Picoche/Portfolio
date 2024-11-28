import { useRef } from "react";
import { gsap } from "gsap";
import { Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export function SecondHero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Main animations
  useGSAP(() => {
    const tl = gsap.timeline();

    // Gradient background animation - faster
    tl.from(".gradient-bg", {
      opacity: 0,
      scale: 1.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Status badge animation - faster
    tl.from(".status-badge", {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.6");

    // Heading animations with split text - faster
    const headingWords = gsap.utils.toArray(".heading-word");
    tl.from(headingWords, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.08,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.2");

    // Description paragraph reveal - faster
    tl.from(".hero-description", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

    // Buttons stagger animation - faster
    tl.from(".hero-button", {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

    // Enhanced image reveal animation
    tl.from(".image-wrapper", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4")
    .from(".image-gradient-border", {
      opacity: 0,
      scale: 1.2,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.6")
    .from(".profile-image", {
      scale: 1.4,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4");

    // Floating animation for the entire image container
    gsap.to(".image-wrapper", {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Rotating gradient border animation
    gsap.to(".image-gradient-border", {
      rotate: 360,
      duration: 15,
      repeat: -1,
      ease: "none",
    });

    // Floating code icon animation - faster and larger range
    gsap.to(".floating-icon", {
      y: 20,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, { scope: sectionRef });

  // Handle mouse parallax separately with contextSafe
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleMouseMove = contextSafe((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 15;
    const yPos = (clientY / window.innerHeight - 0.5) * 15;

    // Move image container
    gsap.to(".parallax-image", {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: "power2.out",
    });

    // Move gradient border in opposite direction for depth effect
    gsap.to(".image-gradient-border", {
      x: -xPos * 0.5,
      y: -yPos * 0.5,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-gray-900 relative overflow-hidden py-20 sm:py-32 transition-colors duration-200"
      onMouseMove={(e) => handleMouseMove(e as unknown as MouseEvent)}
    >
      {/* Gradient background */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 dark:from-primary/5 dark:via-transparent dark:to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left space-y-6 max-w-xl mx-auto lg:mx-0">
            <div className="inline-block">
              <span className="status-badge px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/10 dark:bg-primary/10 text-secondary dark:text-primary text-sm font-medium">
                Available for work
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary dark:text-slate-50">
              {"Crafting Digital".split(" ").map((word, i) => (
                <span key={i} className="heading-word inline-block mr-3 sm:mr-4">
                  {word}
                </span>
              ))}
              <br />
              <span className="heading-word inline-block text-secondary dark:text-accent mt-2">
                Experiences
              </span>
            </h1>

            <p className="hero-description text-base sm:text-lg text-primary/80 dark:text-slate-50/90 font-body max-w-md">
              Full-stack developer specializing in building exceptional digital
              experiences. Currently focused on creating accessible,
              human-centered products.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                className="hero-button bg-secondary hover:bg-accent text-background dark:bg-primary dark:text-background dark:hover:bg-accent transition-colors duration-200"
              >
                <Link href="#projects" className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="hero-button border-secondary text-secondary hover:bg-secondary hover:text-background dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-background transition-colors duration-200"
              >
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="parallax-wrapper relative mt-8 lg:mt-0">
            <div className="decorative-blur absolute -inset-4 bg-gradient-to-r from-secondary to-accent opacity-30 dark:from-primary dark:to-accent dark:opacity-20 blur-3xl" />

            <div ref={imageRef} className="relative">
              <div className="image-wrapper w-full aspect-square max-w-sm sm:max-w-md mx-auto">
                {/* Rotating gradient border */}
                <div className="image-gradient-border absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary dark:from-primary dark:via-accent dark:to-primary rounded-2xl opacity-50" />
                
                {/* Main image container */}
                <div className="image-container relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 dark:from-primary/20 dark:to-accent/20 p-1 z-10">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-background dark:bg-gray-900">
                    <div className="parallax-image relative w-full h-full transform">
                      <Image
                        src="/johndoe.png"
                        width={500}
                        height={500}
                        alt="John Doe"
                        className="profile-image w-full h-full object-cover transform"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-icon absolute -bottom-6 -right-6 bg-secondary dark:bg-primary text-background p-4 rounded-2xl shadow-lg">
                <Code size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
