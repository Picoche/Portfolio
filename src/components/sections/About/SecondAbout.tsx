import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Code, Server, Database } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function SecondAbout() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
      },
    });

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
      scrollTrigger: {
        trigger: ".image-container",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
    });

    // Rotating border animation
    gsap.to(".rotating-border", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      scrollTrigger: {
        trigger: ".rotating-border",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
    });

    // Content animations with stagger
    tl.from(".content-item", {
      opacity: 0,
      x: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4");

    // Stats counter animation
    const stats = gsap.utils.toArray(".stat-number");
    stats.forEach((stat: any) => {
      tl.from(stat, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: {
          each: 0.2,
          onUpdate: function() {
            stat.textContent = Math.ceil(parseFloat(stat.textContent));
          },
        },
      }, "-=1.5");
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative transition-colors duration-200"
    >
      {/* Gradient background */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 dark:from-accent/5 dark:to-secondary/5 transition-colors duration-200" />

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
              <div className="absolute -bottom-4 -right-4 bg-background dark:bg-gray-800 p-4 rounded-xl shadow-lg content-item transition-colors duration-200">
                <span className="stat-number text-2xl font-bold text-secondary dark:text-accent transition-colors duration-200" data-target="5">5</span>
                <span className="text-sm text-primary/80 dark:text-slate-50/80 transition-colors duration-200">Years of Experience</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-background dark:bg-gray-800 p-4 rounded-xl shadow-lg content-item transition-colors duration-200">
                <span className="stat-number text-2xl font-bold text-secondary dark:text-accent transition-colors duration-200" data-target="50">50</span>
                <span className="text-sm text-primary/80 dark:text-slate-50/80 transition-colors duration-200">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="lg:w-1/2 space-y-8">
            <div className="content-item">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent transition-colors duration-200">
                About Me
              </h2>
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-slate-50 transition-colors duration-200">
                Crafting Digital Experiences with Passion
              </h3>
            </div>

            <div className="space-y-4">
              <p className="content-item text-lg text-primary/80 dark:text-slate-50/80 transition-colors duration-200">
                Full Stack Developer with expertise in building scalable web applications 
                and creating exceptional user experiences. Passionate about clean code 
                and innovative solutions.
              </p>
              <p className="content-item text-lg text-primary/80 dark:text-slate-50/80 transition-colors duration-200">
                I specialize in modern web technologies and best practices, always 
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Tech stack */}
            <div className="grid grid-cols-3 gap-4 content-item">
              <div className="text-center p-4 rounded-xl bg-secondary/10 dark:bg-accent/20 transition-colors duration-200">
                <Code className="w-8 h-8 mx-auto mb-2 text-secondary dark:text-accent transition-colors duration-200" />
                <span className="text-sm font-medium text-primary dark:text-slate-50 transition-colors duration-200">Frontend</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/10 dark:bg-accent/20 transition-colors duration-200">
                <Server className="w-8 h-8 mx-auto mb-2 text-secondary dark:text-accent transition-colors duration-200" />
                <span className="text-sm font-medium text-primary dark:text-slate-50 transition-colors duration-200">Backend</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/10 dark:bg-accent/20 transition-colors duration-200">
                <Database className="w-8 h-8 mx-auto mb-2 text-secondary dark:text-accent transition-colors duration-200" />
                <span className="text-sm font-medium text-primary dark:text-slate-50 transition-colors duration-200">Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
