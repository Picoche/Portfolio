import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Code, Server, Database } from "lucide-react";

interface SkillGroup {
  category: string;
  icon: any;
  description: string;
  skills: {
    name: string;
    level: number;
    color: string;
  }[];
}

const skillsData: SkillGroup[] = [
  {
    category: "Frontend Development",
    icon: Code,
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React/Next.js", level: 95, color: "from-secondary to-accent" },
      { name: "TypeScript", level: 90, color: "from-accent to-secondary" },
      { name: "Tailwind CSS", level: 95, color: "from-secondary/80 to-accent/80" },
      { name: "GSAP", level: 85, color: "from-accent/80 to-secondary/80" },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    description: "Creating robust server-side applications",
    skills: [
      { name: "Node.js", level: 90, color: "from-secondary to-accent" },
      { name: "Python", level: 85, color: "from-accent to-secondary" },
      { name: "GraphQL", level: 80, color: "from-secondary/80 to-accent/80" },
      { name: "REST APIs", level: 90, color: "from-accent/80 to-secondary/80" },
    ],
  },
  {
    category: "Database & DevOps",
    icon: Database,
    description: "Managing data and deployment infrastructure",
    skills: [
      { name: "PostgreSQL", level: 90, color: "from-secondary to-accent" },
      { name: "MongoDB", level: 85, color: "from-accent to-secondary" },
      { name: "Docker", level: 85, color: "from-secondary/80 to-accent/80" },
      { name: "AWS", level: 80, color: "from-accent/80 to-secondary/80" },
    ],
  },
];

export function ThirdSkills() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Title animation
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Cards stagger animation
    tl.from(".skill-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });

    // Circular progress animation
    gsap.from(".progress-circle", {
      strokeDashoffset: (i, target) => {
        const circle = target as SVGCircleElement;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        return circumference;
      },
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skills-grid",
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
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 transition-opacity duration-200" />

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent transition-colors duration-200">
          Technical Proficiency
        </h2>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="skill-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20 transition-all duration-200"
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/20 transition-colors duration-200">
                  <group.icon className="floating-icon w-6 h-6 text-secondary dark:text-accent transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-slate-50 transition-colors duration-200">
                    {group.category}
                  </h3>
                  <p className="text-sm text-primary/60 dark:text-slate-50/60 transition-colors duration-200">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          className="text-secondary/10 dark:text-accent/20 transition-colors duration-200"
                          strokeWidth="8"
                          stroke="currentColor"
                          fill="transparent"
                          r="38"
                          cx="48"
                          cy="48"
                        />
                        <circle
                          className="progress-circle bg-gradient-to-r text-secondary dark:text-accent transition-colors duration-200"
                          strokeWidth="8"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="38"
                          cx="48"
                          cy="48"
                          style={{
                            strokeDasharray: `${2 * Math.PI * 38}`,
                            strokeDashoffset: `${2 * Math.PI * 38 * (1 - skill.level / 100)}`,
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-secondary dark:text-accent transition-colors duration-200">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-primary dark:text-slate-50 transition-colors duration-200">
                      {skill.name}
                    </h4>
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