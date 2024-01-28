import React from "react";
import { SocialIcon } from "react-social-icons";

export const ReachOutSection = () => {
  return (
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
  );
};
