import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/use-contact-form";
import { cn } from "@/lib/utils";

const contactInfo = {
  email: "contact@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  availability: "Mon - Fri: 9:00 AM - 6:00 PM PST",
};

export function FirstContact() {
  const sectionRef = useRef(null);
  const { form, isSubmitting, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors },
  } = form;

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Title animation
      tl.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Contact info animation
      tl.from(".contact-info", {
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: "power2.out",
      });

      // Form animation
      tl.from(".contact-form", {
        opacity: 0,
        x: 30,
        duration: 0.6,
        ease: "power2.out",
      });

      // Icon animations
      gsap.to(".contact-icon", {
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
      className="py-20 bg-background dark:bg-primary theme-transition"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16 text-primary dark:text-background">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="contact-info lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-primary-dark rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20">
              <h3 className="text-xl font-semibold mb-6 text-primary dark:text-background">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10 dark:bg-accent/10">
                    <Mail className="contact-icon w-6 h-6 text-secondary dark:text-accent" />
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
                    <Phone className="contact-icon w-6 h-6 text-secondary dark:text-accent" />
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
                    <MapPin className="contact-icon w-6 h-6 text-secondary dark:text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 dark:text-background/60">
                      Location
                    </p>
                    <p className="text-primary dark:text-background">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-secondary/20 dark:border-accent/20">
                <p className="text-sm text-primary/60 dark:text-background/60">
                  Available Hours
                </p>
                <p className="text-primary dark:text-background">
                  {contactInfo.availability}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form lg:col-span-2">
            <div className="bg-white dark:bg-primary-dark rounded-2xl p-8 shadow-lg border border-secondary/20 dark:border-accent/20">
              <h3 className="text-xl font-semibold mb-6 text-primary dark:text-background">
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
                  className="w-full md:w-auto bg-gradient-to-r from-secondary to-accent"
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
          </div>
        </div>
      </div>
    </section>
  );
}
