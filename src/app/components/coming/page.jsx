"use client";
import { TypewriterEffectSmooth } from "../ui/TypeWriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Connect,",
    },
    {
      text: "Innovate,",
    },
    {
      text: "and",
    },
    {
      text: "Build",
    },
    {
      text: "Together.",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] -my-40 md:-my-24">
      <p className="text-neutral-200 text-sm md:text-base lg:text-lg">
        The Journey begins here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-blue-500 border-white border-transparent text-white text-sm"
          onClick={() => (window.location.href = "mailto:varun17593@gmail.com")}
        >
          Connect now
        </button>
      </div>
    </div>
  );
}
