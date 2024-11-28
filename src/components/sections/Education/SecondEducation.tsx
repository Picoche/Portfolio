import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Book, Star, Users, Trophy, Brain } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    level: "Graduate Studies",
    degree: "Master of Science in Computer Science",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Stanford University",
    period: "2018 - 2020",
    description: "Advanced research in deep learning and natural language processing, culminating in innovative applications of AI in real-world scenarios.",
    highlights: [
      {
        icon: Trophy,
        title: "Academic Excellence",
        details: "4.0 GPA, Department Honors"
      },
      {
        icon: Brain,
        title: "Research Impact",
        details: "2 Published Papers in Top Conferences"
      },
      {
        icon: Users,
        title: "Leadership",
        details: "AI Research Group Lead"
      }
    ],
    courses: [
      "Advanced Machine Learning",
      "Neural Networks",
      "Natural Language Processing",
      "Computer Vision"
    ]
  },
  {
    level: "Undergraduate Studies",
    degree: "Bachelor of Science in Software Engineering",
    specialization: "Full Stack Development",
    institution: "MIT",
    period: "2014 - 2018",
    description: "Comprehensive foundation in software development with focus on scalable systems and innovative solutions.",
    highlights: [
      {
        icon: Star,
        title: "Academic Achievement",
        details: "Dean's List All Semesters"
      },
      {
        icon: Trophy,
        title: "Competitions",
        details: "Hackathon Champion 2017"
      },
      {
        icon: Users,
        title: "Leadership",
        details: "Software Engineering Club President"
      }
    ],
    courses: [
      "Data Structures & Algorithms",
      "Software Architecture",
      "Database Systems",
      "Web Development"
    ]
  }
];

export function SecondEducation() {
  const sectionRef = useRef(null);

  useGSAP(() => {
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

    // Section title animation
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Education cards stagger animation
    tl.from(".education-card", {
      opacity: 0,
      x: -50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    }, "-=1");

    // Highlights animation
    tl.from(".highlight-item", {
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.4");

    // Course tags animation
    tl.from(".course-tag", {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.3");

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
      scrollTrigger: {
        trigger: ".floating-icon",
        start: "top center",
        toggleActions: "play pause resume reset",
      },
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
      <div className="pattern-bg absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 dark:from-accent/5 dark:to-secondary/5" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Educational Journey
        </h2>

        <div className="space-y-16">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="education-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-secondary/20 dark:border-accent/20"
              onMouseEnter={(e) => handleHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleHover(e.currentTarget, false)}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="floating-icon w-8 h-8 text-secondary dark:text-accent" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary dark:text-slate-50">
                      {education.degree}
                    </h3>
                    <p className="text-secondary dark:text-accent">
                      {education.specialization}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-primary dark:text-slate-50 mb-2">
                        {education.institution}
                      </h4>
                      <p className="text-primary/60 dark:text-slate-50/60">
                        {education.period}
                      </p>
                    </div>

                    <p className="text-primary/80 dark:text-slate-50/80 mb-6">
                      {education.description}
                    </p>

                    <div className="space-y-4">
                      {education.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="highlight-item flex items-center gap-4 p-3 rounded-lg bg-secondary/5 dark:bg-accent/10"
                        >
                          <highlight.icon className="w-5 h-5 text-secondary dark:text-accent" />
                          <div>
                            <h5 className="font-medium text-primary dark:text-slate-50">
                              {highlight.title}
                            </h5>
                            <p className="text-sm text-primary/60 dark:text-slate-50/60">
                              {highlight.details}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary dark:text-slate-50 mb-4 flex items-center gap-2 transition-colors duration-200">
                      <Book className="w-5 h-5 text-secondary dark:text-accent transition-colors duration-200" />
                      Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.courses.map((course, i) => (
                        <span
                          key={i}
                          className="course-tag px-3 py-1 rounded-full bg-secondary/10 dark:bg-accent/20 text-secondary dark:text-accent text-sm transition-colors duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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