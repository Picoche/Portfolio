import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  Clock,
  MessageSquare,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/hooks/use-contact-form";
import { contactFormSchema as schema } from "../../../lib/validations/contact";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = {
  email: "contact@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  availability: {
    days: "Monday - Friday",
    hours: "9:00 AM - 6:00 PM",
    timezone: "PST",
  },
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ],
};

const steps = [
  {
    title: "Basic Info",
    fields: ["name", "email"],
    icon: Mail,
  },
  {
    title: "Project Details",
    fields: ["subject"],
    icon: MessageSquare,
  },
  {
    title: "Message",
    fields: ["message"],
    icon: Send,
  },
];

export function ThirdContact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const { form, isSubmitting, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors },
    trigger,
  } = form;

  useGSAP(
    () => {
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
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Form card animation
      tl.from(".form-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      // Steps animation
      tl.from(".step-item", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      // 3D rotation effect on form card
      const card = formRef.current;
      if (card) {
        (card as HTMLElement).addEventListener("mousemove", (e: MouseEvent) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.5,
            ease: "power2.out",
            transformPerspective: 1000,
          });
        });

        (card as HTMLElement).addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }

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

      return () => {
        if (card) {
          (card as HTMLElement).removeEventListener("mousemove", () => {});
          (card as HTMLElement).removeEventListener("mouseleave", () => {});
        }
      };
    },
    { scope: sectionRef }
  );

  const validateStep = async (step: number) => {
    const currentFields = steps[step].fields as Array<
      keyof (typeof schema)["shape"]
    >;
    const result = await trigger(currentFields);
    return result;
  };

  const handleNext = async () => {
    if (await validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background dark:bg-background-dark relative overflow-hidden min-h-screen"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 dark:from-accent/5 dark:to-secondary/5" />
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
          <span className="bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h2>

        {/* Steps indicator */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "step-item flex flex-col items-center gap-2",
                    currentStep === index
                      ? "text-secondary dark:text-accent scale-110"
                      : currentStep > index
                      ? "text-green-500 dark:text-green-400"
                      : "text-primary/40 dark:text-slate-50/40"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      "border-2",
                      currentStep === index
                        ? "border-secondary dark:border-accent"
                        : currentStep > index
                        ? "border-green-500 dark:border-green-400"
                        : "border-primary/40 dark:border-slate-50/40"
                    )}
                  >
                    {currentStep > index ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              );
            })}
          </div>
          <div className="relative mt-4">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/10 dark:bg-slate-50/10 rounded-full" />
            <div
              className="absolute top-0 left-0 h-1 bg-secondary dark:bg-accent rounded-full"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Form card */}
        <div
          ref={formRef}
          className="form-card max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Step content */}
            <div className="min-h-[300px]">
              {currentStep === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm text-primary/60 dark:text-slate-50/60"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="John Doe"
                      className={cn(
                        "bg-secondary/5 dark:bg-accent/5 border-secondary/20 dark:border-accent/20",
                        errors.name &&
                          "border-red-500 dark:border-red-400"
                      )}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm text-primary/60 dark:text-slate-50/60"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                      className={cn(
                        "bg-secondary/5 dark:bg-accent/5 border-secondary/20 dark:border-accent/20",
                        errors.email &&
                          "border-red-500 dark:border-red-400"
                      )}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm text-primary/60 dark:text-slate-50/60"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="Project Inquiry"
                    className={cn(
                      "bg-secondary/5 dark:bg-accent/5 border-secondary/20 dark:border-accent/20",
                      errors.subject &&
                        "border-red-500 dark:border-red-400"
                    )}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm text-primary/60 dark:text-slate-50/60"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message here..."
                    className={cn(
                      "min-h-[200px] bg-secondary/5 dark:bg-accent/5 border-secondary/20 dark:border-accent/20",
                      errors.message &&
                        "border-red-500 dark:border-red-400"
                    )}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="group hover:bg-secondary/5 dark:hover:bg-accent/5"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1" />
                Previous
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary dark:from-accent dark:to-secondary dark:hover:from-secondary dark:hover:to-accent"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 ml-2" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="group bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary dark:from-accent dark:to-secondary dark:hover:from-secondary dark:hover:to-accent"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-secondary/20 dark:border-accent/20">
            <Mail className="w-6 h-6 text-secondary dark:text-accent mb-4" />
            <h3 className="font-semibold text-primary dark:text-slate-50 mb-2">
              Email
            </h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-primary/80 dark:text-slate-50/80 hover:text-secondary dark:hover:text-accent"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-secondary/20 dark:border-accent/20">
            <Phone className="w-6 h-6 text-secondary dark:text-accent mb-4" />
            <h3 className="font-semibold text-primary dark:text-slate-50 mb-2">
              Phone
            </h3>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-primary/80 dark:text-slate-50/80 hover:text-secondary dark:hover:text-accent"
            >
              {contactInfo.phone}
            </a>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-secondary/20 dark:border-accent/20">
            <Clock className="w-6 h-6 text-secondary dark:text-accent mb-4" />
            <h3 className="font-semibold text-primary dark:text-slate-50 mb-2">
              Available Hours
            </h3>
            <p className="text-primary/80 dark:text-slate-50/80">
              {contactInfo.availability.days}
              <br />
              {contactInfo.availability.hours}{" "}
              {contactInfo.availability.timezone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
