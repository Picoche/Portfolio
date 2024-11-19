import { useState } from "react";
import { FirstContact } from "@/components/sections/Contact/FirstContact";
import { SecondContact } from "@/components/sections/Contact/SecondContact";
import { ThirdContact } from "@/components/sections/Contact/ThirdContact";
import LayoutSwitcher from "@/components/layout-switcher";
import type { Layout } from "@/types/layouts";

export function Contact() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstContact />;
      case "second":
        return <SecondContact />;
      case "third":
        return <ThirdContact />;
      default:
        return <FirstContact />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher
        section="contact"
        onLayoutChange={handleLayoutChange}
        availableLayouts={3}
      />
    </section>
  );
}
