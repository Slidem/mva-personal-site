import { IntroSection } from "@/components/IntroSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ReachOutSection } from "@/components/ReachOutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { getBlogPosts } from "@/common/blogPosts";

async function Home() {
  const blogPosts = await getBlogPosts();
  const mostRecentBlogPostsNumber = Math.min(3, blogPosts.length);
  const mostRecentBlogPosts = blogPosts.slice(0, mostRecentBlogPostsNumber);

  return (
    <>
      <IntroSection />
      <SkillsSection />
      <NewsletterSection
        mostRecentBlogPosts={mostRecentBlogPosts}
        mostRecentBlogPostsNumber={mostRecentBlogPostsNumber}
      />
      <ReachOutSection />
    </>
  );
}

export default Home;
