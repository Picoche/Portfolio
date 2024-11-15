import { useRef } from "react";
import { gsap } from "gsap";
import { GraduationCap, Book, Star, Users, Trophy, Brain, MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";

const educationData = [
  {
    year: "2020",
    degree: "Master of Science in Computer Science",
    specialization: "AI & Machine Learning",
    institution: "Stanford University",
    location: "Stanford, CA",
    gpa: "4.0",
    achievements: [
      { icon: Trophy, text: "Department Honors" },
      { icon: Brain, text: "2 Research Publications" },
      { icon: Users, text: "AI Research Group Lead" }
    ],
    keySkills: [
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Research Methods"
    ],
    description: "Conducted groundbreaking research in AI applications, focusing on deep learning architectures and natural language understanding."
  },
  {
    year: "2018",
    degree: "Bachelor of Science in Software Engineering",
    specialization: "Full Stack Development",
    institution: "MIT",
    location: "Cambridge, MA",
    gpa: "3.95",
    achievements: [
      { icon: Star, text: "Dean's List All Semesters" },
      { icon: Trophy, text: "Hackathon Champion" },
      { icon: Users, text: "Club President" }
    ],
    keySkills: [
      "Software Architecture",
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Design"
    ],
    description: "Built a strong foundation in software engineering principles while leading multiple innovative projects."
  }
];

export function ThirdEducation() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Background animations
    tl.from(".pattern-bg", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Title animation
    tl.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Timeline line drawing animation
    tl.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power2.inOut",
    }, "-=0.5");

    // Year markers animation
    tl.from(".year-marker", {
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=1");

    // Education cards stagger animation
    tl.from(".education-card", {
      opacity: 0,
      x: -50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.5");

    // Skills tags animation
    tl.from(".skill-tag", {
      opacity: 0,
      scale: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: "back.out(1.7)",
    }, "-=0.3");

    // Achievement items animation
    tl.from(".achievement-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

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
      className="py-20 bg-background dark:bg-primary theme-transition relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Academic Excellence
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line absolute left-0 md:left-1/2 top-0 w-0.5 h-full bg-secondary/20 dark:bg-accent/20 transform -translate-x-1/2" />

          {educationData.map((education, index) => (
            <div key={index} className="relative mb-16">
              {/* Year marker */}
              <div className="year-marker absolute left-0 md:left-1/2 -translate-x-1/2 bg-background dark:bg-primary px-4 py-2 rounded-full border-2 border-secondary dark:border-accent">
                <span className="text-secondary dark:text-accent font-bold">
                  {education.year}
                </span>
              </div>

              {/* Education card */}
              <div 
                className={`education-card ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-[50%] md:pr-16' : 'md:ml-[50%] md:pl-16'
                }`}
              >
                <div
                  className="bg-white dark:bg-primary-dark rounded-2xl shadow-lg p-6 border border-secondary/20 dark:border-accent/20"
                  onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                  onMouseLeave={(e) => handleHover(e.currentTarget, false)}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <GraduationCap className="floating-icon w-8 h-8 text-secondary dark:text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary dark:text-background">
                        {education.degree}
                      </h3>
                      <p className="text-secondary dark:text-accent">
                        {education.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-primary/60 dark:text-background/60">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {education.institution}, {education.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      GPA: {education.gpa}
                    </div>
                  </div>

                  <p className="text-primary/80 dark:text-background/80 mb-6">
                    {education.description}
                  </p>

                  <div className="space-y-6">
                    {/* Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {education.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="achievement-item flex items-center gap-2 p-2 rounded-lg bg-secondary/5 dark:bg-accent/5"
                        >
                          <achievement.icon className="w-5 h-5 text-secondary dark:text-accent" />
                          <span className="text-sm text-primary/80 dark:text-background/80">
                            {achievement.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary dark:text-background mb-3 flex items-center gap-2">
                        <Book className="w-5 h-5" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.keySkills.map((skill, i) => (
                          <span
                            key={i}
                            className="skill-tag px-3 py-1 rounded-full bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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