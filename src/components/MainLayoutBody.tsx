"use client";

import { Modal } from "@/components/Modal";
import { ModalContextProvider } from "@/components/ModelContext";
import React from "react";
import { SocialIcon } from "react-social-icons";

interface Props {
  children: React.ReactNode;
}

const MainLayoutBody: React.FC<Props> = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <ModalContextProvider>
        <Modal />
        <div className="h-[calc(100vh-80px)] overflow-y-auto flex flex-col justify-between">
          <div className="grow">{children}</div>
          <footer className="px-20  bg-black h-20 text-white align-middle flex flex-column items-center">
            <div className="flex flex-row items-center justify-between w-full h-20">
              <div>
                <h1>© {currentYear} Mihai V Alexandru</h1>
              </div>
              <div className="text-white flex flex-row gap-6">
                <div>
                  <SocialIcon
                    style={{ width: "40px", height: "40px" }}
                    bgColor="gray"
                    fgColor="black"
                    url="https://www.linkedin.com/in/mihai-v-alexandru/"
                  />
                </div>
                <div>
                  <SocialIcon
                    style={{ width: "40px", height: "40px" }}
                    bgColor="gray"
                    fgColor="black"
                    url="https://github.com/Slidem"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </ModalContextProvider>
    </>
  );
};

export default MainLayoutBody;
