import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code, Server, Database, Cloud, Braces, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  name: string;
  icon: any;
  color: string;
  skills: {
    name: string;
    proficiency: "Débutant" | "Moyen" | "Avancé" | "Maîtrisé";
    years: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code,
    color: "from-secondary to-accent",
    skills: [
      { name: "React/Next.js", proficiency: "Moyen", years: 2 },
      { name: "TypeScript", proficiency: "Avancé", years: 2 },
      { name: "Tailwind CSS", proficiency: "Avancé", years: 2 },
      { name: "React Native", proficiency: "Moyen", years: 2 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-accent to-secondary",
    skills: [
      { name: "Node.js", proficiency: "Avancé", years: 3 },
      { name: "PHP", proficiency: "Avancé", years: 3 },
      { name: "Laravel", proficiency: "Moyen", years: 3 },
      { name: "Symfony", proficiency: "Moyen", years: 2 },
    ],
  },
  {
    name: "Bases de données",
    icon: Database,
    color: "from-secondary/80 to-accent/80",
    skills: [
      { name: "PostgreSQL", proficiency: "Moyen", years: 1 },
      { name: "MongoDB", proficiency: "Moyen", years: 2 },
      { name: "Firebase", proficiency: "Moyen", years: 1 },
      { name: "Supabase", proficiency: "Moyen", years: 2 },
    ],
  },
  {
    name: "DevOps",
    icon: Cloud,
    color: "from-accent/80 to-secondary/80",
    skills: [
      { name: "Docker", proficiency: "Moyen", years: 1 },
      { name: "Linux", proficiency: "Avancé", years: 3 },
      { name: "Git", proficiency: "Avancé", years: 2 },
    ],
  },
  {
    name: "Outils",
    icon: Braces,
    color: "from-secondary/60 to-accent/60",
    skills: [
      { name: "VSCode", proficiency: "Maîtrisé", years: 4 },
      { name: "Webpack/Vite", proficiency: "Avancé", years: 3 },
    ],
  },
  {
    name: "Autres",
    icon: Globe,
    color: "from-accent/60 to-secondary/60",
    skills: [
      { name: "SEO", proficiency: "Avancé", years: 2 },
      { name: "Analytics", proficiency: "Moyen", years: 1 },
      { name: "Performance", proficiency: "Avancé", years: 2 },
      { name: "Securité", proficiency: "Avancé", years: 2 },
    ],
  },
];

const proficiencyToLevel = {
  Débutant: 25,
  Moyen: 50,
  Avancé: 75,
  Maîtrisé: 100,
};

export function SecondSkills() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
        },
      });

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.4");

      // Category tabs animation
      tl.from(".category-tab", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4");

      // Skills grid animation
      tl.from(".skills-grid", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.2");

      // Individual skill items animation
      tl.from(".skill-item", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.4");

      // Progress bars animation
      gsap.from(".progress-bar", {
        width: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top center+=100",
          toggleActions: "play none none reset"
        },
      });

      // Icon floating animation
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

      // Percentage numbers counter animation
      gsap.utils.toArray(".skill-percentage").forEach((number: any) => {
        const target = parseInt(number.getAttribute("data-value"));
        gsap.from(number, {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: {
            each: 0.2,
            onUpdate: function() {
              number.textContent = Math.ceil(parseFloat(number.textContent)) + "%";
            },
          },
          scrollTrigger: {
            trigger: number,
            start: "top center+=100",
            toggleActions: "play none none reset",
          },
        });
      });

    },
    { scope: sectionRef }
  );

  // Handle category change animation
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleCategoryChange = contextSafe((index: number) => {
    if (isAnimating || index === activeCategory) return;
    setIsAnimating(true);
    
    gsap.to(".skills-container", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveCategory(index);
        gsap.to(".skills-container", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => setIsAnimating(false),
        });
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Boîte à Outils
        </h2>

        {/* Category navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillsData.map((category, index) => (
            <button
              key={index}
              className={`category-tab flex-1 p-6 rounded-xl border-2   ${
                activeCategory === index
                  ? "border-secondary dark:border-accent bg-white/90 dark:bg-gray-800/90 shadow-lg"
                  : "border-secondary/20 dark:border-accent/20 hover:border-secondary/50 dark:hover:border-accent/50 bg-white/80 dark:bg-gray-800/80"
              }`}
              onClick={() => handleCategoryChange(index)}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`p-3 rounded-lg   ${
                    activeCategory === index
                      ? "bg-secondary/10 dark:bg-accent/20"
                      : "bg-secondary/5 dark:bg-accent/10"
                  }`}
                >
                  {(() => {
                    const Icon = category.icon;
                    return (
                      <Icon
                        className={`w-6 h-6   ${
                          activeCategory === index
                            ? "text-secondary dark:text-accent"
                            : "text-secondary/70 dark:text-accent/70"
                        }`}
                      />
                    );
                  })()}
                </div>
                <span
                  className={`font-semibold text-base   ${
                    activeCategory === index
                      ? "text-primary dark:text-slate-50"
                      : "text-primary/80 dark:text-slate-50/80"
                  }`}
                >
                  {category.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div className="skills-container bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20  ">
          <div className="flex items-center gap-4 mb-8">
            <div
              className={`p-4 rounded-xl bg-gradient-to-br ${skillsData[activeCategory].color}`}
            >
              {(() => {
                const Icon = skillsData[activeCategory].icon;
                return (
                  <Icon className="floating-icon w-8 h-8 text-background dark:text-slate-50" />
                );
              })()}
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-slate-50">
              {skillsData[activeCategory].name}
            </h3>
          </div>

          <div className="grid gap-6">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <div key={index} className="space-y-2 skill-item">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary dark:text-slate-50">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-primary/60 dark:text-slate-50/60">
                      {skill.years} years experience
                    </p>
                  </div>
                  <span className="text-secondary dark:text-accent font-medium">
                    {skill.proficiency}
                  </span>
                </div>
                <div className="h-2 bg-secondary/10 dark:bg-accent/20 rounded-full overflow-hidden  ">
                  <div
                    className="progress-bar h-full bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary rounded-full  duration-300"
                    style={{
                      width: `${proficiencyToLevel[skill.proficiency]}%`,
                    }}
                  />
                  <span className="skill-percentage" data-value={proficiencyToLevel[skill.proficiency]}>
                    {proficiencyToLevel[skill.proficiency]}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
