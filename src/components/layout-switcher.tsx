"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Layout,
  User,
  Briefcase,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { Layout as LayoutType, SectionType } from "@/types/layouts";

interface LayoutSwitcherProps {
  section: SectionType;
  onLayoutChange: (layout: LayoutType) => void;
}

export default function LayoutSwitcher({
  section,
  onLayoutChange,
}: LayoutSwitcherProps) {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("first");

  const handleLayoutChange = (layout: LayoutType) => {
    setCurrentLayout(layout);
    onLayoutChange(layout);
  };

  const getIcon = (section: SectionType) => {
    switch (section) {
      case "hero":
        return Layout;
      case "about":
        return User;
      case "projects":
        return Layout;
      case "experience":
        return Briefcase;
      case "education":
        return GraduationCap;
      default:
        return MessageSquare;
    }
  };

  const Icon = getIcon(section);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center bg-background dark:bg-primary border border-border rounded-full shadow-lg z-50">
      {["first", "second", "third", "fourth"].map((layout, index) => (
        <div key={layout} className="relative">
          {index > 0 && <Separator className="my-1" />}
          <Button
            variant={currentLayout === layout ? "default" : "ghost"}
            size="icon"
            className="relative"
            onClick={() => handleLayoutChange(layout as LayoutType)}
          >
            <Icon className="h-4 w-4" />
            <Badge
              variant="secondary"
              className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-[10px] font-bold"
            >
              {index + 1}
            </Badge>
          </Button>
        </div>
      ))}
    </div>
  );
}
