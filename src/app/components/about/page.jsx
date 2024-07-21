"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/WobbleCard";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Academic Background
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Final-year B. Tech student in Computer Engineering at MPSTME, NMIMS,
            Mumbai.<br/> <strong> CGPA</strong> - 3.54/4
          </p>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            High School at Delhi Public School.<br/> <strong> XII</strong> - 94.8%
          </p>
        </div>
        <Image
          src="/college.webp"
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute -right-2 filter -bottom-4 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Extracurricular Activities
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Active participant in hackathons, coding competitions, and tech
          meetups. Passionate about continuous learning and community
          involvement.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Connect With Me!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            <Link
              href="https://github.com/varun-s20"
              target="_blank"
              className="flex items-center gap-2 py-2"
            >
              <FaGithub />
              Github: varun-s20
            </Link>
            <Link
              href="https://github.com/varun-s20"
              target="_blank"
              className="flex items-center gap-2 py-2"
            >
              <FaLinkedin />
              LinkedIn: varun-singh-802816213
            </Link>
            <Link
              href="https://github.com/varun-s20"
              target="_blank"
              className="flex items-center gap-2 py-2"
            >
              <SiLeetcode />
              Leetcode: varun_s20
            </Link>
          </p>
        </div>
        <Image
          src="/github.webp"
          width={700}
          height={700}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[5%] -bottom-16 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
