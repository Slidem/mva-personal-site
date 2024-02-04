import { CertBadgesProvider } from "@/components/CertBadgesProvider";
import { IntroSection } from "@/components/IntroSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { PreviewBadge } from "@/components/PreviewLink";
import { ReachOutSection } from "@/components/ReachOutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { getBlogPosts } from "@/common/blogPosts";

async function Home() {
  const blogPosts = await getBlogPosts();
  const mostRecentBlogPostsNumber = Math.min(3, blogPosts.length);
  const mostRecentBlogPosts = blogPosts.slice(0, mostRecentBlogPostsNumber);
  const certBadges = {
    aws_sysops_associate: (
      <PreviewBadge url="https://www.credly.com/badges/8bc10a4f-45bc-4ef4-a7f7-12c69688c098/linked_in_profile" />
    ),
    aws_dev_associate: (
      <PreviewBadge url="https://www.credly.com/badges/c5c6eeab-a720-46d8-bd8f-d0fdc1c7c682/linked_in_profile" />
    ),
    aws_arch_associate: (
      <PreviewBadge url="https://www.credly.com/badges/91d5dd1e-ddd3-41db-a937-c3b846d32c00/linked_in_profile" />
    ),
    aws_arch_professional: (
      <PreviewBadge url="https://www.credly.com/badges/d8da6041-f578-42dd-9754-a26dd1a11f0d?source=linked_in_profile" />
    ),
    ckad: (
      <PreviewBadge url="https://www.credly.com/badges/443ab1bd-64f0-40ca-8ed3-833c36f9f309?source=linked_in_profile" />
    ),
    cka: (
      <PreviewBadge url="https://www.credly.com/badges/2e591128-9d7c-4072-b0f7-a2268521a792?source=linked_in_profile" />
    ),
  };

  return (
    <>
      <IntroSection />
      <CertBadgesProvider certBadges={certBadges}>
        <SkillsSection />
      </CertBadgesProvider>
      <NewsletterSection
        mostRecentBlogPosts={mostRecentBlogPosts}
        mostRecentBlogPostsNumber={mostRecentBlogPostsNumber}
      />
      <ReachOutSection />
    </>
  );
}

export default Home;
