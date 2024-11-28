import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Database, Server, Globe } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
    icon: Globe,
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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
      },
    });

    // Section background animation
    tl.from(".section-bg", {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      ease: "power2.out",
    });

    // Heading animation
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Skill categories animation with stagger
    tl.from(".skill-category", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");

    // Progress bars animation
    gsap.from(".progress-bar", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".progress-bar",
        start: "top center+=100",
        toggleActions: "play none none reset",
      },
    });

    // Skill items stagger animation
    tl.from(".skill-item", {
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.8");

    // Icon rotation animation
    gsap.to(".rotating-icon", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      scrollTrigger: {
        trigger: ".rotating-icon",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
    });

    // Stats counter animation
    gsap.utils.toArray(".stat-number").forEach((stat: any) => {
      const target = parseInt(stat.getAttribute("data-value"));
      gsap.from(stat, {
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
        scrollTrigger: {
          trigger: stat,
          start: "top center+=100",
          toggleActions: "play none none reset",
        },
      });
    });

  }, { scope: sectionRef });

  // Handle hover animations
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleHover = contextSafe((element: HTMLElement, isEntering: boolean) => {
    gsap.to(element, {
      scale: isEntering ? 1.03 : 1,
      y: isEntering ? -5 : 0,
      duration: 0.3,
      ease: isEntering ? "power2.out" : "power2.in",
    });
  });

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 section-bg" />

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Technical Expertise
        </h2>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-secondary/20 dark:border-accent/20 transition-transform duration-300"
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/20 transition-colors duration-200">
                  <category.icon className="rotating-icon w-6 h-6 text-secondary dark:text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-slate-50">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 skill-item">
                    <div className="flex justify-between text-sm">
                      <span className="text-primary/80 dark:text-slate-50/80 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-secondary dark:text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/10 dark:bg-accent/20 rounded-full overflow-hidden transition-colors duration-200">
                      <div 
                        className="progress-bar h-full bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary rounded-full transition-colors duration-200"
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