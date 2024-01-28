"use client";

import React, { useState } from "react";

import { BlogPostMetadata } from "@/models.ts/blog";
import { Pagination } from "../Pagination";
import { useRouter } from "next/navigation";

const maxItemsPerPage = 5;

export const BlogTableOfContents: React.FC<{
  tableOfContents: BlogPostMetadata[];
}> = ({ tableOfContents }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const filteredTableOfContents = tableOfContents.filter((item: any) => {
    return item.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  const totalPages = Math.ceil(
    filteredTableOfContents.length / maxItemsPerPage,
  );

  const onNextPage = () => {
    setCurrentPage((currentPage) =>
      currentPage === totalPages - 1 ? currentPage : currentPage + 1,
    );
  };

  const onPreviousPage = () => {
    setCurrentPage((currentPage) =>
      currentPage === 0 ? currentPage : currentPage - 1,
    );
  };

  const onSearchInputChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className="w-full lg:w-1/3 mx-auto mb-8 lg:mb-0">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for titles or tags"
              value={searchInput}
              onChange={onSearchInputChange}
              required
            />
            <div className="text-gray absolute end-2.5 bottom-2.5 font-medium text-sm px-4 py-2 bg-gray-50 w-4">
              {filteredTableOfContents.length}
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="lg:p-20 grid gap-y-4 lg:gap-y-20 lg:gap-x-10 row-auto grid-col-1 lg:grid-cols-3 w-full items-center">
          {filteredTableOfContents
            .slice(
              currentPage * maxItemsPerPage,
              (currentPage + 1) * maxItemsPerPage,
            )
            .map(
              ({
                title,
                shortTitle,
                description,
                shortDescription,
                publishDate,
                url,
                tags,
              }) => {
                return (
                  <>
                    <div
                      key={title}
                      className="w-full h-56 transform transition-transform duration-500 hover:scale-110 cursor-pointer bg-blue-800 rounded overflow-hidden shadow-lg bg-[url('/blog-card.png')] bg-cover bg-center bg-no-repeat"
                      onClick={() => router.push(`/blog/${url}`)}
                    >
                      <div className="mt-4 flex flex-row">
                        <div className="p-2 px-8 font-bold bg-sky-800 text-xl mb-2 text-white flex-grow">
                          {shortTitle}
                        </div>
                        <div className="w-12"></div>
                      </div>
                      <div className="py-4 px-8">
                        <p className="text-gray font-bold text-lg inline-block py-1 text-ellipsis">
                          {shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:col-span-2 mb-10 lg:mb-0">
                      <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">
                        {title}
                      </h2>
                      <p className="text-gray-800  text-ellipsis text-xs lg:text-sm mb-4">
                        {publishDate}
                      </p>
                      <p className="text-ellipsis text-sm lg:text-base">
                        {description}
                      </p>
                      <p className="py-4">
                        {tags.map((tag: any) => (
                          <span className="text-xs lg:text-sm bg-gray-200 text-gray-800 rounded-xl py-1 px-2 mr-2">
                            #{tag}
                          </span>
                        ))}
                      </p>
                    </div>
                  </>
                );
              },
            )}
        </div>
        <Pagination
          pages={totalPages}
          currentPage={totalPages === 0 ? 0 : currentPage + 1}
          onNext={onNextPage}
          onPrevious={onPreviousPage}
        />
      </div>
    </>
  );
};
