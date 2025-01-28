import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function FirstAbout() {
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

    // Heading animation
    tl.from(".about-heading", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    });

    // Image container animation with floating effect
    tl.from(".image-container", {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.4");

    // Add continuous floating animation to image
    gsap.to(".image-container", {
      y: -10,
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

    // Content animations with stagger
    tl.from(".content-section > *", {
      opacity: 0,
      x: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6");

    // Skills animation with stagger and scale
    tl.from(".skill-tag", {
      opacity: 0,
      scale: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Buttons animation
    tl.from(".about-button", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background-dark transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
      <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          À Propos
      </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div 
              ref={imageRef}
              className="image-container relative w-64 h-64 mx-auto lg:w-80 lg:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 dark:from-secondary-dark/20 dark:to-accent-dark/20 rounded-full blur-xl transition-colors duration-200" />
              <Image
                src="/johndoe.png"
                width={500}
                height={500}
                alt="John Doe"
                className="rounded-full shadow-lg relative z-10"
              />
              <div className="absolute inset-0 rounded-full border-2 border-secondary dark:border-secondary-dark z-20 transition-colors duration-200" />
            </div>
          </div>

          <div ref={contentRef} className="lg:w-1/2 content-section">
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-primary-dark font-heading transition-colors duration-200">
              Fabien Hombert, Concepteur-Développeur
            </h3>
            <p className="text-lg mb-6 text-primary/80 dark:text-primary-dark/80 font-body transition-colors duration-200">
              Passionné depuis tout petit par l'informatique, je me spécialise 
              dans la conception d'applications Web comme Mobile de A à Z,
              du design primaire jusqu'au fonctionnel.
            </p>
            <p className="text-lg mb-6 text-primary/80 dark:text-primary-dark/80 font-body transition-colors duration-200">
              Toujours à l'affut des dernières technologies et bonnes pratiques,
              je travaille avec une trousse à outil moderne me permettant de garantir
              accessibilité et performance au travers de mes projets, sans pour autant
              délaisser le visuel.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "TypeScript",
                "Next.js",
                "React/Native",
                "TailwindCSS",
                "PHP",
                "Laravel",
                "SQL, noSQL",
                "MongoDB",
                "Firebase",
                "Docker",
                "Git, GitLab",
                "Linux"
              ].map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-3 py-1 bg-secondary dark:bg-secondary-dark text-background dark:text-background-dark rounded-full text-sm font-body transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
