import { BlogPostMetadata } from "@/models.ts/blog";
import fs from "fs";
import path from "path";

export async function getBlogPosts() {
  const blogDirectory = path.join(process.cwd(), "src/app/blog");
  const blogDirs = fs
    .readdirSync(blogDirectory)
    .filter(
      (fileName: string) => fileName !== "page.tsx" && fileName !== "contents",
    );

  const tableOfContents = await Promise.all(blogDirs.map(getMeta));

  return tableOfContents
    .filter((c) => !!c)
    .sort(
      (a, b) =>
        stringToDate(b.publishDate).getTime() -
        stringToDate(a.publishDate).getTime(),
    );
}

function stringToDate(input: string): Date {
  const splitList = input.split("/");
  const month = Number(splitList[0]) - 1;
  const day = Number(splitList[1]);
  const year = Number(splitList[2]);
  return new Date(year, month, day);
}

async function getMeta(blogDir: string): Promise<BlogPostMetadata> {
  const { meta } = await import(`@/app/blog/${blogDir}/page.mdx`);
  return {
    ...meta,
    slug: blogDir,
  };
}
