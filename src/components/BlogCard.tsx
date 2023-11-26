import React from "react";

interface Props {
  title: string;
  subtitleA: string;
  subtitleB: string;
}

export const BlogCard: React.FC<Props> = ({ title, subtitleA, subtitleB }) => {
  return (
    <div className="bg-blue-800 max-w-sm rounded overflow-hidden shadow-lg bg-[url('/blog-card.png')] bg-cover bg-center bg-no-repeat">
      <div className="mt-8 flex flex-row">
        <div className="p-2 px-8 font-bold bg-sky-800 text-2xl mb-2 text-white">
          {title}
        </div>
        <div className="w-0 h-0  border-t-[24px] border-t-transparent border-l-[24px] border-l-sky-800 border-b-[24px] border-b-transparent"></div>
      </div>
      <div className="py-4 px-8">
        <p className="text-gray font-bold text-xl inline-block py-1">
          {subtitleA}
        </p>
        <p className="text-gray font-bold text-xl inline-block py-1">
          {subtitleB}
        </p>
      </div>
    </div>
  );
};
