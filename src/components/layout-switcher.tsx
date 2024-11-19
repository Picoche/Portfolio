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
  availableLayouts?: number;
}

export default function LayoutSwitcher({
  section,
  onLayoutChange,
  availableLayouts = 4,
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

  const getLayoutFromIndex = (index: number) => {
    return ["first", "second", "third", "fourth"][index];
  };

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center bg-background dark:bg-primary border border-border rounded-full shadow-lg z-50">
      {Array.from({ length: availableLayouts }, (_, index) => (
        <div key={index} className="relative flex items-center">
          {index > 0 && (
            <Separator orientation="vertical" className="h-6 mx-1" />
          )}
          <Button
            variant={
              currentLayout === getLayoutFromIndex(index) ? "default" : "ghost"
            }
            size="icon"
            className="relative"
            onClick={() =>
              handleLayoutChange(getLayoutFromIndex(index) as LayoutType)
            }
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
