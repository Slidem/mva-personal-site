"use client";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPostMetadata } from "@/models.ts/blog";
import React from "react";
import { SubscribeNewsletterInput } from "@/components/SubscribeNewsletter";

interface Props {
  mostRecentBlogPosts: BlogPostMetadata[];
  mostRecentBlogPostsNumber: number;
}

export const NewsletterSection: React.FC<Props> = ({
  mostRecentBlogPosts,
  mostRecentBlogPostsNumber,
}) => {
  return (
    <section className="p-20 sm:p-36 md:p-48 md:py-48 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
        I share knowledge and insights frequently 🚀
      </h2>
      <h3 className="text-xl text-gray-800 mb-5 text-center">
        Subscribe to my newsletter to know when I publish new content.
      </h3>
      <div className="flex flex-col items-center mt-6">
        <div className="max-w-[400px]">
          <SubscribeNewsletterInput />
        </div>
      </div>
      <div className="mt-20 w-auto text-xl text-center">
        <h2 className="">Most recent blog posts ...</h2>
      </div>
      <div
        className={`mt-7 grid grid-cols-1 xl:grid-cols-${mostRecentBlogPostsNumber} gap-12 p-8 lg:p-0`}
      >
        {mostRecentBlogPosts.map((post: any) => (
          <BlogCard
            key={post.title}
            title={post.shortTitle}
            description={post.shortDescription}
          />
        ))}
      </div>
    </section>
  );
};
