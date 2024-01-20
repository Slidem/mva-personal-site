"use client";

import Head from "next/head";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { projectsCustomComponents } from "@/components/ProjectsComponents";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" key="description" content="Projects" />
      </Head>
      <div className="p-20 md:p-40 lg:p-64">
        <div className="pb-20">
          <h1 className="text-md font-light text-justify italic">
            With over nine years of experience as a Senior Software Engineer,
            I've honed a deep expertise in full-stack development, cloud
            computing, and software architecture. <br />
            <br />
            My journey in tech has been marked by significant contributions to
            diverse projects, ranging from SaaS platforms and live conferencing
            tools to large-scale cloud migrations and complex microservices
            architectures. My passion lies in leveraging cutting-edge
            technologies like Java, React, NextJS, TypeScript, AWS, and GCP to
            create scalable, efficient solutions. <br />
            <br />
            My journey also led me to deeply understand cloud development, such
            that I've pursued certification in both AWS and Kubernetes: <br />
            <br />
            Let's explore how my experience can translate into success for your
            next project!
          </h1>
        </div>
        <div className="pb-20 flex flex-column items-center justify-center">
          <div>
            <Image
              src="/cofeeshop.webp"
              alt="Projects"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="relative">
          <div className="h-full mt-6 absolute border-solid border-[#06b6d4] border-e-2 z-0 left-[-40px]"></div>
          <MDXProvider components={projectsCustomComponents}>
            {children}
          </MDXProvider>
        </div>
      </div>
    </>
  );
};

export default Layout;
