import { useState } from "react";
import LayoutSwitcher from "@/components/layout-switcher";
import { FirstProjects } from "@/components/sections/Projects/FirstProjects";
import { SecondProjects } from "@/components/sections/Projects/SecondProjects";
import { ThirdProjects } from "@/components/sections/Projects/ThirdProjects";
import { FourthProjects } from "@/components/sections/Projects/FourthProjects";
import { Layout } from "@/types/layouts";

export function Projects() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstProjects />;
      case "second":
        return <SecondProjects />;
      case "third":
        return <ThirdProjects />;
      case "fourth":
        return <FourthProjects />;
      default:
        return <FirstProjects />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher section="projects" onLayoutChange={handleLayoutChange} />
    </section>
  );
} 