"use client";

import { ModeToggle } from "@/components/mode-toggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
