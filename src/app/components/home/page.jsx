"use client";
import React from "react";
import { HeroParallax } from "../ui/HeroParallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Arcade",
    thumbnail: "/heroSection/Arcade.webp",
  },
  {
    title: "WellTrackr",
    thumbnail: "/heroSection/WellTrackr.webp",
  },
  {
    title: "TDOT Immigration",
    thumbnail: "/heroSection/Tdot.webp",
  },

  {
    title: "EcoRevive",
    thumbnail: "/heroSection/EcoRevive.webp",
  },
  {
    title: "theBlankPage",
    thumbnail: "/heroSection/BlankPAgeMusic.webp",
  },
  {
    title: "TDOT Immigration",
    thumbnail: "/heroSection/TdotBlog.webp",
  },

  {
    title: "BlankPage",
    thumbnail: "/heroSection/BlankPage.webp",
  },
  {
    title: "Health-Cult",
    thumbnail: "/heroSection/HealthCult.webp",
  },
  {
    title: "EcoRevive",
    thumbnail: "/heroSection/EcoRev.webp",
  },
];
