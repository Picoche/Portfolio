import { useState } from "react";
import { FirstHero } from "@/components/sections/Hero/FirstHero";
import { SecondHero } from "@/components/sections/Hero/SecondHero";
import { ThirdHero } from "@/components/sections/Hero/ThirdHero";
import { FourthHero } from "@/components/sections/Hero/FourthHero";
import LayoutSwitcher from "@/components/layout-switcher";
import type { Layout } from "@/types/layouts";

export function Hero() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstHero />;
      case "second":
        return <SecondHero />;
      case "third":
        return <ThirdHero />;
      case "fourth":
        return <FourthHero />;
      default:
        return <FirstHero />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher
        section="contact"
        onLayoutChange={handleLayoutChange}
        availableLayouts={4}
      />
    </section>
  );
}
