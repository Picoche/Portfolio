import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Code, Server, Database, Cloud, Star } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: any;
  description: string;
  mainSkills: {
    name: string;
    level: "Expert" | "Advanced" | "Intermediate";
    experience: string;
  }[];
  relatedTech: string[];
  metrics: {
    projects: number;
    experience: string;
    rating: number;
  };
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code,
    description:
      "Creating responsive and interactive user interfaces with modern web technologies",
    mainSkills: [
      { name: "React/Next.js", level: "Expert", experience: "4+ years" },
      { name: "TypeScript", level: "Expert", experience: "3+ years" },
      { name: "Tailwind CSS", level: "Expert", experience: "3+ years" },
      { name: "GSAP", level: "Advanced", experience: "2+ years" },
    ],
    relatedTech: [
      "Redux",
      "Framer Motion",
      "Webpack",
      "Jest",
      "React Testing Library",
    ],
    metrics: {
      projects: 30,
      experience: "4+ years",
      rating: 4.9,
    },
  },
  {
    name: "Backend",
    icon: Server,
    description: "Building scalable server-side applications and APIs",
    mainSkills: [
      { name: "Node.js", level: "Expert", experience: "4+ years" },
      { name: "Python", level: "Advanced", experience: "3+ years" },
      { name: "GraphQL", level: "Advanced", experience: "2+ years" },
      { name: "REST APIs", level: "Expert", experience: "4+ years" },
    ],
    relatedTech: ["Express", "FastAPI", "Django", "Socket.io", "Microservices"],
    metrics: {
      projects: 25,
      experience: "4+ years",
      rating: 4.8,
    },
  },
  {
    name: "Database",
    icon: Database,
    description: "Designing and optimizing database architectures",
    mainSkills: [
      { name: "PostgreSQL", level: "Expert", experience: "4+ years" },
      { name: "MongoDB", level: "Advanced", experience: "3+ years" },
      { name: "Redis", level: "Advanced", experience: "2+ years" },
      { name: "Firebase", level: "Advanced", experience: "3+ years" },
    ],
    relatedTech: ["MySQL", "Prisma", "Mongoose", "TypeORM", "SQL"],
    metrics: {
      projects: 20,
      experience: "4+ years",
      rating: 4.7,
    },
  },
  {
    name: "DevOps",
    icon: Cloud,
    description: "Managing deployment and infrastructure automation",
    mainSkills: [
      { name: "Docker", level: "Advanced", experience: "3+ years" },
      { name: "AWS", level: "Advanced", experience: "3+ years" },
      { name: "CI/CD", level: "Advanced", experience: "3+ years" },
      { name: "Kubernetes", level: "Intermediate", experience: "2+ years" },
    ],
    relatedTech: ["Jenkins", "GitHub Actions", "Terraform", "Ansible", "Nginx"],
    metrics: {
      projects: 15,
      experience: "3+ years",
      rating: 4.6,
    },
  },
];

export function FourthSkills() {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      tl.from(".section-title", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      });

      tl.from(
        ".skill-card",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: {
            amount: 0.4,
            grid: [2, 2],
            from: "edges",
          },
        },
        "-=0.2"
      );

      gsap.to(".floating-icon", {
        y: -3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    },
    { scope: sectionRef }
  );

  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleCardClick = contextSafe((index: number) => {
    if (activeCard === index) {
      setActiveCard(null);
      gsap.to(".skill-card", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      setActiveCard(index);
      gsap.to(".skill-card", {
        scale: 0.95,
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(`.skill-card-${index}`, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
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
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`skill-card skill-card-${index} bg-white dark:bg-primary-dark rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20 cursor-pointer ${
                activeCard !== null && activeCard !== index
                  ? "opacity-50 scale-95"
                  : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/10">
                  <category.icon className="floating-icon w-6 h-6 text-secondary dark:text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-background">
                    {category.name}
                  </h3>
                  <p className="text-sm text-primary/60 dark:text-background/60">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Main skills */}
              <div className="grid grid-cols-2 gap-4">
                {category.mainSkills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <h4 className="font-medium text-primary dark:text-background">
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-2 text-primary/60 dark:text-background/60">
                      <span className="text-secondary dark:text-accent">
                        {skill.level}
                      </span>
                      <span>• {skill.experience}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related technologies */}
              <div className="mt-6">
                <h4 className="font-medium text-primary dark:text-background mb-2">
                  Related Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.relatedTech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-secondary/10 dark:border-accent/10">
                <div className="text-center">
                  <div className="metric-number text-xl font-bold text-secondary dark:text-accent">
                    {category.metrics.projects}+
                  </div>
                  <div className="text-xs text-primary/60 dark:text-background/60">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary dark:text-accent">
                    {category.metrics.experience}
                  </div>
                  <div className="text-xs text-primary/60 dark:text-background/60">
                    Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-secondary dark:text-accent" />
                    <span className="metric-number text-xl font-bold text-secondary dark:text-accent">
                      {category.metrics.rating}
                    </span>
                  </div>
                  <div className="text-xs text-primary/60 dark:text-background/60">
                    Rating
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
