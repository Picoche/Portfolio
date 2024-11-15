import { useState } from "react";
import LayoutSwitcher from "@/components/layout-switcher";
import { FirstEducation } from "@/components/sections/Education/FirstEducation";
import { SecondEducation } from "@/components/sections/Education/SecondEducation";
import { ThirdEducation } from "@/components/sections/Education/ThirdEducation";
import { FourthEducation } from "@/components/sections/Education/FourthEducation";
import { Layout } from "@/types/layouts";

export function Education() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstEducation />;
      case "second":
        return <SecondEducation />;
      case "third":
        return <ThirdEducation />;
      case "fourth":
        return <FourthEducation />;
      default:
        return <FirstEducation />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher section="education" onLayoutChange={handleLayoutChange} />
    </section>
  );
} 