import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    period: "Sep 2014 - Jun 2016",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Optimizing Neural Networks for Edge Computing'.",
    achievements: [
      "Graduated with Distinction",
      "Published 2 research papers in international conferences",
      "Recipient of the Dean's Merit Scholarship",
    ],
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State University",
    period: "Sep 2010 - Jun 2014",
    description:
      "Focused on software development methodologies and web technologies. Completed a capstone project on building a scalable e-commerce platform.",
    achievements: [
      "Graduated Summa Cum Laude",
      "President of the University Coding Club",
      "Internship at a leading tech company",
    ],
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "CodeCamp Academy",
    period: "Jan 2014 - Apr 2014",
    description:
      "Intensive 12-week program covering modern web development technologies and practices.",
    achievements: [
      "Developed and deployed 5 full-stack web applications",
      "Voted 'Most Innovative Project' for final capstone",
      "Mentored junior developers in weekend workshops",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-background dark:bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-background font-heading text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-secondary dark:text-accent mr-2" />
                <h3 className="text-xl font-bold text-primary dark:text-background font-heading">
                  {edu.degree}
                </h3>
              </div>
              <p className="text-primary dark:text-background font-body mb-2">
                {edu.institution}
              </p>
              <div className="flex items-center text-secondary dark:text-accent mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-body">{edu.period}</span>
              </div>
              <p className="text-primary dark:text-background font-body mb-4">
                {edu.description}
              </p>
              <h4 className="text-lg font-semibold text-primary dark:text-background font-heading mb-2">
                Key Achievements:
              </h4>
              <ul className="list-disc list-inside space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-primary dark:text-background font-body flex items-start"
                  >
                    <Award className="w-4 h-4 text-secondary dark:text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
