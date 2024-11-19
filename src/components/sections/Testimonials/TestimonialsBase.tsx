import { useState } from "react";
import { FirstTestimonials } from "@/components/sections/Testimonials/FirstTestimonials";
import { SecondTestimonials } from "@/components/sections/Testimonials/SecondTestimonials";
import { ThirdTestimonials } from "@/components/sections/Testimonials/ThirdTestimonials";
import LayoutSwitcher from "@/components/layout-switcher";
import type { Layout } from "@/types/layouts";

export function Testimonials() {
  const [currentLayout, setCurrentLayout] = useState<Layout>("first");

  const handleLayoutChange = (layout: Layout) => {
    setCurrentLayout(layout);
  };

  const renderLayout = () => {
    switch (currentLayout) {
      case "first":
        return <FirstTestimonials />;
      case "second":
        return <SecondTestimonials />;
      case "third":
        return <ThirdTestimonials />;
      default:
        return <FirstTestimonials />;
    }
  };

  return (
    <section className="relative">
      {renderLayout()}
      <LayoutSwitcher
        section="testimonials"
        onLayoutChange={handleLayoutChange}
        availableLayouts={3}
      />
    </section>
  );
}
