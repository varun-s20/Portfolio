import { WobbleCardDemo } from "./components/about/About";
import { TypewriterEffectSmoothDemo } from "./components/coming/Coming";
import { HeroParallaxDemo } from "./components/home/Home";
import { LayoutGridDemo } from "./components/projects/Projects";
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
