"use client";
import React from "react";
import { LayoutGrid } from "../ui/LayoutGrid";
import Link from "next/link";

const SkeletonOne = () => {
  return (
    <div className="backdrop-blur-sm p-4 text-white">
      <p className="font-bold md:text-4xl text-xl text-white">
        TDOT Immigration
      </p>
      <p className="font-normal text-sm py-2 text-white">
        Freelance Web Development (April 2024 - July 2024)
      </p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        Developed an immigration website using Next.js. Designing and working
        with a team of freelancers to complete the project within the designated
        timeframe.
      </p>
      Link to the website:{" "}
      <Link href="https://tdotimm.com" target="_blank" className="underline">
        TDOT Immigration
      </Link>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="backdrop-blur-sm p-4">
      <p className="font-bold md:text-4xl text-xl text-white">EcoRevive</p>
      <p className="font-normal text-sm py-2 text-white">
        Ranked <strong>Second Overall</strong> at HighSchoolHacks organized by{" "}
        <strong>MLH</strong>
      </p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        Developed a website focused on wildlife preservation, featuring chatbot
        assistance. Upcoming enhancements include integrating a payment gateway
        and social media.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="backdrop-blur-sm p-4">
      <p className="font-bold md:text-4xl text-xl text-white">Heakth-Cult</p>
      <p className="font-normal text-sm py-2 text-white">Ranked <strong>Top 10</strong> at <strong>HackOverflow 6.0, NIT Durgapur</strong></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        Developed a medical assistance website with OAuth customer login for
        secure access.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="backdrop-blur-sm p-4">
      <p className="font-bold md:text-4xl text-xl text-white">WellTrackr</p>
      <p className="font-normal text-sm py-2 text-white">
        Web Developer Internship (June 2023 - Nov 2023)
      </p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        Developed a website to streamline therapist workflows and reduce
        workload using React for front-end development. Contributed to backend
        tasks with Node.js, gaining full-stack development experience.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/heroSection/Tdot.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/heroSection/EcoRevive.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/heroSection/HealthCult.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/projects/Well_Trackr.webp",
  },
];

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
