import { motion } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function SecondHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background dark:bg-primary relative overflow-hidden theme-transition">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 dark:from-accent/5 dark:to-secondary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-accent text-sm font-medium">
                Available for work
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-primary dark:text-background">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Crafting Digital
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-secondary dark:text-accent"
              >
                Experiences
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-primary/80 dark:text-background/80 font-body max-w-md"
            >
              Full-stack developer specializing in building exceptional digital
              experiences. Currently focused on creating accessible,
              human-centered products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                className="hover:bg-secondary hover:text-background text-background bg-primary dark:bg-background dark:text-primary dark:hover:bg-accent dark:hover:text-background transition-colors duration-300"
              >
                <Link href="#projects" className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group border-secondary text-secondary hover:bg-secondary hover:text-background dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-background transition-all duration-300"
              >
                <Link href="#contact">Let&apos;s Talk</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent opacity-30 blur-3xl dark:opacity-20" />

            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-background dark:bg-primary">
                    <Image
                      src="/johndoe.png"
                      width={500}
                      height={500}
                      alt="John Doe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-secondary dark:bg-accent text-background p-4 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
