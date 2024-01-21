import { BlogCard } from "@/components/BlogCard";
import Image from "next/image";
import { SkillsSection } from "@/components/SkillsSection";
import { SocialIcon } from "react-social-icons";
import { SubscribeNewsletterInput } from "@/components/SubscribeNewsletter";
import { getBlogPosts } from "@/common/blogPosts";

async function Home() {
  const blogPosts = await getBlogPosts();
  const mostRecentBlogPosts = blogPosts.slice(0, 3);

  return (
    <>
      <section className="p-4 py-20 md:p-20 md:py-48 flex flex-col md:flex-row">
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-20 h-auto md:min-h-80">
          <div className="min-w-[300px] min-h-[300px] md:w-1/4 p-2 mb-4 md:mb-0">
            <Image
              src={"/about.png"}
              className="h-auto w-full object-cover"
              alt="Mihai Alexandru"
              height={200}
              width={200}
            />
          </div>
          <div className="w-full md:w-3/4 pl-4 text-lg text-gray-600">
            <h1 className="text-2xl font-bold mb-2">Welcome!</h1>
            <p>
              I'm Mihai Alexandru, a dedicated Senior Software Engineer with a
              rich 8+ years in the tech industry. My expertise is deeply rooted
              in a wide array of technologies including Java, NodeJS, Golang,
              and cloud platforms like AWS and GCP. I excel in microservices
              architecture, containerization with Docker and Kubernetes, and
              various database technologies.
            </p>
          </div>
        </div>
      </section>
      <SkillsSection />
      <section className="p-10 md:p-20 md:py-48 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
          I share knowledge and insights frequently 🚀
        </h2>
        <h3 className="text-xl text-gray-800 mb-5 text-center">
          Subscribe to my newsletter to know when I publish new content.
        </h3>
        <div className="flex flex-col items-center mt-6">
          <div className="w-full md:w-1/3">
            <SubscribeNewsletterInput />
          </div>
        </div>
        <div className="mt-20 w-auto text-xl text-center">
          <h2 className="">Most recent blog posts ...</h2>
        </div>
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-12 p-8 lg:p-0">
          {mostRecentBlogPosts.map((post: any) => (
            <BlogCard
              key={post.title}
              title={post.shortTitle}
              description={post.shortDescription}
            />
          ))}
        </div>
      </section>
      <section
        id="connect"
        className="p-10 md:p-20 md:py-48 flex flex-col items-center bg-sky-100 gap-8"
      >
        <div className="text-center">
          <h1 className="text-2xl">Let's connect</h1>
        </div>
        <div className="text-center">
          <h3>
            If you want to chat about tech, programming, or follow me on social
            media, reach out 👇{" "}
          </h3>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            <SocialIcon
              style={{ width: "60px", height: "60px" }}
              url="https://www.linkedin.com/in/mihai-v-alexandru/"
            />
          </div>
          <div>
            <SocialIcon
              style={{ width: "60px", height: "60px" }}
              url="https://github.com/Slidem"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
