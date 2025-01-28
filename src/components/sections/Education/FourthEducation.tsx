import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Book,
  Star,
  Users,
  Trophy,
  Brain,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    year: "2024",
    degree: "Métiers du Multimédia et de l'Internet - BUT MMI",
    specialization: "Développement Web & Dispositifs Interactifs",
    institution: "Université de Toulouse",
    location: "81100 Castres",
    gpa: "14",
    achievements: [
      { icon: Trophy, text: "Mention Bien" },
      { icon: Brain, text: "Deux périodes de stage" },
      { icon: Users, text: "Meneur de groupe" },
    ],
    keySkills: [
      "Gestion de Projet",
      "Développement en Équipe",
      "Maquettage",
      "Développement Natif",
      "Approche Agile",
    ],
    description:
      "Cursus de trois ans durant lesquels j'ai pu acquérir diverses compétences",
    highlights: [
      "Prototypage et mise en place de trois projets majeurs en solo",
      "Chef d'équipe récurrent, travail au sein de trois équipes différentes durant le cursus",
      "Troisième année en alternance, première véritable expérience au contact de développeurs professionnels",
    ],
  },
  {
    year: "2020",
    degree: "Option SIN - Baccalauréat STI2D",
    specialization: "Systèmes d'information et numérique",
    institution: "Lycée Charles Renouvier",
    location: "66500 Prades",
    gpa: "13",
    achievements: [
      { icon: Trophy, text: "Mention AB" },
      { icon: Star, text: "3e place concours robotique" },
    ],
    keySkills: [
      "Robotique avec Arduino",
      "Développement d'algorithmes simples"
    ],
    description:
      "Premières notions de développement, prise en main des différents outils.",
    highlights: [
      "Troisième place remise pour un projet de classe, concours de robotique",
    ],
  },
];

export function FourthEducation() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
        },
      });

      // Background pattern animation
      tl.from(".pattern-bg", {
        opacity: 0,
        scale: 1.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.4");

      // Navigation animation
      tl.from(
        ".nav-item",
        {
          opacity: 0,
          x: -30,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Content animations
      tl.from(
        ".content-section",
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Stats counter animation
      gsap.utils.toArray(".stat-number").forEach((stat: any) => {
        gsap.from(stat, {
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top center+=100",
          },
        });
      });

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".floating-icon",
          start: "top center",
          toggleActions: "play pause resume reset",
        },
      });
    },
    { scope: sectionRef }
  );

  // Handle content change animation
  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleContentChange = contextSafe((index: number) => {
    if (index === activeIndex) return;

    gsap.to(".content-section", {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex(index);
        gsap.to(".content-section", {
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
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 dark:from-accent/5 dark:to-secondary/5" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Parcours Académique
        </h2>

        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {educationData.map((education, index) => (
              <button
                key={index}
                className={`nav-item flex-1 p-6 rounded-xl border-2 ${
                  activeIndex === index
                    ? "border-secondary dark:border-accent bg-white dark:bg-gray-800 shadow-lg"
                    : "border-secondary/20 dark:border-accent/20 hover:border-secondary/50 dark:hover:border-accent/50 bg-white/80 dark:bg-gray-800/80"
                }`}
                onClick={() => handleContentChange(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeIndex === index
                          ? "bg-secondary/10 dark:bg-accent/20"
                          : "bg-secondary/5 dark:bg-accent/10"
                      }`}
                    >
                      <GraduationCap
                        className={`w-6 h-6 ${
                          activeIndex === index
                            ? "text-secondary dark:text-accent"
                            : "text-secondary/70 dark:text-accent/70"
                        }`}
                      />
                    </div>
                    <div className="text-left">
                      <p
                        className={`font-semibold text-lg mb-1 ${
                          activeIndex === index
                            ? "text-primary dark:text-slate-50"
                            : "text-primary/80 dark:text-slate-50/80"
                        }`}
                      >
                        {education.degree.split(" ").slice(-2).join(" ")}
                      </p>
                      <p className="text-sm text-primary/60 dark:text-slate-50/60">
                        {education.institution} • {education.year}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-secondary dark:text-accent transition-transform ${
                      activeIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="content-section bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-secondary/20 dark:border-accent/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/20">
                    <GraduationCap className="floating-icon w-8 h-8 text-secondary dark:text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary dark:text-slate-50">
                      {educationData[activeIndex].degree}
                    </h3>
                    <p className="text-secondary dark:text-accent">
                      {educationData[activeIndex].specialization}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-primary/60 dark:text-slate-50/60">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-secondary dark:text-accent" />
                    {educationData[activeIndex].institution}, {educationData[activeIndex].location}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-secondary dark:text-accent" />
                    GPA: {educationData[activeIndex].gpa}
                  </div>
                </div>

                <p className="text-primary/80 dark:text-slate-50/80 mb-6">
                  {educationData[activeIndex].description}
                </p>

                <div className="space-y-6">
                  {/* Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {educationData[activeIndex].achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="achievement-item flex items-center gap-2 p-2 rounded-lg bg-secondary/5 dark:bg-accent/10"
                      >
                        <achievement.icon className="w-5 h-5 text-secondary dark:text-accent" />
                        <span className="text-sm text-primary/80 dark:text-slate-50/80">
                          {achievement.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary dark:text-slate-50 mb-3 flex items-center gap-2">
                      <Book className="w-5 h-5 text-secondary dark:text-accent" />
                      Compétences Acquises
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {educationData[activeIndex].keySkills.map((skill, i) => (
                        <span
                          key={i}
                          className="skill-tag px-3 py-1 rounded-full bg-secondary/10 dark:bg-accent/20 text-secondary dark:text-accent text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-secondary/5 dark:bg-accent/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-primary dark:text-slate-50 mb-4">
                  Réussites
                </h4>
                <ul className="space-y-3">
                  {educationData[activeIndex].highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-primary/80 dark:text-slate-50/80"
                    >
                      <ChevronRight className="w-5 h-5 text-secondary dark:text-accent flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
