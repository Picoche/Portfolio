import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/placeholder.svg",
    quote:
      "John's expertise in full-stack development was instrumental in launching our startup's MVP. His ability to translate complex ideas into functional, user-friendly interfaces is truly remarkable.",
  },
  {
    name: "Michael Chen",
    position: "CTO, InnovateSoft",
    image: "/placeholder.svg",
    quote:
      "Working with John was a game-changer for our team. His deep knowledge of both frontend and backend technologies helped us optimize our application's performance beyond our expectations.",
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager, DataViz Co.",
    image: "/placeholder.svg",
    quote:
      "John's attention to detail and commitment to clean, maintainable code made our collaboration seamless. He's not just a developer, but a problem solver who truly cares about the end product.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background dark:bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-background font-heading text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white dark:bg-primary-dark rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-background font-heading">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-secondary dark:text-accent font-body">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-secondary dark:text-accent mb-2" />
              <p className="text-primary dark:text-background font-body italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
