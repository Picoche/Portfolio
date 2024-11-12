import { useState } from "react";
import LayoutSwitcher from "@/components/layout-switcher";
import { FirstHero } from "./FirstHero";
import { SecondHero } from "./SecondHero";
import { ThirdHero } from "./ThirdHero";
import { FourthHero } from "./FourthHero";
import { Layout } from "@/types/layouts";

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
      <LayoutSwitcher section="hero" onLayoutChange={handleLayoutChange} />
    </section>
  );
}
