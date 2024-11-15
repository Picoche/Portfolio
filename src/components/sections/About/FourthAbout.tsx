import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail, Laptop, Server, Globe, Blocks} from "lucide-react";
import { useGSAP } from "@gsap/react";

const experienceCards = [
  { number: "5+", label: "Years of Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "3", label: "Company Awards" },
];

const techStack = [
  { icon: Laptop, label: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { icon: Server, label: "Backend", items: ["Node.js", "Python", "Java"] },
  { icon: Blocks, label: "Database", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { icon: Globe, label: "DevOps", items: ["Docker", "AWS", "CI/CD"] },
];

export function FourthAbout() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate the background pattern
    tl.from(".pattern-bg", {
      opacity: 0,
      scale: 1.2,
      duration: 1,
      ease: "power2.out",
    });

    // Heading animations
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Image container animation with 3D effect
    tl.from(".image-container", {
      opacity: 0,
      rotationY: 30,
      transformOrigin: "left center",
      duration: 1,
      ease: "power2.out",
    }, "-=0.3");

    // Experience cards stagger animation
    tl.from(".experience-card", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.5");

    // Tech stack cards animation
    tl.from(".tech-card", {
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

    // Animate numbers
    gsap.utils.toArray(".number-counter").forEach((counter: any) => {
      gsap.from(counter, {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top center+=100",
        },
      });
    });

    // Continuous animations
    gsap.to(".floating-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.5,
        from: "random",
      },
    });

  }, { scope: sectionRef });

  // Handle hover animations
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleHover = contextSafe((element: HTMLElement, isEntering: boolean) => {
    gsap.to(element, {
      scale: isEntering ? 1.05 : 1,
      y: isEntering ? -5 : 0,
      duration: 0.3,
      ease: isEntering ? "power2.out" : "power2.in",
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background dark:bg-primary theme-transition relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Image and experience */}
          <div className="lg:col-span-1">
            <div className="image-container relative">
              <div className="relative w-64 h-64 mx-auto lg:w-full lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-2xl blur-xl" />
                <Image
                  src="/johndoe.png"
                  alt="John Doe"
                  width={500}
                  height={500}
                  className="rounded-2xl relative z-10 object-cover w-full h-full"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-secondary/20 dark:border-accent/20 z-20" />
              </div>

              {/* Experience cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {experienceCards.map((card) => (
                  <div
                    key={card.label}
                    className="experience-card bg-secondary/5 dark:bg-accent/5 rounded-xl p-4 text-center cursor-pointer"
                    onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                    onMouseLeave={(e) => handleHover(e.currentTarget, false)}
                  >
                    <div 
                      className="number-counter text-2xl font-bold text-secondary dark:text-accent"
                      data-value={parseInt(card.number)}
                    >
                      {card.number}
                    </div>
                    <div className="text-sm text-primary/60 dark:text-background/60">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Content and tech stack */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg dark:prose-invert">
              <h3 className="text-2xl font-bold text-primary dark:text-background">
                Crafting Digital Excellence
              </h3>
              <p className="text-primary/80 dark:text-background/80">
                As a Full Stack Developer with a passion for creating seamless digital experiences,
                I bring ideas to life through clean code and innovative solutions. My journey in
                tech has been driven by a constant desire to learn and evolve with the rapidly
                changing landscape of web development.
              </p>
              <p className="text-primary/80 dark:text-background/80">
                I specialize in building scalable applications that combine powerful backend
                systems with intuitive frontend interfaces. My approach focuses on delivering
                solutions that not only meet technical requirements but also exceed user expectations.
              </p>
            </div>

            {/* Tech stack grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.label}
                  className="tech-card bg-secondary/5 dark:bg-accent/5 rounded-xl p-6 cursor-pointer"
                  onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                  onMouseLeave={(e) => handleHover(e.currentTarget, false)}
                >
                  <tech.icon className="floating-icon w-8 h-8 text-secondary dark:text-accent mb-4" />
                  <h4 className="text-lg font-semibold text-primary dark:text-background mb-3">
                    {tech.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary/10 dark:bg-accent/10 rounded-full text-sm text-primary/80 dark:text-background/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-secondary hover:bg-accent text-background transition-colors duration-300"
                onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleHover(e.currentTarget, false)}
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button
                variant="outline"
                className="border-primary dark:border-background text-primary dark:text-background hover:bg-primary hover:text-background dark:hover:bg-background dark:hover:text-primary transition-colors duration-300"
                onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleHover(e.currentTarget, false)}
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
