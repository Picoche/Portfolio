import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Code, Server, Database, Cloud } from "lucide-react";

interface Skill {
  category: string;
  icon: any;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "GSAP Animations", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    category: "Database Management",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git/GitHub", level: 90 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

export function FirstSkills() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate section title
    tl.from(".section-title", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Animate skill categories with stagger
    tl.from(".skill-category", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.2");

    // Animate progress bars
    gsap.from(".progress-bar", {
      scaleX: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top center+=100",
      },
    });

    // Floating animation for icons
    gsap.to(".floating-icon", {
      y: -5,
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
      scale: isEntering ? 1.02 : 1,
      y: isEntering ? -5 : 0,
      duration: 0.3,
      ease: isEntering ? "power2.out" : "power2.in",
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-100 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Technical Expertise
        </h2>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-white dark:bg-primary-dark rounded-2xl p-6 shadow-lg border border-secondary/20 dark:border-accent/20"
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/10">
                  <category.icon className="floating-icon w-6 h-6 text-secondary dark:text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-background">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-primary/80 dark:text-background/80 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-secondary dark:text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/10 dark:bg-accent/10 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar h-full bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary rounded-full"
                        style={{ width: `${skill.level}%`, transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 