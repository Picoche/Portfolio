import { useState } from "react";
import { FirstExperience } from "@/components/sections/Experience/FirstExperience";
import { SecondExperience } from "@/components/sections/Experience/SecondExperience";
import { ThirdExperience } from "@/components/sections/Experience/ThirdExperience";
import { FourthExperience } from "@/components/sections/Experience/FourthExperience";
import LayoutSwitcher from "@/components/layout-switcher";
import type { Layout } from "@/types/layouts";

export function Experience() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstExperience />;
      case "second":
        return <SecondExperience />;
      case "third":
        return <ThirdExperience />;
      case "fourth":
        return <FourthExperience />;
      default:
        return <FirstExperience />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher
        section="experience"
        onLayoutChange={handleLayoutChange}
      />
    </section>
  );
}
