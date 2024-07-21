import { WobbleCardDemo } from "./components/about/page";
import { TypewriterEffectSmoothDemo } from "./components/coming/page";
import { HeroParallaxDemo } from "./components/home/page";
import { LayoutGridDemo } from "./components/projects/page";
import { LampDemo } from "./components/ui/Lamp";

export default function Home() {
  return (
    <main className="bg-zinc-900 overflow-hidden">
      <HeroParallaxDemo />
      <WobbleCardDemo />
      <LampDemo />
      <LayoutGridDemo />
      <TypewriterEffectSmoothDemo />
    </main>
  );
}
