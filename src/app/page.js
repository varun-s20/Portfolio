import { WobbleCardDemo } from "./components/about/page";
import { StickyScrollRevealDemo } from "./components/education/page";
import { HeroParallaxDemo } from "./components/home/page";

export default function Home() {
  return (
    <main className="bg-zinc-900">
      <HeroParallaxDemo />
      <WobbleCardDemo />
      <StickyScrollRevealDemo />
    </main>
  );
}
