import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PreviewBadge } from "@/components/PreviewLink";
import React from "react";
import fs from "fs";
import url from "url";
import { workCustomComponents } from "@/components/WorkComponents";

export const metadata = {
  title: "Work",
  description: "Work",
};

const getWorkFileContent = () => {
  const file = fs.readFileSync("src/app/work/content.mdx", "utf-8");
  return file.toString();
};

export default function Work() {
  const workContent = getWorkFileContent();
  return (
    <>
      <div className="py-20 px-20 md:px-28 lg:px-40 xl:px-96 flex flex-col items-center">
        <div className="max-w-screen-lg">
          <div className="p-4">
            <h1 className="text-2xl text-center">⚙️ My Work</h1>
          </div>
          <div className="pb-20 flex flex-col items-center gap-4">
            <div>
              <h1 className="text-md font-light text-justify italic">
                I'm a software engineer working as an independent contractor.
                I've worked with companies of all sizes, from startups to large
                enterprises.
              </h1>
            </div>
            <div>
              <h2 className="text-md font-light text-justify italic">
                My journey in tech has been marked by significant contributions
                to diverse projects, ranging from SaaS platforms to large-scale
                cloud migrations and complex microservices architectures.
              </h2>
            </div>
            <div>
              <h2 className="text-md font-light text-justify italic">
                🚀 Let's explore how my experience can translate into success
                for your next project!
              </h2>
            </div>
          </div>

          <div className="pb-20 flex flex-column items-center justify-center">
            <div>
              <Image
                src="/cofeeshop.webp"
                alt="Work"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="relative">
            <div className="h-full mt-6 absolute border-solid border-[#06b6d4] border-e-2 z-0 left-[-40px]"></div>
            <MDXRemote source={workContent} components={workCustomComponents} />
          </div>
        </div>
      </div>
    </>
  );
}
