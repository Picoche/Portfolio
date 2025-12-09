import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: StaticImageData;
}

export function ProjectCard({ title, description, tags, link, github, image }: ProjectCardProps) {
  return (
    <Card className="project-card overflow-hidden border-secondary/20 dark:border-accent/20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-secondary dark:hover:border-accent">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section - Clickable */}
        <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden group">
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                     <Image 
                        src={image} 
                        alt={title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold flex items-center gap-2">
                             <ExternalLink className="w-5 h-5" />
                             Visiter
                        </span>
                    </div>
                </a>
            ) : (
                 <Image 
                    src={image} 
                    alt={title} 
                    fill 
                    className="object-cover"
                />
            )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
            <div className="space-y-4">
                 <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {title}
                    </h3>
                    <div className="flex gap-2">
                         {github && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-secondary dark:hover:text-accent" asChild>
                                <a href={github} target="_blank" rel="noopener noreferrer" title="Code Source">
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                        {link && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-secondary dark:hover:text-accent md:hidden" asChild>
                                <a href={link} target="_blank" rel="noopener noreferrer" title="Visiter">
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal text-secondary dark:text-accent bg-secondary/10 dark:bg-accent/10 hover:bg-secondary/20 dark:hover:bg-accent/20">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>

             <div className="pt-6 mt-auto hidden md:flex">
                {link && (
                    <Button 
                        size="sm" 
                        className="gap-2 bg-secondary text-primary-foreground hover:bg-secondary/90 dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90 ml-auto transition-colors duration-300" 
                        asChild
                    >
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Voir le projet
                        </a>
                    </Button>
                )}
            </div>
        </div>
      </div>
    </Card>
  );
}
