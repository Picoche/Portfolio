import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  project: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Anderson",
    position: "VP of Engineering",
    company: "TechForward Solutions",
    image: "/testimonials/david.jpg",
    quote:
      "Their expertise in modern web technologies and ability to deliver complex features while maintaining clean, maintainable code was impressive. They significantly improved our application's performance and user experience.",
    rating: 5,
    project: "Enterprise SaaS Platform",
    date: "January 2024",
  },
  {
    id: 2,
    name: "Jessica Zhang",
    position: "Director of Product",
    company: "InnovateLab",
    image: "/testimonials/jessica.jpg",
    quote:
      "A rare combination of technical excellence and creative problem-solving. They not only delivered exactly what we needed but also suggested improvements that made our product even better.",
    rating: 5,
    project: "AI-Powered Analytics Dashboard",
    date: "December 2023",
  },
  {
    id: 3,
    name: "Marcus Thompson",
    position: "Startup Founder",
    company: "HealthTech Innovations",
    image: "/testimonials/marcus.jpg",
    quote:
      "Working with them was transformative for our startup. Their technical insights and ability to execute complex features while maintaining a focus on user experience helped us secure our next round of funding.",
    rating: 5,
    project: "Healthcare Management Platform",
    date: "November 2023",
  },
];

export function SecondTestimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

      // Background pattern animation
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

      // Initial testimonial animation
      tl.from(".testimonial-content", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
      });

      // Navigation dots animation
      tl.from(".nav-dot", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });

      // Floating quote animation
      gsap.to(".floating-quote", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  const { contextSafe } = useGSAP({ scope: sectionRef });

  const handleNavigation = contextSafe((direction: "prev" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % testimonials.length
        : (activeIndex - 1 + testimonials.length) % testimonials.length;

    const xDirection = direction === "next" ? -100 : 100;

    gsap
      .timeline({
        onComplete: () => {
          setActiveIndex(nextIndex);
          setIsAnimating(false);
        },
      })
      .to(".testimonial-content", {
        opacity: 0,
        x: xDirection,
        duration: 0.3,
        ease: "power2.in",
      })
      .set(".testimonial-content", { x: -xDirection * 1.5 })
      .to(".testimonial-content", {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 dark:from-accent/5 dark:to-secondary/5" />
        <div className="grid grid-cols-10 gap-4 opacity-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-secondary/20 dark:bg-accent/20"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Client Testimonials
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial content */}
          <div className="testimonial-content bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-lg border border-secondary/20 dark:border-accent/20 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image and info */}
              <div className="md:w-1/3 text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-secondary/20 dark:border-accent/20">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl text-primary dark:text-slate-50">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-secondary dark:text-accent">
                  {testimonials[activeIndex].position}
                </p>
                <p className="text-primary/60 dark:text-slate-50/60">
                  {testimonials[activeIndex].company}
                </p>
              </div>

              {/* Quote and details */}
              <div className="md:w-2/3 space-y-6">
                <Quote className="floating-quote w-10 h-10 text-secondary dark:text-accent opacity-50" />
                <blockquote className="text-lg text-primary/80 dark:text-slate-50/80 italic">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </blockquote>

                {/* Project details */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent rounded-full">
                    {testimonials[activeIndex].project}
                  </span>
                  <span className="text-primary/60 dark:text-slate-50/60">
                    {testimonials[activeIndex].date}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[activeIndex].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary dark:fill-accent text-secondary dark:text-accent"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              className="bg-white dark:bg-gray-800 border-secondary/20 dark:border-accent/20 text-secondary dark:text-accent hover:bg-secondary/5 dark:hover:bg-accent/5"
              onClick={() => handleNavigation("prev")}
              disabled={isAnimating}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Navigation dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "nav-dot w-3 h-3 rounded-full",
                    index === activeIndex
                      ? "bg-secondary dark:bg-accent"
                      : "bg-secondary/20 dark:bg-accent/20"
                  )}
                  onClick={() => !isAnimating && setActiveIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              className="bg-white dark:bg-gray-800 border-secondary/20 dark:border-accent/20 text-secondary dark:text-accent hover:bg-secondary/5 dark:hover:bg-accent/5"
              onClick={() => handleNavigation("next")}
              disabled={isAnimating}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
