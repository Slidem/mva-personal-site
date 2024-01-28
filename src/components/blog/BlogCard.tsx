import React from "react";

interface Props {
  title: string;
  description: string;
}

export const BlogCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="transform transition-transform duration-500 hover:scale-110 cursor-pointer bg-blue-800 w-full rounded overflow-hidden shadow-lg bg-[url('/blog-card.png')] bg-cover bg-center bg-no-repeat">
      <div className="mt-8 flex flex-row">
        <div className="p-2 px-8 font-bold bg-sky-800 text-2xl mb-2 text-white flex-grow">
          {title}
        </div>
        <div className="w-12"></div>
      </div>
      <div className="py-4 px-8">
        <p className="text-gray font-bold text-xl inline-block py-1">
          {description}
        </p>
      </div>
    </div>
  );
};
