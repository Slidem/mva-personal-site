import { BlogTableOfContents } from "@/components/BlogTableOfContents";
import { getBlogPosts } from "@/common/blogPosts";

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
