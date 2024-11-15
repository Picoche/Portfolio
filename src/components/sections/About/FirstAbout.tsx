import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";

export function FirstAbout() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Heading animation
    tl.from(".about-heading", {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: "power2.out",
    });

    // Image container animation with floating effect
    tl.from(".image-container", {
      opacity: 0,
      x: -50,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

    // Add continuous floating animation to image
    gsap.to(".image-container", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Content animations with stagger
    tl.from(".content-section > *", {
      opacity: 0,
      x: 50,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");

    // Skills animation with stagger and scale
    tl.from(".skill-tag", {
      opacity: 0,
      scale: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.2");

    // Buttons animation
    tl.from(".about-button", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

  }, { scope: sectionRef });

  // Handle button hover animations
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleButtonHover = contextSafe((button: HTMLElement, isEntering: boolean) => {
    gsap.to(button, {
      scale: isEntering ? 1.05 : 1,
      duration: 0.3,
      ease: isEntering ? "power2.out" : "power2.in",
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background dark:bg-primary theme-transition"
    >
      <div className="container mx-auto px-4">
        <h2 className="about-heading text-3xl md:text-4xl font-bold mb-12 heading-gradient text-center theme-transition">
          About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div 
              ref={imageRef}
              className="image-container relative w-64 h-64 mx-auto lg:w-80 lg:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 dark:from-accent/20 dark:to-secondary/20 rounded-full blur-xl" />
              <Image
                src="/johndoe.png"
                width={500}
                height={500}
                alt="John Doe"
                className="rounded-full shadow-lg relative z-10"
              />
              <div className="absolute inset-0 rounded-full border-2 border-secondary dark:border-accent z-20" />
            </div>
          </div>

          <div ref={contentRef} className="lg:w-1/2 content-section">
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
                  className="skill-tag px-3 py-1 bg-secondary dark:bg-accent text-background rounded-full text-sm font-body"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="about-button bg-secondary hover:bg-accent text-background transition-colors duration-300"
                onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button
                variant="outline"
                className="about-button border-primary dark:border-background text-primary dark:text-background hover:bg-primary hover:text-background dark:hover:bg-background dark:hover:text-primary transition-colors duration-300"
                onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
              >
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
