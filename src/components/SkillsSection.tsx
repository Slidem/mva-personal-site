"use client";

import Image from "next/image";
import React from "react";
import { SkillsCard } from "@/components/SkillsCard";
import { skills } from "@/configs/landingPageContent";

export const SkillsSection = () => {
  return (
    <section className="p-10 md:p-20 md:py-48 flex-col bg-sky-100">
      <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-20">
        <div className="min-w-[300px] min-h-[300px] md:w-1/4 p-2 mb-4 md:mb-0">
          <div className="text-center">
            <h1
              className="text-3xl"
              data-tooltip-id="skills-tooltip"
              data-for="skills-tooltip"
            >
              Skills
            </h1>
          </div>
          <Image
            src={"/skills.png"}
            className="h-auto w-full object-cover"
            alt="Skills"
            height={200}
            width={200}
          />
        </div>
        <div className="w-full pl-4 md:w-3/4 text-lg text-gray-600 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-center center-center">
          {skills.map((skill) => (
            <SkillsCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
