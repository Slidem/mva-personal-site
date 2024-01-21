import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const ProjectTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="absolute h-8 left-[-60px] flex flex-column items-center">
        <div className="flex flex-column items-center rounded-full bg-[#06b6d4] p-2 z-10">
          <CalendarDaysIcon className="h-6 w-6 text-white" />
        </div>
      </div>
      <h1 className="text-xl font-black mb-4">{children}</h1>
    </>
  );
};

const Tag: React.FC<Props> = ({ children }) => {
  return (
    <div className="inline-block bg-neutral-500 text-white rounded-lg px-2 py-1 mr-2 mt-2 text-sm">
      {children}
    </div>
  );
};

const Paragraph: React.FC<Props> = ({ children }) => {
  const content = React.Children.toArray(children);

  const processedContent = content.map((child) => {
    if (typeof child === "string") {
      const parts = child.split(/(\s+)/);
      const processedParts = parts.map((part, idx) => {
        if (part.startsWith("#")) {
          let finalTagString = part;
          let otherPartSearchIdx = idx + 1;
          let currentPart = parts[otherPartSearchIdx];
          while (
            typeof currentPart === "string" &&
            !currentPart.startsWith("#")
          ) {
            parts[otherPartSearchIdx] = "";
            finalTagString += ` ${currentPart}`;
            currentPart = parts[++otherPartSearchIdx];
          }
          return <Tag key={finalTagString}>{finalTagString}</Tag>;
        }
        return part;
      });
      return processedParts;
    }
    return child;
  });

  return (
    <p className="text-justify text-slate-700 font-normal text-md">
      {processedContent}
    </p>
  );
};

const H2 = ({ children }: Props) => {
  return <h2 className="text-lg font-black mt-6">{children}</h2>;
};

const H3 = ({ children }: Props) => {
  return (
    <div className="rounded-2xl bg-neutral-200 w-fit">
      <h3 className="text-md font-medium my-4 text-slate-800 py-2 px-4 text-slate-800">
        {children}
      </h3>
    </div>
  );
};

const ul = ({ children }: Props) => {
  return (
    <ul className="list-inside font-normal list-image-[url('/checkmark.png')]">
      {children}
    </ul>
  );
};

const li = ({ children }: Props) => {
  return (
    <li className="text-justify text-slate-700 my-2">
      <span className="ml-2"></span>
      {children}
    </li>
  );
};

const hr = () => {
  return <div className="my-20" />;
};

export const workCustomComponents = {
  h1: ProjectTitle,
  h2: H2,
  h3: H3,
  p: Paragraph,
  ul: ul,
  li: li,
  hr: hr,
};
