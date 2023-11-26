import Image from "next/image";
import React from "react";

const zIndexMinusOne = {
  zIndex: "-1",
};

interface Props {
  title: string;
  description: React.ReactNode;
  icon: any;
}

export const SkillsCard: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="min-w-sm transform transition-transform duration-500 hover:scale-110 cursor-pointer">
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
          <h3 className="z-10 text-2xl font-semibold text-cyan-900">{title}</h3>
          <div className="z-10 p-2 text-cyan-900">{icon}</div>
        </div>
        <div className="z-10 text-xs text-center text-gray-500 ">
          {description}
        </div>
      </div>
    </div>
  );
};
