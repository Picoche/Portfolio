import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  Calendar,
  Clock,
  Globe,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/hooks/use-contact-form";

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

const quickLinks = [
  { label: "Schedule a Call", icon: Calendar },
  { label: "View Portfolio", icon: Globe },
  { label: "FAQ", icon: MessageSquare },
  { label: "Support", icon: Phone },
];

export function SecondContact() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const [activeQuickLink, setActiveQuickLink] = useState<number | null>(null);
  const { form, isSubmitting, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors },
  } = form;

  useGSAP(
    () => {
      const tl = gsap.timeline();

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

      // Split content animation
      tl.from(".split-left", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".split-right",
        {
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Quick links animation
      tl.from(".quick-link", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });

      // Floating elements animation
      gsap.to(".floating-element", {
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
      className="py-20 bg-background dark:bg-primary theme-transition relative overflow-hidden min-h-screen"
    >
      {/* Background pattern */}
      <div className="pattern-bg absolute inset-0">
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
            Let&apos;s Connect
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="split-left space-y-8">
            <div className="bg-white/80 dark:bg-primary-dark/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20">
              <h3 className="text-2xl font-semibold mb-6 text-primary dark:text-background">
                Send a Message
              </h3>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm text-primary/60 dark:text-background/60"
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
                          "border-red-500 dark:border-red-400 focus-visible:ring-red-500"
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
                      className="text-sm text-primary/60 dark:text-background/60"
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
                          "border-red-500 dark:border-red-400 focus-visible:ring-red-500"
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

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm text-primary/60 dark:text-background/60"
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
                        "border-red-500 dark:border-red-400 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm text-primary/60 dark:text-background/60"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message here..."
                    className={cn(
                      "min-h-[150px] bg-secondary/5 dark:bg-accent/5 border-secondary/20 dark:border-accent/20",
                      errors.message &&
                        "border-red-500 dark:border-red-400 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-secondary to-accent"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <button
                    key={index}
                    className={cn(
                      "quick-link group",
                      "bg-white/80 dark:bg-primary-dark/80 backdrop-blur-lg",
                      "rounded-xl p-4 shadow-lg border border-secondary/20 dark:border-accent/20",
                      "transition-all duration-300",
                      "hover:shadow-xl hover:-translate-y-1",
                      activeQuickLink === index && "scale-95"
                    )}
                    onClick={() => setActiveQuickLink(index)}
                  >
                    <Icon className="w-6 h-6 mb-2 text-secondary dark:text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-primary dark:text-background">
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="split-right space-y-8">
            <div className="bg-white/80 dark:bg-primary-dark/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20">
              <h3 className="text-2xl font-semibold mb-6 text-primary dark:text-background">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/10">
                    <Mail className="w-6 h-6 text-secondary dark:text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 dark:text-background/60">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/10">
                    <Phone className="w-6 h-6 text-secondary dark:text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 dark:text-background/60">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary dark:text-background hover:text-secondary dark:hover:text-accent transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/10">
                    <Clock className="w-6 h-6 text-secondary dark:text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 dark:text-background/60">
                      Available Hours
                    </p>
                    <p className="text-primary dark:text-background">
                      {contactInfo.availability.days}
                    </p>
                    <p className="text-primary/80 dark:text-background/80 text-sm">
                      {contactInfo.availability.hours}{" "}
                      {contactInfo.availability.timezone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder - To be replaced with actual map integration */}
            <div
              ref={mapRef}
              className="h-[300px] bg-secondary/10 dark:bg-accent/10 rounded-2xl overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-primary/60 dark:text-background/60">
                Map Integration Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
