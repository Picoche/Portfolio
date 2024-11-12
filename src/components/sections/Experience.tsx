import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2021 - Present",
    description:
      "Lead development of scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.",
    achievements: [
      "Reduced application load time by 40% through optimized database queries and frontend caching",
      "Implemented a microservices architecture that improved system scalability and reduced downtime by 60%",
      "Led a team of 5 developers in successfully delivering a major project 2 weeks ahead of schedule",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Co.",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed and maintained multiple client websites and web applications using Vue.js, Express, and MongoDB.",
    achievements: [
      "Designed and implemented a custom CMS that increased content update efficiency by 75%",
      "Integrated third-party APIs that expanded product functionality and improved user engagement by 30%",
      "Optimized database performance, resulting in a 50% reduction in query response times",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Dynamics",
    period: "Jun 2016 - Feb 2018",
    description:
      "Assisted in the development of responsive websites and contributed to the company's main SaaS product.",
    achievements: [
      "Developed a responsive email template system that increased email open rates by 25%",
      "Contributed to the implementation of new features that helped acquire 5000+ new users",
      "Improved site accessibility, achieving WCAG 2.1 AA compliance",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background dark:bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-background font-heading text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-secondary dark:text-accent mr-2" />
                <h3 className="text-xl font-bold text-primary dark:text-background font-heading">
                  {exp.title}
                </h3>
              </div>
              <p className="text-primary dark:text-background font-body mb-2">
                {exp.company}
              </p>
              <div className="flex items-center text-secondary dark:text-accent mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm font-body">{exp.period}</span>
              </div>
              <p className="text-primary dark:text-background font-body mb-4">
                {exp.description}
              </p>
              <h4 className="text-lg font-semibold text-primary dark:text-background font-heading mb-2">
                Key Achievements:
              </h4>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="text-primary dark:text-background font-body"
                  >
                    {achievement}
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
