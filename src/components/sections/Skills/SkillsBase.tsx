import { useState } from "react";
import LayoutSwitcher from "@/components/layout-switcher";
import { FirstSkills } from "@/components/sections/Skills/FirstSkills";
import { SecondSkills } from "@/components/sections/Skills/SecondSkills";
import { ThirdSkills } from "@/components/sections/Skills/ThirdSkills";
import { FourthSkills } from "@/components/sections/Skills/FourthSkills";
import { Layout } from "@/types/layouts";

export function Skills() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstSkills />;
      case "second":
        return <SecondSkills />;
      case "third":
        return <ThirdSkills />;
      case "fourth":
        return <FourthSkills />;
      default:
        return <FirstSkills />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher section="skills" onLayoutChange={handleLayoutChange} />
    </section>
  );
} 