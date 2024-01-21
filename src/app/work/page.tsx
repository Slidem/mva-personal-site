import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PreviewBadge } from "@/components/PreviewLink";
import React from "react";
import fs from "fs";
import url from "url";
import { workCustomComponents } from "@/components/WorkComponents";

const getWorkFileContent = () => {
  const file = fs.readFileSync("src/app/work/content.mdx", "utf-8");
  return file.toString();
};

export default function Work() {
  const workContent = getWorkFileContent();
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" key="description" content="Work" />
      </Head>
      <div className="py-20 px-20 md:px-40 lg:px-64">
        <div className="p-4">
          <h1 className="text-2xl text-center">⚙️ My Work</h1>
        </div>
        <div className="pb-20 flex flex-col items-center gap-4">
          <div>
            <h1 className="text-md font-light text-justify italic">
              With over nine years of experience as a Senior Software Engineer,
              I've honed a deep expertise in full-stack development, cloud
              computing, and software architecture.{" "}
            </h1>
          </div>
          <div>
            <h2 className="text-md font-light text-justify italic">
              My journey in tech has been marked by significant contributions to
              diverse projects, ranging from SaaS platforms to large-scale cloud
              migrations and complex microservices architectures. My passion
              lies in leveraging cutting-edge technologies like Java, React,
              NextJS, TypeScript, AWS, and GCP to create scalable, efficient
              solutions.{" "}
            </h2>
          </div>
          <div>
            <h2 className="text-md font-light text-justify italic">
              My journey also led me to deeply understand cloud development,
              such that I've pursued certification in both AWS and Kubernetes:{" "}
              <br />
            </h2>
          </div>
          <div className="flex flex-row flex-wrap justify-center  max-w-xl">
            <PreviewBadge url="https://www.credly.com/badges/d8da6041-f578-42dd-9754-a26dd1a11f0d?source=linked_in_profile" />
            <PreviewBadge url="https://www.credly.com/badges/91d5dd1e-ddd3-41db-a937-c3b846d32c00/linked_in_profile" />
            <PreviewBadge url="https://www.credly.com/badges/c5c6eeab-a720-46d8-bd8f-d0fdc1c7c682/linked_in_profile" />
            <PreviewBadge url="https://www.credly.com/badges/8bc10a4f-45bc-4ef4-a7f7-12c69688c098/linked_in_profile" />
            <PreviewBadge url="https://www.credly.com/badges/2e591128-9d7c-4072-b0f7-a2268521a792?source=linked_in_profile" />
            <PreviewBadge url="https://www.credly.com/badges/443ab1bd-64f0-40ca-8ed3-833c36f9f309?source=linked_in_profile" />
          </div>
          <div>
            <h2 className="text-md font-light text-justify italic">
              🚀 Let's explore how my experience can translate into success for
              your next project!
            </h2>
          </div>
        </div>

        <div className="pb-20 flex flex-column items-center justify-center">
          <div>
            <Image src="/cofeeshop.webp" alt="Work" width={300} height={300} />
          </div>
        </div>
        <div className="relative">
          <div className="h-full mt-6 absolute border-solid border-[#06b6d4] border-e-2 z-0 left-[-40px]"></div>
          <MDXRemote source={workContent} components={workCustomComponents} />
        </div>
      </div>
    </>
  );
}
