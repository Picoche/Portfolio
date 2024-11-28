import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed thesis on Deep Learning applications in Natural Language Processing.",
    achievements: [
      "Published 2 research papers",
      "Teaching Assistant for Advanced Algorithms",
      "4.0 GPA",
    ],
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2014 - 2018",
    description: "Focus on Software Architecture and Systems Design. Led multiple team projects and participated in hackathons.",
    achievements: [
      "Dean's List all semesters",
      "First Place in Hackathon 2017",
      "Software Engineering Club President",
    ],
    icon: Award,
  },
];

export function FirstEducation() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
      },
    });

    // Heading animation
    tl.from(".section-title", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    });

    // Timeline line drawing animation
    tl.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.3");

    // Education cards stagger animation
    tl.from(".education-card", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");

    // Icons animation
    gsap.to(".card-icon", {
      scale: 1,
      rotation: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".card-icon",
        start: "top center+=100",
        toggleActions: "play pause resume reset",
      },
    });

    // Achievements animation
    tl.from(".achievement-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.5");

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
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden transition-colors duration-200"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent transition-colors duration-200">
          Education
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line absolute left-8 top-0 w-0.5 h-full bg-secondary/20 dark:bg-accent/20 transition-colors duration-200" />

          {/* Education cards */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="education-card relative pl-16"
                onMouseEnter={(e) => handleHover(e.currentTarget, true)}
                onMouseLeave={(e) => handleHover(e.currentTarget, false)}
              >
                {/* Timeline dot and icon */}
                <div className="absolute left-6 -translate-x-1/2 bg-background dark:bg-gray-800 p-2 rounded-full border-2 border-secondary dark:border-accent transition-colors duration-200">
                  <item.icon className="card-icon w-6 h-6 text-secondary dark:text-accent transition-colors duration-200" />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-secondary/20 dark:border-accent/20 transition-all duration-200">
                  <h3 className="text-2xl font-bold text-primary dark:text-slate-50 mb-2 transition-colors duration-200">
                    {item.degree}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-primary/60 dark:text-slate-50/60 transition-colors duration-200">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-secondary dark:text-accent transition-colors duration-200" />
                      {item.institution}, {item.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-secondary dark:text-accent transition-colors duration-200" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-primary/80 dark:text-slate-50/80 mb-4 transition-colors duration-200">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="achievement-item flex items-center text-secondary dark:text-accent transition-colors duration-200"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}