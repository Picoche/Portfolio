import { motion } from "framer-motion";
import {
  Code,
  Server,
  Palette,
  Users,
  Database,
  Cloud,
  Smartphone,
  Lock,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Code,
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    name: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "GraphQL",
      "RESTful APIs",
    ],
  },
  {
    name: "Database Management",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Serverless"],
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "User Research",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    name: "Security",
    icon: Lock,
    skills: ["OWASP", "Auth0", "JWT", "OAuth 2.0", "Penetration Testing"],
  },
  {
    name: "Soft Skills",
    icon: Users,
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Agile Methodologies",
      "Project Management",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background dark:bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-background font-heading text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 mr-3 text-secondary dark:text-accent" />
                <h3 className="text-xl font-bold text-primary dark:text-background font-heading">
                  {category.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-secondary dark:bg-accent rounded-full mr-2"></span>
                    <span className="text-primary dark:text-background font-body">
                      {skill}
                    </span>
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
