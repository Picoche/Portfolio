import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Code, Server, Database, Cloud, Braces, Globe } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: any;
  color: string;
  skills: {
    name: string;
    proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    years: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code,
    color: "from-secondary to-accent",
    skills: [
      { name: "React/Next.js", proficiency: "Expert", years: 4 },
      { name: "TypeScript", proficiency: "Expert", years: 3 },
      { name: "Tailwind CSS", proficiency: "Expert", years: 3 },
      { name: "GSAP", proficiency: "Advanced", years: 2 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-accent to-secondary",
    skills: [
      { name: "Node.js", proficiency: "Expert", years: 4 },
      { name: "Python", proficiency: "Advanced", years: 3 },
      { name: "GraphQL", proficiency: "Advanced", years: 2 },
      { name: "REST APIs", proficiency: "Expert", years: 4 },
    ],
  },
  {
    name: "Database",
    icon: Database,
    color: "from-secondary/80 to-accent/80",
    skills: [
      { name: "PostgreSQL", proficiency: "Expert", years: 4 },
      { name: "MongoDB", proficiency: "Advanced", years: 3 },
      { name: "Redis", proficiency: "Intermediate", years: 2 },
      { name: "Firebase", proficiency: "Advanced", years: 3 },
    ],
  },
  {
    name: "DevOps",
    icon: Cloud,
    color: "from-accent/80 to-secondary/80",
    skills: [
      { name: "Docker", proficiency: "Advanced", years: 3 },
      { name: "AWS", proficiency: "Advanced", years: 3 },
      { name: "CI/CD", proficiency: "Advanced", years: 3 },
      { name: "Kubernetes", proficiency: "Intermediate", years: 2 },
    ],
  },
  {
    name: "Tools",
    icon: Braces,
    color: "from-secondary/60 to-accent/60",
    skills: [
      { name: "Git", proficiency: "Expert", years: 5 },
      { name: "VS Code", proficiency: "Expert", years: 5 },
      { name: "Webpack", proficiency: "Advanced", years: 3 },
      { name: "Jest", proficiency: "Advanced", years: 3 },
    ],
  },
  {
    name: "Other",
    icon: Globe,
    color: "from-accent/60 to-secondary/60",
    skills: [
      { name: "SEO", proficiency: "Advanced", years: 3 },
      { name: "Analytics", proficiency: "Advanced", years: 3 },
      { name: "Performance", proficiency: "Expert", years: 4 },
      { name: "Security", proficiency: "Advanced", years: 3 },
    ],
  },
];

const proficiencyToLevel = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

export function SecondSkills() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Category buttons animation
      tl.from(
        ".category-button",
        {
          opacity: 0,
          x: -30,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Skills container animation
      tl.from(".skills-container", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      });

      // Skill bars animation
      gsap.from(".skill-bar", {
        width: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top center+=100",
        },
      });

      // Floating icons animation
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
    },
    { scope: sectionRef }
  );

  // Handle category change animation
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleCategoryChange = contextSafe((index: number) => {
    if (index === activeCategory) return;
    gsap.to(".skills-container", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setActiveCategory(index);
        gsap.to(".skills-container", {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      },
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
          Professional Skills
        </h2>

        {/* Category navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillsData.map((category, index) => (
            <button
              key={index}
              className={`category-button flex-1 p-6 rounded-xl border-2 ${
                activeCategory === index
                  ? "border-secondary dark:border-accent bg-white/90 dark:bg-primary-dark shadow-lg"
                  : "border-secondary/20 dark:border-accent/20 hover:border-secondary/50 dark:hover:border-accent/50 bg-white/80 dark:bg-primary-dark/80"
              }`}
              onClick={() => handleCategoryChange(index)}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`p-3 rounded-lg transition-colors duration-300 ${
                    activeCategory === index
                      ? "bg-secondary/10 dark:bg-accent/10"
                      : "bg-secondary/5 dark:bg-accent/5"
                  }`}
                >
                  {(() => {
                    const Icon = category.icon;
                    return (
                      <Icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          activeCategory === index
                            ? "text-secondary dark:text-accent"
                            : "text-secondary/70 dark:text-accent/70"
                        }`}
                      />
                    );
                  })()}
                </div>
                <span
                  className={`font-semibold text-base transition-colors duration-300 ${
                    activeCategory === index
                      ? "text-primary dark:text-background"
                      : "text-primary/80 dark:text-background/80"
                  }`}
                >
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="skills-container bg-white dark:bg-primary-dark rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20">
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`p-4 rounded-xl bg-gradient-to-br ${skillsData[activeCategory].color}`}
            >
              {(() => {
                const Icon = skillsData[activeCategory].icon;
                return (
                  <Icon className="floating-icon w-8 h-8 text-background" />
                );
              })()}
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-background">
              {skillsData[activeCategory].name} Skills
            </h3>
          </div>

          <div className="grid gap-6">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary dark:text-background">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-primary/60 dark:text-background/60">
                      {skill.years} years experience
                    </p>
                  </div>
                  <span className="text-secondary dark:text-accent font-medium">
                    {skill.proficiency}
                  </span>
                </div>
                <div className="h-2 bg-secondary/10 dark:bg-accent/10 rounded-full overflow-hidden">
                  <div
                    className="skill-bar h-full bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary rounded-full transition-all duration-300"
                    style={{
                      width: `${proficiencyToLevel[skill.proficiency]}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
