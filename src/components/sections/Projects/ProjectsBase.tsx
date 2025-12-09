"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "./ProjectCard";

// Import images
import noriImg from "./assets/nori.png";
import commercantImg from "./assets/commercant.nori.png";
import legacyImg from "./assets/legacy.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Nori Marketplace",
    description: "Une plateforme de marché en ligne moderne et évolutive, en cours de développement. Fonctionnalités incluant la recherche de boutique par géolocalisation, réservation de produits et historique des commandes.",
    tags: ["Marketplace", "E-commerce", "Application Web"],
    link: "https://nori-marketplace.fr",
    image: noriImg,
    // github: "#", // Add if available
  },
  {
    title: "Commerçant Nori",
    description: 'Interface dédiée aux commerçants pour la gestion de leur boutique sur la marketplace Nori, en cours de développement. Tableaux de bord, gestion des stocks et suivi des ventes. Pour tester les fonctionnalités du dashboard, les identifiants "hombert.fabien+merchant@gmail.com" et "merchant123" sont disponibles.',
    tags: ["Dashboard", "B2B", "Gestion"],
    link: "https://commercant.nori-marketplace.fr",
    image: commercantImg,
  },
  {
    title: "Portfolio Legacy",
    description: "Ancienne version de mon portfolio personnel. Présentation de mes projets et compétences antérieurs.",
    tags: ["Portfolio", "Archive", "Personnel"],
    link: "https://legacy.fabien-hombert.com",
    image: legacyImg,
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Title animation
    gsap.from(".projects-title", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Cards animation - Independent trigger
    gsap.fromTo(".projects-list > *", 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 85%", // Triggers slightly later than title
          toggleActions: "play none none none",
        },
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 bg-background dark:bg-background-dark relative overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
         <h2 className="projects-title text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent dark:from-accent dark:to-secondary bg-clip-text text-transparent">
          Mes Projets
        </h2>
        
        <div className="projects-list flex flex-col gap-12 max-w-5xl mx-auto">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}
