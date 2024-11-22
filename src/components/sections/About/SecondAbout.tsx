import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail, Code, Server, Database } from "lucide-react";
import { useGSAP } from "@gsap/react";

export function SecondAbout() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Background animation
    tl.from(".gradient-bg", {
      opacity: 0,
      scale: 1.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Image container reveal with 3D effect
    tl.from(".image-container", {
      opacity: 0,
      rotationY: 45,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4");

    // Add continuous floating animation to image
    gsap.to(".image-container", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Rotating border animation
    gsap.to(".rotating-border", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Content animations with stagger
    tl.from(".content-item", {
      opacity: 0,
      x: 50,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4");

    // Stats counter animation
    const stats = gsap.utils.toArray(".stat-number");
    stats.forEach((stat: any) => {
      tl.from(stat, {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
      }, "-=1.5");
    });

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
      className="py-20 bg-slate-100"
    >
      {/* Gradient background */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 dark:from-accent/5 dark:to-secondary/5" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div 
              ref={imageRef}
              className="image-container relative w-72 h-72 mx-auto lg:w-96 lg:h-96"
            >
              {/* Rotating border effect */}
              <div className="rotating-border absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary via-accent to-secondary dark:from-accent dark:via-secondary dark:to-accent opacity-30" />
              
              {/* Main image */}
              <div className="relative w-full h-full p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 p-1">
                  <Image
                    src="/johndoe.png"
                    width={500}
                    height={500}
                    alt="John Doe"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>

              {/* Stats cards */}
              <div className="absolute -bottom-4 -right-4 bg-background dark:bg-primary p-4 rounded-xl shadow-lg content-item">
                <span className="stat-number text-2xl font-bold text-secondary dark:text-accent" data-target="5">5</span>
                <span className="text-sm text-primary/80 dark:text-background/80">Years of Experience</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-background dark:bg-primary p-4 rounded-xl shadow-lg content-item">
                <span className="stat-number text-2xl font-bold text-secondary dark:text-accent" data-target="50">50</span>
                <span className="text-sm text-primary/80 dark:text-background/80">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="lg:w-1/2 space-y-8">
            <div className="content-item">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                About Me
              </h2>
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-background">
                Crafting Digital Experiences with Passion
              </h3>
            </div>

            <div className="space-y-4">
              <p className="content-item text-lg text-primary/80 dark:text-background/80">
                Full Stack Developer with expertise in building scalable web applications 
                and creating exceptional user experiences. Passionate about clean code 
                and innovative solutions.
              </p>
              <p className="content-item text-lg text-primary/80 dark:text-background/80">
                I specialize in modern web technologies and best practices, always 
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Tech stack */}
            <div className="grid grid-cols-3 gap-4 content-item">
              <div className="text-center p-4 rounded-xl bg-secondary/10 dark:bg-accent/10">
                <Code className="w-8 h-8 mx-auto mb-2 text-secondary dark:text-accent" />
                <span className="text-sm font-medium text-primary dark:text-background">Frontend</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/10 dark:bg-accent/10">
                <Server className="w-8 h-8 mx-auto mb-2 text-secondary dark:text-accent" />
                <span className="text-sm font-medium text-primary dark:text-background">Backend</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/10 dark:bg-accent/10">
                <Database className="w-8 h-8 mx-auto mb-2 text-secondary dark:text-accent" />
                <span className="text-sm font-medium text-primary dark:text-background">Database</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 content-item">
              <Button 
                className="bg-secondary hover:bg-accent text-background transition-colors duration-300"
                onMouseEnter={(e) => handleButtonHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleButtonHover(e.currentTarget, false)}
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button
                variant="outline"
                className="border-primary dark:border-background text-primary dark:text-background hover:bg-primary hover:text-background dark:hover:bg-background dark:hover:text-primary transition-colors duration-300"
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
