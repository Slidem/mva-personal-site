"use client";

import React from "react";
import { useModalContext } from "./ModalContext";

const zIndexMinusOne = {
  zIndex: "-1",
};

interface Props {
  title: string;
  description: string;
  icon: any;
  modalContent?: React.ReactNode;
}

export const SkillsCard: React.FC<Props> = ({
  title,
  description,
  icon,
  modalContent,
}) => {
  const { openModal } = useModalContext();

  let cutDescription = description;

  if (typeof description === "string") {
    cutDescription =
      (description as string).replace?.(/\s{2,}/g, " ").substring(0, 100) +
      " ... ";
  }

  const isLongTitle = title.length > 15;

  return (
    <div
      className="min-w-sm min-h-20 transform transition-transform duration-500 hover:scale-110 cursor-pointer"
      onClick={() => openModal(modalContent)}
    >
      <div
        className="relative flex flex-col items-center justify-around p-4 mr-4 rounded-2xl"
        style={{ transform: "translate(0px, 0px)", opacity: 1 }}
      >
        <div
          className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-cyan-300 rounded-xl -rotate-2 "
          style={zIndexMinusOne}
        ></div>
        <div
          className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-cyan-400 rounded-xl rotate-2 "
          style={zIndexMinusOne}
        ></div>
        <div
          className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl "
          style={zIndexMinusOne}
        ></div>
        <div className="flex flex-row items-center">
          <h3
            className={`z-10 ${
              isLongTitle ? "text-sm" : "text-lg"
            } font-semibold text-cyan-900`}
          >
            {title}
          </h3>
          <div className="z-10 p-2 text-cyan-900">{icon}</div>
        </div>
        <div className="z-10 text-xs text-center text-gray-500 ">
          {cutDescription}
        </div>
      </div>
    </div>
  );
};
