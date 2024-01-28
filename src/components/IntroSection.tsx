import Image from "next/image";
import { LandingPageIntroLink } from "@/components/LandingPageIntroLink";
import React from "react";

export const IntroSection = () => {
  return (
    <section className="p-8 py-20 lg:p-48 lg:py-48 flex flex-col md:flex-row">
      <div className="flex flex-col-reverse xl:flex-row items-center gap-4 md:gap-20 h-auto md:min-h-80">
        <div className="min-w-[300px] min-h-[300px] md:w-1/4 p-2 mb-4 md:mb-0">
          <Image
            src={"/about.png"}
            className="h-auto w-full object-cover"
            alt="Mihai Alexandru"
            height={200}
            width={200}
          />
        </div>
        <div className="w-full md:w-3/4 pl-4 text-lg text-gray-600 flex flex-col gap-8">
          <h1 className="text-2xl font-bold">👋🏻 Welcome</h1>
          <p className="text-justify">
            If you've reached this part of the internet, you landed on my cosy
            tech corner ☕
          </p>
          <p className="text-justify">
            <b>I'm Alex</b>, a software engineer with over nine years of
            experience in the tech industry. I'm an independent contractor, and
            I've worked with companies of all sizes, from startups to large
            enterprises. If you want to learn more about my work,{" "}
            <LandingPageIntroLink href="/work">
              check this out
            </LandingPageIntroLink>
            .{" "}
          </p>
          <p className="text-justify">
            I also write about{" "}
            <b>tech, programming, and software architecture</b>. If you want to
            read more,{" "}
            <LandingPageIntroLink href="/blog">
              check out my blog
            </LandingPageIntroLink>
            , and also make sure to{" "}
            <LandingPageIntroLink href="/blog">
              subscribe to my newsletter
            </LandingPageIntroLink>{" "}
            to get notified when I publish new content or when I'm available for
            new projects.
          </p>
        </div>
      </div>
    </section>
  );
};
