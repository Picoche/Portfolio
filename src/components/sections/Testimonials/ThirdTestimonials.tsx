import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import {
  Quote,
  Star,
  ArrowRight,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";
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
  impact: {
    metric: string;
    value: string;
    icon: any;
  }[];
  video?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Chen",
    position: "Director of Engineering",
    company: "Global Tech Solutions",
    image: "/testimonials/robert.jpg",
    quote:
      "The implementation of our enterprise platform exceeded all expectations. The performance optimizations and architectural decisions made have scaled flawlessly with our rapid growth.",
    rating: 5,
    project: "Enterprise Platform Modernization",
    date: "March 2024",
    impact: [
      { metric: "Performance", value: "+300%", icon: TrendingUp },
      { metric: "Global Users", value: "2M+", icon: Users },
      { metric: "Countries", value: "50+", icon: Globe },
    ],
    video: "/testimonials/project-showcase.mp4",
  },
];

export function ThirdTestimonials() {
  const sectionRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Parallax background effect
      gsap.to(".parallax-bg", {
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Title reveal animation
      tl.from(".section-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // 3D card rotation setup
      const cards = gsap.utils.toArray(".testimonial-card");
      cards.forEach((card: any) => {
        const cardContent = card.querySelector(".card-content");
        const cardMedia = card.querySelector(".card-media");

        card.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          });

          gsap.to(cardContent, {
            z: 50,
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to(cardMedia, {
            z: 100,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });

          gsap.to([cardContent, cardMedia], {
            z: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });

      // Floating elements animation
      gsap.to(".floating-element", {
        y: -10,
        duration: "random(2, 3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background dark:bg-primary theme-transition relative overflow-hidden min-h-screen"
    >
      {/* Animated background */}
      <div className="parallax-bg absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
        <div className="grid grid-cols-12 gap-8 opacity-10 rotate-12 scale-150">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="floating-element w-8 h-8 rounded-full bg-secondary/20 dark:bg-accent/20"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-5xl md:text-7xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>

        <div className="grid gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={cn(
                "testimonial-card",
                "bg-white/90 dark:bg-primary-dark/90 backdrop-blur-lg",
                "rounded-2xl shadow-xl overflow-hidden",
                "transform-gpu transition-all duration-500",
                "hover:shadow-2xl"
              )}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Media Section */}
                <div className="card-media relative h-full min-h-[300px] bg-secondary/5 dark:bg-accent/5 rounded-l-2xl overflow-hidden">
                  {testimonial.video ? (
                    <div className="relative w-full h-full">
                      <video
                        src={testimonial.video}
                        className="w-full h-full object-cover"
                        autoPlay={isVideoPlaying}
                        loop
                        muted
                        playsInline
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute bottom-4 right-4"
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                      >
                        {isVideoPlaying ? "Pause" : "Play"} Demo
                      </Button>
                    </div>
                  ) : (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content Section */}
                <div className="card-content p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/20 dark:border-accent/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-primary dark:text-background">
                        {testimonial.name}
                      </h3>
                      <p className="text-secondary dark:text-accent">
                        {testimonial.position}
                      </p>
                      <p className="text-primary/60 dark:text-background/60">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <Quote className="w-10 h-10 text-secondary/30 dark:text-accent/30" />
                  <blockquote className="text-lg text-primary/80 dark:text-background/80">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {testimonial.impact.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-secondary/5 dark:bg-accent/5 text-center"
                        >
                          <Icon className="w-6 h-6 mx-auto mb-2 text-secondary dark:text-accent" />
                          <div className="font-bold text-xl text-secondary dark:text-accent">
                            {item.value}
                          </div>
                          <div className="text-sm text-primary/60 dark:text-background/60">
                            {item.metric}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-secondary dark:fill-accent text-secondary dark:text-accent"
                          />
                        )
                      )}
                    </div>
                    <Button variant="outline" className="group">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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
