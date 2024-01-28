import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { getBlogPosts } from "@/common/blogPosts";

export const metadata = {
  title: "Blog",
  description: "Mihai V Alexandru - Tech Blog",
};

async function BlogPostPage() {
  const tableOfContents = await getBlogPosts();

  return (
    <>
      <div className="p-8 flex flex-col">
        <BlogTableOfContents tableOfContents={tableOfContents} />
      </div>
    </>
  );
}

export default BlogPostPage;
