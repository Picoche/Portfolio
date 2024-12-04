# Next.js Developer Portfolio Template

## 🎉 Thank You!  
Thank you for purchasing the **Next.js Developer Portfolio Template**! 🎉  
We hope this template helps you create a stunning, professional portfolio to showcase your skills and projects. If you enjoy using it, please consider leaving a ⭐️ review on Envato Market – your feedback is invaluable and will be used to maintain this template in the future !

## 🚀 Getting Started  
To set up the template, follow these simple steps:
1. Download the repository.
2. Install dependencies with `npm install`
3. Head over to https://resend.com, create an account, and generate an API key.
4. At the root of the repository, next to the 'src' folder, create a .env file, and add a 'RESEND_API_KEY' variable and pass it the key you've just generated.
5. Start the development server with `npm run dev`
6. Congrats ! You can now edit the template to include your own content.

## The Layout Switcher

Below each section, you'll notice a horizontal floating toolbar featuring three to four icons. When clicked, it will load a different layout for the section you're currently viewing !
Experiment with the many combinations, and once you've decided on a variant, inside the `src/components/sections/{sectionName}/{sectionName}Base.tsx` file : 

``` typescript
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
```

Remove the `renderLayout()` function, and instead of returning a `<LayoutSwitcher>` component, simply return whichever variant you'd prefer. For example, if you wanted to keep the Hero section's second variant : 

``` typescript
// src/components/sections/Hero/HeroBase.tsx
export function Hero() {
  return (
    <section className="relative">
      <SecondHero />
    </section>
  );
}
```

Your `Hero()` function should now look like this.

## Lastly

Again, thank you for purchasing this template. If you come across any issue, or feel like some key points weren't explained properly-anything-, please feel free to reach out at hombert.fabien@gmail.com. 