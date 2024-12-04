import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "Tech Solutions Inc.",
    image: "/johndoe.png",
    quote:
      "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us deliver our project ahead of schedule.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Innovations",
    image: "/johndoe.png",
    quote:
      "The level of professionalism and technical skill demonstrated was exceptional. They consistently delivered high-quality code and innovative solutions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Lead Designer",
    company: "Creative Studios",
    image: "/johndoe.png",
    quote:
      "Their ability to translate design concepts into flawless, responsive implementations was impressive. A true professional who delivers excellence.",
    rating: 5,
  },
];

export function FirstTestimonials() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Testimonial cards stagger animation
      tl.from(".testimonial-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // Quote icon animation
      gsap.to(".floating-quote", {
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
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Client Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="floating-quote w-8 h-8 text-secondary dark:text-accent" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="mb-6">
                <p className="text-primary/80 dark:text-slate-50/80 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary dark:fill-accent text-secondary dark:text-accent"
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary dark:text-slate-50">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary/60 dark:text-slate-50/60">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-secondary dark:text-accent">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
