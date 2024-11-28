import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Book, Star, Users, Trophy, Brain, MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
      },
    });

    // Background animations
    tl.from(".pattern-bg", {
      opacity: 0,
      scale: 1.1,
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

    // Timeline line drawing animation
    tl.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.2,
      ease: "power2.inOut",
    }, "-=0.6");

    // Education cards animation with stagger
    tl.from(".education-card", {
      opacity: 0,
      x: -50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.8");

    // Card details animation
    tl.from(".card-details", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4");

    // Achievements animation with stagger
    tl.from(".achievement-item", {
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.4");

    // Icons continuous rotation
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
      <div className="pattern-bg absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 dark:from-accent/5 dark:to-secondary/5" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Academic Excellence
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line absolute left-0 md:left-1/2 top-0 w-0.5 h-full bg-secondary/20 dark:bg-accent/20 transform -translate-x-1/2" />

          {educationData.map((education, index) => (
            <div key={index} className="relative mb-16">
              {/* Year marker */}
              <div className="year-marker absolute left-0 md:left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border-2 border-secondary dark:border-accent">
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
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-secondary/20 dark:border-accent/20"
                  onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                  onMouseLeave={(e) => handleHover(e.currentTarget, false)}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <GraduationCap className="rotating-icon w-8 h-8 text-secondary dark:text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary dark:text-slate-50">
                        {education.degree}
                      </h3>
                      <p className="text-secondary dark:text-accent">
                        {education.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-primary/60 dark:text-slate-50/60">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-secondary dark:text-accent" />
                      {education.institution}, {education.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-secondary dark:text-accent" />
                      GPA: {education.gpa}
                    </div>
                  </div>

                  <p className="text-primary/80 dark:text-slate-50/80 mb-6">
                    {education.description}
                  </p>

                  <div className="space-y-6">
                    {/* Achievements */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {education.achievements.map((achievement, i) => (
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
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.keySkills.map((skill, i) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}