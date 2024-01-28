"use client";

import {
  BookOpenIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import { BlogPostMetadata } from "@/models.ts/blog";
import Head from "next/head";
import { Modal } from "../Modal";
import { ModalContextProvider } from "../ModalContext";
import { MyAvatar } from "../MyAvatar";
import React from "react";

interface Props {
  children: React.ReactNode;
  meta: BlogPostMetadata;
}

const calculateReadTime = (children: React.ReactNode) => {
  const content = getNodeText(children);
  const wordsPerMinute = 200;
  const numberOfWords = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(numberOfWords / wordsPerMinute);
  return readTime;
};

const getNodeText = (node: React.ReactNode): string => {
  if (node == null) return "";

  switch (typeof node) {
    case "string":
    case "number":
      return node.toString();

    case "boolean":
      return "";

    case "object": {
      if (node instanceof Array) return node.map(getNodeText).join("");
      if ("props" in node) return getNodeText(node.props.children);
    }

    default:
      console.warn("Unresolved `node` of type:", typeof node, node);
      return "";
  }
};

const Layout: React.FC<Props> = ({ children, meta }) => {
  const { title, shortDescription, publishDate, tags } = meta;
  const formattedPublishDate = new Date(publishDate).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const readTime = calculateReadTime(children);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" key="description" content={shortDescription} />
        <link rel="canonical" href={meta.canonicalUrl} />
      </Head>
      <ModalContextProvider>
        <Modal />
        <div className="flex flex-col items-center py-4 md:py-10">
          <div className="max-w-[calc(100vw-20px)] xl:max-w-screen-xl flex flex-col py-10  p-6 md:px-20 lg:px-48 gap-8 text-gray-600">
            <div className="flex flex-col gap-8 w-full">
              <div className="prose w-full max-w-full">
                <h1 className="text-2xl text-black">{title}</h1>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-4 items-center align-center">
                  <MyAvatar />
                  <div className="flex flex-col gap-1">
                    <h4>
                      published by{" "}
                      <span className="text-bold italic">Mihai Alexandru </span>
                    </h4>
                    <div className="flex flex-row items-center gap-2">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <h6 className="text-sm italic">{formattedPublishDate}</h6>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <ClockIcon className="h-6 w-6" />
                  <span className="text-md text-bold italic">
                    {readTime} min read
                  </span>
                </div>
              </div>
            </div>
            <div className="prose prose-p:text-justify w-full max-w-full mt-4">
              {children}
            </div>
          </div>
        </div>
      </ModalContextProvider>
    </>
  );
};

export default Layout;
