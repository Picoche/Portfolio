import { useState } from "react";
import LayoutSwitcher from "@/components/layout-switcher";
import { FirstAbout } from "./FirstAbout";
import { SecondAbout } from "./SecondAbout";
import { ThirdAbout } from "./ThirdAbout";
import { FourthAbout } from "./FourthAbout";
import { Layout } from "@/types/layouts";

export function About() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstAbout />;
      case "second":
        return <SecondAbout />;
      case "third":
        return <ThirdAbout />;
      case "fourth":
        return <FourthAbout />;
      default:
        return <FirstAbout />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher section="about" onLayoutChange={handleLayoutChange} />
    </section>
  );
}
